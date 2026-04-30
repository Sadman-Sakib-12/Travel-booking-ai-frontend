'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, Globe } from 'lucide-react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const fillDemo = (type: 'user' | 'admin') => {
    setEmail(type === 'admin' ? 'admin@example.com' : 'user@example.com');
    setPassword('123456');
    setErrors({});
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!email) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'Enter a valid email';
    if (!password) e.password = 'Password is required';
    else if (password.length < 6) e.password = 'Minimum 6 characters';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#3554D1] relative overflow-hidden flex-col items-center justify-center p-16 text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />
        <div className="relative z-10 text-center space-y-6 max-w-md">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-black">tripbooking.ai</span>
          </div>
          <h2 className="text-4xl font-black leading-tight">Your Journey Starts Here</h2>
          <p className="text-white/75 text-lg">Sign in to access your bookings, manage trips, and explore exclusive deals.</p>
          <div className="grid grid-cols-3 gap-4 pt-6">
            {[['150K+', 'Users'], ['1.2K+', 'Destinations'], ['4.9/5', 'Rating']].map(([v, l]) => (
              <div key={l} className="bg-white/10 rounded-2xl p-4 text-center">
                <p className="text-2xl font-black">{v}</p>
                <p className="text-white/60 text-xs mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="lg:hidden flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#3554D1] rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black text-[#3554D1]">tripbooking.ai</span>
          </div>

          <div>
            <h1 className="text-3xl font-black text-[#051036]">Welcome Back</h1>
            <p className="text-gray-500 mt-1">Sign in to your account to continue</p>
          </div>

          {success ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-2">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="font-bold text-green-700 text-lg">Login Successful!</p>
              <p className="text-green-600 text-sm">Redirecting to your dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#051036]">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: '' })); }}
                    placeholder="hello@example.com"
                    className={`w-full pl-11 pr-4 py-3.5 border rounded-xl text-sm font-medium outline-none transition-all ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#3554D1]'}`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email}</p>}
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <label className="text-sm font-bold text-[#051036]">Password</label>
                  <Link href="#" className="text-xs text-[#3554D1] font-bold hover:underline">Forgot Password?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={e => { setPassword(e.target.value); setErrors(p => ({ ...p, password: '' })); }}
                    placeholder="••••••••"
                    className={`w-full pl-11 pr-12 py-3.5 border rounded-xl text-sm font-medium outline-none transition-all ${errors.password ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#3554D1]'}`}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#3554D1]">
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs font-medium">{errors.password}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#3554D1] text-white py-4 rounded-xl font-bold hover:bg-[#2a43b0] transition-all shadow-lg shadow-blue-500/20 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Signing in...</>
                ) : 'Sign In to Account'}
              </button>
            </form>
          )}

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
            <div className="relative flex justify-center"><span className="bg-gray-50 px-4 text-xs text-gray-400 font-bold uppercase tracking-widest">Or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-semibold text-sm text-[#051036]">
              <FaGoogle className="w-4 h-4 text-red-500" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-semibold text-sm text-[#051036]">
              <FaFacebook className="w-4 h-4 text-blue-600" /> Facebook
            </button>
          </div>

          {/* Demo Credentials */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 space-y-3">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest text-center">Demo Credentials</p>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => fillDemo('user')} className="py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-[#051036] hover:border-[#3554D1] hover:text-[#3554D1] transition-all">
                👤 User Demo
              </button>
              <button onClick={() => fillDemo('admin')} className="py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-[#051036] hover:border-[#3554D1] hover:text-[#3554D1] transition-all">
                🔑 Admin Demo
              </button>
            </div>
            <div className="text-xs text-gray-400 text-center space-y-0.5">
              <p>User: user@example.com / 123456</p>
              <p>Admin: admin@example.com / 123456</p>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link href="/register" className="text-[#3554D1] font-bold hover:underline">Register Now</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
