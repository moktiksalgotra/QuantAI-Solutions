import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Only POST requests allowed' });
    }

    const { username, password } = req.body;

    const APP_USERNAME = process.env.APP_USERNAME;
    const APP_PASSWORD = process.env.APP_PASSWORD;
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!APP_USERNAME || !APP_PASSWORD || !JWT_SECRET) {
      console.error('Missing environment variables:', { 
        hasUsername: !!APP_USERNAME, 
        hasPassword: !!APP_PASSWORD, 
        hasSecret: !!JWT_SECRET 
      });
      return res.status(500).json({ message: 'Server configuration error' });
    }

  if (username === APP_USERNAME && password === APP_PASSWORD) {
    const token = jwt.sign({ username }, JWT_SECRET, {
      expiresIn: '8h',
    });

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 60 * 60 * 8, // 8 hours
        path: '/',
      })
    );

    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
  } catch (error) {
    console.error('Login handler error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
} 