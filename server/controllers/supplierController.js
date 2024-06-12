import SupplierService from '../services/supplierService.js';

const supplierController = {
  getAllSuppliers: async (req, res) => {
    try {
      const suppliers = await SupplierService.getAllSuppliers();
      res.json(suppliers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteSupplier: async (req, res) => {
    const { id } = req.params;
    try {
      await SupplierService.deleteSupplier(id);
      res.json({ message: 'Supplier deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default supplierController;
