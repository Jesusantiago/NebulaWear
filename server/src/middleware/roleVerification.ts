import { Request, Response } from 'express';
import User from '../models/users.model';

async function isAdmin(req: Request, res: Response, next) {
  const user = await User.findByPk(req.body.userId, {
    attributes: ['role'],
  });
  
  if (user.role != 'admin') {
    return res.status(401).json({ message: "No tienes permiso para ver esta página.", code: 401 })
  }
  next()
}

export default isAdmin;
