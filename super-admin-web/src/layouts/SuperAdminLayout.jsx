import React from 'react';
import { Outlet } from 'react-router-dom';

const SuperAdminLayout = () => {
    return (
        <div className="flex h-screen">
            <div className="w-64 bg-gray-900 text-white p-5">
                <h2 className="text-xl font-bold">Super Admin</h2>
            </div>
            <div className="flex-1 p-10 bg-gray-100">
                <Outlet />
            </div>
        </div>
    );
};

export default SuperAdminLayout;