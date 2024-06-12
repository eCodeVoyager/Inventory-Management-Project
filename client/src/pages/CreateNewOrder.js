import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2

const CreateOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [customerId, setCustomerId] = useState(''); // Added customer ID
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newOrder = {
      orderId,
      customerId,
      productId,
      productName,
      quantity,
    };

    try {
      const response = await fetch('http://localhost:3000/orders/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });

      if (response.ok) {
        Swal.fire("SweetAlert2 is working!"); // Show SweetAlert2 popup on success
        console.log('Order submitted successfully');
        // Reset form fields after successful submission
        setOrderId('');
        setCustomerId('');
        setProductId('');
        setProductName('');
        setQuantity('');
      } else {
        console.error('Failed to submit order');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#E6F0DC]">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Create New Order</h2>
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-4">
            <label htmlFor="orderId" className="block mb-1">Order ID</label>
            <input
              type="text"
              id="orderId"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div> */}
          <div className="mb-4">
            <label htmlFor="customerId" className="block mb-1">Customer ID</label> 
            <input
              type="text"
              id="customerId"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productId" className="block mb-1">Product ID</label>
            <input
              type="text"
              id="productId"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productName" className="block mb-1">Product Name</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block mb-1">Quantity</label>
            <input
              type="text"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Create Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOrder;
