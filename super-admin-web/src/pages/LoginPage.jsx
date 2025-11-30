import React from 'react';
import { User, Lock, BookOpen, HelpCircle, Globe, Users } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen w-full font-sans">

      {/* ================= LEFT SIDE (Form Section) ================= */}
      <div className="w-full lg:w-[40%] bg-white flex flex-col justify-center px-12 lg:px-20 py-10 relative">

        {/* LOGO AREA */}
        <div className="mb-10 flex items-center gap-2">
          {/* Custom Logo Replica */}
          <div className="relative">
            <BookOpen className="w-10 h-10 text-orange-500 fill-orange-500" />
            <div className="absolute -bottom-1 -right-1 bg-green-600 w-4 h-4 rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">i</span>
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-bold text-gray-800 tracking-wide">SMART <span className="text-green-600">SCHOOL</span></span>
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-gray-700 text-lg mb-6 font-normal">Admin Login</h2>

        {/* LOGIN FORM */}
        <form className="space-y-5">

          {/* Username Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-500 text-gray-600 placeholder-gray-400"
            />
            <div className="absolute right-3 top-3 text-gray-400">
              <User size={20} />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-500 text-gray-600 placeholder-gray-400"
            />
            <div className="absolute right-3 top-3 text-gray-400">
              <Lock size={20} />
            </div>
          </div>

          {/* SIGN IN BUTTON */}
          <button className="w-full bg-[#40b65f] hover:bg-[#369b50] text-white py-3 rounded text-lg font-medium shadow-sm transition-colors">
            Sign In
          </button>

        </form>

        {/* ROLE BUTTONS GRID (Exact Colors) */}
        <div className="grid grid-cols-3 gap-2 mt-6">
          <button className="bg-[#0088cc] text-white py-2 px-2 text-sm rounded flex items-center justify-center gap-2 hover:opacity-90 transition">
            <User size={14} /> Super Admin
          </button>
          <button className="bg-[#17a2b8] text-white py-2 px-2 text-sm rounded flex items-center justify-center gap-2 hover:opacity-90 transition">
            <User size={14} /> Admin
          </button>
          <button className="bg-[#8f8f8f] text-white py-2 px-2 text-sm rounded flex items-center justify-center gap-2 hover:opacity-90 transition">
            <User size={14} /> Teacher
          </button>
          <button className="bg-[#8f8f8f] text-white py-2 px-2 text-sm rounded flex items-center justify-center gap-2 hover:opacity-90 transition">
            <User size={14} /> Accountant
          </button>
          <button className="bg-[#e83e8c] text-white py-2 px-2 text-sm rounded flex items-center justify-center gap-2 hover:opacity-90 transition">
            <User size={14} /> Receptionist
          </button>
          <button className="bg-[#40b65f] text-white py-2 px-2 text-sm rounded flex items-center justify-center gap-2 hover:opacity-90 transition">
            <User size={14} /> Librarian
          </button>
        </div>

        {/* DEMO NOTE */}
        <p className="mt-4 text-xs text-gray-500 italic">
          *Note: Select Class 1 and Section A for demo testing.
        </p>

        {/* FOOTER LINKS */}
        <div className="mt-8 flex justify-between items-center text-sm font-semibold text-gray-700">
          <a href="#" className="flex items-center gap-1 hover:text-green-600">
            <HelpCircle size={14} /> Forgot Password?
          </a>
          <div className="flex gap-6">
            <a href="#" className="flex items-center gap-1 hover:text-green-600">
              <Globe size={14} /> Front Site
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-green-600">
              <Users size={14} /> User Login
            </a>
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE (Image & Content) ================= */}
      <div className="hidden lg:flex lg:w-[60%] bg-gray-900 relative items-center justify-center overflow-hidden">

        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>

        {/* Content Box */}
        <div className="relative z-10 w-[80%] max-w-2xl text-white">
          <h2 className="text-3xl font-bold mb-8 drop-shadow-md">What's New In Mount Carmel School</h2>

          {/* News Container with Translucent Black Background */}
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border-l-4 border-green-500 relative shadow-2xl">

            {/* Scroll Indicator (Simulated) */}
            <div className="absolute right-2 top-2 bottom-2 w-1 bg-gray-700 rounded-full">
              <div className="w-full h-1/3 bg-green-500 rounded-full"></div>
            </div>

            <div className="space-y-8 pr-6">

              {/* Item 1 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">The Opening Ceremony of Computer Science Month</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Computer science is a rapidly growing field that...
                </p>
                <a href="#" className="text-green-400 text-sm hover:underline">Read More</a>
                <hr className="border-gray-600 mt-4 opacity-50" />
              </div>

              {/* Item 2 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Children's Day Program by teachers</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Teachers can celebrate Children's Day with a...
                </p>
                <a href="#" className="text-green-400 text-sm hover:underline">Read More</a>
                <hr className="border-gray-600 mt-4 opacity-50" />
              </div>

              {/* Item 3 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Webinar for the Students of Class IX to XII on Career information.</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Dear Parents/Guardians and Student, The...
                </p>
                <a href="#" className="text-green-400 text-sm hover:underline">Read More</a>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;