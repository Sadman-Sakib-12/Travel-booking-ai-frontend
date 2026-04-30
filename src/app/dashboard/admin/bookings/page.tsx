'use client';

import { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const bookings = [
  { id: '#BK-9021', user: 'Sarah Johnson', hotel: 'Sayeman Beach Resort', checkIn: 'Apr 30, 2026', checkOut: 'May 02, 2026', amount: 'BDT 12,000', status: 'Confirmed', rooms: 1 },
  { id: '#BK-9022', user: 'Michael Chen', hotel: 'Ramada by Wyndham', checkIn: 'May 05, 2026', checkOut: 'May 08, 2026', amount: 'BDT 18,000', status: 'Pending', rooms: 1 },
  { id: '#BK-9023', user: 'Emma Williams', hotel: 'Grand Sultan Tea Resort', checkIn: 'May 10, 2026', checkOut: 'May 12, 2026', amount: 'BDT 16,000', status: 'Cancelled', rooms: 1 },
  { id: '#BK-9024', user: 'James Smith', hotel: 'Rose View Hotel', checkIn: 'May 15, 2026', checkOut: 'May 17, 2026', amount: 'BDT 10,000', status: 'Confirmed', rooms: 2 },
  { id: '#BK-9025', user: 'Priya Sharma', hotel: 'Ocean Paradise Hotel', checkIn: 'May 20, 2026', checkOut: 'May 22, 2026', amount: 'BDT 11,000', status: 'Confirmed', rooms: 1 },
  { id: '#BK-9026', user: 'Rafiq Ahmed', hotel: 'Sea Pearl Beach Resort', checkIn: 'Jun 01, 2026', checkOut: 'Jun 05, 2026', amount: 'BDT 28,800', status: 'Pending', rooms: 1 },
];

const statusStyle: Record<string, string> = {
  Confirmed: 'bg-green-100 text-green-700',
  Pending: 'bg-amber-100 text-amber-700',
  Cancelled: 'bg-red-100 text-red-700',
};

export default function BookingsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = bookings.filter(b => {
    if (search && !b.user.toLowerCase().includes(search.toLowerCase()) && !b.id.toLowerCase().includes(search.toLowerCase())) return false;
    if (statusFilter !== 'All' && b.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-[#051036]">Manage Bookings</h1>
        <p className="text-gray-500 text-sm mt-1">{bookings.length} total bookings</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Confirmed', count: bookings.filter(b => b.status === 'Confirmed').length, color: 'bg-green-50 border-green-200 text-green-700' },
          { label: 'Pending', count: bookings.filter(b => b.status === 'Pending').length, color: 'bg-amber-50 border-amber-200 text-amber-700' },
          { label: 'Cancelled', count: bookings.filter(b => b.status === 'Cancelled').length, color: 'bg-red-50 border-red-200 text-red-700' },
        ].map(s => (
          <div key={s.label} className={`rounded-2xl border p-4 text-center ${s.color}`}>
            <p className="text-2xl font-black">{s.count}</p>
            <p className="text-xs font-bold uppercase tracking-wider mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by user or booking ID..." className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#3554D1]" />
        </div>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-[#051036] outline-none focus:border-[#3554D1]">
          {['All', 'Confirmed', 'Pending', 'Cancelled'].map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-[10px] uppercase font-black text-gray-400 tracking-widest">
                <th className="px-5 py-3">Booking ID</th>
                <th className="px-5 py-3">Guest</th>
                <th className="px-5 py-3">Hotel</th>
                <th className="px-5 py-3">Check In</th>
                <th className="px-5 py-3">Check Out</th>
                <th className="px-5 py-3">Amount</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((b, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3.5 text-xs font-black text-[#051036]">{b.id}</td>
                  <td className="px-5 py-3.5 text-sm font-medium text-[#051036]">{b.user}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-500 max-w-[140px] truncate">{b.hotel}</td>
                  <td className="px-5 py-3.5 text-xs text-gray-500">{b.checkIn}</td>
                  <td className="px-5 py-3.5 text-xs text-gray-500">{b.checkOut}</td>
                  <td className="px-5 py-3.5 text-sm font-black text-[#3554D1]">{b.amount}</td>
                  <td className="px-5 py-3.5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${statusStyle[b.status]}`}>{b.status}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <button className="p-1.5 rounded-lg hover:bg-blue-50 hover:text-[#3554D1] transition-colors text-gray-400">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-400">Showing {filtered.length} of {bookings.length} bookings</p>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center disabled:opacity-40" disabled><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-lg bg-[#3554D1] text-white text-sm font-bold">1</button>
            <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
