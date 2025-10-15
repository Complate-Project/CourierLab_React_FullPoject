import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md rounded-t-xl border-t border-gray-200 ">
      <div className="max-w-7xl mx-auto px-6 py-4 ">
        {/* Left side */}
        <p className="text-sm text-gray-600 text-center ">
          © {new Date().getFullYear()} Courier Service Admin Dashboard. All
          rights reserved. | Develop by Creative Software
        </p>
      </div>
    </footer>
  );
};

export default Footer;
