import { Request, Response } from 'express';

function isAdmin(req: Request, res: Response, next) {
  if (req.body.role != 'admin') {
    return res.status(401).json({ message: "No tienes permiso para ver esta página.", code: 401 })
  }
  next()
}

export default isAdmin;
