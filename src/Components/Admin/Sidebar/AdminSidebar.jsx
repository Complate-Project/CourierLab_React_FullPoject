import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiUsers,
  FiPackage,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiChevronDown,
  FiChevronRight,
  FiX,
  FiMenu,
} from 'react-icons/fi';

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({
    management: false,
    reports: false,
  });

  const toggleMenu = menuName => {
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const isActive = path => location.pathname === path;

  const menuItems = [
    {
      name: 'Dashboard',
      icon: <FiHome className="w-5 h-5" />,
      path: '/admin/dashboard',
    },
    {
      name: 'Management',
      icon: <FiUsers className="w-5 h-5" />,
      submenu: [
        { name: 'Riders', path: '/admin/riders' },
        { name: 'Branches', path: '/admin/branches' },
        { name: 'Customers', path: '/admin/customers' },
        { name: 'Employees', path: '/admin/employees' },
      ],
    },
    {
      name: 'Packages',
      icon: <FiPackage className="w-5 h-5" />,
      submenu: [
        { name: 'All Packages', path: '/admin/packages' },
        { name: 'Add New Package', path: '/admin/packages/new' },
        { name: 'Track Package', path: '/admin/packages/track' },
      ],
    },
    {
      name: 'Reports',
      icon: <FiBarChart2 className="w-5 h-5" />,
      submenu: [
        { name: 'Delivery Reports', path: '/admin/reports/delivery' },
        { name: 'Financial Reports', path: '/admin/reports/financial' },
        { name: 'Performance Reports', path: '/admin/reports/performance' },
      ],
    },
    {
      name: 'Settings',
      icon: <FiSettings className="w-5 h-5" />,
      path: '/admin/settings',
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-screen fixed z-50 transition-all duration-300 ease-in-out overflow-y-auto
          ${isOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-0'}`}
      >
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          {isOpen ? (
            <>
              <div>
                <h1 className="text-xl font-bold">Admin Panel</h1>
                <p className="text-sm text-gray-400">
                  Courier Management System
                </p>
              </div>
              <button
                onClick={toggleSidebar}
                className="text-gray-400 hover:text-white lg:hidden"
              >
                <FiX className="h-6 w-6" />
              </button>
            </>
          ) : (
            <button
              onClick={toggleSidebar}
              className="text-gray-400 hover:text-white"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          )}
        </div>

        <nav className="mt-4">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-1">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => {
                        if (!isOpen) toggleSidebar();
                        toggleMenu(item.name.toLowerCase());
                      }}
                      className={`w-full flex items-center justify-between p-4 text-left hover:bg-gray-700 transition-colors ${
                        openMenus[item.name.toLowerCase()] ? 'bg-gray-700' : ''
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{item.icon}</span>
                        {isOpen && <span>{item.name}</span>}
                      </div>
                      {isOpen &&
                        (openMenus[item.name.toLowerCase()] ? (
                          <FiChevronDown className="w-4 h-4" />
                        ) : (
                          <FiChevronRight className="w-4 h-4" />
                        ))}
                    </button>

                    {isOpen && openMenus[item.name.toLowerCase()] && (
                      <ul className="bg-gray-900 ml-8 py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.path}
                              className={`block px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${
                                isActive(subItem.path)
                                  ? 'bg-gray-700 border-l-4 border-blue-500'
                                  : ''
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center p-4 hover:bg-gray-700 transition-colors ${
                      isActive(item.path)
                        ? 'bg-gray-700 border-l-4 border-blue-500'
                        : ''
                    }`}
                    onClick={!isOpen ? toggleSidebar : undefined}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {isOpen && <span>{item.name}</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {isOpen && (
          <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
            <button className="flex items-center text-red-400 hover:text-red-300 w-full p-2 hover:bg-gray-700 rounded transition-colors">
              <FiLogOut className="mr-3" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminSidebar;
