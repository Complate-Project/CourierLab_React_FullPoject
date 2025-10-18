import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiMenu,
  FiX,
  FiPackage,
  FiTruck,
  FiMapPin,
  FiPhone,
  FiUser,
} from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: <FiPackage className="w-4 h-4" /> },
    {
      name: 'Services',
      href: '/services',
      icon: <FiTruck className="w-4 h-4" />,
    },
    {
      name: 'Tracking',
      href: '/tracking',
      icon: <FiMapPin className="w-4 h-4" />,
    },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: <FiPackage className="w-4 h-4" />,
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <FiPhone className="w-4 h-4" />,
    },
  ];

  const isActiveLink = href => {
    return location.pathname === href;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📞 +880 1XXX-XXXXXX</span>
            <span>✉️ info@quickdeliver.com</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>🚚 Free delivery on first order</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
                <FiPackage className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  QuickDeliver
                </span>
                <p className="text-xs text-gray-500 -mt-1">Express Delivery</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActiveLink(item.href)
                      ? 'bg-blue-50 text-blue-600 border border-blue-100'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/login"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium px-4 py-2 rounded-lg transition-colors"
              >
                <FiUser className="w-4 h-4" />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-3 rounded-xl transition-all duration-200 ${
                  isOpen
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {isOpen ? (
                  <FiX className="h-5 w-5" />
                ) : (
                  <FiMenu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl rounded-b-2xl">
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-4 rounded-xl font-medium transition-all duration-200 ${
                      isActiveLink(item.href)
                        ? 'bg-blue-50 text-blue-600 border border-blue-100'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}

                {/* Mobile Auth Buttons */}
                <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
                  <Link
                    to="/login"
                    className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-600 font-medium px-4 py-3 rounded-lg border border-gray-200 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiUser className="w-4 h-4" />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
