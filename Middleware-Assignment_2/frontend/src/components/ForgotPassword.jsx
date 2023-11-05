import React from 'react';
import logo from '../assets/logo.png';

export default function ForgotPassword() {
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
      <img src={logo} alt="Logo" className="w-36 h-36 absolute top-5 left-5" /> {/* Logo here */}
        <div className="bg-indigo-200 text-gray-900 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
          <div className="w-full py-10 px-5 md:px-10">
            <form>
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">FORGOT PASSWORD</h1>
                <p>Enter your email to reset your password</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="email" className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                      <input type="email" id="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus-border-indigo-500" placeholder="johnsmith@example.com" />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">RESET PASSWORD</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
