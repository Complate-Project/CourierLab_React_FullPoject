import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiMenu,
  FiUser,
  FiSearch,
  FiBell,
  FiMessageSquare,
} from 'react-icons/fi';
import { useAuth } from '../../../Hooks/useAuth';

const Navbar = ({ toggleSidebar }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSearch = e => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="w-full bg-white shadow-md border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Left Section - Menu & Brand */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 hover:text-gray-800 focus:outline-none transition-colors"
          >
            <FiMenu className="h-6 w-6" />
          </button>

          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-gray-800">
              Courier Service - Branch
            </h1>
            <p className="text-xs text-gray-500">
              Welcome, {user?.name || 'Branch Manager'}
            </p>
          </div>
        </div>

        {/* Center Section - Search Bar */}
        <div className="flex-1 max-w-2xl mx-4">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search parcels, tracking numbers, merchants..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Right Section - User Info & Actions */}
        <div className="flex items-center space-x-3">
          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="flex items-center justify-center h-8 w-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full">
                  <FiUser className="h-4 w-4 text-blue-600" />
                </div>
              </div>
              <div className="text-left border-l border-gray-200 pl-2">
                <p className="text-sm font-medium text-gray-800">
                  {user?.name || 'Branch Manager'}
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  {user?.branch || 'Main Branch'}
                </p>
              </div>
            </div>
          </div>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Search Bar (hidden on larger screens) */}
      <div className="md:hidden px-6 pb-3">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search parcels, tracking numbers..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
