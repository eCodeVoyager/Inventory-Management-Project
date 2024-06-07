// import React, { useState } from 'react';

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     id: '',
//     name: '',
//     description: '',
//     price: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add the product to the inventory (this could involve calling an API or updating the state)
//     console.log('Product added:', product);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-lg font-bold mb-4">Add New Product</h2>
//       <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="id">Product ID</label>
//           <input
//             type="text"
//             id="id"
//             name="id"
//             value={product.id}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Product Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={product.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Description</label>
//           <input
//             type="text"
//             id="description"
//             name="description"
//             value={product.description}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="price">Price</label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={product.price}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;


import React, { useState } from 'react';

const AddProductPage = () => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to submit the product data
    console.log('Product submitted:', { productId, productName, description, price });
    // Reset form fields after submission
    setProductId('');
    setProductName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
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
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
