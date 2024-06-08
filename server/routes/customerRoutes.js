import express from 'express';
import { signUpCustomer } from '../controllers/customerController.js';

const router = express.Router();

router.post('/signup', signUpCustomer);

export default router;
