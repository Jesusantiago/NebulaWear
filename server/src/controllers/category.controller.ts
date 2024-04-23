import { Request, Response } from "express";
import Category from "../models/category.model";

class CatController {
  static async createCategory(req: Request, res: Response) {
    try {
      const { name, is_featured } = req.body;
      const category = await Category.findOne({
        where: {
          name: name
        }
      })

      if (category) {
        return res.status(409).json({ message: "La categoría ingresada ya existe." });
      }

      const newCategory = await Category.create({
        name: name,
        is_featured: is_featured
      })

      res.status(201).json({ message: 'Categoría creada con éxito.', newCategory });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default CatController;
