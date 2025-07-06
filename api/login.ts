import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export default function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  try {
    const { username, password } = req.body;

    const APP_USERNAME = process.env.APP_USERNAME;
    const APP_PASSWORD = process.env.APP_PASSWORD;
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!APP_USERNAME || !APP_PASSWORD || !JWT_SECRET) {
      console.error('Missing environment variables');
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
          secure: true,
          sameSite: 'strict',
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