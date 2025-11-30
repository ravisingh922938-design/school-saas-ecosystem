// src/pages/SmartDashboard.jsx
import React from 'react';
import { IndianRupee, Users, FileText, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SmartDashboard = () => {
    // Dummy Data for Chart
    const data = [
        { name: 'Jan', income: 4000, expense: 2400 },
        { name: 'Feb', income: 3000, expense: 1398 },
        { name: 'Mar', income: 2000, expense: 9800 },
        { name: 'Apr', income: 2780, expense: 3908 },
        { name: 'May', income: 1890, expense: 4800 },
        { name: 'Jun', income: 2390, expense: 3800 },
    ];

    return (
        <div>
            <h1 className="text-2xl font-normal text-gray-700 mb-6">Admin Dashboard</h1>

            {/* === TOP STATS CARDS ROW === */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Monthly Fees"
                    value="₹ 5,20,000"
                    color="bg-[#00c0ef]"
                    icon={<IndianRupee size={40} />}
                />
                <StatCard
                    title="Monthly Expenses"
                    value="₹ 45,000"
                    color="bg-[#dd4b39]"
                    icon={<FileText size={40} />}
                />
                <StatCard
                    title="Student Count"
                    value="850"
                    color="bg-[#00a65a]"
                    icon={<Users size={40} />}
                />
                <StatCard
                    title="Staff Count"
                    value="55"
                    color="bg-[#f39c12]"
                    icon={<Users size={40} />}
                />
            </div>

            {/* === CHARTS & NOTICE BOARD ROW === */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left: Bar Chart */}
                <div className="lg:col-span-2 bg-white rounded shadow-sm border-t-2 border-[#3c8dbc]">
                    <div className="p-4 border-b flex justify-between items-center">
                        <h3 className="text-lg font-normal text-gray-700">Fees Collection & Expenses</h3>
                    </div>
                    <div className="p-4 h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="income" fill="#00a65a" name="Income" />
                                <Bar dataKey="expense" fill="#dd4b39" name="Expense" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Right: Notice Board */}
                <div className="bg-white rounded shadow-sm border-t-2 border-[#f39c12]">
                    <div className="p-4 border-b flex justify-between items-center">
                        <h3 className="text-lg font-normal text-gray-700">Notice Board</h3>
                    </div>
                    <div className="p-0">
                        <NoticeItem date="30 Nov" title="Winter Vacation starts from 25th Dec." />
                        <NoticeItem date="28 Nov" title="Fees submission last date extended." />
                        <NoticeItem date="25 Nov" title="Sports Day photos uploaded." />
                        <NoticeItem date="22 Nov" title="Parent Teacher Meeting on Saturday." />
                        <NoticeItem date="20 Nov" title="New Library books available." />
                    </div>
                </div>

            </div>
        </div>
    );
};

// Helper Component: The Colored Info Box
const StatCard = ({ title, value, color, icon }) => (
    <div className={`${color} text-white rounded shadow relative overflow-hidden`}>
        <div className="p-4 z-10 relative">
            <h3 className="text-3xl font-bold mb-1">{value}</h3>
            <p className="text-sm font-medium uppercase opacity-90">{title}</p>
        </div>
        <div className="absolute top-4 right-4 opacity-30 hover:scale-110 transition-transform">
            {icon}
        </div>
        <div className="bg-black/10 px-4 py-1 text-xs text-center cursor-pointer hover:bg-black/20 transition flex justify-center items-center gap-1">
            More info <ArrowRight size={12} />
        </div>
    </div>
);

// Helper Component: Notice Item
const NoticeItem = ({ date, title }) => (
    <div className="p-4 border-b last:border-0 hover:bg-gray-50 cursor-pointer">
        <div className="text-xs text-[#3c8dbc] font-bold mb-1">{date}</div>
        <div className="text-sm text-gray-700">{title}</div>
    </div>
);

export default SmartDashboard;