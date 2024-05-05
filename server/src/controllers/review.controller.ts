import { Request, Response } from "express";
import Review from "../models/reviews.model";
import User from "../models/users.model";
import Product from "../models/product.model";

class ReviewController {
  static async getAllReviewsFromProduct(req: Request, res: Response) {
    const productId = req.params.productId;
    try {
      const reviews = await Review.findAll({
        where: {
          product_id: productId,
        },
        include: [
          {
            model: User,
            attributes: ['name', 'lastname'],
          }
        ],
      });
      res.status(200).json({ reviews, code: 200 });
    } catch (err) {
      res.status(500).json({ error: err.message, code: 500 });
    }
  }

  static async getAllReviewsFromUser(req: Request, res: Response) {
    const userId = req.params.userId;
    try {
      const userReviews = await Review.findAll({
        where: {
          user_id: userId,
        },
        include: [
          {
            model: Product,
            attributes: ['name'],
          },
        ],
      });
      res.status(200).json({ userReviews, code: 200 })
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 })
    }
  }

  static async getReviewById(req: Request, res: Response) {
    const reviewId = req.params.reviewId;

    try {
      const review = await Review.findByPk(reviewId, {
        include: [
          {
            model: Product,
            attributes: ['name'],
          },
          {
            model: User,
            attributes: ['name', 'lastname']
          }
        ],
      });

      if(!review) {
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.status(404).json({ message: 'La reseña no existe.', code: 404 });
      }

      res.status(200).json({ review, code: 200 });
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 });
    }
  }

  static async createReview(req: Request, res: Response) {
    try {
      const { comment, user_id, product_id } = req.body;

      if(!user_id || !product_id) {
        res.status(400).json({ message: 'Missing user or product identifiers.', code: 400 })
      }

      await Review.create({
        comment: comment,
        user_id: user_id,
        product_id: product_id,
      })
      res.header('Content-Type', 'application/json; charset=utf-8');
      res.status(201).json({ message: 'Reseña creada con éxito.', code: 201})
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 })
    }
  }

  static async updateReview(req: Request, res: Response) {
    const reviewId = req.params.reviewId;
    res.header('Content-Type', 'application/json; charset=utf-8');

    try {
      const review = await Review.findByPk(reviewId);

      if(!review) {
        res.status(404).json({ error: 'La reseña no existe.', code: 404 });
      }

      review.set({
        comment: req.body.comment,
      });
      await review.save({
        fields: ['comment'],
      });
      res.status(200).json({ message: 'Reseña actualizada exitosamente.', code: 200 })
    } catch (err) {
      res.status(500).json({ error: err.message, code: 500 })
    }
  }

  static async deleteReview(req: Request, res: Response) {
    const reviewId = req.params.reviewId;
    const userId = req.body.userId;
    res.header('Content-Type', 'application/json; charset=utf-8');

    try {
      const user = await User.findByPk(userId, {
        attributes: ['role'],
      })

      if(userId != user.id && user.role != 'admin') {
        res.status(403).json({ error: 'Acceso denegado.', code: 403 });
      }

      const deletedCount = await Review.destroy({
        where: { id: reviewId }
      })
      if(deletedCount != 1) {
        res.status(404).json({ message: 'La reseña no existe.', code: 404 })
      }

      res.status(200).json({ message: `La reseña con ID '${reviewId}' fue borrada exitosamente.`, code: 200 });
    } catch (err) {
      res.status(500).json({ error: err.message, code: 500 });
    }
  }
}

export default ReviewController;
