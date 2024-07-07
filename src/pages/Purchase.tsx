// src/pages/Purchase.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Purchase: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Order</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Order Details</h2>
          <p className="mb-2"><strong>Art Piece:</strong> Sketch</p>
          <p className="mb-2"><strong>Price:</strong> $99.00</p>
          <p className="mb-2"><strong>Tax:</strong> $0.00</p>
          <p className="mb-2"><strong>Total:</strong> $99.00</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First and Last Name</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded py-2 px-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded py-2 px-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" className="mt-1 block w-full border border-gray-300 rounded py-2 px-3" />
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Billing Address</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <select className="mt-1 block w-full border border-gray-300 rounded py-2 px-3">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded py-2 px-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded py-2 px-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded py-2 px-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Zip Code</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded py-2 px-3" />
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Credit Card Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded py-2 px-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Expiration</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded py-2 px-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded py-2 px-3" />
            </div>
          </form>
        </div>
      </div>
      <div className="mt-6">
        <Link className="bg-gray-800 text-white py-2 px-4 rounded" to={'/'}>Place Order</Link>
      </div>
    </div>
  );
};

export default Purchase;
