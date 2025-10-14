import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = e => {
    e.preventDefault();

    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // In a real app, you would authenticate with a backend
    // For demo purposes, we'll simulate different roles based on username
    let role = '';
    if (username === 'admin') {
      role = 'admin';
    } else if (username === 'rider') {
      role = 'rider';
    } else if (username === 'branch') {
      role = 'branch';
    } else {
      setError('Invalid credentials');
      return;
    }

    // Login using the AuthContext
    login(role);

    // Redirect to the appropriate dashboard
    navigate(`/${role}/dashboard`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Courier Login</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-4 text-sm text-gray-600">
          <p>Demo Credentials:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Admin: username "admin", any password</li>
            <li>Rider: username "rider", any password</li>
            <li>Branch: username "branch", any password</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
