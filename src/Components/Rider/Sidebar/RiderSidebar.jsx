import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiPackage,
  FiUser,
  FiLogOut,
  FiChevronDown,
  FiX,
  FiTruck,
  FiClock,
  FiCheckCircle,
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
    { name: 'Dashboard', icon: <FiHome />, path: '/rider/dashboard' },
    { name: 'Pickup Parcel', icon: <FiHome />, path: '/rider/pickup' },
    { name: 'Auto Pick Up', icon: <FiHome />, path: '/rider/auto-pickup' },
    { name: 'Delivery Parcel', icon: <FiHome />, path: '/rider/delivery' },
    { name: 'Reschedule Order', icon: <FiHome />, path: '/rider/reschedule' },
    { name: 'Transfer Order', icon: <FiHome />, path: '/rider/transfer' },
    { name: 'Return Parcel', icon: <FiHome />, path: '/rider/return' },
    {
      name: 'Report',
      icon: <FiPackage />,
      submenu: [
        {
          name: 'Parcel History',
          path: '/rider/deliveries/pending',
          icon: <FiClock />,
        },
        {
          name: 'Transfer History',
          path: '/rider/deliveries/transit',
          icon: <FiTruck />,
        },
        {
          name: 'Return History',
          path: '/rider/deliveries/delivered',
          icon: <FiCheckCircle />,
        },
      ],
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
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`bg-green-800 text-white h-screen fixed z-50 transition-all duration-300 ease-in-out flex flex-col
          ${isOpen ? 'w-64' : 'w-20'}`}
      >
        {/* Header */}
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

        {/* Scrollable Navigation */}
        <nav className="flex-1 overflow-y-auto mt-4">
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
                      <div className="flex items-center gap-3">
                        {item.icon}
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

                    {/* Submenu */}
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
                            </motion.li>
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

        {/* Logout at Bottom */}
        <div className="p-4 border-t border-green-700">
          <button className="flex items-center text-red-300 hover:text-red-200 w-full p-2 hover:bg-green-700 rounded transition-colors">
            <FiLogOut className="mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default RiderSidebar;
