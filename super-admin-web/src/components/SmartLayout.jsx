import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
    Menu, Bell, Search, User, LayoutDashboard, Users,
    BookOpen, IndianRupee, FileText, Settings, ChevronDown
} from 'lucide-react';

const SmartLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">

            {/* === SIDEBAR (Fixed Width on Desktop) === */}
            {/* Humne 'fixed' hata diya hai aur ise flex container ka hissa bana diya hai */}
            <aside
                className={`${isSidebarOpen ? 'w-[260px]' : 'w-0'} 
        bg-[#222d32] text-[#b8c7ce] transition-all duration-300 flex-shrink-0 flex flex-col h-full`}
            >
                {/* Logo Area */}
                <div className="h-[50px] min-h-[50px] bg-[#367fa9] flex items-center justify-center text-white font-bold text-xl tracking-wider shadow-md overflow-hidden whitespace-nowrap">
                    SMART SCHOOL
                </div>

                {/* Scrollable Menu Area */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                    {/* User Profile Mini */}
                    <div className="p-4 flex items-center gap-3 border-b border-[#1a2226] whitespace-nowrap">
                        <div className="w-10 h-10 min-w-[2.5rem] rounded-full bg-gray-500 flex items-center justify-center text-white">
                            <User size={20} />
                        </div>
                        <div className={`${!isSidebarOpen && 'hidden'}`}>
                            <p className="text-white text-sm font-semibold">Super Admin</p>
                            <div className="flex items-center gap-1 text-xs text-green-400">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Online
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <nav className="mt-4 pb-10">
                        <p className={`px-4 text-xs uppercase text-[#4b646f] mb-2 font-bold ${!isSidebarOpen && 'hidden'}`}>Main Navigation</p>

                        <MenuItem icon={<LayoutDashboard size={18} />} text="Dashboard" active isOpen={isSidebarOpen} />
                        <MenuItem icon={<Users size={18} />} text="Student Information" isOpen={isSidebarOpen} />
                        <MenuItem icon={<IndianRupee size={18} />} text="Fees Collection" isOpen={isSidebarOpen} />
                        <MenuItem icon={<FileText size={18} />} text="Income" isOpen={isSidebarOpen} />
                        <MenuItem icon={<FileText size={18} />} text="Expenses" isOpen={isSidebarOpen} />
                        <MenuItem icon={<BookOpen size={18} />} text="Academics" isOpen={isSidebarOpen} />
                        <MenuItem icon={<Users size={18} />} text="Human Resource" isOpen={isSidebarOpen} />
                        <MenuItem icon={<Bell size={18} />} text="Communicate" isOpen={isSidebarOpen} />
                        <MenuItem icon={<Settings size={18} />} text="System Settings" isOpen={isSidebarOpen} />
                    </nav>
                </div>
            </aside>

            {/* === MAIN CONTENT (Takes remaining space) === */}
            <div className="flex-1 flex flex-col min-w-0 h-full">

                {/* Top Header */}
                <header className="h-[50px] min-h-[50px] bg-[#3c8dbc] text-white flex justify-between items-center px-4 shadow-sm z-10">
                    <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="hover:bg-[#367fa9] p-2 rounded focus:outline-none">
                        <Menu size={20} />
                    </button>

                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="hidden md:flex items-center bg-[#367fa9] rounded px-3 py-1">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent border-none outline-none text-white placeholder-gray-300 text-sm w-40"
                            />
                            <Search size={16} />
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative cursor-pointer">
                                <Bell size={20} />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <User size={18} />
                                </div>
                                <span className="text-sm font-medium hidden md:block">Admin</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Scrollable Page Content */}
                <main className="flex-1 overflow-y-auto bg-[#ecf0f5] p-4 md:p-6">
                    <Outlet />
                </main>

                {/* Footer */}
                <footer className="bg-white p-4 text-sm text-gray-600 border-t flex justify-between shrink-0">
                    <span><strong>Copyright &copy; 2025 Smart School.</strong> All rights reserved.</span>
                    <span className="hidden md:inline"><b>Version</b> 1.0.0</span>
                </footer>
            </div>
        </div>
    );
};

// Helper Component for Menu Items
const MenuItem = ({ icon, text, active, isOpen }) => (
    <div className={`flex items-center justify-between px-4 py-3 cursor-pointer border-l-4 transition-colors whitespace-nowrap overflow-hidden
    ${active ? 'bg-[#1e282c] border-[#3c8dbc] text-white' : 'border-transparent hover:bg-[#1e282c] hover:text-white'}`}>
        <div className="flex items-center gap-3">
            <div className="min-w-[18px]">{icon}</div>
            <span className={`text-sm font-medium transition-opacity duration-200 ${!isOpen ? 'opacity-0 w-0' : 'opacity-100'}`}>
                {text}
            </span>
        </div>
        {isOpen && <ChevronDown size={14} className="opacity-50" />}
    </div>
);

export default SmartLayout;