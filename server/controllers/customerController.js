import { createCustomer } from '../services/customerService.js';

const signUpCustomer = async (req, res) => {
    try {
        const { name, address, phoneNumber, email, password } = req.body;
        const customer = await createCustomer({ name, address, email, password }, phoneNumber);
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { signUpCustomer };
