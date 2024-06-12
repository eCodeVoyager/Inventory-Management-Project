import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export default pool;

export const executeQuery = async (query, values) => {
    try {
      const [rows] = await connection.execute(query, values);
      return rows;
    } catch (error) {
      throw new Error('Error executing query');
    }
  };
