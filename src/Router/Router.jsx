import { createBrowserRouter, Navigate } from 'react-router';
import Login from '../Pages/Login/Login';
import AdminDashboard from '../Pages/Admin/Dashboard/AdminDashboard';
import RiderDashboard from '../Pages/Rider/Dashboard/RiderDashboard';
import BranchDashboard from '../Pages/Branch/Dashboard/BranchDashboard';
import ProtectedRoute from '../Components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />, // Redirect root to login
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin/dashboard',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/rider/dashboard',
    element: (
      <ProtectedRoute allowedRoles={['rider']}>
        <RiderDashboard />
      </ProtectedRoute>
    ),
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
