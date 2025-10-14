import React from 'react';
import RiderLayout from '../../../Layout/RiderLayout';

const RiderDashboard = () => {
  return (
    <RiderLayout>
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
        <h2 className="text-xl font-semibold mb-4">Welcome, Rider!</h2>
        <p className="text-gray-600">
          This is your rider dashboard. Here you can view assigned deliveries
          and update delivery statuses.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Pending Deliveries
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                View packages that need to be delivered.
              </p>
              <div className="mt-4 text-3xl font-bold text-indigo-600">12</div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Completed Today
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Packages delivered today.
              </p>
              <div className="mt-4 text-3xl font-bold text-green-600">8</div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
            View Delivery List
          </button>
        </div>
      </div>
    </RiderLayout>
  );
};

export default RiderDashboard;
