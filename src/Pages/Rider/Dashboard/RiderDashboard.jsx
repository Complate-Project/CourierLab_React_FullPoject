import React from 'react';
import {
  FiPackage,
  FiCheckCircle,
  FiClock,
  FiTruck,
  FiAlertCircle,
  FiDollarSign,
  FiMap,
  FiUser,
} from 'react-icons/fi';

const RiderDashboard = () => {
  const stats = [
    {
      title: 'Total Assigned',
      value: '24',
      icon: <FiPackage className="w-6 h-6" />,
      color: 'bg-blue-500',
      description: 'Packages assigned to you',
    },
    {
      title: 'Pending Delivery',
      value: '8',
      icon: <FiClock className="w-6 h-6" />,
      color: 'bg-yellow-500',
      description: 'Awaiting pickup/delivery',
    },
    {
      title: 'In Transit',
      value: '6',
      icon: <FiTruck className="w-6 h-6" />,
      color: 'bg-orange-500',
      description: 'Currently on route',
    },
    {
      title: 'Delivered Today',
      value: '10',
      icon: <FiCheckCircle className="w-6 h-6" />,
      color: 'bg-green-500',
      description: 'Successful deliveries',
    },
    {
      title: 'Failed Attempts',
      value: '2',
      icon: <FiAlertCircle className="w-6 h-6" />,
      color: 'bg-red-500',
      description: 'Need reattempt',
    },
    {
      title: "Today's Earnings",
      value: '$156',
      icon: <FiDollarSign className="w-6 h-6" />,
      color: 'bg-purple-500',
      description: 'Estimated income',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-220px)]  p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Rider Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's your delivery overview for today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 mt-2">{stat.description}</p>
              </div>
              <div className={`${stat.color} rounded-lg p-3 text-white`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="flex items-center justify-center space-x-2 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
            <FiMap className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-blue-700">View Routes</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
            <FiPackage className="w-5 h-5 text-green-600" />
            <span className="font-medium text-green-700">Start Delivery</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
            <FiUser className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-purple-700">My Profile</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
            <FiClock className="w-5 h-5 text-orange-600" />
            <span className="font-medium text-orange-700">
              Delivery History
            </span>
          </button>
        </div>
      </div>

      {/* Today's Priority */}
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center">
          <FiAlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
          <h3 className="text-sm font-medium text-yellow-800">
            Today's Priority
          </h3>
        </div>
        <p className="text-sm text-yellow-700 mt-1">
          You have 3 express deliveries that need to be completed within the
          next 2 hours.
        </p>
      </div>
    </div>
  );
};

export default RiderDashboard;
