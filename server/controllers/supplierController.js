// Import necessary modules and dependencies
import express from 'express';
import { createSupplier, getAllSuppliers, updateSupplier, deleteSupplier } from '../services/supplierService';

// Create a router instance
const router = express.Router();

// Route to create a new supplier
router.post('/suppliers', async (req, res) => {
  try {
    const supplier = await createSupplier(req.body);
    res.status(201).json(supplier);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get all suppliers
router.get('/suppliers', async (req, res) => {
  try {
    const suppliers = await getAllSuppliers();
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to update a supplier
router.put('/suppliers/:id', async (req, res) => {
  try {
    const supplier = await updateSupplier(req.params.id, req.body);
    res.json(supplier);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to delete a supplier
router.delete('/suppliers/:id', async (req, res) => {
  try {
    await deleteSupplier(req.params.id);
    res.json({ message: 'Supplier deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Export the router
export default router;
