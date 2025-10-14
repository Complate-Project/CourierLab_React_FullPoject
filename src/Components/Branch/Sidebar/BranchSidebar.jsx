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
  FiChevronRight,
  FiX,
  FiMenu,
} from 'react-icons/fi';

const BranchSidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({
    packages: false,
    staff: false,
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
      path: '/branch/dashboard',
    },
    {
      name: 'Packages',
      icon: <FiPackage className="w-5 h-5" />,
      submenu: [
        { name: 'Incoming Packages', path: '/branch/packages/incoming' },
        { name: 'Outgoing Packages', path: '/branch/packages/outgoing' },
        { name: 'Add New Package', path: '/branch/packages/new' },
        { name: 'Track Package', path: '/branch/packages/track' },
      ],
    },
    {
      name: 'Staff Management',
      icon: <FiUsers className="w-5 h-5" />,
      submenu: [
        { name: 'Riders', path: '/branch/staff/riders' },
        { name: 'Support Staff', path: '/branch/staff/support' },
        { name: 'Add New Staff', path: '/branch/staff/new' },
      ],
    },
    {
      name: 'Reports',
      icon: <FiBarChart2 className="w-5 h-5" />,
      submenu: [
        { name: 'Daily Reports', path: '/branch/reports/daily' },
        { name: 'Inventory Reports', path: '/branch/reports/inventory' },
        { name: 'Financial Reports', path: '/branch/reports/financial' },
      ],
    },
    {
      name: 'Settings',
      icon: <FiSettings className="w-5 h-5" />,
      path: '/branch/settings',
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
        className={`bg-yellow-800 text-white h-screen fixed z-50 transition-all duration-300 ease-in-out overflow-y-auto
          ${isOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-0'}`}
      >
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
                      className={`w-full flex items-center justify-between p-4 text-left hover:bg-yellow-700 transition-colors ${
                        openMenus[item.name.toLowerCase()]
                          ? 'bg-yellow-700'
                          : ''
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
                      <ul className="bg-yellow-900 ml-8 py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.path}
                              className={`block px-4 py-2 text-sm hover:bg-yellow-700 transition-colors ${
                                isActive(subItem.path)
                                  ? 'bg-yellow-700 border-l-4 border-yellow-500'
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
