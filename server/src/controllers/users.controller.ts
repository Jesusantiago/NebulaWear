import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/users.model";

class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['password'] }
      });
      res.status(200).json(users);
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId, {
        attributes: { exclude: ['password'] }
      });

      if(!user) {
        res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async createAdminUser(req: Request, res: Response) {
    try {
      const { email, password, name, lastname, address, phone } = req.body;
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (user) {
        return res.status(409).json({message: "El email ingresado ya está vinculado a una cuenta existente."});
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
          name: name,
          lastname: lastname,
          address: address,
          phone: phone,
          email: email,
          password: hashedPassword,
          role: 'admin',
          attributes: { exclude: ['password'] }
      });
      res.status(201).json({ message: 'Usuario creado con éxito.', newUser });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId, {
        attributes: { exclude: ['password', 'email', 'role'] }
      });

      if(!user) {
        res.status(404).json({ error: 'User not found' });
      }

      user.set({
        name: req.body.name,
        lastname: req.body.lastname,
        address: req.body.address,
        phone: req.body.phone,
      });
      await user.save({ 
        fields: [
          'name', 
          'lastname', 
          'address', 
          'phone'
        ]
      });
      res.status(200).json({ message: 'Datos actualizados exitosamente.' });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const deletedCount = await User.destroy({
        where: {
          id: userId
        }
      })
      
      if (deletedCount != 1) {
        res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json({ message: `El usuario con ID '${userId}' fue borrado exitosamente.` });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default UserController;
