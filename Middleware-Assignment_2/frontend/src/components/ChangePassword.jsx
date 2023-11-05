import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import axios from 'axios';
// import Validation from './LoginValidation';

export default function ChangePassword() {
  const [values, setValues] = useState({
    email: '',
    currentPassword: '',
    newPassword: ''
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // setErrors(Validation(values));
    // if(errors.email === "" && errors.password === "") {
      axios.put('http://localhost:8081/changepassword', values)
      .then(res => {
        if(res.data === "Updated Password Successfully!") {
          console.log("Password changed successfully");
          navigate('/home');
        } else{
          console.log("Password change failed:", res.data);
          alert("Password change failed");
        }

      })
      .catch(err => {
        console.error("Password change error:", err);
        setErrorMessage("Password change error");
      });
    }
//}

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center relative">
        <img src={logo} alt="Logo" className="w-36 h-36 absolute top-4 left-4" />
      <Link to="/home" className="absolute top-4 right-4 text-indigo-600">
        <FontAwesomeIcon icon={faHome} size="2x" />
      </Link>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Change Password</h1>
      <form onSubmit={handleSubmit} className="max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleInput}
            className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="currentPassword" className="block text-gray-700 font-semibold">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            onChange={handleInput}
            className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-gray-700 font-semibold">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            onChange={handleInput}
            className="w-full mt-1 p-2 rounded-md border border-gray-300 focus-border-indigo-500"
          />
        </div>
    
        <button
          type="submit"
          className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700"
        >
          Change Password
        </button>
        {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
        {errors &&
          Object.keys(errors).map((errorKey) => (
            <p key={errorKey} className="text-red-600 mt-2">
              {errors[errorKey]}
            </p>
          ))}
      </form>
    </div>
  );
}
