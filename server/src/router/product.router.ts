import express, { Router } from 'express';
import ProductController from '../controllers/product.controller';
import isAdmin from '../middleware/roleVerification';

const router: Router = express.Router();

// GET /products
router.get('/', ProductController.getAllProducts);
// GET /products/:id
router.get('/:id', ProductController.getProductById);
// POST /products
router.post('/', isAdmin,ProductController.createProduct);
// PATCH /products/:id
router.patch('/:id', isAdmin,ProductController.updateProduct);
// DELETE /products/:id
router.delete('/:id',isAdmin, ProductController.deleteProduct);
// POST /products/:id/rate
router.post('/:id/rate', ProductController.rateProduct)

export default router;
