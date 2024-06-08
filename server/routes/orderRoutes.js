import express from 'express';
import { createOrder, getOrdersSummary } from '../controllers/orderController.js';

const router = express.Router();

router.post('/add', createOrder);
router.get('/summary', getOrdersSummary);

export default router;
