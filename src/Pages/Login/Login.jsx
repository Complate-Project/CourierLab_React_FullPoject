import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';
import {
  FiPackage,
  FiUser,
  FiLock,
  FiEye,
  FiEyeOff,
  FiTruck,
  FiMapPin,
  FiUsers,
} from 'react-icons/fi';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const demoCredentials = [
    {
      role: 'admin',
      username: 'admin',
      icon: <FiUser className="w-4 h-4" />,
      color: 'bg-purple-500',
    },
    {
      role: 'rider',
      username: 'rider',
      icon: <FiTruck className="w-4 h-4" />,
      color: 'bg-blue-500',
    },
    {
      role: 'branch',
      username: 'branch',
      icon: <FiMapPin className="w-4 h-4" />,
      color: 'bg-green-500',
    },
  ];

  const handleLogin = async e => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password');
      setIsLoading(false);
      return;
    }

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

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
      setIsLoading(false);
      return;
    }

    // Login using the AuthContext
    login(role);
    setIsLoading(false);

    // Redirect to the appropriate dashboard
    navigate(`/${role}/dashboard`);
  };

  const fillDemoCredentials = demoUsername => {
    setUsername(demoUsername);
    setPassword('password123');
    setError('');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 bg-gray-50">
        <div className="mx-auto w-full max-w-3xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
                <FiPackage className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              QuickDeliver
            </h2>
            <p className="text-gray-600 mt-2">Express Delivery System</p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
              <p className="text-gray-600 mt-2">Sign in to your account</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">!</span>
                  </div>
                </div>
                <p className="ml-3 text-red-700 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Username Field */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-8">
              <p className="text-sm text-gray-600 text-center mb-4">
                Demo Credentials
              </p>
              <div className="grid grid-cols-1 gap-3">
                {demoCredentials.map(cred => (
                  <button
                    key={cred.role}
                    onClick={() => fillDemoCredentials(cred.username)}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`${cred.color} p-2 rounded-lg text-white`}
                      >
                        {cred.icon}
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900 capitalize">
                          {cred.role}
                        </p>
                        <p className="text-sm text-gray-500">
                          Username: {cred.username}
                        </p>
                      </div>
                    </div>
                    <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Use this
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="flex-1 flex items-center justify-center p-12">
          <div className="text-white text-center max-w-lg">
            <FiUsers className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">
              Efficient Delivery Management
            </h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Manage your delivery operations seamlessly with our comprehensive
              platform. Track packages, coordinate riders, and optimize
              logistics in real-time.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold">15K+</div>
                <div className="text-blue-200 text-sm">Deliveries</div>
              </div>
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
