'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, User, Phone, Globe } from 'lucide-react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k: string, v: string) => { setForm(p => ({ ...p, [k]: v })); setErrors(p => ({ ...p, [k]: '' })); };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.phone) e.phone = 'Phone number is required';
    if (!form.password) e.password = 'Password is required';
    else if (form.password.length < 6) e.password = 'Minimum 6 characters';
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match';
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

  const Field = ({ label, name, type = 'text', placeholder, icon: Icon, extra }: any) => (
    <div className="space-y-1.5">
      <label className="text-sm font-bold text-[#051036]">{label}</label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type={name === 'password' || name === 'confirm' ? (showPass ? 'text' : 'password') : type}
          value={form[name as keyof typeof form]}
          onChange={e => set(name, e.target.value)}
          placeholder={placeholder}
          className={`w-full pl-11 pr-4 py-3.5 border rounded-xl text-sm font-medium outline-none transition-all ${errors[name] ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#3554D1]'}`}
        />
        {extra}
      </div>
      {errors[name] && <p className="text-red-500 text-xs font-medium">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#051036] relative overflow-hidden flex-col items-center justify-center p-16 text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3554D1]/20 rounded-full -translate-x-1/2 translate-y-1/2" />
        <div className="relative z-10 text-center space-y-6 max-w-md">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#3554D1] rounded-2xl flex items-center justify-center">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-black">tripbooking.ai</span>
          </div>
          <h2 className="text-4xl font-black leading-tight">Join Thousands of Travelers</h2>
          <p className="text-white/70 text-lg">Create your free account and start exploring the world with exclusive deals.</p>
          <div className="space-y-3 pt-4 text-left">
            {['Free account — no credit card required', 'Access exclusive member-only deals', 'Manage all bookings in one place', 'AI-powered travel recommendations'].map(f => (
              <div key={f} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#3554D1] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-white/80 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md space-y-6"
        >
          <div className="lg:hidden flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-[#3554D1] rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black text-[#3554D1]">tripbooking.ai</span>
          </div>

          <div>
            <h1 className="text-3xl font-black text-[#051036]">Create Account</h1>
            <p className="text-gray-500 mt-1">Join us and start your travel journey today</p>
          </div>

          {success ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="font-black text-green-700 text-xl">Account Created!</p>
              <p className="text-green-600 text-sm">Welcome to TripBooking AI. Redirecting to login...</p>
              <Link href="/login" className="inline-block mt-2 bg-[#3554D1] text-white px-8 py-3 rounded-xl font-bold text-sm">Go to Login</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Field label="Full Name" name="name" placeholder="John Doe" icon={User} />
              <Field label="Email Address" name="email" type="email" placeholder="hello@example.com" icon={Mail} />
              <Field label="Phone Number" name="phone" type="tel" placeholder="+880 1XXX-XXXXXX" icon={Phone} />
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#051036]">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={form.password}
                    onChange={e => set('password', e.target.value)}
                    placeholder="Min. 6 characters"
                    className={`w-full pl-11 pr-12 py-3.5 border rounded-xl text-sm font-medium outline-none transition-all ${errors.password ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#3554D1]'}`}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#3554D1]">
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs font-medium">{errors.password}</p>}
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#051036]">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={form.confirm}
                    onChange={e => set('confirm', e.target.value)}
                    placeholder="Re-enter password"
                    className={`w-full pl-11 pr-4 py-3.5 border rounded-xl text-sm font-medium outline-none transition-all ${errors.confirm ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#3554D1]'}`}
                  />
                </div>
                {errors.confirm && <p className="text-red-500 text-xs font-medium">{errors.confirm}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#3554D1] text-white py-4 rounded-xl font-bold hover:bg-[#2a43b0] transition-all shadow-lg shadow-blue-500/20 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Creating Account...</>
                ) : 'Create Free Account'}
              </button>
            </form>
          )}

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
            <div className="relative flex justify-center"><span className="bg-gray-50 px-4 text-xs text-gray-400 font-bold uppercase tracking-widest">Or sign up with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-semibold text-sm text-[#051036]">
              <FaGoogle className="w-4 h-4 text-red-500" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-semibold text-sm text-[#051036]">
              <FaFacebook className="w-4 h-4 text-blue-600" /> Facebook
            </button>
          </div>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/login" className="text-[#3554D1] font-bold hover:underline">Sign In</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
