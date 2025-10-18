import React from 'react';
import BannerImage from '../../../assets/banner.png';

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚚 Fast & Secure Delivery
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Package,
              <span className="text-blue-600 block">Our Priority</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We deliver your important packages with care and precision.
              Experience same-day delivery with real-time tracking and 24/7
              support.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">99%</div>
                <div className="text-gray-600 text-sm">On-time Delivery</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600 text-sm">Customer Support</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600 text-sm">Cities Covered</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                <span>🚚 Track Package</span>
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center">
                <span>📦 Schedule Pickup</span>
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <img
                src={BannerImage}
                alt="Professional courier service delivering package"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-gray-800">
                    Live Tracking
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm">Delivery in</div>
                <div className="text-2xl font-bold">2-4 Hours</div>
              </div>
            </div>

            {/* Additional info cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="font-semibold text-gray-800">
                  Secure Handling
                </div>
                <div className="text-sm text-gray-600">Fragile items care</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="font-semibold text-gray-800">Insurance</div>
                <div className="text-sm text-gray-600">Up to $10,000 cover</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
