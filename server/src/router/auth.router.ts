import express, { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const router: Router = express.Router();

// POST /login -> Sign in a  user with email and password
router.post('/login', AuthController.login);
// POST /register -> Signup a new client user
router.post('/register', AuthController.register);
// POST /recover-password -> Recover the account of a registered user by sending an email
router.post('/recover-password', AuthController.recoverPassword);
// POST /reset-password ->  Reset the password of a registered user using token received on recover-password email
router.post('/reset-password/:resetToken', AuthController.resetPassword);

export default router;