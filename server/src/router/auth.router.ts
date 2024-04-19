import express, { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const router: Router = express.Router();

// POST /login -> Sign in a  user with email and password
router.post('/login', AuthController.login);
// POST /register -> Signup a new client user
router.post('/register', AuthController.register);

export default router;