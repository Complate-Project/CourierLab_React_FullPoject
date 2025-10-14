import React, { useState } from 'react';
import { useAuth } from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import BranchSidebar from '../Components/Branch/Sidebar/BranchSidebar';
import { FiMenu, FiUser } from 'react-icons/fi';

const BranchLayout = ({ children }) => {
  const { logout, userRole } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Security check
  if (userRole !== 'branch') {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Unauthorized Access
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <BranchSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
        }`}
      >
        {/* Navbar */}
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
                Courier Service - Branch
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <FiUser className="h-6 w-6 text-gray-700" />
              <span className="rounded-full bg-yellow-200 px-3 py-1 text-sm font-medium">
                Branch
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

        {/* Main Content (Outlet) */}
        <main className="flex-1 w-full bg-gray-50 p-6">
          <div className="bg-white shadow rounded-xl p-6">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default BranchLayout;
