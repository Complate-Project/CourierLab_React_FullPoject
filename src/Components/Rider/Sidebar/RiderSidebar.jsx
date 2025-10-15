import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiPackage,
  FiMap,
  FiUser,
  FiSettings,
  FiLogOut,
  FiChevronDown,
  FiChevronRight,
  FiX,
  FiTruck,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const RiderSidebar = ({ isOpen, toggleSidebar }) => {
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
      path: '/rider/dashboard',
    },
    {
      name: 'Pickup Parcel ',
      icon: <FiHome className="w-5 h-5" />,
      path: '/rider/#',
    },
    {
      name: 'Auto Pick Up ',
      icon: <FiHome className="w-5 h-5" />,
      path: '/rider',
    },
    {
      name: 'Delivery Parcel ',
      icon: <FiHome className="w-5 h-5" />,
      path: '/rider',
    },
    {
      name: 'Reschedule Order',
      icon: <FiHome className="w-5 h-5" />,
      path: '/rider',
    },
    {
      name: 'Transfer Order ',
      icon: <FiHome className="w-5 h-5" />,
      path: '/rider',
    },
    {
      name: 'Return Parcel ',
      icon: <FiHome className="w-5 h-5" />,
      path: '/rider',
    },

    {
      name: 'Report',
      icon: <FiPackage className="w-5 h-5" />,
      submenu: [
        {
          name: 'Parcel History',
          path: '/rider/deliveries/pending',
          icon: <FiClock className="w-4 h-4" />,
        },
        {
          name: 'Transfer History',
          path: '/rider/deliveries/transit',
          icon: <FiTruck className="w-4 h-4" />,
        },
        {
          name: 'Return History',
          path: '/rider/deliveries/delivered',
          icon: <FiCheckCircle className="w-4 h-4" />,
        },
      ],
    },
  ];

  // Animation variants for smoother transitions
  const submenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const iconVariants = {
    rotate: {
      rotate: 180,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    normal: {
      rotate: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

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
        className={`bg-green-800 text-white h-screen fixed z-50 transition-all duration-300 ease-in-out overflow-y-auto
          ${isOpen ? 'w-64' : 'w-20'}`}
      >
        <div className="p-4 border-b border-green-700 flex justify-between items-center">
          {isOpen ? (
            <>
              <div>
                <h1 className="text-xl font-bold">Rider Panel</h1>
                <p className="text-sm text-green-300">
                  Courier Delivery System
                </p>
              </div>
              <button
                onClick={toggleSidebar}
                className="text-green-300 hover:text-white lg:hidden"
              >
                <FiX className="h-6 w-6" />
              </button>
            </>
          ) : (
            <button
              onClick={toggleSidebar}
              className="text-green-300 hover:text-white"
            >
              <FiUser className="h-6 w-6 text-white" />
            </button>
          )}
        </div>

        <nav className="mt-4">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-1">
                {item.submenu ? (
                  <>
                    {/* Parent Button */}
                    <button
                      onClick={() => {
                        if (!isOpen) toggleSidebar();
                        toggleMenu(item.name);
                      }}
                      className={`w-full flex items-center justify-between p-4 text-left hover:bg-green-700 transition-colors ${
                        openMenu === item.name ? 'bg-green-700' : ''
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

                    {/* Submenu with improved animation */}
                    <AnimatePresence>
                      {isOpen && openMenu === item.name && (
                        <motion.ul
                          className="bg-green-900 ml-8 overflow-hidden"
                          variants={submenuVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className={`flex items-center gap-2 px-4 py-3 text-sm hover:bg-green-700 transition-colors ${
                                  isActive(subItem.path)
                                    ? 'bg-green-700 border-l-4 border-green-500'
                                    : ''
                                }`}
                              >
                                <span className="text-green-300">
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
                    className={`flex items-center p-4 hover:bg-green-700 transition-colors ${
                      isActive(item.path)
                        ? 'bg-green-700 border-l-4 border-green-500'
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
          <div className="absolute bottom-0 w-full p-4 border-t border-green-700">
            <button className="flex items-center text-red-300 hover:text-red-200 w-full p-2 hover:bg-green-700 rounded transition-colors">
              <FiLogOut className="mr-3" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default RiderSidebar;
