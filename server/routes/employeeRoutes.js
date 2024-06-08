import express from 'express';
import { signUpEmployee } from '../controllers/employeeController.js';

const router = express.Router();

router.post('/signup', signUpEmployee);

export default router;
