'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Hotel, Plane, Ship, Map } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  { id: 'hotels', label: 'Hotels', icon: <Hotel className="w-4 h-4" /> },
  { id: 'flights', label: 'Flights', icon: <Plane className="w-4 h-4" /> },
  { id: 'cruise', label: 'Cruise', icon: <Ship className="w-4 h-4" /> },
  { id: 'tours', label: 'Tours', icon: <Map className="w-4 h-4" /> },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('hotels');

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-16" style={{ minHeight: '65vh' }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=2070&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-[#051036]/40" />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 relative z-10 text-center text-white w-full py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-white leading-tight">
            Plan. Compare. Book with AI
          </h1>
          <p className="text-base md:text-lg text-white/85 font-medium">
            Handpicked hotels and exclusive deals across beautiful destinations.
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Tabs */}
          <div className="flex gap-1 px-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all rounded-t-lg ${
                  activeTab === tab.id
                    ? 'bg-white text-[#051036]'
                    : 'bg-transparent text-white hover:bg-white/10'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-6 w-full" style={{ boxShadow: '0px 10px 60px 0px rgba(5, 16, 54, 0.08)' }}>
            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-4 bg-[#F5F5F5] rounded-lg p-3 flex items-center gap-3 border border-transparent hover:border-[#3554D1] transition-colors">
                <div className="bg-white shadow-sm p-2 rounded-md flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#3554D1]" />
                </div>
                <div className="min-w-0 flex-1">
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">City / Hotel / Resort</label>
                  <input
                    type="text"
                    defaultValue="Cox's Bazar"
                    className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-bold text-[#051036] outline-none"
                  />
                </div>
              </div>

              <div className="md:col-span-3 bg-[#F5F5F5] rounded-lg p-3 flex items-center gap-3 border border-transparent hover:border-[#3554D1] transition-colors cursor-pointer">
                <div className="bg-white shadow-sm p-2 rounded-md flex-shrink-0">
                  <Calendar className="w-4 h-4 text-[#3554D1]" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">Dates</label>
                  <span className="text-sm font-bold text-[#051036]">Apr 30 ~ May 01</span>
                </div>
              </div>

              <div className="md:col-span-3 bg-[#F5F5F5] rounded-lg p-3 flex items-center gap-3 border border-transparent hover:border-[#3554D1] transition-colors cursor-pointer">
                <div className="bg-white shadow-sm p-2 rounded-md flex-shrink-0">
                  <Users className="w-4 h-4 text-[#3554D1]" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">Guests</label>
                  <span className="text-sm font-bold text-[#051036]">2 Guests, 1 room</span>
                </div>
              </div>

              <div className="md:col-span-2">
                <button className="bg-[#3554D1] text-white w-full py-4 rounded-lg font-bold hover:bg-[#2a43b0] transition-all text-sm">
                  Search
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
