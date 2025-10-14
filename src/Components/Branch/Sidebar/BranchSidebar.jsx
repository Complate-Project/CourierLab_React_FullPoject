import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiPackage,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiChevronDown,
  FiX,
  FiUser,
  FiDownload,
  FiUpload,
  FiPlusSquare,
  FiSearch,
  FiTruck,
  FiUserCheck,
  FiUserPlus,
  FiFileText,
  FiBox,
  FiDollarSign,
  FiClipboard,
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const BranchSidebar = ({ isOpen, toggleSidebar }) => {
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
      path: '/branch/dashboard',
    },
    {
      name: 'Packages',
      icon: <FiPackage className="w-5 h-5" />,
      submenu: [
        {
          name: 'Incoming Packages',
          path: '/branch/packages/incoming',
          icon: <FiDownload />,
        },
        {
          name: 'Outgoing Packages',
          path: '/branch/packages/outgoing',
          icon: <FiUpload />,
        },
        {
          name: 'Add New Package',
          path: '/branch/packages/new',
          icon: <FiPlusSquare />,
        },
        {
          name: 'Track Package',
          path: '/branch/packages/track',
          icon: <FiSearch />,
        },
      ],
    },
    {
      name: 'Staff Management',
      icon: <FiUsers className="w-5 h-5" />,
      submenu: [
        { name: 'Riders', path: '/branch/staff/riders', icon: <FiTruck /> },
        {
          name: 'Support Staff',
          path: '/branch/staff/support',
          icon: <FiUserCheck />,
        },
        {
          name: 'Add New Staff',
          path: '/branch/staff/new',
          icon: <FiUserPlus />,
        },
      ],
    },
    {
      name: 'Reports',
      icon: <FiBarChart2 className="w-5 h-5" />,
      submenu: [
        {
          name: 'Daily Reports',
          path: '/branch/reports/daily',
          icon: <FiFileText />,
        },
        {
          name: 'Inventory Reports',
          path: '/branch/reports/inventory',
          icon: <FiBox />,
        },
        {
          name: 'Financial Reports',
          path: '/branch/reports/financial',
          icon: <FiDollarSign />,
        },
      ],
    },
    {
      name: 'Settings',
      icon: <FiSettings className="w-5 h-5" />,
      path: '/branch/settings',
    },
  ];

  // Animation variants
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
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-yellow-800 text-white h-screen fixed z-50 transition-all duration-300 ease-in-out overflow-y-auto
          ${isOpen ? 'w-64' : 'w-20'}`}
      >
        {/* Header */}
        <div className="p-4 border-b border-yellow-700 flex justify-between items-center">
          {isOpen ? (
            <>
              <div>
                <h1 className="text-xl font-bold">Branch Panel</h1>
                <p className="text-sm text-yellow-300">
                  Courier Branch Management
                </p>
              </div>
              <button
                onClick={toggleSidebar}
                className="text-yellow-300 hover:text-white lg:hidden"
              >
                <FiX className="h-6 w-6" />
              </button>
            </>
          ) : (
            <button
              onClick={toggleSidebar}
              className="text-yellow-300 hover:text-white"
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
                      className={`w-full flex items-center justify-between p-4 text-left hover:bg-yellow-700 transition-colors ${
                        openMenu === item.name ? 'bg-yellow-700' : ''
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
                          className="bg-yellow-900 ml-8 overflow-hidden"
                          variants={submenuVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <motion.li
                              key={subIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{
                                duration: 0.2,
                                delay: subIndex * 0.05,
                              }}
                            >
                              <Link
                                to={subItem.path}
                                className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-yellow-700 transition-colors ${
                                  isActive(subItem.path)
                                    ? 'bg-yellow-700 border-l-4 border-yellow-500'
                                    : ''
                                }`}
                              >
                                <span className="text-yellow-400">
                                  {subItem.icon}
                                </span>
                                {subItem.name}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center p-4 hover:bg-yellow-700 transition-colors ${
                      isActive(item.path)
                        ? 'bg-yellow-700 border-l-4 border-yellow-500'
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
          <div className="absolute bottom-0 w-full p-4 border-t border-yellow-700">
            <button className="flex items-center text-red-300 hover:text-red-200 w-full p-2 hover:bg-yellow-700 rounded transition-colors">
              <FiLogOut className="mr-3" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default BranchSidebar;
