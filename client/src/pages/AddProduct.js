import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddProductPage = () => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
   // Validation
   if (!productId || !productName || !description || !price || !image) {
    Swal.fire("Error", "Please fill in all fields", "error");
    return;
  }
    // Sending data to backend
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId,
        productName,
        description,
        price,
        image: image.name, // Assuming you send only the image name to backend
      }),
    })
    .then(response => {
      if (response.ok) {
        Swal.fire("Success", "Product added successfully!", "success");
        // Reset form fields after submission
        setProductId('');
        setProductName('');
        setDescription('');
        setPrice('');
        setImage(null);
      } else {
        Swal.fire("Error", "Failed to add product", "error");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Swal.fire("Error", "An error occurred", "error");
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  return (
    <div className="flex justify-center items-center h-screen bg-[#E6F0DC]">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="productId" className="block mb-1">Product ID</label>
            <input type="text" id="productId" value={productId} onChange={(e) => setProductId(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="productName" className="block mb-1">Product Name</label>
            <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-1">Description</label>
            <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-1">Price</label>
            <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block mb-1">Product Image</label>
            <input type="file" id="image" onChange={handleImageChange} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
