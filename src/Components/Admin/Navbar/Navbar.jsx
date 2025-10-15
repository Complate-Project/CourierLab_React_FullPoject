import React from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import { FiMenu, FiUser } from 'react-icons/fi';

const Navbar = ({ toggleSidebar }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <FiMenu className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">
            Courier Service - Admin
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <FiUser className="h-6 w-6 text-gray-700" />
          <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium">
            Admin
          </span>
          <button
            onClick={handleLogout}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
