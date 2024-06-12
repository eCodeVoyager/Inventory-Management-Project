import productService from '../services/productService.js';

export const addProduct = async (req, res) => {
  try {
    const { productId, productName, description, price, image } = req.body;
    await productService.addProduct({ productId, productName, description, price, image });
    res.status(201).send('Product added successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { productName, description, price, quantity, unitPrice } = req.body;
    await productService.updateProduct(productId, { productName, description, price, quantity, unitPrice });
    res.status(200).send('Product updated successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    await productService.deleteProduct(productId);
    res.status(200).send('Product deleted successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
