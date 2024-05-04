import { Request, Response } from "express";
import Order from "../models/order.model";
import OrderProduct from "../models/order_product.model";
import User from "../models/users.model";
import Product from "../models/product.model";

class OrderController {
  static async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await Order.findAll({include: OrderProduct});
      res.status(200).json({code: 200, orders});
    } catch(err) {
      res.status(500).json({code: 500, error: err.message });
    }
  }

  static async getOrderById(req: Request, res: Response) {
    try {
      const orderId = req.params.id;
      const order = await Order.findByPk(orderId);

      if(!order) {
        res.status(404).json({ code: 404, error: 'Order not found' });
      }
      res.status(200).json({code: 200, order});
    } catch(err) {
      res.status(500).json({ code: 500, error: err.message });
    }
  }

  static async createOrder(req: Request, res: Response) {
    try {
      const { user_id, address, payment } = req.body;
      const products = req.body.products;
      if(!user_id || !products){
        res.status(400).json({code: 400, message: 'User id and product list are required'});
      }

      const userExists = await User.findByPk(user_id); 
      if(!userExists){
        return res.status(400).json({code: 400, message: 'Invalid user id.'})
      }
      if(products){
        const newOrder = await Order.create(
            {
                user_id: userExists.id,
                address: address,
                payment: payment
            }
        )
        products.forEach(async (product: any) => {
            const productExist = await Product.findByPk(product.product_id);
            if(productExist && productExist.stock >= product.quantity){
                const sub_total = product.price as number * product.quantity as number;
                const newOrderProduct = await OrderProduct.create({
                    order_id: newOrder.id,
                    product_id: productExist.id,
                    price: product.price,
                    quantity: product.quantity,
                    sub_total: sub_total
                })
                await newOrder.$add('order_products', newOrderProduct)
            }else{
                throw new Error("Out of stock");
            }
        })
        res.status(201).json({ code: 201, message: 'Order created successfully.', newOrder });
      }

      
    } catch(err) {
      res.status(500).json({ code: 500, error: err.message });
    }
  }

  static async updateOrder(req: Request, res: Response) {
    try {
      /*const catId = req.params.id;
      const category = await Category.findByPk(catId);

      if(!category) {
        res.status(404).json({ code: 404, error: 'Category not found' });
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
      });*/
      res.status(200).json({ code: 200, message: 'Order Updated successfully.' });
    } catch(err) {
      res.status(500).json({ code: 500, error: err.message });
    }
  }

  static async deleteOrder(req: Request, res: Response) {
    try {
      const orderId = req.params.id;
      const deletedCount = await Order.destroy({
        where: {
          id: orderId
        }
      })
      
      if (deletedCount != 1) {
        res.status(404).json({ code: 404, error: 'Order not found' });
      }

      res.status(200).json({ code: 200, message: `Order with ID '${orderId}' was deleted successfully.` });
    } catch(err) {
      res.status(500).json({ code: 500, error: err.message });
    }
  }
}

export default OrderController;
