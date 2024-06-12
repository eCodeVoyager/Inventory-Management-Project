import db from '../config/db.js';

const supplierService = {
  getAllSuppliers: async () => {
    try {
      const [rows] = await db.query('SELECT * FROM supplier');
      return rows;
    } catch (error) {
      throw new Error('Error fetching suppliers from database');
    }
  },

  deleteSupplier: async (id) => {
    try {
      await db.query('DELETE FROM supplier WHERE id = ?', [id]);
    } catch (error) {
      throw new Error('Error deleting supplier from database');
    }
  },
};

export default supplierService;
