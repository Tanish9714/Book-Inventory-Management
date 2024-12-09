import React, { useEffect, useState } from 'react';

const Checkout = () => {
    const [fetchedData, setFetchedData] = useState([]);

    // Fetch data from local storage on component mount
    useEffect(() => {
        const dataFromLocalStorage = JSON.parse(localStorage.getItem('cartItems'));
        if (dataFromLocalStorage) {
            setFetchedData(dataFromLocalStorage);
        }
    }, []);

    // Function to remove an item from the cart
    const removeItem = (id) => {
        const updatedCartItems = fetchedData.filter(item => item._id !== id);
        setFetchedData(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    // Function to calculate total cost
    const calculateTotalCost = () => {
        return fetchedData.reduce((total, item) => {
            // Check if the price is a valid number
            const itemPrice = parseFloat(item.price);
            if (!isNaN(itemPrice)) {
                return total + itemPrice;
            } else {
                console.error(`Invalid price for item with ID ${item._id}`);
                return total;
            }
        }, 0).toFixed(2);
    };

    return (
        <div className="bg-gray-100 py-12 px-10">
            <div className="sm:flex shadow-md my-10 bg-white rounded-lg overflow-hidden">
                <div className="w-full sm:w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">{fetchedData.length} Items</h2>
                    </div>
                    <div className="flex flex-col space-y-6">
                        {fetchedData.map(item => (
                            <div key={item._id} className="flex items-center border-b pb-4">
                                <img src={item.imageUrl} className="h-auto max-h-40 w-auto max-w-40 mr-4" alt={item.title} />
                                <div className="flex flex-col flex-grow mb-8">
                                    <p className="text-s text-gray-800">{item.category}</p>
                                    <p className="text-2xl font-black leading-none text-gray-800 mb-1">{item.title}</p>
                                    <p className="text-xs leading-3 text-gray-800 mt-1">by {item.authorName}</p>
                                    <p className='text-base mt-2'>Price-10$</p>

                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center space-x-4">
                                            <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                                            <p className="text-xs leading-3 underline text-red-500 cursor-pointer" onClick={() => removeItem(item._id)}>Remove</p>
                                        </div>
                                        <p className="text-base font-black leading-none text-gray-800">{item.price}</p>
                                    </div>
                                </div>
                                <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 ml-auto focus:outline-none">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                </select>
                            </div>
                        ))}
                    </div>
                    <a href="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                        </svg>
                        Continue Shopping
                    </a>
                </div>
                <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10 bg-blue-50">
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items {fetchedData.length}</span>
                        <span className="font-semibold text-sm">{calculateTotalCost()}</span>
                    </div>
                    <div>
                        <label htmlFor="shipping" className="font-medium inline-block mb-3 text-sm uppercase">
                            Shipping
                        </label>
                        <select id="shipping" className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">
                            Promo Code
                        </label>
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                        Apply
                    </button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>{calculateTotalCost()}</span>
                        </div>
                        <button className="bg-blue-600 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
