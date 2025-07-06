import express from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cookieParser());

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const APP_USERNAME = process.env.APP_USERNAME;
  const APP_PASSWORD = process.env.APP_PASSWORD;
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!APP_USERNAME || !APP_PASSWORD || !JWT_SECRET) {
    return res.status(500).json({ message: 'Server configuration error' });
  }

  if (username === APP_USERNAME && password === APP_PASSWORD) {
    const token = jwt.sign({ username }, JWT_SECRET, {
      expiresIn: '8h',
    });

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: false, // Set to false for local development
      sameSite: 'strict',
      maxAge: 60 * 60 * 8 * 1000, // 8 hours in milliseconds
      path: '/',
    });

    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Auth check endpoint
app.get('/api/auth-check', (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`Development API server running on http://localhost:${PORT}`);
}); 