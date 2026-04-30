'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Calendar, MapPin, ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import { formatCurrency, formatDate } from '@/lib/utils';

const mockBookings = [
  { id: 'BK-101', trip: 'Cox\'s Bazar Luxury Stay', date: '2026-05-10', price: 450, status: 'CONFIRMED', image: 'https://images.unsplash.com/photo-1506929113675-88afadc689ca?q=80&w=400' },
  { id: 'BK-102', trip: 'Paris City Tour', date: '2026-06-15', price: 1200, status: 'PENDING', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=400' },
];

export default function UserBookings() {
  return (
    <div className="p-8 space-y-8">
      <header>
        <h1 className="text-3xl font-black text-[#051036]">My Bookings</h1>
        <p className="text-gray-500 font-medium">Manage your upcoming trips and booking history.</p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {mockBookings.map((booking, idx) => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-50 flex flex-col md:flex-row items-center gap-8 group hover:border-blue-500/20 transition-all"
          >
            <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden shadow-lg">
              <img src={booking.image} alt={booking.trip} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div className="flex-1 space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{booking.id}</span>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                  booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {booking.status}
                </span>
              </div>
              <h3 className="text-xl font-black text-[#051036]">{booking.trip}</h3>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-4 h-4 text-[#3554D1]" /> {formatDate(booking.date)}
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <ShoppingBag className="w-4 h-4 text-[#3554D1]" /> {formatCurrency(booking.price)}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="px-6 py-3 rounded-xl border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 transition-all">Cancel</button>
              <button className="bg-[#3554D1] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#2843B2] shadow-xl shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-2">
                Details <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
