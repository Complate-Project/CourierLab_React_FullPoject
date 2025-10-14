import React from 'react';
import BranchLayout from '../../../Layout/BranchLayout';

const BranchDashboard = () => {
  return (
    <BranchLayout>
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
        <h2 className="text-xl font-semibold mb-4">Welcome, Branch Manager!</h2>
        <p className="text-gray-600">
          This is your branch dashboard. Here you can manage incoming and
          outgoing shipments for your branch.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Incoming Shipments
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Packages arriving at your branch.
              </p>
              <div className="mt-4 text-3xl font-bold text-blue-600">24</div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Outgoing Shipments
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Packages dispatched from your branch.
              </p>
              <div className="mt-4 text-3xl font-bold text-green-600">18</div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Inventory</h3>
              <p className="mt-1 text-sm text-gray-500">
                Current inventory levels.
              </p>
              <div className="mt-4 text-3xl font-bold text-purple-600">156</div>
            </div>
          </div>
        </div>
      </div>
    </BranchLayout>
  );
};

export default BranchDashboard;
