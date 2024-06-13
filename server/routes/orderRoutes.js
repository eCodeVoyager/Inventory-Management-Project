// import express from 'express';
// import { getOrders, getOrderSummary, addOrder, updateOrderStatus } from '../controllers/orderController.js';

// const router = express.Router();

// router.get('/', getOrders);
// router.get('/summary', getOrderSummary);
// router.post('/add', addOrder);
// router.patch('/:orderId', updateOrderStatus);
// router.get('/orders/customer/:customerId', orderController.getOrdersByCustomer);
// router.get('/orders', orderController.getOrders);
// router.get('/orders/summary', orderController.getOrderSummary);
// router.post('/orders', orderController.addOrder);
// router.put('/orders/:orderId/status', orderController.updateOrderStatus);
// export default router;

// orderRoutes.js

import express from 'express';
import orderController from '../controllers/orderController.js'; // Adjust the path as necessary

const router = express.Router();

router.get('/orders/:customerId', orderController.getOrdersByCustomerId);
router.post('/orders/save', orderController.saveOrder);
router.get('/orders/next-order-id', orderController.getNextOrderId);

export default router;
