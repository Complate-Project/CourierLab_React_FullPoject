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
  FiStar,
} from 'react-icons/fi';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('today');

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

  const recentActivities = [
    {
      id: 1,
      message: 'Package #DR-2847 delivered successfully',
      time: '2 minutes ago',
      icon: <FiCheckCircle className="w-4 h-4 text-green-500" />,
    },
    {
      id: 2,
      message: 'New pickup scheduled for #PK-8932',
      time: '15 minutes ago',
      icon: <FiClock className="w-4 h-4 text-blue-500" />,
    },
    {
      id: 3,
      message: 'Delivery attempt failed for #DR-4721',
      time: '1 hour ago',
      icon: <FiAlertCircle className="w-4 h-4 text-yellow-500" />,
    },
  ];

  const topRiders = [
    { name: 'Michael Chen', deliveries: 142, rating: 4.9, status: 'active' },
    { name: 'Sarah Johnson', deliveries: 138, rating: 4.8, status: 'active' },
    { name: 'David Wilson', deliveries: 125, rating: 4.7, status: 'on-break' },
  ];

  const topBranches = [
    {
      name: 'Downtown Central',
      location: 'New York, NY',
      packages: 1248,
      revenue: '$45,670',
      growth: '+15%',
      rating: 4.8,
      status: 'high',
    },
    {
      name: 'Westside Hub',
      location: 'Los Angeles, CA',
      packages: 987,
      revenue: '$38,920',
      growth: '+12%',
      rating: 4.7,
      status: 'high',
    },
  ];

  const getStatusColor = status => {
    switch (status) {
      case 'high':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">
            Welcome back! Here’s what’s happening today.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <select
              value={timeRange}
              onChange={e => setTimeRange(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            <FiCalendar className="absolute right-2 top-3 w-4 h-4 text-gray-400" />
          </div>

          <div className="relative">
            <FiSearch className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Link
            to={stat.link}
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <div
                  className={`flex items-center text-sm mt-2 ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.trend === 'up' ? (
                    <FiArrowUp className="mr-1" />
                  ) : (
                    <FiArrowDown className="mr-1" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className={`${stat.color} text-white p-3 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Middle Section: Riders + Branches */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Riders */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg text-gray-900">Top Riders</h2>
            <Link
              to="/admin/riders"
              className="text-blue-600 text-sm hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {topRiders.map((rider, i) => (
              <div
                key={i}
                className="flex items-center justify-between hover:bg-gray-50 p-3 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm">
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
                  <p className="text-sm font-medium text-gray-900">
                    ⭐ {rider.rating}
                  </p>
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

        {/* Top Branches */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg text-gray-900">
              Top Branches
            </h2>
            <Link
              to="/admin/branches"
              className="text-blue-600 text-sm hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {topBranches.map((branch, i) => (
              <div
                key={i}
                className="p-3 rounded-lg hover:bg-gray-50 border border-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {branch.name}
                    </p>
                    <p className="text-xs text-gray-500">{branch.location}</p>
                  </div>
                  <div className="text-sm text-gray-700">
                    ⭐ {branch.rating}
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>{branch.packages} packages</span>
                  <span>{branch.revenue}</span>
                </div>

                <div
                  className={`mt-2 inline-block text-xs px-2 py-1 rounded-full ${getStatusColor(
                    branch.status
                  )}`}
                >
                  {branch.growth} Growth
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="font-semibold text-lg text-gray-900 mb-4">
            Recent Activities
          </h2>
          <div className="space-y-3">
            {recentActivities.map(a => (
              <div
                key={a.id}
                className="flex items-start gap-3 hover:bg-gray-50 p-3 rounded-lg"
              >
                <div>{a.icon}</div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{a.message}</p>
                  <p className="text-xs text-gray-500">{a.time}</p>
                </div>
                <FiEye className="text-gray-400 w-4 h-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="font-semibold text-lg text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <Link
              to="/admin/packages/new"
              className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg"
            >
              <FiPackage className="text-blue-600" /> Add New Package
            </Link>
            <Link
              to="/admin/riders/new"
              className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg"
            >
              <FiUsers className="text-green-600" /> Register New Rider
            </Link>
            <Link
              to="/admin/reports/delivery"
              className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg"
            >
              <FiTrendingUp className="text-purple-600" /> Generate Report
            </Link>
            <Link
              to="/admin/branches"
              className="flex items-center gap-3 p-3 bg-orange-50 hover:bg-orange-100 rounded-lg"
            >
              <FiMapPin className="text-orange-600" /> Manage Branches
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
