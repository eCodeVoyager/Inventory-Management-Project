import express from 'express';
import {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  deleteCustomer,
} from '../controllers/customerController.js';

const router = express.Router();

router.get('/', getAllCustomers);
router.post('/', addCustomer);
router.delete('/:id', deleteCustomer);

export default router;
