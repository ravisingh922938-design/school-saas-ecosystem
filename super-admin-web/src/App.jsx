import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Context
import { TerminologyProvider } from './context/TerminologyContext';

// Layouts (Ensure these files exist in src/components/Layouts/)
import SuperAdminLayout from './components/Layouts/SuperAdminLayout';
import SchoolLayout from './components/Layouts/SchoolLayout';
import TeacherLayout from './components/Layouts/TeacherLayout';
import StudentLayout from './components/Layouts/StudentLayout';

// Pages (Ensure these exist in src/pages/)
import LandingPage from './pages/LandingPage';
import UniversalLogin from './pages/UniversalLogin';

// Admin Pages
import Dashboard from './pages/Dashboard';
import ManageTenants from './pages/ManageTenants';

// School Pages
import SchoolDashboard from './pages/SchoolDashboard';
import AdmissionForm from './pages/AdmissionForm';
import SchoolStore from './pages/SchoolStore'; // Jo abhi banaya tha

// Teacher Pages
import TeacherDashboard from './pages/TeacherDashboard';
import TeacherAttendance from './pages/TeacherAttendance';

// Student Pages
import StudentDashboard from './pages/StudentDashboard';
import StudentFees from './pages/StudentFees';

// Loading Component
const Loading = () => (
  <div className="h-screen flex items-center justify-center text-indigo-600 font-bold text-xl">
    Loading...
  </div>
);

function App() {
  return (
    <TerminologyProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* --- PUBLIC ROUTES --- */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<UniversalLogin />} />

            {/* --- SUPER ADMIN ROUTES --- */}
            <Route path="/super-admin" element={<SuperAdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="tenants" element={<ManageTenants />} />
            </Route>

            {/* --- SCHOOL ADMIN ROUTES --- */}
            <Route path="/school" element={<SchoolLayout />}>
              <Route index element={<SchoolDashboard />} />
              <Route path="admission" element={<AdmissionForm />} />
              <Route path="store" element={<SchoolStore />} />
            </Route>

            {/* --- TEACHER APP ROUTES --- */}
            <Route path="/teacher" element={<TeacherLayout />}>
              <Route index element={<TeacherDashboard />} />
              <Route path="attendance" element={<TeacherAttendance />} />
            </Route>

            {/* --- STUDENT APP ROUTES --- */}
            <Route path="/student" element={<StudentLayout />}>
              <Route index element={<StudentDashboard />} />
              <Route path="fees" element={<StudentFees />} />
            </Route>

            {/* 404 Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TerminologyProvider>
  );
}

export default App;