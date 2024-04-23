import express, { Router } from 'express';
import CatController from '../controllers/category.controller';

const router: Router = express.Router();

// GET /categories
router.get('/', CatController.getAllCategories);
// GET /categories/:id
router.get('/:id', CatController.getCatById);
// POST /categories
router.post('/', CatController.createCategory);
// PATCH /categories/:id
router.patch('/:id', CatController.updateCategory);
// DELETE /categories/:id
router.delete('/:id', CatController.deleteCategory);

export default router;
