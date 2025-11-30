import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield, User, Users, GraduationCap,
  Settings, BookOpen, Calculator, Phone, Monitor
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  // RIGHT SIDEBAR DATA
  const loginButtons = [
    { role: 'super-admin', label: 'SUPER ADMIN LOGIN', bgClass: 'bg-purple-700', icon: Shield },
    { role: 'student', label: 'STUDENT LOGIN', bgClass: 'bg-lime-500', icon: GraduationCap },
    { role: 'parent', label: 'PARENT LOGIN', bgClass: 'bg-pink-600', icon: Users },
    { role: 'school', label: 'ADMIN LOGIN', bgClass: 'bg-cyan-700', icon: Settings },
    { role: 'teacher', label: 'TEACHER LOGIN', bgClass: 'bg-gray-500', icon: Monitor },
    { role: 'accountant', label: 'ACCOUNTANT LOGIN', bgClass: 'bg-orange-500', icon: Calculator },
    { role: 'receptionist', label: 'RECEPTIONIST LOGIN', bgClass: 'bg-teal-500', icon: Phone },
    { role: 'librarian', label: 'LIBRARIAN LOGIN', bgClass: 'bg-green-600', icon: BookOpen },
  ];

  // ORBIT FEATURES DATA
  const orbitFeatures = [
    {
      label: 'SUPER ADMIN', desc: 'Full Control', icon: Shield,
      color: 'text-purple-700', borderColor: 'border-purple-200', bgBadge: 'bg-purple-50',
      position: 'top-[2%] left-1/2 -translate-x-1/2'
    },
    {
      label: 'ADMIN', desc: 'Day-to-Day Ops', icon: User,
      color: 'text-cyan-700', borderColor: 'border-cyan-200', bgBadge: 'bg-cyan-50',
      position: 'top-[12%] right-[12%]'
    },
    {
      label: 'RECEPTIONIST', desc: 'Front Office', icon: Phone,
      color: 'text-teal-600', borderColor: 'border-teal-200', bgBadge: 'bg-teal-50',
      position: 'top-1/2 -translate-y-1/2 right-[2%]'
    },
    {
      label: 'LIBRARIAN', desc: 'Library Mgmt', icon: BookOpen,
      color: 'text-green-600', borderColor: 'border-green-200', bgBadge: 'bg-green-50',
      position: 'bottom-[12%] right-[12%]'
    },
    {
      label: 'PARENT', desc: 'Child Updates', icon: Users,
      color: 'text-pink-600', borderColor: 'border-pink-200', bgBadge: 'bg-pink-50',
      position: 'bottom-[2%] left-1/2 -translate-x-1/2'
    },
    {
      label: 'STUDENT', desc: 'Academic Updates', icon: GraduationCap,
      color: 'text-lime-600', borderColor: 'border-lime-200', bgBadge: 'bg-lime-50',
      position: 'bottom-[12%] left-[12%]'
    },
    {
      label: 'ACCOUNTANT', desc: 'Fees & Expenses', icon: Calculator,
      color: 'text-orange-500', borderColor: 'border-orange-200', bgBadge: 'bg-orange-50',
      position: 'top-1/2 -translate-y-1/2 left-[2%]'
    },
    {
      label: 'TEACHER', desc: 'Class Activities', icon: Monitor,
      color: 'text-gray-600', borderColor: 'border-gray-200', bgBadge: 'bg-gray-50',
      position: 'top-[12%] left-[12%]'
    },
  ];

  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden bg-white font-sans">

      {/* ============================================
          LEFT SECTION (Main Ecosystem)
      ============================================ */}
      <div className="flex-1 relative flex items-center justify-center bg-slate-50 border-r border-gray-200">

        {/* --- CENTRAL MONITOR IMAGE --- */}
        <div className="relative z-10 w-[450px] md:w-[500px]">
          <div className="bg-white p-2 rounded-xl shadow-2xl border border-gray-100">
            <img
              src="/dashboard.png"
              onError={(e) => e.target.src = "https://placehold.co/600x400/222/FFF?text=Dashboard"}
              alt="Dashboard"
              className="w-full rounded border border-gray-200"
            />
          </div>
        </div>

        {/* --- ORBIT ITEMS (Fixed Layout) --- */}
        {orbitFeatures.map((item, index) => (
          <div key={index} className={`absolute ${item.position} flex flex-col items-center w-40 z-30 group cursor-pointer gap-3`}>

            {/* 1. ICON CIRCLE (Background White + Colored Border) */}
            <div className={`bg-white p-4 rounded-full shadow-lg border-4 ${item.borderColor} group-hover:scale-110 transition-transform duration-300`}>
              <item.icon size={32} className={item.color} />
            </div>

            {/* 2. TEXT BADGE (Separate Background for Text) */}
            <div className={`flex flex-col items-center px-4 py-2 rounded-lg shadow-sm ${item.bgBadge} border border-gray-100`}>
              <span className={`font-black text-xs tracking-wider ${item.color}`}>
                {item.label}
              </span>
              <span className="text-[10px] text-gray-600 font-semibold leading-tight mt-1">
                {item.desc}
              </span>
            </div>

          </div>
        ))}

        {/* Decorative Lines (Behind everything) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-gray-200 rounded-full z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-dashed border-gray-300 rounded-full z-0 opacity-50"></div>

      </div>

      {/* ============================================
          RIGHT SECTION (Sidebar Buttons)
      ============================================ */}
      <div className="w-[350px] flex-shrink-0 h-full flex flex-col overflow-y-auto bg-gray-50 shadow-2xl z-40">
        {loginButtons.map((btn, index) => (
          <button
            key={index}
            onClick={() => navigate(`/login/${btn.role}`)}
            className={`flex-1 w-full text-white flex items-center px-8 hover:brightness-110 transition-all border-b border-white/10 ${btn.bgClass}`}
            style={{ minHeight: '12.5%' }}
          >
            <div className="bg-white/20 p-2 rounded-full mr-4 shadow-sm">
              <btn.icon size={22} className="text-white" />
            </div>
            <span className="font-extrabold text-sm tracking-widest text-white shadow-black drop-shadow-md">
              {btn.label}
            </span>
          </button>
        ))}
      </div>

    </div>
  );
};

export default LandingPage;