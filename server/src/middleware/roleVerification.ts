import { Request, Response } from 'express';
import User from '../models/users.model';

async function isAdmin(req: Request, res: Response, next) {
  const userId = req.body?.userId;

  if(!userId) {
    return res.status(400).json({ message: "Please provide an ID.", code: 400 });
  }

  const user = await User.findByPk(req.body.userId, {
    attributes: ['role'],
  });
  
  if(!user) {
    return res.status(404).json({ message: "Could not find user with valid ID.", code: 404 });
  }
  
  if(user.role != 'admin') {
    res.header('Content-Type', 'application/json; charset=utf-8');
    return res.status(401).json({ message: "No tienes permiso para ver esta página.", code: 401 })
  }
  next()
}

export default isAdmin;
