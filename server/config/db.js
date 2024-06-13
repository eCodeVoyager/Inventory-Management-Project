import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        await connection.query('SELECT 1');
        console.log('Database connection successful');
        connection.release();
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

export const executeQuery = async (query, values) => {
    try {
        const [rows] = await pool.execute(query, values);
        return rows;
    } catch (error) {
        throw new Error('Error executing query');
    }
};

export default pool;