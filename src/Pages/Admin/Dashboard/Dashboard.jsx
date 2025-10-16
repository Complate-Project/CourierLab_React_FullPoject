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
  FiArrowUp,
  FiArrowDown,
  FiStar,
  FiRefreshCw,
  FiUserCheck,
  FiCreditCard,
} from 'react-icons/fi';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('today');

  const stats = [
    {
      title: 'Order',
      value: '1,248',
      change: '+12%',
      trend: 'up',
      icon: <FiPackage className="w-6 h-6" />, // 📦 Order Icon
      color: 'bg-blue-500',
      link: '/admin/packages',
    },
    {
      title: 'Delivered',
      value: '48',
      change: '+5%',
      trend: 'up',
      icon: <FiCheckCircle className="w-6 h-6" />, // ✅ Delivered Icon
      color: 'bg-green-500',
      link: '/admin/deliveries/completed',
    },
    {
      title: 'In Transit',
      value: '189',
      change: '-3%',
      trend: 'down',
      icon: <FiTruck className="w-6 h-6" />, // 🚚 Transit Icon
      color: 'bg-yellow-500',
      link: '/admin/deliveries/transit',
    },
    {
      title: 'Return',
      value: '37',
      change: '+18%',
      trend: 'up',
      icon: <FiRefreshCw className="w-6 h-6" />, // 🔄 Return Icon
      color: 'bg-red-500',
      link: '/admin/returns',
    },
    {
      title: 'Active Rider',
      value: '1,248',
      change: '+12%',
      trend: 'up',
      icon: <FiUserCheck className="w-6 h-6" />, // 👷‍♂️ Active Rider Icon
      color: 'bg-indigo-500',
      link: '/admin/riders',
    },
    {
      title: 'Active Merchant',
      value: '48',
      change: '+5%',
      trend: 'up',
      icon: <FiUsers className="w-6 h-6" />, // 🧑‍💼 Merchant Icon
      color: 'bg-teal-500',
      link: '/admin/merchants',
    },
    {
      title: 'Revenue',
      value: '$18,920',
      change: '+15%',
      trend: 'up',
      icon: <FiDollarSign className="w-6 h-6" />, // 💰 Revenue Icon
      color: 'bg-emerald-500',
      link: '/admin/reports/revenue',
    },
    {
      title: 'Disbursement',
      value: '$24,890',
      change: '+8%',
      trend: 'up',
      icon: <FiCreditCard className="w-6 h-6" />, // 💳 Disbursement Icon
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

  // Top Performing Branches
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
    {
      name: 'Midtown Branch',
      location: 'Chicago, IL',
      packages: 856,
      revenue: '$32,150',
      growth: '+8%',
      rating: 4.6,
      status: 'medium',
    },
    {
      name: 'Riverfront Office',
      location: 'Miami, FL',
      packages: 723,
      revenue: '$28,430',
      growth: '+5%',
      rating: 4.5,
      status: 'medium',
    },
    {
      name: 'Uptown Station',
      location: 'Seattle, WA',
      packages: 654,
      revenue: '$25,890',
      growth: '+3%',
      rating: 4.4,
      status: 'low',
    },
  ];

  const getStatusColor = status => {
    switch (status) {
      case 'high':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = status => {
    switch (status) {
      case 'high':
        return 'High Performance';
      case 'medium':
        return 'Good Performance';
      case 'low':
        return 'Needs Attention';
      default:
        return 'Average';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back! Here's what's happening today.
            </p>
          </div>
          {/*  */}
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              {['Today', 'Weekly', 'Monthly', 'Yearly'].map(period => (
                <button
                  key={period}
                  onClick={() => setTimeRange(period.toLowerCase())}
                  className={`px-4 py-2 text-sm font-medium border-r border-gray-300 last:border-r-0 transition-colors ${
                    timeRange === period.toLowerCase()
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
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

      {/* Main Content Grid - Left smaller, Right larger */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        {/* Left Column - Package Status & Recent Activities (Smaller) */}
        <div className="lg:col-span-1 space-y-6">
          {/* Package Status */}
          <div className="bg-white  shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Package Status
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
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{pkg.count}</span>
                    <span className="text-sm text-gray-500 w-8">
                      {pkg.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white  shadow-sm border border-gray-200 p-6">
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

            {/* Scrollable content */}
            <div className="space-y-4 max-h-[245px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Top Riders & Top Branches (Larger) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {/* Top Performing Riders */}
            <div className="bg-white  shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Top Performing Riders
                </h2>
                <Link
                  to="/admin/riders"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>

              {/* Scrollable content */}
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {topRiders.map((rider, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
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
                      <div className="flex items-center space-x-1 justify-end">
                        <FiTrendingUp className="w-4 h-4 text-green-500" />
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

            {/* Top Performing Branches */}
            <div className="bg-white  shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Top Performing Branches
                </h2>
                <Link
                  to="/admin/branches"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>

              {/* Scrollable content */}
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {topBranches.map((branch, index) => (
                  <div
                    key={index}
                    className="p-3 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <FiMapPin className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {branch.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {branch.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiStar className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-900">
                          {branch.rating}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-2">
                      <div>
                        <p className="text-xs text-gray-500">Packages</p>
                        <p className="text-sm font-medium text-gray-900">
                          {branch.packages.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Revenue</p>
                        <p className="text-sm font-medium text-gray-900">
                          {branch.revenue}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div
                        className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                          branch.status
                        )}`}
                      >
                        {getStatusText(branch.status)}
                      </div>
                      <div
                        className={`flex items-center text-xs ${
                          branch.growth.includes('+')
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {branch.growth.includes('+') ? (
                          <FiArrowUp className="w-3 h-3 mr-1" />
                        ) : (
                          <FiArrowDown className="w-3 h-3 mr-1" />
                        )}
                        <span>{branch.growth}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white  shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
    </div>
  );
};

export default Dashboard;
