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
      const { name, isFeatured } = req.body;
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
        isFeatured: isFeatured
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
        isFeatured: req.body.isFeatured
      });
      await category.save({ 
        fields: [
          'name', 
          'isFeatured'
        ]
      });
      res.status(200).json({ message: 'Datos actualizados exitosamente.' });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async deleteCategory(req: Request, res: Response) {
    try {
      const catId = req.params.id;
      const deletedCount = await Category.destroy({
        where: {
          id: catId
        }
      })
      
      if (deletedCount != 1) {
        res.status(404).json({ error: 'Category not found' });
      }

      res.status(200).json({ message: `La categoría con ID '${catId}' fue borrada exitosamente.` });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default CatController;
