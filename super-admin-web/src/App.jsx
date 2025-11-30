import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import SuperAdminLayout from './components/SuperAdminLayout';
import Schools from './pages/Schools';
import LandingPage from './pages/LandingPage';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import LoginPage from './pages/LoginPage';

// Dashboard Home Stats Component
const HomeStats = () => (
  <div className="p-6">
    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-gray-500 text-sm font-medium">Total Schools</h3>
        <p className="text-3xl font-bold text-gray-800 mt-2">12</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-gray-500 text-sm font-medium">Active Students</h3>
        <p className="text-3xl font-bold text-green-600 mt-2">1,240</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">₹ 4.5L</p>
      </div>
    </div>
  </div>
);

// Dashboard Layout Wrapper
const DashboardWrapper = () => (
  <DashboardLayout>
    <Routes>
      <Route path="/" element={<HomeStats />} />
      <Route path="/schools" element={<Schools />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </DashboardLayout>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Login Routes */}
        <Route path="/login/:role" element={<LoginPage />} />
        
        {/* Admin Dashboard Routes */}
        <Route path="/admin/*" element={<DashboardWrapper />} />
        
        {/* Super Admin Routes */}
        <Route path="/super-admin" element={<SuperAdminLayout />}>
          <Route path="dashboard" element={<SuperAdminDashboard />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>
        
        {/* Redirect any other route to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;