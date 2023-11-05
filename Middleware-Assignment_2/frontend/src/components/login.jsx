import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../assets/login.jpg';
import logo from '../assets/logo.png';
import Validation from './LoginValidation';
import axios from 'axios';

export default function Login() {

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/login', values)
      .then(res => {
        // console.log(res));
        if(res.data === "Success") {
          navigate('/home');
        } else{
          alert("Invalid Email or Password");
        }

      })
      .catch(res => console.log(err));
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen px-5 py-5 bg-gray-100 min-w-screen">
      <img src={logo} alt="Logo" className="absolute w-36 h-36 top-5 left-5" /> {/* Logo here */}
        <div className="w-full overflow-hidden text-gray-900 bg-indigo-200 shadow-xl rounded-3xl" style={{ maxWidth: '1000px' }}>
          <div className="w-full md:flex">
            <div className="hidden w-1/2 px-10 py-10 bg-indigo-500 md:block">
              <img src={login} style={{ height: '100%', width: '100%' }} />
            </div>
            <div className="w-full px-5 py-10 md:w-1/2 md:px-10">
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-10 text-center">
                  <h1 className="text-3xl font-bold text-gray-900">LOGIN</h1>
                  <p>Enter your information to login</p>
                </div>
                <div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="email" className="px-1 text-xs font-semibold">Email</label>
                      <div className="flex">
                        <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none"><i className="text-lg text-gray-400 mdi mdi-email-outline"></i></div>
                        <input type="email" id="email" name='email'
                          onChange={handleInput}
                          className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-500" 
                          placeholder="johnsmith@example.com" />
                      </div>
                      {errors.email && <span className='text-red-600'>{errors.email}</span>}
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-12">
                      <label htmlFor="password" className="px-1 text-xs font-semibold">Password</label>
                      <div className="flex">
                        <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none"><i className="text-lg text-gray-400 mdi mdi-lock-outline"></i></div>
                        <input type="password" id="password" name='password'
                          onChange={handleInput}
                          className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-500" 
                          placeholder="************" />
                      </div>
                      {errors.password && <span className='text-red-600'>{errors.password}</span>}
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button type='submit' className="block w-full max-w-xs px-3 py-3 mx-auto font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:bg-indigo-700">LOGIN</button>
                    </div>
                  </div>
                  <p className="text-center text-gray-500">
                    Don't have an account? <Link to="/register" className="text-indigo-600">Register here</Link>
                  </p>
                  <p className="text-center text-gray-500">
                    <Link to="/forgot-password" className="text-indigo-600">Forgot your password?</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
