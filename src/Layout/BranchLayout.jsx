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

  // Additional security check
  if (userRole !== 'branch') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Unauthorized Access
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <BranchSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={toggleSidebar}
                  className="mr-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <FiMenu className="h-6 w-6" />
                </button>
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold">
                    Courier Service - Branch
                  </h1>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button className="flex items-center text-gray-700 hover:text-gray-900 mr-4">
                    <FiUser className="h-6 w-6" />
                  </button>
                  <span className="rounded-full bg-yellow-200 px-3 py-1 text-sm font-medium">
                    Branch
                  </span>
                  <button
                    onClick={handleLogout}
                    className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="py-10 flex-1">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Branch Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="px-4 py-8 sm:px-0">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BranchLayout;
