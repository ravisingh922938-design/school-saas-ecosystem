import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Building, 
  DollarSign, 
  Settings, 
  Bell, 
  ChevronLeft, 
  Menu, 
  X 
} from 'lucide-react';

const SuperAdminLayout = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { 
      name: 'Dashboard', 
      icon: Home, 
      path: '/admin/dashboard',
      activePaths: ['/admin', '/admin/dashboard']
    },
    { 
      name: 'Manage Tenants', 
      icon: Building, 
      path: '/admin/tenants',
      activePaths: ['/admin/tenants']
    },
    { 
      name: 'Finance', 
      icon: DollarSign, 
      path: '/admin/finance',
      activePaths: ['/admin/finance']
    },
    { 
      name: 'Settings', 
      icon: Settings, 
      path: '/admin/settings',
      activePaths: ['/admin/settings']
    },
  ];

  const isActive = (paths) => paths.includes(location.pathname);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile menu button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div 
        className={`
          fixed inset-y-0 left-0 z-40 w-64 transform 
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:relative md:translate-x-0 transition-transform duration-200 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          bg-slate-900 text-white
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-slate-800">
            <div className="flex items-center">
              <span className="text-xl font-bold">SaaS Admin</span>
            </div>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden md:block text-slate-400 hover:text-white"
            >
              <ChevronLeft className={`transition-transform ${!sidebarOpen && 'rotate-180'}`} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const isItemActive = isActive(item.activePaths);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    flex items-center px-4 py-3 text-sm font-medium rounded-md
                    ${isItemActive 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden md:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex-1">
              {/* Placeholder for page title or breadcrumbs */}
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                <span className="sr-only">View notifications</span>
                <div className="relative">
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </div>
              </button>
              
              <div className="flex items-center">
                <div className="ml-3 relative">
                  <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1.5">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                      SA
                    </div>
                    <span className="text-sm font-medium text-gray-700">Super Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
