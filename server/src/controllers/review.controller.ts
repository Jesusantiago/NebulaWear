import { Request, Response } from "express";
import Review from "../models/reviews.model";
import User from "../models/users.model";
import Product from "../models/product.model";

class ReviewController {
  static async getAllReviews(req: Request, res: Response) {
    try {
      const reviews = await Review.findAll();
      res.status(200).json({ reviews, code: 200 });
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 });
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
        return res.status(404).json({ message: 'Review does not exist.', code: 404 });
      }

      res.status(200).json({ review, code: 200 });
    } catch(err) {
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
            attributes: ['name'],
          }
        ],
      });
      res.status(200).json({ reviews, code: 200 });
    } catch (err) {
      res.status(500).json({ error: err.message, code: 500 });
    }
  }

  static async createReview(req: Request, res: Response) {
    try {
      const { comment, userId, productId } = req.body;

      if(!userId || !productId) {
        return res.status(400).json({ message: 'Missing user or product identifiers.', code: 400 })
      }

      await Review.create({
        comment: comment,
        user_id: userId,
        product_id: productId,
      })
      res.status(201).json({ message: 'Review created successfully.', code: 201})
    } catch(err) {
      res.status(500).json({ error: err.message, code: 500 })
    }
  }

  static async updateReview(req: Request, res: Response) {
    const reviewId = req.params.reviewId;
    try {
      const review = await Review.findByPk(reviewId);

      if(!review) {
        return res.status(404).json({ error: 'Review does not exist.', code: 404 });
      }

      review.set({
        comment: req.body.comment,
      });
      await review.save({
        fields: ['comment'],
      });
      res.status(200).json({ message: 'Review updated successfully.', code: 200 })
    } catch (err) {
      res.status(500).json({ error: err.message, code: 500 })
    }
  }

  static async deleteReview(req: Request, res: Response) {
    const reviewId = req.params.reviewId;
    const userId = req.body.userId;

    try {
      const user = await User.findByPk(userId, {
        attributes: ['role'],
      })

      if(!user && user.role != 'admin') {
        return res.status(403).json({ error: 'Access denied.', code: 403 });
      }

      const deletedCount = await Review.destroy({
        where: { id: reviewId }
      })
      if(deletedCount != 1) {
        return res.status(404).json({ message: 'Review does not exist.', code: 404 })
      }

      res.status(200).json({ message: `Review with ID '${reviewId}' was deleted successfully.`, code: 200 });
    } catch (err) {
      res.status(500).json({ error: err.message, code: 500 });
    }
  }
}

export default ReviewController;
