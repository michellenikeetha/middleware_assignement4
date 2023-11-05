import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-indigo-900 min-h-screen flex flex-col items-center justify-center">
      <header className="text-center text-white mb-8">
        <h1 className="text-5xl font-extrabold mb-2">Welcome to Our Telecommunications App</h1>
        <p className="text-xl">Connecting you with the world like never before!</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="p-4 rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Stay Connected</h2>
          <p className="text-gray-700">
            Our app provides seamless communication solutions for both individuals and businesses. Stay connected with your loved ones and colleagues.
          </p>
        </div>
        <div className="p-4 rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Explore Services</h2>
          <p className="text-gray-700">
            Discover a wide range of telecom services, from voice calls and messaging to high-speed internet and entertainment packages.
          </p>
        </div>
      </div>
      <Link
        to="/register"
        className="mt-8 bg-white text-indigo-900 py-2 px-6 rounded-lg text-2xl font-semibold hover:bg-indigo-100 hover:text-indigo-900"
      >
        Get Started
      </Link>
    </div>
  );
}
