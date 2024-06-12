import React, { useState } from 'react';
import Swal from 'sweetalert2';

const UpdateProductPage = ({ location }) => {
  const product = location.state.product;
  const [productId, setProductId] = useState(product.id);
  const [productName, setProductName] = useState(product.name);
  const [description, setDescription] = useState(product.description || '');
  const [quantity, setQuantity] = useState(product.quantity);
  const [unitPrice, setUnitPrice] = useState(product.unitPrice);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sending updated data to backend
    fetch(`/api/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productName,
        description,
        quantity,
        unitPrice,
      }),
    })
    .then(response => {
      if (response.ok) {
        Swal.fire("Success", "Product updated successfully!", "success");
      } else {
        Swal.fire("Error", "Failed to update product", "error");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Swal.fire("Error", "An error occurred", "error");
    });
  };

  const handleDelete = () => {
    // Confirm deletion
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Sending delete request to backend
        fetch(`/api/products/${productId}`, {
          method: 'DELETE',
        })
        .then(response => {
          if (response.ok) {
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
          } else {
            Swal.fire("Error", "Failed to delete product", "error");
          }
        })
        .catch(error => {
          console.error('Error:', error);
          Swal.fire("Error", "An error occurred", "error");
        });
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#E6F0DC]">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Update Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="productId" className="block mb-1">Product ID</label>
            <input type="text" id="productId" value={productId} onChange={(e) => setProductId(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" disabled />
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
            <label htmlFor="quantity" className="block mb-1">Quantity</label>
            <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="unitPrice" className="block mb-1">Unit Price</label>
            <input type="text" id="unitPrice" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductPage;
