import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // Parse cookies from the request headers
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.auth_token;

    if (!token) {
      return res.status(200).json({ isAuthenticated: false });
    }

    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
      console.error('Missing JWT_SECRET environment variable');
      return res.status(500).json({ message: 'Server configuration error' });
    }

    jwt.verify(token, JWT_SECRET);
    res.status(200).json({ isAuthenticated: true });
  } catch (error) {
    console.error('Auth check error:', error);
    res.status(200).json({ isAuthenticated: false });
  }
} 