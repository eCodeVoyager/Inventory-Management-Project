import express from 'express';
import {
  getAllCustomers,
  addCustomer,
  deleteCustomer,
} from '../controllers/customerController.js';

const router = express.Router();

router.get('/all', getAllCustomers);
router.post('/add', addCustomer);
router.delete('/:id', deleteCustomer);

export default router;


