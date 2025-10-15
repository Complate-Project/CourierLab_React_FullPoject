import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiPackage,
  FiUsers,
  FiTruck,
  FiDollarSign,
  FiTrendingUp,
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiMapPin,
  FiEye,
  FiArrowUp,
  FiArrowDown,
  FiCalendar,
  FiSearch,
} from 'react-icons/fi';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('today');

  // Stats Data
  const stats = [
    {
      title: 'Total Packages',
      value: '1,248',
      change: '+12%',
      trend: 'up',
      icon: <FiPackage className="w-6 h-6" />,
      color: 'bg-blue-500',
      link: '/admin/packages',
    },
    {
      title: 'Active Riders',
      value: '48',
      change: '+5%',
      trend: 'up',
      icon: <FiUsers className="w-6 h-6" />,
      color: 'bg-green-500',
      link: '/admin/riders',
    },
    {
      title: 'In Transit',
      value: '189',
      change: '-3%',
      trend: 'down',
      icon: <FiTruck className="w-6 h-6" />,
      color: 'bg-yellow-500',
      link: '/admin/deliveries/transit',
    },
    {
      title: 'Revenue',
      value: '$24,890',
      change: '+18%',
      trend: 'up',
      icon: <FiDollarSign className="w-6 h-6" />,
      color: 'bg-purple-500',
      link: '/admin/reports/financial',
    },
  ];

  // Recent Activities
  const recentActivities = [
    {
      id: 1,
      type: 'delivery',
      message: 'Package #DR-2847 delivered successfully',
      time: '2 minutes ago',
      status: 'success',
      icon: <FiCheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      id: 2,
      type: 'pickup',
      message: 'New pickup scheduled for #PK-8932',
      time: '15 minutes ago',
      status: 'info',
      icon: <FiClock className="w-4 h-4 text-blue-500" />,
    },
    {
      id: 3,
      type: 'issue',
      message: 'Delivery attempt failed for #DR-4721',
      time: '1 hour ago',
      status: 'warning',
      icon: <FiAlertCircle className="w-4 h-4 text-yellow-500" />,
    },
    {
      id: 4,
      type: 'rider',
      message: 'New rider registered: John Smith',
      time: '2 hours ago',
      status: 'info',
      icon: <FiUsers className="w-4 h-4 text-blue-500" />,
    },
    {
      id: 5,
      type: 'payment',
      message: 'Payment received for #INV-8234',
      time: '3 hours ago',
      status: 'success',
      icon: <FiDollarSign className="w-4 h-4 text-green-500" />,
    },
  ];

  // Package Status
  const packageStatus = [
    { status: 'Pending', count: 156, color: 'bg-yellow-500', percentage: 25 },
    { status: 'In Transit', count: 189, color: 'bg-blue-500', percentage: 30 },
    { status: 'Delivered', count: 842, color: 'bg-green-500', percentage: 67 },
    { status: 'Failed', count: 61, color: 'bg-red-500', percentage: 5 },
  ];

  // Top Performing Riders
  const topRiders = [
    { name: 'Michael Chen', deliveries: 142, rating: 4.9, status: 'active' },
    { name: 'Sarah Johnson', deliveries: 138, rating: 4.8, status: 'active' },
    { name: 'David Wilson', deliveries: 125, rating: 4.7, status: 'on-break' },
    { name: 'Emily Brown', deliveries: 118, rating: 4.8, status: 'active' },
    { name: 'Alex Garcia', deliveries: 112, rating: 4.6, status: 'active' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 ">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome, Admin!
            </h1>
            <p className="text-gray-600">
              This is the admin dashboard. Here you can manage riders, branches,
              and oversee the entire courier service operations.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="relative">
              <select
                value={timeRange}
                onChange={e => setTimeRange(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
              </select>
              <FiCalendar className="absolute right-2 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <FiSearch className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <Link to={stat.link} className="block">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  <div
                    className={`flex items-center mt-2 text-sm ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stat.trend === 'up' ? (
                      <FiArrowUp className="w-4 h-4 mr-1" />
                    ) : (
                      <FiArrowDown className="w-4 h-4 mr-1" />
                    )}
                    <span>{stat.change} from last period</span>
                  </div>
                </div>
                <div className={`${stat.color} rounded-lg p-3 text-white`}>
                  {stat.icon}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Package Status */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Package Status Overview
              </h2>
              <Link
                to="/admin/packages"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {packageStatus.map((pkg, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${pkg.color}`}></div>
                    <span className="text-sm font-medium text-gray-700">
                      {pkg.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">
                      {pkg.count} packages
                    </span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${pkg.color}`}
                        style={{ width: `${pkg.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 w-8">
                      {pkg.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Activities
              </h2>
              <Link
                to="/admin/activities"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {recentActivities.map(activity => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">{activity.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                  <button className="flex-shrink-0 text-gray-400 hover:text-gray-600">
                    <FiEye className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Top Performing Riders */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Top Riders
              </h2>
              <Link
                to="/admin/riders"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {topRiders.map((rider, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">
                        {rider.name
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {rider.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {rider.deliveries} deliveries
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <FiTrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-sm font-medium text-gray-900">
                        {rider.rating}
                      </span>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        rider.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {rider.status === 'active' ? 'Active' : 'On Break'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link
                to="/admin/packages/new"
                className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
              >
                <FiPackage className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Add New Package
                </span>
              </Link>
              <Link
                to="/admin/riders/new"
                className="flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
              >
                <FiUsers className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-700">
                  Register New Rider
                </span>
              </Link>
              <Link
                to="/admin/reports/delivery"
                className="flex items-center space-x-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group"
              >
                <FiTrendingUp className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">
                  Generate Report
                </span>
              </Link>
              <Link
                to="/admin/branches"
                className="flex items-center space-x-3 p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors group"
              >
                <FiMapPin className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium text-orange-700">
                  Manage Branches
                </span>
              </Link>
            </div>
          </div>

          {/* System Status */}
          {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              System Status
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">API Services</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Operational
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Database</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Healthy
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Payment Gateway</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">SMS Services</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  Maintenance
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
