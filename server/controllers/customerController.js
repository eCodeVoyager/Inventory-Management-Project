import {
  fetchAllCustomers,
  fetchCustomerById,
  insertCustomer,
  removeCustomer,
} from '../services/customerService.js';

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await fetchAllCustomers();
    console.log('getAllCustomers');
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addCustomer = async (req, res) => {
  try {
    console.log("customer data ",req.body);
    const newCustomer = await insertCustomer(req.body);
    res.json(newCustomer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    await removeCustomer(req.params.id);
    console.log('Del ID', req.params.id );
    res.json({ message: 'Customer deleted successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};