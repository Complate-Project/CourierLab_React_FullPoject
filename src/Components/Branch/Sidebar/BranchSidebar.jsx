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
  FiFileText,
  FiBox,
  FiDollarSign,
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
      name: 'Staff Management',
      icon: <FiUsers className="w-5 h-5" />,
      submenu: [
        {
          name: 'Rider ',
          path: '/branch/staff/riders',
          icon: <FiTruck />,
        },
        {
          name: 'In Charge',
          path: '/branch/staff/support',
          icon: <FiUserCheck />,
        },
      ],
    },
    {
      name: 'Parcel Management',
      icon: <FiPackage className="w-5 h-5" />,
      submenu: [
        {
          name: 'Consignments',
          path: '/branch/packages/incoming',
          icon: <FiDownload />,
        },
        {
          name: 'Add Parcel',
          path: '/branch/packages/outgoing',
          icon: <FiUpload />,
        },
        {
          name: 'Bulk Import',
          path: '/branch/packages/new',
          icon: <FiPlusSquare />,
        },
        {
          name: 'Order Export',
          path: '/branch/packages/track',
          icon: <FiSearch />,
        },
      ],
    },
    {
      name: 'Operation',
      icon: <FiPackage className="w-5 h-5" />,
      submenu: [
        {
          name: 'Consignments Request',
          path: '/branch/packages/incoming',
          icon: <FiDownload />,
        },
        {
          name: 'Consignments Receive',
          path: '/branch/packages/outgoing',
          icon: <FiUpload />,
        },
        {
          name: 'Transit Parcel',
          path: '/branch/packages/new',
          icon: <FiPlusSquare />,
        },
        {
          name: 'Destination Hub',
          path: '/branch/packages/track',
          icon: <FiSearch />,
        },
        {
          name: 'Delivery Parcel',
          path: '/branch/packages/track',
          icon: <FiSearch />,
        },
        {
          name: 'Collect Amount Rider',
          path: '/branch/packages/track',
          icon: <FiSearch />,
        },

        {
          name: 'Return Processing',
          path: '/branch/packages/track',
          icon: <FiSearch />,
        },
        {
          name: 'Reschedule Parcel',
          path: '/branch/packages/track',
          icon: <FiSearch />,
        },
      ],
    },
    {
      name: 'Payment Processing',
      icon: <FiPackage className="w-5 h-5" />,
      submenu: [
        {
          name: 'Collection Amount',
          path: '/branch/packages/incoming',
          icon: <FiDownload />,
        },
        {
          name: 'Payment Amount',
          path: '/branch/packages/outgoing',
          icon: <FiUpload />,
        },
      ],
    },

    {
      name: 'Parcel Re Assign',
      icon: <FiPackage className="w-5 h-5" />,
      submenu: [
        {
          name: 'Pickup Re Assign',
          path: '/branch/packages/incoming',
          icon: <FiDownload />,
        },
        {
          name: 'Delivery Re Assign',
          path: '/branch/packages/outgoing',
          icon: <FiUpload />,
        },
        {
          name: 'Hub Fulfillment',
          path: '/branch/packages/new',
          icon: <FiPlusSquare />,
        },
      ],
    },

    {
      name: 'Reports',
      icon: <FiBarChart2 className="w-5 h-5" />,
      submenu: [
        {
          name: 'Rider History',
          path: '/branch/reports/daily',
          icon: <FiFileText />,
        },
        {
          name: 'Transaction History',
          path: '/branch/reports/inventory',
          icon: <FiBox />,
        },
        {
          name: 'Rider Collect History',
          path: '/branch/reports/financial',
          icon: <FiDollarSign />,
        },
        {
          name: 'Transfer History',
          path: '/branch/reports/financial',
          icon: <FiDollarSign />,
        },
        {
          name: 'Return History',
          path: '/branch/reports/financial',
          icon: <FiDollarSign />,
        },
      ],
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
        />
      )}

      <div
        className={`bg-yellow-800 text-white h-screen fixed z-50 transition-all duration-300 ease-in-out flex flex-col
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

        {/* Scrollable Navigation */}
        <nav className="flex-1 overflow-y-auto mt-4">
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

        {/* Logout Button Always at Bottom */}
        <div className="p-4 border-t border-yellow-700">
          <button className="flex items-center text-red-300 hover:text-red-200 w-full p-2 hover:bg-yellow-700 rounded transition-colors">
            <FiLogOut className="mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BranchSidebar;
