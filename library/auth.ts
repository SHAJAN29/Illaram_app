import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

export function verifyUserToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded; // will have id, role, etc.
  } catch (err) {
    throw new Error('Invalid or expired token');
  }
}
