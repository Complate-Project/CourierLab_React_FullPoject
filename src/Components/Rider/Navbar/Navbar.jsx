import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Hooks/useAuth';
import { FiMenu, FiUser, FiSearch, FiBell, FiMapPin } from 'react-icons/fi';
import DateTime from '../../../Shared/DateTime/DateTime';

const Navbar = ({ toggleSidebar }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSearch = e => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="w-full bg-white shadow-md top-0 z-50 sticky">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <FiMenu className="h-8 w-8" />
          </button>

          <div>
            <h1 className="text-xl font-bold text-gray-800 -mb-1">
              Courier Service - Rider
            </h1>
            <DateTime></DateTime>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search packages, riders, customers..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notification Bell */}
          <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors">
            <FiBell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </button>

          {/* Current Location */}
          <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
            <FiMapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Downtown</span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3 border-l border-gray-200 pl-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <FiUser className="h-4 w-4 text-green-600" />
              </div>
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-800">Rider Name</p>
                <p className="text-xs text-gray-500">Available</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
