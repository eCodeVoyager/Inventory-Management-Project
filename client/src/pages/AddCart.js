import React, { useState } from 'react';
import Navbar from '../components/NavBar';

const CartItem = () => {
    const [quantity, setQuantity] = useState(1);
    const price = 2890.00;

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
        <Navbar/>
        <div className="container mx-auto p-4 bg-white shadow-lg mt-10">
            <h1 className="text-2xl font-bold text-center mb-6">My Shopping Cart </h1>
            <table className="table-auto w-full mb-6">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="px-4 py-2">Product</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Quantity</th>
                        <th className="px-4 py-2">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2 flex items-center">
                            <img
                                src="https://via.placeholder.com/80"
                                alt="Latest Ceramic Products"
                                className="w-20 h-auto mr-4"
                            />
                            <div>
                                <p>Latest Ceramic Products</p>
                                <p>Size: M</p>
                            </div>
                        </td>
                        <td className="border px-4 py-2">Rs {price.toFixed(2)}</td>
                        <td className="border px-4 py-2">
                            <div className="flex items-center">
                                <button
                                    className="px-2 py-1 bg-gray-300"
                                    onClick={handleDecrement}
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    className="w-12 text-center mx-2 border"
                                />
                                <button
                                    className="px-2 py-1 bg-gray-300"
                                    onClick={handleIncrement}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td className="border px-4 py-2">Rs {(price * quantity).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold">Subtotal</span>
                <span className="text-lg font-bold">Rs {(price * quantity).toFixed(2)}</span>
            </div>
            <button className="px-4 py-2 bg-black text-white">Back To Shop</button>
            <button className="px-4 py-2 bg-green-500 text-white float-right">Place Orders</button>
        </div>
        </>
    );
};

export default CartItem;
