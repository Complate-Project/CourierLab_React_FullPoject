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
  FiX,
  FiUser,
  FiTruck,
  FiMapPin,
  FiUserCheck,
  FiUserPlus,
  FiPlusSquare,
  FiSearch,
  FiFileText,
  FiTrendingUp,
  FiDollarSign,
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = menuName => {
    setOpenMenu(prev => (prev === menuName ? null : menuName));
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
        { name: 'Riders', path: '/admin/riders', icon: <FiTruck /> },
        { name: 'Branches', path: '/admin/branches', icon: <FiMapPin /> },
        { name: 'Customers', path: '/admin/customers', icon: <FiUserCheck /> },
        { name: 'Employees', path: '/admin/employees', icon: <FiUserPlus /> },
      ],
    },
    {
      name: 'Packages',
      icon: <FiPackage className="w-5 h-5" />,
      submenu: [
        { name: 'All Packages', path: '/admin/packages', icon: <FiPackage /> },
        {
          name: 'Add New Package',
          path: '/admin/packages/new',
          icon: <FiPlusSquare />,
        },
        {
          name: 'Track Package',
          path: '/admin/packages/track',
          icon: <FiSearch />,
        },
      ],
    },
    {
      name: 'Reports',
      icon: <FiBarChart2 className="w-5 h-5" />,
      submenu: [
        {
          name: 'Delivery Reports',
          path: '/admin/reports/delivery',
          icon: <FiFileText />,
        },
        {
          name: 'Financial Reports',
          path: '/admin/reports/financial',
          icon: <FiDollarSign />,
        },
        {
          name: 'Performance Reports',
          path: '/admin/reports/performance',
          icon: <FiTrendingUp />,
        },
      ],
    },
    {
      name: 'Settings',
      icon: <FiSettings className="w-5 h-5" />,
      path: '/admin/settings',
    },
  ];

  const submenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.2 } },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  const iconVariants = {
    rotate: { rotate: 180, transition: { duration: 0.2 } },
    normal: { rotate: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`bg-gray-800 text-white h-screen fixed z-50 transition-all duration-300 ease-in-out overflow-y-auto
          ${isOpen ? 'w-64' : 'w-20'}`}
      >
        {/* Header */}
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
              <FiUser className="h-6 w-6 text-white" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-1">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => {
                        if (!isOpen) toggleSidebar();
                        toggleMenu(item.name);
                      }}
                      className={`w-full flex items-center justify-between p-4 text-left hover:bg-gray-700 transition-colors ${
                        openMenu === item.name ? 'bg-gray-700' : ''
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{item.icon}</span>
                        {isOpen && <span>{item.name}</span>}
                      </div>
                      {isOpen && (
                        <motion.div
                          variants={iconVariants}
                          animate={openMenu === item.name ? 'rotate' : 'normal'}
                        >
                          <FiChevronDown className="w-4 h-4" />
                        </motion.div>
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && openMenu === item.name && (
                        <motion.ul
                          className="bg-gray-900 ml-8 overflow-hidden"
                          variants={submenuVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-700 transition-colors ${
                                  isActive(subItem.path)
                                    ? 'bg-gray-700 border-l-4 border-blue-500'
                                    : ''
                                }`}
                              >
                                <span className="text-gray-400">
                                  {subItem.icon}
                                </span>
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
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

        {/* Logout */}
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
