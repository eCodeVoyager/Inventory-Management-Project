import { db } from '../db.js';

export const addProduct = async (req, res) => {
  const { productId, productName, description, price } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const [result] = await db.promise().query(
      'INSERT INTO product (productId, productName, description, price, image) VALUES (?, ?, ?, ?, ?)', 
      [productId, productName, description, price, image]
    );

    if (result.affectedRows === 1) {
      res.status(201).json({ message: 'Product created successfully' });
    } else {
      res.status(500).json({ error: 'Failed to create product' });
    }
  } catch (error) {
    console.error('Error while creating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const [result] = await db.promise().query('SELECT * FROM product WHERE productId = ?', [productId]);

    if (result.length === 0) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(200).json(result[0]);
    }
  } catch (error) {
    console.error('Error while fetching product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const [results] = await db.promise().query('SELECT * FROM product');

    res.status(200).json(results);
  } catch (error) {
    console.error('Error while fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const [result] = await db.promise().query('DELETE FROM product WHERE productId = ?', [productId]);

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(200).json({ message: 'Product deleted successfully' });
    }
  } catch (error) {
    console.error('Error while deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
