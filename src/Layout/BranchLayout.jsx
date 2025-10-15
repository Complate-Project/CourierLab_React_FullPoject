import React, { useState } from 'react';
import { useAuth } from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import BranchSidebar from '../Components/Branch/Sidebar/BranchSidebar';
import Navbar from '../Components/Branch/Navbar/Navbar';

const BranchLayout = ({ children }) => {
  const { userRole } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Security check
  if (userRole !== 'branch') {
    navigate('/login');
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
        <Navbar toggleSidebar={toggleSidebar}></Navbar>

        {/* Main Content (Outlet) */}
        <main className="flex-1 w-full bg-gray-50 p-6 overflow-y-auto">
          <div className="bg-white shadow rounded-xl p-6 min-h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BranchLayout;
