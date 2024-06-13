// Import necessary modules and dependencies
import db from '../config/db';

// Function to create a new supplier
export const createSupplier = async (supplierData) => {
  try {
    const { supplierName, address, phone, email, rawMaterial, rawMaterialId } = supplierData;
    // Perform database insertion
    const result = await db.query('INSERT INTO suppliers (supplierName, address, phone, email, rawMaterial, rawMaterialId) VALUES (?, ?, ?, ?, ?, ?)', [supplierName, address, phone, email, rawMaterial, rawMaterialId]);
    // Return the newly created supplier
    return { id: result.insertId, ...supplierData };
  } catch (err) {
    throw new Error('Unable to create supplier');
  }
};

// Function to retrieve all suppliers from the database
export const getAllSuppliers = async () => {
  try {
    // Perform database query to fetch all suppliers
    const [rows] = await db.query('SELECT * FROM suppliers');
    return rows;
  } catch (err) {
    throw new Error('Unable to fetch suppliers');
  }
};

// Function to update a supplier
export const updateSupplier = async (id, supplierData) => {
  try {
    // Perform database update
    await db.query('UPDATE suppliers SET ? WHERE id = ?', [supplierData, id]);
    // Fetch and return the updated supplier
    const [updatedSupplier] = await db.query('SELECT * FROM suppliers WHERE id = ?', id);
    return updatedSupplier;
  } catch (err) {
    throw new Error('Unable to update supplier');
  }
};

// Function to delete a supplier
export const deleteSupplier = async (id) => {
  try {
    // Perform database deletion
    await db.query('DELETE FROM suppliers WHERE id = ?', id);
  } catch (err) {
    throw new Error('Unable to delete supplier');
  }
};
