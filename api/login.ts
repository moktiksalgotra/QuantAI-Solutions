import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  try {
    const { username, password } = req.body;

    // Debug: Log environment variables (remove in production)
    console.log('Environment check:', {
      hasUsername: !!process.env.APP_USERNAME,
      hasPassword: !!process.env.APP_PASSWORD,
      hasJWTSecret: !!process.env.JWT_SECRET
    });

    const APP_USERNAME = process.env.APP_USERNAME;
    const APP_PASSWORD = process.env.APP_PASSWORD;
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!APP_USERNAME || !APP_PASSWORD || !JWT_SECRET) {
      console.error('Missing environment variables:', {
        APP_USERNAME: !!APP_USERNAME,
        APP_PASSWORD: !!APP_PASSWORD,
        JWT_SECRET: !!JWT_SECRET
      });
      return res.status(500).json({ message: 'Server configuration error' });
    }

    if (username === APP_USERNAME && password === APP_PASSWORD) {
      const token = jwt.sign({ username }, JWT_SECRET, {
        expiresIn: '8h',
      });

      // Determine if we're in production (Vercel) or development
      const isProduction = process.env.VERCEL === '1';
      
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('auth_token', token, {
          httpOnly: true,
          secure: isProduction, // Only secure in production
          sameSite: isProduction ? 'strict' : 'lax',
          maxAge: 60 * 60 * 8,
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