import React from 'react';
import AdminLayout from '../../../Layout/AdminLayout';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
        <h2 className="text-xl font-semibold mb-4">Welcome, Admin!</h2>
        <p className="text-gray-600">
          This is the admin dashboard. Here you can manage riders, branches, and
          oversee the entire courier service operations.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Manage Riders
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                View and manage all registered riders in the system.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Manage Branches
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                View and manage all courier branches.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                System Reports
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Access detailed reports and analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
