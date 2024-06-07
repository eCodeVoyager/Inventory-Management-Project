import React, { useState } from 'react';

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
        <div className="container mx-auto p-4 bg-white shadow-lg mt-10">
            <h1 className="text-2xl font-bold text-center mb-6">My Shopping Cart (1 Items)</h1>
            <table className="table-auto w-full mb-6">
                <thead>
                    <tr className="bg-gray-100">
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
                                alt="Amani Long Sleeve Printed Shirt"
                                className="w-20 h-auto mr-4"
                            />
                            <div>
                                <p>Amani Long Sleeve Printed Shirt</p>
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
        </div>
    );
};

export default CartItem;
