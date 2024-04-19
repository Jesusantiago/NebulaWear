import { Request, Response } from "express";
import User from "../models/users.model";

class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['password'] }
      });
      res.json(users);
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
      res.json(user);
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
      res.json(user);
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

      res.status(200).json({ message: `User with ID '${userId}' deleted successfully.` });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default UserController;
