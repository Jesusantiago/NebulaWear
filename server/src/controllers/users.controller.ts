import { Request, Response } from "express";
import User from "../models/users.model";

class UserController {
  static async getAllUsers(req: Request, res: Response) {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    res.json(users);
  }

  static async getUserById(req: Request, res: Response) {
    const userId = req.params.id;
    const user = await User.findByPk(userId, {
        attributes: { exclude: ['password'] }
    });
    res.json(user);
  }

  static async updateUser(req: Request, res: Response) {
    const userId = req.params.id;
    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password', 'email', 'role'] }
    })

    user.set({
      name: req.body.name,
      lastname: req.body.lastname,
      address: req.body.address,
      phone: req.body.phone,
    })
    await user.save({ 
      fields: [
        'name', 
        'lastname', 
        'address', 
        'phone'
      ]
    });
    res.json(user);
  }

  static async deleteUser(req: Request, res: Response) {
    const userId = req.params.id;
    await User.destroy({
      where: {
        id: userId
      }
    })

    res.send(`User with ID '${userId}' deleted successfully.`)
  }
}

export default UserController;
