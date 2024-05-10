import { Request, Response } from "express";
import User from "../models/users.model";
import Rating from "../models/rating.model";
import Order from "../models/order.model";

class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['password'] }
      });
      res.status(200).json({ users, code: 200 });
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 });
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const userId: string = req.params.id;
      const user = await User.findByPk(userId, {
        attributes: { exclude: ['password'] },
        include: [Rating,Order]
      });

      if(!user) {
        return res.status(404).json({ error: 'User does not exist.' });
      }
      res.status(200).json({ user, code: 500 });
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 });
    }
  }

  static async createAdminUser(req: Request, res: Response) {
    try {
      const { id, email, name } = req.body;
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (user) {
        return res.status(409).json({ message: "Email is already linked to an account.", code: 409 });
      }

      const newUser = await User.create({
          id: id,
          name: name,
          email: email,
          role: 'admin',
          attributes: { exclude: ['password'] }
      });
      res.status(201).json({ message: 'User created successfully.', newUser, code: 201 });
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 });
    }
  }

  static async updateUser(req: Request, res: Response) {
    const userId: string = req.params.id;
    try {
      const user = await User.findByPk(userId, {
        attributes: { exclude: ['password', 'email', 'role'] }
      });

      if(!user) {
        return res.status(404).json({ error: 'User does not exist.', code: 404 });
      }

      const { name, lastname, address, phone } = req.body;
      user.set({
        name: name,
        lastname: lastname,
        address: address,
        phone: phone,
      });
      await user.save({ 
        fields: [
          'name', 
          'lastname', 
          'address', 
          'phone'
        ]
      });
      res.status(200).json({ message: 'Information updated successfully.', code: 200 });
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 });
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
        return res.status(404).json({ error: 'User does not exist.', code: 404 });
      }

      res.status(200).json({ message: `User with ID '${userId}' was deleted successfully.`, code: 200 });
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 });
    }
  }
}

export default UserController;
