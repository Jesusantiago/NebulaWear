import jwt from 'jsonwebtoken';

export function verifyToken(token: string) {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);
    return payload;
  } catch (error) {
    console.error('Error al verificar el token:', error.message);
    return null;
  }
}