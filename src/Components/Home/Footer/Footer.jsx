import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiPackage,
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiArrowUp,
} from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <FiPackage className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">QuickDeliver</span>
            </Link>
            <p className="text-gray-300 mb-4 text-sm">
              Your trusted partner for fast and reliable package delivery
              services. We deliver your parcels with care and precision.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/express"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Express Delivery
                </Link>
              </li>
              <li>
                <Link
                  to="/services/same-day"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Same Day Delivery
                </Link>
              </li>
              <li>
                <Link
                  to="/services/international"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  International Shipping
                </Link>
              </li>
              <li>
                <Link
                  to="/services/corporate"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Corporate Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/tracking"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Package Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  123 Delivery Street, City, State 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  info@quickdeliver.com
                </span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 bg-gray-800 text-white text-sm rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} QuickDeliver. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
            >
              <FiArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
