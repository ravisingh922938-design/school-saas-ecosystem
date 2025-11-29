import React, { useState } from 'react';
import { useTerminology } from '../context/TerminologyContext';
import { 
  LayoutDashboard, 
  UserPlus, 
  Users, 
  BookOpen, 
  IndianRupee, 
  Bus, 
  BarChart, 
  Settings, 
  Bell, 
  LogOut,
  Menu,
  X,
  ChevronDown,
  Home
} from 'lucide-react';
import { cn } from '../lib/utils';

const SchoolLayout = ({ children, activeRoute = 'dashboard' }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { terms } = useTerminology();

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'admission', icon: UserPlus, label: 'Admission' },
    { id: 'students', icon: Users, label: `Manage ${terms.student}s` },
    { id: 'academics', icon: BookOpen, label: `${terms.class} & Content` },
    { id: 'finance', icon: IndianRupee, label: 'Finance' },
    { id: 'transport', icon: Bus, label: 'Transport' },
    { id: 'reports', icon: BarChart, label: 'Reports' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const getBreadcrumb = () => {
    const item = menuItems.find(item => item.id === activeRoute);
    return item ? item.label : 'Dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-gray-900 bg-opacity-50 z-20 lg:hidden',
          sidebarOpen ? 'block' : 'hidden'
        )}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-30 w-64 transform bg-indigo-800 text-white transition-transform duration-300 ease-in-out',
          'lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-indigo-700">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-indigo-200" />
            <span className="text-xl font-bold text-white">EduManager</span>
          </div>
          <button
            className="lg:hidden p-2 rounded-md text-indigo-200 hover:bg-indigo-700"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-6 px-2 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors',
                activeRoute === item.id
                  ? 'bg-indigo-900 text-white'
                  : 'text-indigo-100 hover:bg-indigo-700 hover:bg-opacity-75'
              )}
            >
              <item.icon className="mr-3 h-5 w-5 text-indigo-300" />
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <button
                type="button"
                className="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              
              <div className="flex items-center ml-2 text-sm text-gray-600">
                <Home className="h-4 w-4 mr-2" />
                <span className="text-gray-500">/</span>
                <span className="ml-2 font-medium text-gray-900">{getBreadcrumb()}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-red-500 rounded-full" />
              </button>

              <div className="relative">
                <button 
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={() => setProfileOpen(!profileOpen)}
                >
                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                    U
                  </div>
                  <span className="hidden md:inline text-sm font-medium text-gray-700">Admin User</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                    <div className="border-t border-gray-100 my-1"></div>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SchoolLayout;
