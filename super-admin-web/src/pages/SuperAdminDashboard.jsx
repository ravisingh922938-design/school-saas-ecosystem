import React from 'react';
import { Wallet, Building, Users, AlertCircle, Clock, ArrowUpRight } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color, isBold = false }) => {
  const colorClasses = {
    green: 'bg-green-50 text-green-700',
    blue: 'bg-blue-50 text-blue-700',
    indigo: 'bg-indigo-50 text-indigo-700',
    red: 'bg-red-50 text-red-700',
  };

  const iconClasses = {
    green: 'text-green-500 bg-green-100',
    blue: 'text-blue-500 bg-blue-100',
    indigo: 'text-indigo-500 bg-indigo-100',
    red: 'text-red-500 bg-red-100',
  };

  return (
    <div className={`p-6 rounded-xl ${colorClasses[color]} shadow-sm`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className={`mt-1 text-2xl ${isBold ? 'font-bold' : 'font-semibold'}`}>
            {value}
          </p>
        </div>
        <div className={`p-3 rounded-lg ${iconClasses[color]}`}>
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
};

const RecentActivity = () => {
  // Mock data for recent activity
  const activities = [
    { id: 1, school: 'Delhi Public School', action: 'Joined', time: '2 hours ago', status: 'success' },
    { id: 2, school: 'St. Mary\'s Convent', action: 'Paid Fee', time: '5 hours ago', status: 'success' },
    { id: 3, school: 'Modern Public School', action: 'Subscription Expired', time: '1 day ago', status: 'warning' },
    { id: 4, school: 'Kendriya Vidyalaya', action: 'Plan Upgraded', time: '2 days ago', status: 'info' },
    { id: 5, school: 'D.A.V. Public School', action: 'Joined', time: '3 days ago', status: 'success' },
  ];

  const statusColors = {
    success: 'text-green-600 bg-green-50',
    warning: 'text-yellow-600 bg-yellow-50',
    info: 'text-blue-600 bg-blue-50',
  };

  return (
    <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                School Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">View</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {activities.map((activity) => (
              <tr key={activity.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{activity.school}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[activity.status] || 'bg-gray-100 text-gray-800'}`}>
                    {activity.action}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="mr-1.5 h-4 w-4 text-gray-400" />
                    {activity.time}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900 flex items-center">
                    View <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SuperAdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome back! Here's what's happening with your schools.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="₹45L" 
          icon={Wallet} 
          color="green" 
        />
        <StatCard 
          title="Total Schools" 
          value="124" 
          icon={Building} 
          color="blue" 
        />
        <StatCard 
          title="Total Students" 
          value="15,400" 
          icon={Users} 
          color="indigo" 
          isBold={true}
        />
        <StatCard 
          title="Pending Dues" 
          value="₹2.3L" 
          icon={AlertCircle} 
          color="red" 
        />
      </div>

      {/* Recent Activity */}
      <RecentActivity />
    </div>
  );
};

export default SuperAdminDashboard;
