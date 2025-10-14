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
  FiMenu,
} from 'react-icons/fi';

const RiderSidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({
    'my-deliveries': false,
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
      path: '/rider/dashboard',
    },
    {
      name: 'My Deliveries',
      icon: <FiPackage className="w-5 h-5" />,
      submenu: [
        { name: 'Pending Deliveries', path: '/rider/deliveries/pending' },
        { name: 'In Transit', path: '/rider/deliveries/transit' },
        { name: 'Delivered', path: '/rider/deliveries/delivered' },
        { name: 'Failed Attempts', path: '/rider/deliveries/failed' },
      ],
    },
    {
      name: 'Route Planning',
      icon: <FiMap className="w-5 h-5" />,
      path: '/rider/routes',
    },
    {
      name: 'My Profile',
      icon: <FiUser className="w-5 h-5" />,
      path: '/rider/profile',
    },
    {
      name: 'Settings',
      icon: <FiSettings className="w-5 h-5" />,
      path: '/rider/settings',
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
                        toggleMenu(item.name.toLowerCase().replace(' ', '-'));
                      }}
                      className={`w-full flex items-center justify-between p-4 text-left hover:bg-green-700 transition-colors ${
                        openMenus[item.name.toLowerCase().replace(' ', '-')]
                          ? 'bg-green-700'
                          : ''
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{item.icon}</span>
                        {isOpen && <span>{item.name}</span>}
                      </div>
                      {isOpen &&
                        (openMenus[
                          item.name.toLowerCase().replace(' ', '-')
                        ] ? (
                          <FiChevronDown className="w-4 h-4" />
                        ) : (
                          <FiChevronRight className="w-4 h-4" />
                        ))}
                    </button>

                    {isOpen &&
                      openMenus[item.name.toLowerCase().replace(' ', '-')] && (
                        <ul className="bg-green-900 ml-8 py-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className={`block px-4 py-2 text-sm hover:bg-green-700 transition-colors ${
                                  isActive(subItem.path)
                                    ? 'bg-green-700 border-l-4 border-green-500'
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
