import express, { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router: Router = express.Router();

// GET /products
router.get('/', ProductController.getAllProducts);
// GET /products/:id
router.get('/:id', ProductController.getProductById);
// POST /products
router.post('/', ProductController.createProduct);
// PATCH /products/:id
router.patch('/:id', ProductController.updateProduct);
// DELETE /products/:id
router.delete('/:id', ProductController.deleteProduct);
// POST /products/:id/rating
router.post('/rating', ProductController.rateProduct)

export default router;
