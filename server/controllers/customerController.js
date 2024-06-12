import {
    fetchAllCustomers,
    fetchCustomerById,
    insertCustomer,
    removeCustomer,
  } from '../services/customerService.js';
  
  export const getAllCustomers = async (req, res) => {
    try {
      const customers = await fetchAllCustomers();
      res.json(customers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const addCustomer = async (req, res) => {
    try {
      const newCustomer = await insertCustomer(req.body);
      res.json(newCustomer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const deleteCustomer = async (req, res) => {
    try {
      await removeCustomer(req.params.id);
      res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  