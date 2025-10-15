import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import ProtectedRoute from '../Components/ProtectedRoute';
import AdminLayout from '../Layout/AdminLayout';

import RiderDashboard from '../Pages/Rider/Dashboard/RiderDashboard';
import BranchDashboard from '../Pages/Branch/Dashboard/BranchDashboard';
import ExpenseType from '../Pages/Admin/Expense-type/ExpenseType';
import CompanyInfo from '../Pages/Admin/Company-info/CompanyInfo';
import Dashboard from '../Pages/Admin/Dashboard/Dashboard';
import RiderLayout from '../Layout/RiderLayout';
import Pickup from '../Pages/Rider/Pickup/pickup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/admin/dashboard',
        Component: Dashboard,
      },
      {
        path: '/admin/dashboard/company-info',
        Component: CompanyInfo,
      },
      {
        path: '/admin/dashboard/expense-type',
        Component: ExpenseType,
      },
    ],
  },
  {
    path: '/rider',
    element: (
      <ProtectedRoute allowedRoles={['rider']}>
        <RiderLayout></RiderLayout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/rider/dashboard',
        Component: RiderDashboard,
      },
      {
        path: '/rider/pickup',
        Component: Pickup,
      },
    ],
  },
  {
    path: '/branch/dashboard',
    element: (
      <ProtectedRoute allowedRoles={['branch']}>
        <BranchDashboard />
      </ProtectedRoute>
    ),
  },
]);
