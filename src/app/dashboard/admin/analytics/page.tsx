'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, ShoppingBag } from 'lucide-react';

const monthlyRevenue = [
  { month: 'Nov', revenue: 520000, bookings: 86 },
  { month: 'Dec', revenue: 680000, bookings: 112 },
  { month: 'Jan', revenue: 450000, bookings: 74 },
  { month: 'Feb', revenue: 740000, bookings: 123 },
  { month: 'Mar', revenue: 620000, bookings: 103 },
  { month: 'Apr', revenue: 840000, bookings: 140 },
];

const topHotels = [
  { name: 'Sayeman Beach Resort', bookings: 48, revenue: 288000, pct: 100 },
  { name: 'Ramada by Wyndham', bookings: 36, revenue: 216000, pct: 75 },
  { name: 'Grand Sultan Tea Resort', bookings: 28, revenue: 224000, pct: 58 },
  { name: 'Rose View Hotel', bookings: 22, revenue: 110000, pct: 46 },
  { name: 'Ocean Paradise Hotel', bookings: 18, revenue: 99000, pct: 38 },
];

const maxRevenue = Math.max(...monthlyRevenue.map(d => d.revenue));

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-black text-[#051036]">Analytics</h1>
        <p className="text-gray-500 text-sm mt-1">Performance overview for the last 6 months</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Revenue', value: 'BDT 38.5L', change: '+18%', icon: DollarSign, color: 'bg-emerald-500' },
          { label: 'Total Bookings', value: '638', change: '+12%', icon: ShoppingBag, color: 'bg-blue-500' },
          { label: 'New Users', value: '1,240', change: '+24%', icon: Users, color: 'bg-purple-500' },
          { label: 'Avg Booking Value', value: 'BDT 6,034', change: '+5%', icon: TrendingUp, color: 'bg-amber-500' },
        ].map((kpi, i) => (
          <motion.div key={kpi.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className={`w-10 h-10 rounded-xl ${kpi.color} flex items-center justify-center mb-3`}>
              <kpi.icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{kpi.label}</p>
            <p className="text-xl font-black text-[#051036] mt-1">{kpi.value}</p>
            <p className="text-xs font-bold text-emerald-600 mt-1">{kpi.change} vs last period</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Revenue Bar Chart */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-black text-[#051036]">Monthly Revenue</h3>
            <span className="text-xs text-gray-400 font-medium">Last 6 months</span>
          </div>
          <div className="flex items-end gap-3 h-48">
            {monthlyRevenue.map((d, i) => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-gray-400">
                  {(d.revenue / 1000).toFixed(0)}K
                </span>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(d.revenue / maxRevenue) * 100}%` }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`w-full rounded-t-xl ${i === monthlyRevenue.length - 1 ? 'bg-[#3554D1]' : 'bg-blue-100 hover:bg-blue-200'} transition-colors cursor-pointer`}
                  style={{ height: `${(d.revenue / maxRevenue) * 100}%` }}
                />
                <span className="text-[10px] font-bold text-gray-500">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bookings Line Chart (simplified) */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-black text-[#051036]">Monthly Bookings</h3>
            <span className="text-xs text-gray-400 font-medium">Last 6 months</span>
          </div>
          <div className="flex items-end gap-3 h-48">
            {monthlyRevenue.map((d, i) => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-gray-400">{d.bookings}</span>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(d.bookings / 140) * 100}%` }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`w-full rounded-t-xl ${i === monthlyRevenue.length - 1 ? 'bg-purple-500' : 'bg-purple-100 hover:bg-purple-200'} transition-colors cursor-pointer`}
                  style={{ height: `${(d.bookings / 140) * 100}%` }}
                />
                <span className="text-[10px] font-bold text-gray-500">{d.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Hotels */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h3 className="font-black text-[#051036]">Top Performing Hotels</h3>
        <div className="space-y-4">
          {topHotels.map((hotel, i) => (
            <div key={hotel.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-[#051036]">{hotel.name}</span>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>{hotel.bookings} bookings</span>
                  <span className="font-bold text-[#3554D1]">BDT {hotel.revenue.toLocaleString()}</span>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${hotel.pct}%` }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="h-full bg-[#3554D1] rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
