'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Users, Hotel, ShoppingBag, BarChart3,
  Settings, User, Star, Globe, ChevronDown, LogOut, Bell, Menu, X
} from 'lucide-react';

const adminNav = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/admin/users', label: 'Manage Users', icon: Users },
  { href: '/dashboard/admin/trips', label: 'Manage Hotels', icon: Hotel },
  { href: '/dashboard/admin/bookings', label: 'Bookings', icon: ShoppingBag },
  { href: '/dashboard/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/dashboard/admin/settings', label: 'Settings', icon: Settings },
];

const userNav = [
  { href: '/dashboard/user/profile', label: 'My Profile', icon: User },
  { href: '/dashboard/user/bookings', label: 'My Bookings', icon: ShoppingBag },
  { href: '/dashboard/user/reviews', label: 'My Reviews', icon: Star },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const isAdmin = !pathname.startsWith('/dashboard/user');
  const nav = isAdmin ? adminNav : userNav;

  useEffect(() => {
    const h = (e: MouseEvent) => { if (profileRef.current && !profileRef.current.contains(e.target as Node)) setProfileOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#051036] flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        {/* Logo */}
        <div className="h-16 flex items-center gap-3 px-6 border-b border-white/10">
          <div className="w-8 h-8 bg-[#3554D1] rounded-lg flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-black text-lg">tripbooking.ai</span>
          <button onClick={() => setSidebarOpen(false)} className="ml-auto lg:hidden text-white/60 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role Badge */}
        <div className="px-6 py-4">
          <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${isAdmin ? 'bg-[#3554D1]/20 text-[#3554D1]' : 'bg-emerald-500/20 text-emerald-400'}`}>
            {isAdmin ? '🔑 Admin Panel' : '👤 User Panel'}
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {nav.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${active ? 'bg-[#3554D1] text-white shadow-lg shadow-blue-500/20' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Switch Role */}
        <div className="p-4 border-t border-white/10 space-y-2">
          {isAdmin ? (
            <Link href="/dashboard/user/profile" className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white/50 hover:text-white hover:bg-white/5 text-xs font-bold transition-all">
              <User className="w-4 h-4" /> Switch to User View
            </Link>
          ) : (
            <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white/50 hover:text-white hover:bg-white/5 text-xs font-bold transition-all">
              <LayoutDashboard className="w-4 h-4" /> Switch to Admin View
            </Link>
          )}
          <Link href="/" className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white/50 hover:text-white hover:bg-white/5 text-xs font-bold transition-all">
            <Globe className="w-4 h-4" /> Back to Website
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30 shadow-sm">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Menu className="w-5 h-5 text-[#051036]" />
          </button>

          <div className="hidden lg:block">
            <p className="text-sm text-gray-400 font-medium">Welcome back, <span className="text-[#051036] font-bold">Admin User</span></p>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            {/* Notifications */}
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Profile Dropdown */}
            <div ref={profileRef} className="relative">
              <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl hover:bg-gray-100 transition-colors">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=60" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                <span className="text-sm font-bold text-[#051036] hidden sm:block">Admin User</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
              </button>
              {profileOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="font-bold text-[#051036] text-sm">Admin User</p>
                    <p className="text-xs text-gray-400">admin@example.com</p>
                  </div>
                  <Link href="/dashboard/user/profile" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#051036] hover:bg-gray-50 transition-colors font-medium">
                    <User className="w-4 h-4 text-gray-400" /> Profile
                  </Link>
                  <Link href="/dashboard/admin/settings" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#051036] hover:bg-gray-50 transition-colors font-medium">
                    <Settings className="w-4 h-4 text-gray-400" /> Settings
                  </Link>
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link href="/login" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors font-medium">
                      <LogOut className="w-4 h-4" /> Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
