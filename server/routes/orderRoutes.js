import express from 'express';
import { getOrders, getOrderSummary, addOrder, updateOrderStatus } from '../controllers/orderController.js';

const router = express.Router();

router.get('/', getOrders);
router.get('/summary', getOrderSummary);
router.post('/add', addOrder);
router.patch('/:orderId', updateOrderStatus);

export default router;
