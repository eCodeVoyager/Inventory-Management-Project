import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'MySQLpass2023//',
  database: 'inventory_management',
};

export const fetchLastCustomerId = async () => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT Customer_ID FROM customer ORDER BY Customer_ID DESC LIMIT 1');
  await connection.end();
  console.log("customer id past ",rows);
  return rows[0] ? rows[0].Customer_ID : null;
};
  export const getNextCustomerId = (lastCustomerId) => {
    if (!lastCustomerId) return 'CUS001';
    const number = parseInt(lastCustomerId.slice(3)) + 1;
    return 'CUS' + number.toString().padStart(3, '0');
  };
  
  export const insertCustomer = async (customer) => {
    const connection = await mysql.createConnection(dbConfig);
    const lastCustomerId = await fetchLastCustomerId();
    const customerId = getNextCustomerId(lastCustomerId);
    console.log("customer id last ",lastCustomerId);
    console.log("new customer id ",customerId);
    const { Customer_Name, Address, Phone_No, Email, password } = customer;
    console.log("customer data ",Customer_Name,Address,Phone_No,Email,password);
    try {
      const [result] = await connection.execute(
        'INSERT INTO customer (Customer_ID, Customer_Name, Address, Email, Password) VALUES (?, ?, ?, ?, ?)',
        [customerId, Customer_Name, Address,  Email, password]
      );
      await connection.end();
      return { id: result.insertId, customerId, Customer_Name, Address, Email, password };
    } catch (error) {
      console.log("error ",error);
    }
    
  };

export const fetchAllCustomers = async () => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT customer.*, telephone_no.Phone_No FROM customer JOIN telephone_no ON customer.id=telephone_no.customer_id');
  await connection.end();
  return rows;
};

export const fetchCustomerById = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT * FROM customer WHERE id = ?', [id]);
  await connection.end();
  return rows[0];
};


export const removeCustomer = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  await connection.execute('DELETE FROM customer WHERE id = ?', [id]);
  await connection.end();
};