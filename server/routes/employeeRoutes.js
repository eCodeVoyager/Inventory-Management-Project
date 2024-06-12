import express from 'express';
import { getEmployeeData } from '../controllers/employeeController.js';

const router = express.Router();

// Route to fetch employee data
router.get('/', getEmployeeData);

export default router;
