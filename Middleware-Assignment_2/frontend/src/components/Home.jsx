import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Link to="/services">
          <div className="bg-blue-200 p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-900">Services</h2>
            <p className="text-gray-700">Activate and deactivate services</p>
          </div>
        </Link>
        <Link to="/bills">
          <div className="bg-green-200 p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold text-green-900">Bills</h2>
            <p className="text-gray-700">View current and past bills</p>
          </div>
        </Link>
        <Link to="/cartitem">
          <div className="bg-yellow-200 p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold text-yellow-900">Payments</h2>
            <p className="text-gray-700">Pay for bills online using credit and debit cards</p>
          </div>
        </Link>
        <Link to="/changepassword">
          <div className="bg-purple-200 p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold text-purple-900">Change Password</h2>
            <p className="text-gray-700">Change your account password</p>
          </div>
        </Link>
        <Link to="/login">
          <div className="bg-red-200 p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold text-red-900">Logout</h2>
            <p className="text-gray-700">Log out of your account</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
