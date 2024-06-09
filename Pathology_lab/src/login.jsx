// src/components/Login.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loder, setLoder] = useState(false)
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    setLoder(true)
    e.preventDefault();
    try {

      const res = await axios.post('http://localhost:3001/login', { email, password });

      if (res.data.message == "Login successful") {
        navigate('/city')
        setLoder(false)

        // alert(res.data.message);
      }
      else {
       
        console.log("something went wrong")
        setLoder(false)
      }
    } catch (error) {
    
      alert('Invalid username or password');
      setLoder(false)
    }
  };

  return (
    
    <div className="min-h-screen flex mb-8  mt-6 ml-4 ">
     
      <div className="w-1/2 bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">Welcome back</h1>
      </div>
      <div className="w-1/2 flex items-center justify-center" >
    
        <div className="w-full max-w-md p-8 space-y-8">
          <h2 className="text-3xl font-bold text-center">Login Here</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Create An Account
              </label>
              <input
              required
                id="email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                required
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forget Password?
                </a>
              </div>
            </div>
            <div>
              <button
                // onClick={handleSubmit}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
