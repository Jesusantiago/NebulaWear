import { Request, Response } from "express";
import Product from "../models/product.model";
import Category from "../models/category.model";
import Rating from "../models/rating.model";
import { Op } from "sequelize";
import User from "../models/users.model";
import Order from "../models/order.model";

class ProductController {
  static async getAllProducts(req: Request, res: Response) {

    const { name, description, size, isFeatured, minPrice, maxPrice } = req.query;

    const where: any = {};

    if (name) {
      where.name = { [Op.like]: `%${name}%` };
    }

    if (description) {
      where.description = { [Op.like]: `%${description}%` };
    }

    if (req.query.minPrice && req.query.maxPrice) {
      where.price = {
        [Op.gte]: req.query.minPrice,
        [Op.lte]: req.query.maxPrice,
      };
    }

    if (isFeatured) {
      where.isFeatured = 1;
    }
    try {
      const products = await Product.findAll({where, include: [Category]});
      res.status(200).json({code: 200, products});
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 });
    }
  }

  static async getProductById(req: Request, res: Response) {
    try {
      const productId = req.params.id;
      const product = await Product.findByPk(productId,{include: [Category]});

      if(!product) {
        res.status(404).json({ error: 'Product not found', code: 404 });
      }
      res.status(200).json({code: 200, product});
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 });
    }
  }

  static async createProduct(req: Request, res: Response) {
    try {
      const { name,description, size, color, price, category, isFeatured } = req.body;
      const images = req.body.images as string [];
      const product = await Product.findOne({
        where: {
          name: name
        }
      })

      if (product) {
        return res.status(409).json({ message: "Product already exist.", code: 409 });
      }

      const newProduct = await Product.create({
        name: name,
        description: description,
        size: size,
        color: color,
        price: price,
        category_id: category,
        images: images,
        isFeatured: isFeatured
      })

      res.status(201).json({ message: 'Product created successfully.', newProduct, code: 201 });
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 });
    }
  }

  static async updateProduct(req: Request, res: Response) {
    try {
      const productId = req.params.id;
      const {images}:{images: string[]} = req.body;
      const product: Product | null = await Product.findByPk(productId);
      const my_product_images = product.images as string[];
      if(!product) {
        res.status(404).json({ error: 'Producto does not exist', code: 404 });
      }
      if (images) {
        images.forEach(image => {
          if (!my_product_images.includes(image)) {
            my_product_images.push(image);
          }
        })
      }
      product.update({
        name: req.body.name,
        description: req.body.description || product.description,
        size: req.body.size || product.size,
        color: req.body.color || product.color,
        price: parseFloat(req.body.price as string) || product.price,
        category_id: req.body.category || product.category_id,
        images: my_product_images
        //images: req.files ? [...product.images, ...(req.files as any[])] : product.images
      });

      await product.save();
      res.status(200).json({ message: 'Product updated successfully.', code: 200 });
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 });
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
        res.status(404).json({ error: 'Product not found', code: 404 });
      }

      res.status(200).json({ message: `Product with ID '${productId}' was deleted successfully.`, code: 200});
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 });
    }
  }

  static async rateProduct(req: Request, res: Response) {
    try {
      const rating_value  = req.body.rating_value as number;
      const user_id  = req.body.user as number;
      const product_id = req.params.id as string;
      //Validate user
      const existingUser = await User.findByPk(user_id);
      if(!existingUser) return res.status(400).json({ message: 'Invalid user.', code: 400 });
      //Validate product
      const existingProduct = await Product.findByPk(product_id);
      if(!existingProduct) return res.status(400).json({ message: 'Invalid product.', code: 400 });
      //Validate user buy the product
      const userOrderWithProduct = await Order.findOne({where:{product_id: product_id}});
      if(!userOrderWithProduct) return res.status(403).json({ message: 'You are not allowed to rate this product.', code: 403 });
  
      const newProductRating = await Rating.create({
        product_id: product_id,
        user_id: user_id,
        rating_value: rating_value as number
      })

      const ratings = await Rating.findAll({ where: { product_id: newProductRating.product_id } });
      
      let totalRatings: number = existingProduct.rating 
      ratings.forEach(rating => {
        totalRatings+= rating.rating_value as number
      })
      const ratingUpdated = Math.floor(totalRatings / ratings.length);
      await existingProduct.update({rating: ratingUpdated});
      res.status(201).json({ message: 'Product rated successfully.', code: 201 });
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 });
    }
  }
}

export default ProductController;
