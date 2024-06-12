import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'MySQLpass2023//',
  database: 'inventory_management',
};

export const fetchAllCustomers = async () => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT * FROM customers');
  await connection.end();
  return rows;
};

export const fetchCustomerById = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT * FROM customers WHERE id = ?', [id]);
  await connection.end();
  return rows[0];
};

export const insertCustomer = async (customer) => {
  const connection = await mysql.createConnection(dbConfig);
  const { customerId, customerName, address, phone, email, password } = customer;
  const [result] = await connection.execute(
    'INSERT INTO customers (customerId, customerName, address, phone, email, password) VALUES (?, ?, ?, ?, ?, ?)',
    [customerId, customerName, address, phone, email, password]
  );
  await connection.end();
  return { id: result.insertId, ...customer };
};

export const removeCustomer = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  await connection.execute('DELETE FROM customers WHERE id = ?', [id]);
  await connection.end();
};
