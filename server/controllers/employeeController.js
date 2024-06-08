import { createEmployee } from '../services/employeeService.js';

const signUpEmployee = async (req, res) => {
    try {
        const { name, address, phoneNumber, email, password } = req.body;
        const employee = await createEmployee({ name, address, email, password }, phoneNumber);
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { signUpEmployee };
