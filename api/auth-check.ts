import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const token = req.cookies.auth_token;

  if (!token) {
    return res.status(200).json({ isAuthenticated: false });
  }

  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    jwt.verify(token, JWT_SECRET);
    res.status(200).json({ isAuthenticated: true });
  } catch (error) {
    res.status(200).json({ isAuthenticated: false });
  }
} 