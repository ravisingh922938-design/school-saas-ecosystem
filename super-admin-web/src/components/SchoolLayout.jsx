// src/components/SchoolLayout.jsx
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
    Menu, Bell, Search, User, LayoutDashboard, UserPlus, Users,
    IndianRupee, BookOpen, ShoppingBag, LogOut, ChevronDown
} from 'lucide-react';

const SchoolLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();

    return (
        <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">

            {/* === SIDEBAR (Dark Theme for School Admin) === */}
            <aside
                className={`${isSidebarOpen ? 'w-[260px]' : 'w-0'} 
        bg-[#1a2226] text-[#b8c7ce] transition-all duration-300 flex-shrink-0 flex flex-col h-full`}
            >
                <div className="h-[50px] min-h-[50px] bg-[#00a65a] flex items-center justify-center text-white font-bold text-xl tracking-wider shadow-md whitespace-nowrap overflow-hidden">
                    SCHOOL ADMIN
                </div>

                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                    <div className="p-4 flex items-center gap-3 border-b border-[#1a2226] whitespace-nowrap">
                        <div className="w-10 h-10 min-w-[2.5rem] rounded-full bg-gray-500 flex items-center justify-center text-white">
                            <User size={20} />
                        </div>
                        <div className={`${!isSidebarOpen && 'hidden'}`}>
                            <p className="text-white text-sm font-semibold">Principal</p>
                            <div className="flex items-center gap-1 text-xs text-green-400">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Online
                            </div>
                        </div>
                    </div>

                    <nav className="mt-4 pb-10">
                        <p className={`px-4 text-xs uppercase text-[#4b646f] mb-2 font-bold ${!isSidebarOpen && 'hidden'}`}>Main Menu</p>

                        <MenuItem icon={<LayoutDashboard size={18} />} text="Dashboard" onClick={() => navigate('/school-admin')} active />
                        <MenuItem icon={<UserPlus size={18} />} text="Front Office" isOpen={isSidebarOpen} />
                        <MenuItem icon={<Users size={18} />} text="Student Info" isOpen={isSidebarOpen} />
                        <MenuItem icon={<IndianRupee size={18} />} text="Fees Collection" isOpen={isSidebarOpen} />
                        <MenuItem icon={<BookOpen size={18} />} text="Academics" isOpen={isSidebarOpen} />
                        <MenuItem icon={<ShoppingBag size={18} />} text="School Mart" onClick={() => navigate('/school-admin/store')} isOpen={isSidebarOpen} />
                        <MenuItem icon={<LogOut size={18} />} text="Logout" onClick={() => navigate('/')} isOpen={isSidebarOpen} />
                    </nav>
                </div>
            </aside>

            {/* === MAIN CONTENT === */}
            <div className="flex-1 flex flex-col min-w-0 h-full">
                <header className="h-[50px] min-h-[50px] bg-[#00a65a] text-white flex justify-between items-center px-4 shadow-sm z-10">
                    <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="hover:bg-[#008d4c] p-2 rounded focus:outline-none">
                        <Menu size={20} />
                    </button>
                    <div className="flex items-center gap-4">
                        <span className="font-bold">Galaxy Public School</span>
                        <Bell size={20} />
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto bg-[#ecf0f5] p-4 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

const MenuItem = ({ icon, text, active, isOpen, onClick }) => (
    <div onClick={onClick} className={`flex items-center justify-between px-4 py-3 cursor-pointer border-l-4 transition-colors whitespace-nowrap overflow-hidden
    ${active ? 'bg-[#1e282c] border-[#00a65a] text-white' : 'border-transparent hover:bg-[#1e282c] hover:text-white'}`}>
        <div className="flex items-center gap-3">
            <div className="min-w-[18px]">{icon}</div>
            <span className={`text-sm font-medium transition-opacity duration-200 ${!isOpen ? 'opacity-0 w-0' : 'opacity-100'}`}>
                {text}
            </span>
        </div>
        {isOpen && <ChevronDown size={14} className="opacity-50" />}
    </div>
);

export default SchoolLayout;