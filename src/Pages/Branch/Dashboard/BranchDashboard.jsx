import React from 'react';
import {
  FiPackage,
  FiTruck,
  FiDollarSign,
  FiUsers,
  FiClock,
  FiAlertCircle,
} from 'react-icons/fi';

const BranchDashboard = () => {
  // Sample data - in real app, this would come from API
  const dashboardData = {
    todayStats: {
      incoming: 24,
      outgoing: 18,
      delivered: 15,
      pending: 9,
    },
    financials: {
      collected: 12500,
      pending: 3500,
      expenses: 1200,
    },
    staff: {
      activeRiders: 8,
      available: 6,
      onLeave: 2,
    },
    alerts: {
      urgent: 3,
      delayed: 5,
      returns: 2,
    },
  };

  return (
    <div className="">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Branch Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here's your branch overview for today.
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Today's Shipments */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Today's Shipments
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {dashboardData.todayStats.incoming +
                  dashboardData.todayStats.outgoing}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <FiPackage className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex justify-between text-xs">
            <span className="text-green-600">
              In: {dashboardData.todayStats.incoming}
            </span>
            <span className="text-orange-600">
              Out: {dashboardData.todayStats.outgoing}
            </span>
          </div>
        </div>

        {/* Delivery Performance */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Delivered Today
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {dashboardData.todayStats.delivered}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <FiTruck className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-xs text-gray-500">
              {dashboardData.todayStats.pending} pending deliveries
            </span>
          </div>
        </div>

        {/* Financial Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Collected Amount
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                ৳{dashboardData.financials.collected.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-emerald-100 rounded-lg">
              <FiDollarSign className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-xs text-gray-500">
              ৳{dashboardData.financials.pending.toLocaleString()} pending
            </span>
          </div>
        </div>

        {/* Staff Availability */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Riders</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {dashboardData.staff.activeRiders}
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <FiUsers className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-xs text-gray-500">
              {dashboardData.staff.available} available now
            </span>
          </div>
        </div>
      </div>

      {/* Secondary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pending Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <FiClock className="w-5 h-5 text-orange-500" />
            <h3 className="font-semibold text-gray-800">Pending Actions</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Pickup Requests</span>
              <span className="font-semibold text-orange-600">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Returns to Process</span>
              <span className="font-semibold text-red-600">7</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Pending Verification
              </span>
              <span className="font-semibold text-blue-600">5</span>
            </div>
          </div>
        </div>

        {/* Alerts & Notifications */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <FiAlertCircle className="w-5 h-5 text-red-500" />
            <h3 className="font-semibold text-gray-800">Alerts</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Urgent Deliveries</span>
              <span className="font-semibold text-red-600">
                {dashboardData.alerts.urgent}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Delayed Shipments</span>
              <span className="font-semibold text-yellow-600">
                {dashboardData.alerts.delayed}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Customer Returns</span>
              <span className="font-semibold text-purple-600">
                {dashboardData.alerts.returns}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Today's Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Processed:</span>
              <span className="font-medium">42 parcels</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Success Rate:</span>
              <span className="font-medium text-green-600">85%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Avg. Delivery Time:</span>
              <span className="font-medium">3.2 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Branch Rating:</span>
              <span className="font-medium text-yellow-600">4.2/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Footer */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          Need to check something specific? Use the sidebar menu to access
          detailed reports and management tools.
        </p>
      </div>
    </div>
  );
};

export default BranchDashboard;
