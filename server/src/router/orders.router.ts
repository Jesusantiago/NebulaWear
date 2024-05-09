import express, { Request, Response, Router } from 'express';
import OrderController from '../controllers/order.controller';
import isAdmin from '../middleware/roleVerification';

const router: Router = express.Router();

// Define your routes here

// GET /orders
router.get('/', OrderController.getAllOrders);

// GET /orders/:id
router.get('/:id', OrderController.getOrderById);

// POST /orders
router.post('/', OrderController.createOrder);

// PUT /orders/:id
router.put('/:id', OrderController.updateOrder);

// DELETE /orders/:id
router.delete('/:id', isAdmin ,OrderController.deleteOrder);

export default router;