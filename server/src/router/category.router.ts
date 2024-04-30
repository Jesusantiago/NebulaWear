import express, { Router } from 'express';
import CatController from '../controllers/category.controller';
import isAdmin from '../middleware/roleVerification';

const router: Router = express.Router();

// GET /categories
router.get('/', CatController.getAllCategories);
// GET /categories/:id
router.get('/:id', CatController.getCatById);
// POST /categories
router.post('/', isAdmin, CatController.createCategory);
// PATCH /categories/:id
router.patch('/:id', isAdmin, CatController.updateCategory);
// DELETE /categories/:id
router.delete('/:id', isAdmin, CatController.deleteCategory);

export default router;
