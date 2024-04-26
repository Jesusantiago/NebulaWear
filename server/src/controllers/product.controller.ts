import { Request, Response } from "express";
import Product from "../models/product.model";
import Category from "../models/category.model";
import Rating from "../models/rating.model";

class ProductController {
  static async getAllProducts(req: Request, res: Response) {
    try {
      const products = await Product.findAll({include: [Category]});
      res.status(200).json(products);
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getProductById(req: Request, res: Response) {
    try {
      const productId = req.params.id;
      const product = await Product.findByPk(productId,{include: [Category]});

      if(!product) {
        res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(product);
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async createProduct(req: Request, res: Response) {
    try {
      const { name,description, size, color, price, category, image, isFeatured } = req.body;
      const product = await Product.findOne({
        where: {
          name: name
        }
      })

      if (product) {
        return res.status(409).json({ message: "El producto ingresado ya existe." });
      }

      const newProduct = await Product.create({
        name: name,
        description: description,
        size: size,
        color: color,
        price: price,
        category_id: category,
        image: image,
        isFeatured: isFeatured
      })

      res.status(201).json({ message: 'Producto creado con éxito.', newProduct });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async updateProduct(req: Request, res: Response) {
    try {
      const productId = req.params.id;
      const product = await Product.findByPk(productId);

      if(!product) {
        res.status(404).json({ error: 'Producto inexistente' });
      }

      product.set({
        name: req.body.name,
        description: req.body.description || product.description,
        size: req.body.size || product.size,
        color: req.body.color || product.color,
        price: parseFloat(req.body.price as string),
        category_id: req.body.category || product.category_id,
        image: req.body.image || product.image
        //images: req.files ? [...product.images, ...(req.files as any[])] : product.images
      });

      await product.save({ 
        fields: [
          'name',
          'description', 
          'size',  
          'color',  
          'price',  
          'category_id',  
          'image',
          'isFeatured'
        ]
      });
      res.status(200).json({ message: 'Datos actualizados exitosamente.' });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async deleteProduct(req: Request, res: Response) {
    try {
      const productId = req.params.id;
      const deletedCount = await Product.destroy({
        where: {
          id: productId
        }
      })
      
      if (deletedCount != 1) {
        res.status(404).json({ error: 'Product not found' });
      }

      res.status(200).json({ message: `El producto con ID '${productId}' fue borrado exitosamente.` });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async rateProduct(req: Request, res: Response) {
    try {
      const { product_id, rating_value } = req.body;
  
      const newProductRating = await Rating.create({
        product_id: product_id,
        rating_value: rating_value
      })

      const product = await Product.findOne({where: {id:  newProductRating.product_id}});
      const ratings = await Rating.findAll({ where: { product_id: newProductRating.product_id } });
      
      let totalRatings: number = product.rating 
      ratings.forEach(rating => {
        totalRatings+= rating.rating_value as number
      })
      const ratingd = Math.floor(totalRatings / ratings.length);
      await Product.update({rating: ratingd},{where: {id: newProductRating.product_id}});;
      
      res.status(201).json({ message: 'Producto valorado con éxito.', newProductRating });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default ProductController;
