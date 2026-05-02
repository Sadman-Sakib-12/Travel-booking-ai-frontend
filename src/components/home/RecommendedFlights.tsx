'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, ArrowUpRight } from 'lucide-react';

const flights = {
  domestic: [
    { from: 'Dhaka', to: "Cox's Bazar", airline: 'US-Bangla', price: 4999, logo: 'https://www.tripbooking.ai/logos/us_bangla_logo.png' },
    { from: 'Dhaka', to: 'Chattogram', airline: 'Novo Air', price: 4699, logo: 'https://www.tripbooking.ai/logos/novo_air_logo.png' },
    { from: 'Dhaka', to: 'Sylhet', airline: 'Novo Air', price: 4699, logo: 'https://www.tripbooking.ai/logos/novo_air_logo.png' },
    { from: 'Dhaka', to: 'Saidpur', airline: 'Novo Air', price: 4799, logo: 'https://www.tripbooking.ai/logos/novo_air_logo.png' },
    { from: 'Dhaka', to: 'Jessore', airline: 'US-Bangla', price: 4749, logo: 'https://www.tripbooking.ai/logos/us_bangla_logo.png' },
    { from: "Cox's Bazar", to: 'Dhaka', airline: 'Air Astra', price: 4999, logo: 'https://www.tripbooking.ai/logos/air_astra_logo.png' },
  ],
  international: [
    { from: 'Dhaka', to: 'Dubai', airline: 'Emirates', price: 32000, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/120px-Emirates_logo.svg.png' },
    { from: 'Dhaka', to: 'Kuala Lumpur', airline: 'AirAsia', price: 18500, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/AirAsia_Logo.svg/120px-AirAsia_Logo.svg.png' },
    { from: 'Dhaka', to: 'Bangkok', airline: 'Thai Airways', price: 22000, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Thai_Airways_Logo.svg/120px-Thai_Airways_Logo.svg.png' },
    { from: 'Dhaka', to: 'Singapore', airline: 'Singapore Airlines', price: 28000, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Singapore_Airlines_Logo_2.svg/120px-Singapore_Airlines_Logo_2.svg.png' },
    { from: 'Dhaka', to: 'London', airline: 'Biman Bangladesh', price: 65000, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Biman_Bangladesh_Airlines_Logo.svg/120px-Biman_Bangladesh_Airlines_Logo.svg.png' },
    { from: 'Dhaka', to: 'Doha', airline: 'Qatar Airways', price: 35000, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Qatar_Airways_Logo.svg/120px-Qatar_Airways_Logo.svg.png' },
  ],
};

export default function RecommendedFlights() {
  const [activeTab, setActiveTab] = useState<'domestic' | 'international'>('domestic');
  const list = flights[activeTab];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Header Area */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-[28px] font-bold text-[#3554D1]">Recommended Flights</h2>
          <p className="text-gray-500 mt-2 text-sm font-medium">Popular routes and airlines recommended for you.</p>
        </div>

        {/* Tabs - Right Aligned */}
        <div className="flex justify-end mb-8">
          <div className="flex gap-2">
            {(['domestic', 'international'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all ${
                  activeTab === tab 
                    ? 'bg-[#1D4ED8] text-white' 
                    : 'bg-gray-100 text-[#051036] hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((flight, idx) => (
            <motion.div
              key={`${flight.from}-${flight.to}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Top Row: Route & Icon */}
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-3 text-[#3554D1] font-bold text-[15px]">
                  <span>{flight.from}</span>
                  <span className="text-gray-300 font-normal">—</span>
                  <span>{flight.to}</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                  <Plane className="w-4 h-4 text-[#051036] rotate-45" />
                </div>
              </div>

              {/* Best fare text */}
              <p className="text-[13px] text-gray-500 mb-4">
                Best fare from • {flight.airline}
              </p>

              {/* Logo */}
              <div className="mb-6 h-6 flex justify-start">
                <img 
                  src={flight.logo} 
                  alt={flight.airline} 
                  className="h-full max-w-[120px] object-contain object-left" 
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} 
                />
              </div>

              {/* Bottom Row */}
              <div className="mt-auto flex items-end justify-between">
                <div>
                  <p className="text-[13px] text-[#051036] mb-0.5 font-medium">
                    From <span className="text-[#3554D1] font-bold text-lg">BDT {flight.price.toLocaleString()}</span>
                  </p>
                  <p className="text-[11px] text-gray-400">Fares vary by date</p>
                </div>
                <a
                  href={`https://wa.me/8801992222450?text=Hello, I would like to inquire about flights from ${flight.from} to ${flight.to}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-[#3554D1] text-[#3554D1] text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#3554D1] hover:text-white transition-all"
                >
                  Request Flights
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
