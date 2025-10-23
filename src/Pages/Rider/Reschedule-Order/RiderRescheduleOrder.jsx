import React, { useState } from 'react';
import {
  FiRefreshCcw,
  FiList,
  FiGrid,
  FiFilter,
  FiSearch,
  FiChevronDown,
  FiCheckCircle,
  FiXCircle,
  FiClock,
  FiEdit,
  FiEye,
  FiDollarSign,
} from 'react-icons/fi';

const RiderRescheduleOrder = () => {
  const [isGridView, setIsGridView] = useState(false);

  // Fake data for the table
  const tableData = [
    {
      id: 1,
      trackingId: 'TRK789012',
      riderName: 'John Rider',
      merchantName: 'ABC Store',
      customerName: 'Michael Brown',
      customerPhone: '+8801912345678',
      customerAddress: '123 Green Road, Dhaka',
      note: 'Customer requested reschedule',
      status: 'Pending',
      invoiceValue: '৳1,850',
      collectedAmount: '৳0',
    },
    {
      id: 2,
      trackingId: 'TRK789013',
      riderName: 'Sarah Ahmed',
      merchantName: 'XYZ Shop',
      customerName: 'Emma Wilson',
      customerPhone: '+8801923456789',
      customerAddress: '456 Lake View, Chittagong',
      note: 'Address not found',
      status: 'Completed',
      invoiceValue: '৳3,200',
      collectedAmount: '৳3,200',
    },
    {
      id: 3,
      trackingId: 'TRK789014',
      riderName: 'David Khan',
      merchantName: 'Super Mart',
      customerName: 'Robert Davis',
      customerPhone: '+8801934567890',
      customerAddress: '789 Hill Street, Sylhet',
      note: 'Customer unavailable',
      status: 'In Progress',
      invoiceValue: '৳2,500',
      collectedAmount: '৳1,250',
    },
    {
      id: 4,
      trackingId: 'TRK789015',
      riderName: 'Lisa Rahman',
      merchantName: 'Best Buy',
      customerName: 'Sophia Miller',
      customerPhone: '+8801945678901',
      customerAddress: '321 Garden Road, Khulna',
      note: 'Payment issue',
      status: 'Cancelled',
      invoiceValue: '৳4,100',
      collectedAmount: '৳0',
    },
    {
      id: 5,
      trackingId: 'TRK789016',
      riderName: 'Mike Hossain',
      merchantName: 'Tech World',
      customerName: 'James Anderson',
      customerPhone: '+8801956789012',
      customerAddress: '654 River Side, Rajshahi',
      note: 'Rescheduled for tomorrow',
      status: 'Pending',
      invoiceValue: '৳1,950',
      collectedAmount: '৳0',
    },
    {
      id: 6,
      trackingId: 'TRK789017',
      riderName: 'Anna Islam',
      merchantName: 'Fashion Hub',
      customerName: 'Olivia Taylor',
      customerPhone: '+8801967890123',
      customerAddress: '987 Mountain View, Bogura',
      note: 'Customer will call back',
      status: 'Completed',
      invoiceValue: '৳2,800',
      collectedAmount: '৳2,800',
    },
  ];

  // Status badge component
  const StatusBadge = ({ status }) => {
    const statusConfig = {
      Pending: { color: 'bg-yellow-100 text-yellow-800', icon: FiClock },
      Completed: { color: 'bg-green-100 text-green-800', icon: FiCheckCircle },
      'In Progress': { color: 'bg-blue-100 text-blue-800', icon: FiClock },
      Cancelled: { color: 'bg-red-100 text-red-800', icon: FiXCircle },
    };

    const config = statusConfig[status] || statusConfig.Pending;
    const IconComponent = config.icon;

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}
      >
        <IconComponent size={12} className="mr-1" />
        {status}
      </span>
    );
  };

  // Mobile Card View
  const MobileCard = ({ item, index }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3 shadow-sm">
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span className="font-medium text-gray-500">SL:</span>
          <p className="text-gray-900">{index + 1}</p>
        </div>
        <div>
          <span className="font-medium text-gray-500">Tracking ID:</span>
          <p className="text-blue-600 font-medium">{item.trackingId}</p>
        </div>
        <div>
          <span className="font-medium text-gray-500">Rider:</span>
          <p className="text-gray-900">{item.riderName}</p>
        </div>
        <div>
          <span className="font-medium text-gray-500">Status:</span>
          <StatusBadge status={item.status} />
        </div>
        <div>
          <span className="font-medium text-gray-500">Customer:</span>
          <p className="text-gray-900">{item.customerName}</p>
        </div>
        <div>
          <span className="font-medium text-gray-500">Invoice:</span>
          <p className="text-gray-900 font-semibold">{item.invoiceValue}</p>
        </div>
        <div className="col-span-2">
          <span className="font-medium text-gray-500">Note:</span>
          <p className="text-gray-900 text-sm italic">"{item.note}"</p>
        </div>
        <div className="col-span-2">
          <span className="font-medium text-gray-500">Collected:</span>
          <p
            className={`text-sm font-semibold ${
              item.collectedAmount === '৳0' ? 'text-red-600' : 'text-green-600'
            }`}
          >
            {item.collectedAmount}
          </p>
        </div>
      </div>

      {/* Action Buttons for Mobile */}
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
        <button className="flex-1 min-w-[100px] bg-blue-600 text-white px-2 py-2 rounded text-xs hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-1">
          <FiEye size={12} />
          View
        </button>
        <button className="flex-1 min-w-[100px] bg-green-600 text-white px-2 py-2 rounded text-xs hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-1">
          <FiEdit size={12} />
          Edit
        </button>
        <button className="flex-1 min-w-[100px] bg-purple-600 text-white px-2 py-2 rounded text-xs hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center gap-1">
          <FiDollarSign size={12} />
          Collect
        </button>
      </div>
    </div>
  );

  return (
    <div className="">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Reschedule Order Management
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Manage and track rescheduled orders efficiently
        </p>
      </div>

      {/* Control Panel */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          {/* Left Controls */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative w-full sm:w-48">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2.5 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                <option>Export All</option>
                <option>Export Selected</option>
                <option>Export CSV</option>
              </select>
              <FiChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <div className="relative w-full sm:w-64">
              <FiSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search orders..."
                className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setIsGridView(false)}
                className={`p-2 rounded-md transition-all duration-300 ${
                  !isGridView
                    ? 'bg-white shadow-sm'
                    : 'hover:bg-white hover:shadow-sm'
                }`}
              >
                <FiList
                  size={16}
                  className={!isGridView ? 'text-blue-600' : 'text-gray-600'}
                />
              </button>
              <button
                onClick={() => setIsGridView(true)}
                className={`p-2 rounded-md transition-all duration-300 ${
                  isGridView
                    ? 'bg-white shadow-sm'
                    : 'hover:bg-white hover:shadow-sm'
                }`}
              >
                <FiGrid
                  size={16}
                  className={isGridView ? 'text-blue-600' : 'text-gray-600'}
                />
              </button>
              <button className="p-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-300">
                <FiFilter size={16} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-300">
                <FiRefreshCcw size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Card View */}
      {isGridView && (
        <div className="block md:hidden">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Reschedule Orders ({tableData.length})
            </h2>
          </div>
          {tableData.map((item, index) => (
            <MobileCard key={item.id} item={item} index={index} />
          ))}
        </div>
      )}

      {/* Tablet and Desktop Table View */}
      <div className={`${isGridView ? 'hidden md:block' : 'block'}`}>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="px-4 md:px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              Reschedule Order List
              <span className="text-sm font-normal text-gray-500">
                ({tableData.length} orders)
              </span>
            </h2>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px] lg:min-w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    SL.
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Tracking ID
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Rider Name
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Merchant Name
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Customer Name
                  </th>
                  <th className="hidden lg:table-cell px-4 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Customer Phone
                  </th>
                  <th className="hidden xl:table-cell px-4 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Customer Address
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Note
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Invoice Value
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Collected Amount
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {item.trackingId}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.riderName}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.merchantName}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.customerName}
                    </td>
                    <td className="hidden lg:table-cell px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.customerPhone}
                    </td>
                    <td className="hidden xl:table-cell px-4 md:px-6 py-4 text-sm text-gray-900">
                      <div
                        className="max-w-xs truncate"
                        title={item.customerAddress}
                      >
                        {item.customerAddress}
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-900 max-w-xs">
                      <div className="truncate italic" title={item.note}>
                        "{item.note}"
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {item.invoiceValue}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-semibold">
                      <span
                        className={
                          item.collectedAmount === '৳0'
                            ? 'text-red-600'
                            : 'text-green-600'
                        }
                      >
                        {item.collectedAmount}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        <button className="bg-blue-600 text-white px-2 py-1.5 rounded text-xs hover:bg-blue-700 transition-colors duration-200 flex items-center gap-1">
                          <FiEye size={10} />
                          <span className="hidden sm:inline">View</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="px-4 md:px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
              <div>
                Showing {tableData.length} of {tableData.length} entries
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline">Rows per page:</span>
                <select className="bg-white border border-gray-300 rounded px-2 py-1 text-sm">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderRescheduleOrder;
