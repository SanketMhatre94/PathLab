// SignUpForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if(confirm!==password){
        alert("password is not same")
        return
      }
      const res = await axios.post('http://localhost:3001/signup', { email, password });
     if(res.data.message=="User registered successfully"){
navigate('/city')

     }
    } catch (error) {
      alert('User something went wrong exists');
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex w-4/5 max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left side */}
        <div className="w-1/2 bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">Welcome back</h2>
        </div>
        {/* Right side */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6">Sign Up Here</h2>
          <p className="text-gray-600 mb-4">Create An Account</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
              required
              onChange={(e)=>setEmail(e.target.value)}
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
              required
              onChange={(e)=>setPassword(e.target.value)}
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Confirm Password</label>
              <input
              required
              onChange={(e)=>setConfirm(e.target.value)}
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
            // onClick={handleSubmit}
              type="submit"
              className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white py-2 rounded-lg hover:from-teal-500 hover:to-blue-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
