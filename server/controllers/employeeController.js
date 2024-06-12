import pool from '../config/db.js';

// Controller function to fetch employee data
const getEmployeeData = async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM employee');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching employee data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export { getEmployeeData };
