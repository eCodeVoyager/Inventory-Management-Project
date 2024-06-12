import express from 'express';
import supplierController from '../controllers/supplierController.js';

const router = express.Router();

router.get('/', supplierController.getAllSuppliers);
router.delete('/:id', supplierController.deleteSupplier);

export default router;
