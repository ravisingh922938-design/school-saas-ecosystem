import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulation of login logic
    setTimeout(() => {
      setLoading(false);
      // Logic to check role and redirect
      // For demo purposes, redirecting to Dashboard
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex bg-gray-50">

      {/* Left Side - Form Section */}
      <div className="w-full lg:w-[40%] bg-white flex flex-col justify-center py-10 pl-10 pr-10 lg:pl-36 lg:pr-20 relative shadow-xl z-10">

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="text-xl font-bold text-gray-800">SchoolSaaS</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
          <p className="text-gray-500">Please enter your details to sign in.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="admin@school.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700">Forgot Password?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition flex items-center justify-center gap-2"
          >
            {loading ? "Signing in..." : "Sign in"}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account? <a href="#" className="text-indigo-600 font-medium hover:underline">Contact Support</a>
        </p>
      </div>

      {/* Right Side - Image/Pattern */}
      <div className="hidden lg:flex w-[60%] bg-indigo-50 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/10"></div>
        <div className="text-center p-10 z-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Manage your Institution Smartly</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            The complete ecosystem for Schools, Coachings, Teachers, and Students.
          </p>
        </div>
      </div>

    </div>
  );
}; // <--- YAHAN FUNCTION CLOSE HONA ZARURI HAI

export default Login;