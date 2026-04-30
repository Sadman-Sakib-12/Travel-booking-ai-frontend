'use client';

import { motion } from 'framer-motion';
import { Users, ShoppingBag, DollarSign, TrendingUp, Hotel, Star } from 'lucide-react';

const stats = [
  { label: 'Total Users', value: '45,231', change: '+12%', icon: Users, color: 'bg-blue-500', light: 'bg-blue-50 text-blue-600' },
  { label: 'Total Bookings', value: '1,205', change: '+8%', icon: ShoppingBag, color: 'bg-purple-500', light: 'bg-purple-50 text-purple-600' },
  { label: 'Total Revenue', value: 'BDT 8.4M', change: '+18%', icon: DollarSign, color: 'bg-emerald-500', light: 'bg-emerald-50 text-emerald-600' },
  { label: 'Active Hotels', value: '86', change: '+3', icon: Hotel, color: 'bg-amber-500', light: 'bg-amber-50 text-amber-600' },
  { label: 'Avg Rating', value: '4.9/5', change: '+0.1', icon: Star, color: 'bg-pink-500', light: 'bg-pink-50 text-pink-600' },
  { label: 'Growth Rate', value: '+12.5%', change: 'This month', icon: TrendingUp, color: 'bg-indigo-500', light: 'bg-indigo-50 text-indigo-600' },
];

const recentBookings = [
  { id: '#BK-9021', user: 'Sarah Johnson', hotel: "Sayeman Beach Resort", amount: 'BDT 12,000', status: 'Confirmed', date: 'Apr 28, 2026' },
  { id: '#BK-9022', user: 'Michael Chen', hotel: 'Ramada by Wyndham', amount: 'BDT 18,000', status: 'Pending', date: 'Apr 27, 2026' },
  { id: '#BK-9023', user: 'Emma Williams', hotel: 'Grand Sultan Tea Resort', amount: 'BDT 8,000', status: 'Cancelled', date: 'Apr 26, 2026' },
  { id: '#BK-9024', user: 'James Smith', hotel: 'Rose View Hotel', amount: 'BDT 10,000', status: 'Confirmed', date: 'Apr 25, 2026' },
  { id: '#BK-9025', user: 'Priya Sharma', hotel: 'Ocean Paradise Hotel', amount: 'BDT 11,000', status: 'Confirmed', date: 'Apr 24, 2026' },
];

const statusStyle: Record<string, string> = {
  Confirmed: 'bg-green-100 text-green-700',
  Pending: 'bg-amber-100 text-amber-700',
  Cancelled: 'bg-red-100 text-red-700',
};

// Simple bar chart using divs
const chartData = [
  { month: 'Nov', value: 65 }, { month: 'Dec', value: 80 }, { month: 'Jan', value: 55 },
  { month: 'Feb', value: 90 }, { month: 'Mar', value: 75 }, { month: 'Apr', value: 100 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8 max-w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#051036]">Dashboard Overview</h1>
          <p className="text-gray-500 text-sm mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <button className="bg-[#3554D1] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#2a43b0] transition-all w-fit">
          Download Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.07 }}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
              <stat.icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{stat.label}</p>
            <p className="text-xl font-black text-[#051036] mt-1">{stat.value}</p>
            <p className={`text-xs font-bold mt-1 px-2 py-0.5 rounded-full w-fit ${stat.light}`}>{stat.change}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Bookings Table */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-black text-[#051036]">Recent Bookings</h3>
            <button className="text-[#3554D1] font-bold text-sm hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-[10px] uppercase font-black text-gray-400 tracking-widest">
                  <th className="px-5 py-3">ID</th>
                  <th className="px-5 py-3">User</th>
                  <th className="px-5 py-3">Hotel</th>
                  <th className="px-5 py-3">Amount</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentBookings.map((b, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 text-xs font-bold text-[#051036]">{b.id}</td>
                    <td className="px-5 py-3.5 text-sm font-medium text-[#051036]">{b.user}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-500 max-w-[140px] truncate">{b.hotel}</td>
                    <td className="px-5 py-3.5 text-sm font-black text-[#3554D1]">{b.amount}</td>
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${statusStyle[b.status]}`}>{b.status}</span>
                    </td>
                    <td className="px-5 py-3.5 text-xs text-gray-400">{b.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-black text-[#051036]">Monthly Revenue</h3>
            <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-full">+18%</span>
          </div>
          <p className="text-2xl font-black text-[#051036]">BDT 8.4M</p>
          <p className="text-xs text-gray-400">Last 6 months</p>
          {/* Bar Chart */}
          <div className="flex items-end gap-2 h-32 pt-4">
            {chartData.map((d, i) => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${d.value}%` }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`w-full rounded-t-lg ${i === chartData.length - 1 ? 'bg-[#3554D1]' : 'bg-blue-100'}`}
                  style={{ height: `${d.value}%` }}
                />
                <span className="text-[10px] text-gray-400 font-bold">{d.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
