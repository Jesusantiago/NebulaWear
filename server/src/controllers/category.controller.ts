import { Request, Response } from "express";
import Category from "../models/category.model";

class CatController {
  static async getAllCategories(req: Request, res: Response) {
    try {
      const users = await Category.findAll();
      res.status(200).json(users);
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getCatById(req: Request, res: Response) {
    try {
      const catId = req.params.id;
      const category = await Category.findByPk(catId);

      if(!category) {
        res.status(404).json({ error: 'Category not found' });
      }
      res.status(200).json(category);
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

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

  static async updateCategory(req: Request, res: Response) {
    try {
      const catId = req.params.id;
      const category = await Category.findByPk(catId);

      if(!category) {
        res.status(404).json({ error: 'Category not found' });
      }

      category.set({
        name: req.body.name,
        is_featured: req.body.is_featured
      });
      await category.save({ 
        fields: [
          'name', 
          'is_featured'
        ]
      });
      res.status(200).json({ message: 'Datos actualizados exitosamente.' });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default CatController;
