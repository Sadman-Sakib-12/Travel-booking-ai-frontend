'use client';

import { motion } from 'framer-motion';
import { Briefcase, BarChart3, Map, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const stats = [
  { label: 'Assigned Trips', value: '24', icon: <Map />, color: 'bg-blue-500' },
  { label: 'Active Bookings', value: '156', icon: <Briefcase />, color: 'bg-emerald-500' },
  { label: 'Pending Approvals', value: '12', icon: <Clock />, color: 'bg-amber-500' },
  { label: 'Issues Reported', value: '2', icon: <AlertCircle />, color: 'bg-rose-500' },
];

export default function ManagerOverview() {
  return (
    <div className="p-8 space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-[#051036]">Manager Overview</h1>
          <p className="text-gray-500 font-medium">Tracking and managing your assigned destinations.</p>
        </div>
        <button className="bg-[#3554D1] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#2843B2] shadow-xl shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-2">
          <BarChart3 className="w-4 h-4" /> Generate Report
        </button>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-50 flex items-center gap-6 group hover:border-blue-500/20 transition-all"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${stat.color} group-hover:scale-110 transition-transform`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-[#051036]">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Tasks & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 space-y-6">
          <h3 className="text-xl font-black text-[#051036]">Priority Tasks</h3>
          <div className="space-y-4">
            {[
              "Review Cox's Bazar 3-Day Package",
              "Approve Refund Request #REF-9021",
              "Update Seasonal Pricing for Sylhet Villa",
              "Sync with local guides in Bandarban"
            ].map((task, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-blue-500/10 transition-all cursor-pointer group">
                <div className="w-6 h-6 rounded-full border-2 border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500 transition-all">
                  <CheckCircle className="w-4 h-4 text-white opacity-0 group-hover:opacity-100" />
                </div>
                <span className="text-sm font-bold text-[#051036]">{task}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-[#3554D1]">
            <BarChart3 className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-black text-[#051036]">Sales Analytics</h3>
          <p className="text-gray-400 text-sm px-10">Monthly sales data for your managed trips will appear here.</p>
          <div className="w-full h-40 bg-gray-50 rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
