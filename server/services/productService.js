import pool from '../config/db.js';

const addProduct = async ({ productId, productName, description, price, image }) => {
  const connection = await pool.getConnection();
  try {
    const query = 'INSERT INTO products (productId, productName, description, price, image) VALUES (?, ?, ?, ?, ?)';
    await connection.execute(query, [productId, productName, description, price, image]);
  } finally {
    connection.release();
  }
};

const getProducts = async () => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute('SELECT * FROM products');
    return rows;
  } finally {
    connection.release();
  }
};

const updateProduct = async (productId, { productName, description, price, quantity, unitPrice }) => {
  const connection = await pool.getConnection();
  try {
    const query = 'UPDATE products SET productName = ?, description = ?, price = ?, quantity = ?, unitPrice = ? WHERE productId = ?';
    await connection.execute(query, [productName, description, price, quantity, unitPrice, productId]);
  } finally {
    connection.release();
  }
};

const deleteProduct = async (productId) => {
  const connection = await pool.getConnection();
  try {
    const query = 'DELETE FROM products WHERE productId = ?';
    await connection.execute(query, [productId]);
  } finally {
    connection.release();
  }
};

export default {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
