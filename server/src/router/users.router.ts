import express, { Router } from 'express';
import UserController from '../controllers/users.controller';

const router: Router = express.Router();

// GET /users
router.get('/', UserController.getAllUsers);
// GET /users/:id
router.get('/:id', UserController.getUserById);
// PATCH /users/:id
router.patch('/:id', UserController.updateUser);
// DELETE /users/:id
router.delete('/:id', UserController.deleteUser);

export default router;