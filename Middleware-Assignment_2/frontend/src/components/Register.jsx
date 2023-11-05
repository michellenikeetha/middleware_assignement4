import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import register from '../assets/register.jpg';
import logo from '../assets/logo.png';
import Validation from './RegisterValidation';
import axios from 'axios';

export default function Register() {

  const [values, setValues] = useState({
    name: '',
    phone: '',
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
    if(errors.name === "" && errors.phone === "" && errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/register', values)
      .then(res => {
        // console.log(res));
        navigate('/login');
      })
      .catch(res => console.log(err));
    }
  }

  return (
    <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5 relative">
      <img src={logo} alt="Logo" className="w-36 h-36 absolute top-5 left-5" /> {/* Logo here */}
      <div className="bg-indigo-200 text-gray-900 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
            <img src={register} style={{ height: '100%', width: '100%' }} />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <form action="" onSubmit={handleSubmit}>
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                <p>Enter your information to register</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="firstName" className="text-xs font-semibold px-1">First name</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                      <input type="text" id="firstName" name='name'
                        onChange={handleInput}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                        placeholder="John Smith" />
                    </div>
                    {errors.name && <span className='text-red-600'>{errors.name}</span>}
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="phone" className="text-xs font-semibold px-1">Mobile Phone</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                      <input type="tel" id="phone" name='phone'
                        onChange={handleInput}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                        placeholder="07x xxxx xxx" />
                    </div>
                    {errors.phone && <span className='text-red-600'>{errors.phone}</span>}
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="email" className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                      <input type="email" id="email" name='email'
                        onChange={handleInput}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                        placeholder="johnsmith@example.com" />
                    </div>
                    {errors.email && <span className='text-red-600'>{errors.email}</span>}
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor="password" className="text-xs font-semibold px-1">Password</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                      <input type="password" id="password" name='password'
                        onChange={handleInput}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                        placeholder="************" />
                    </div>
                    {errors.password && <span className='text-red-600'>{errors.password}</span>}
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button type="submit" className="block w-full max-w-xs mx-auto bg-indigo-500 hover-bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                  </div>
                </div>
                <p className="text-center text-gray-500">
                  Already have an account? <Link to="/login" className="text-indigo-600">Login here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
