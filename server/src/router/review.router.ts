import express, { Router } from 'express';
import ReviewController from '../controllers/review.controller';

const router: Router = express.Router();

//GET /reviews
router.get('/', ReviewController.getAllReviews);
//GET /reviews/:reviewId
router.get('/:reviewId', ReviewController.getReviewById);
//GET /reviews/users/:userId
router.get('/users/:userId', ReviewController.getAllReviewsFromUser);
//GET /reviews/products/:productId
router.get('/products/:productId', ReviewController.getAllReviewsFromProduct);

//POST /reviews
router.post('/', ReviewController.createReview);
//PATCH /reviews/:reviewId
router.patch('/:reviewId', ReviewController.updateReview);
//DELETE /reviews/:reviewId
router.delete('/:reviewId', ReviewController.deleteReview);

export default router;
