import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Only GET requests allowed' });
  }

  try {
    // Check environment variables (without exposing actual values)
    const envStatus = {
      APP_USERNAME: !!process.env.APP_USERNAME,
      APP_PASSWORD: !!process.env.APP_PASSWORD,
      JWT_SECRET: !!process.env.JWT_SECRET,
      VERCEL: process.env.VERCEL,
      NODE_ENV: process.env.NODE_ENV,
      timestamp: new Date().toISOString()
    };

    console.log('Environment test:', envStatus);
    
    res.status(200).json({
      message: 'Environment test',
      environment: envStatus,
      allSet: envStatus.APP_USERNAME && envStatus.APP_PASSWORD && envStatus.JWT_SECRET
    });
  } catch (error) {
    console.error('Test env error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
} 