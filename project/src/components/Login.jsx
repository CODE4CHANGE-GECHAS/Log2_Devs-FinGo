import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const staticEmail = 'test@example.com';
  const staticPassword = 'password123';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (email === staticEmail && password === staticPassword) {
      setIsAuthenticated(true);
      navigate('/chat'); // ⬅️ Redirects to ChatBot page after login
    } else {
      setError('Invalid Email or Password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-md w-80">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
          Welcome Back
        </h2>
        <p className="text-center text-gray-400 mt-2">Login to continue</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-300 text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold hover:opacity-90 transition-all"
          >
            Log In
          </button>
        </form>

        {error && <p className="text-center text-red-500 mt-4 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
