import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/users.model";

class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
            email: email
        }
      });
      if(!user) return res.status(404).json({message: "Usuario no encontrado."});
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      const token = jwt.sign(
        { id: user.id },
        process.env.SECRET_KEY_JWT as string,
        { expiresIn: '1d' }
      )
      return res.status(201).json({
        ...user.dataValues,
        token,
      });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async register(req: Request, res: Response) {
    try {
        const { email, password, name, lastname, address, phone } = req.body;
        const user = await User.findOne({
            where: {
                email: email
            }
          });
        if(user)  {
          console.log(user)
            return res.status(409).json({message: "El email ingresado ya está vinculado a una cuenta existente."});
        }
        // const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name: name,
            // lastname: lastname,
            // address: address,
            // phone: phone,
            email: email,
            // password: hashedPassword,
            role: 'client',
            // attributes: { exclude: ['password'] }
        });
        res.status(201).json({message: 'Usuario creado con éxito.',newUser});
    } catch(err) {
      res.status(500).json({ error: "err.message" });
    }
  }
}



export default AuthController;