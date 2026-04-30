'use client';

import { useState } from 'react';
import { Search, UserPlus, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

const users = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'User', bookings: 5, joined: 'Jan 2026', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=60', status: 'Active' },
  { id: 2, name: 'Michael Chen', email: 'michael@example.com', role: 'User', bookings: 12, joined: 'Feb 2026', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=60', status: 'Active' },
  { id: 3, name: 'Emma Williams', email: 'emma@example.com', role: 'Admin', bookings: 3, joined: 'Mar 2026', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=60', status: 'Active' },
  { id: 4, name: 'James Smith', email: 'james@example.com', role: 'User', bookings: 8, joined: 'Jan 2026', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=60', status: 'Inactive' },
  { id: 5, name: 'Priya Sharma', email: 'priya@example.com', role: 'Manager', bookings: 2, joined: 'Apr 2026', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=60', status: 'Active' },
  { id: 6, name: 'Rafiq Ahmed', email: 'rafiq@example.com', role: 'Admin', bookings: 0, joined: 'Dec 2025', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=60', status: 'Active' },
];

const roleStyle: Record<string, string> = {
  Admin: 'bg-purple-100 text-purple-700',
  Manager: 'bg-blue-100 text-blue-700',
  User: 'bg-gray-100 text-gray-600',
};

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const filtered = users.filter(u => {
    if (search && !u.name.toLowerCase().includes(search.toLowerCase()) && !u.email.toLowerCase().includes(search.toLowerCase())) return false;
    if (roleFilter !== 'All' && u.role !== roleFilter) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#051036]">Manage Users</h1>
          <p className="text-gray-500 text-sm mt-1">{users.length} total users registered</p>
        </div>
        <button className="flex items-center gap-2 bg-[#3554D1] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#2a43b0] transition-all w-fit">
          <UserPlus className="w-4 h-4" /> Add User
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search users..." className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#3554D1]" />
        </div>
        <select value={roleFilter} onChange={e => setRoleFilter(e.target.value)} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-[#051036] outline-none focus:border-[#3554D1]">
          {['All', 'Admin', 'Manager', 'User'].map(r => <option key={r}>{r}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-[10px] uppercase font-black text-gray-400 tracking-widest">
                <th className="px-5 py-3">User</th>
                <th className="px-5 py-3">Role</th>
                <th className="px-5 py-3">Bookings</th>
                <th className="px-5 py-3">Joined</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(user => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <p className="font-bold text-[#051036] text-sm">{user.name}</p>
                        <p className="text-xs text-gray-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${roleStyle[user.role]}`}>{user.role}</span>
                  </td>
                  <td className="px-5 py-4 text-sm font-bold text-[#051036]">{user.bookings}</td>
                  <td className="px-5 py-4 text-sm text-gray-500">{user.joined}</td>
                  <td className="px-5 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{user.status}</span>
                  </td>
                  <td className="px-5 py-4">
                    <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-400">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-400">Showing {filtered.length} of {users.length} users</p>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#3554D1] transition-all disabled:opacity-40" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-lg bg-[#3554D1] text-white text-sm font-bold">1</button>
            <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#3554D1] transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
