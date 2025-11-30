import React from 'react';
import { Shield, Building, User, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginCard = ({ title, icon: Icon, color, to }) => {
  const colorBorders = {
    indigo: 'border-indigo-400/50 hover:border-indigo-300',
    blue: 'border-blue-400/50 hover:border-blue-300',
    green: 'border-green-400/50 hover:border-green-300',
    orange: 'border-orange-400/50 hover:border-orange-300',
  };

  const colorIcons = {
    indigo: 'text-indigo-300',
    blue: 'text-blue-300',
    green: 'text-green-300',
    orange: 'text-orange-300',
  };

  return (
    <Link
      to={to}
      className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 ${colorBorders[color]} transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10 overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className={`p-4 rounded-full bg-white/5 border border-white/10 mb-6 group-hover:bg-white/10 transition-colors duration-300 ${colorIcons[color]}`}>
        <Icon size={28} className="group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 relative z-10">{title}</h3>
      <div className="flex items-center text-sm text-white/60 group-hover:text-white transition-colors duration-300 relative z-10">
        Sign in <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </Link>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-gray-100">
      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Welcome to SchoolSaaS
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              One Platform for Schools, Teachers, and Students.
            </p>
          </div>

          {/* Login Options */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-10 text-gray-200">
              Get Started
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <LoginCard
                title="Super Admin"
                icon={Shield}
                color="indigo"
                to="/login/super-admin"
              />
              <LoginCard
                title="School Admin"
                icon={Building}
                color="blue"
                to="/login/school"
              />
              <LoginCard
                title="Teacher"
                icon={User}
                color="green"
                to="/login/teacher"
              />
              <LoginCard
                title="Student/Parent"
                icon={Users}
                color="orange"
                to="/login/student"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} SchoolSaaS Ecosystem. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
