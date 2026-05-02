'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Hotel, Plane, Ship, Map, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const tabs = [
  { id: 'smart-search', label: 'Smart Search', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'hotels', label: 'Hotels', icon: <Hotel className="w-4 h-4" /> },
  { id: 'flights', label: 'Flights', icon: <Plane className="w-4 h-4" /> },
  { id: 'cruise', label: 'Cruise', icon: <Ship className="w-4 h-4" /> },
  { id: 'tours', label: 'Tours', icon: <Map className="w-4 h-4" /> },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('smart-search');
  const [isSearching, setIsSearching] = useState(false);

  const handleSmartSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      window.location.href = '/ai-planner';
    }, 1500);
  };

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

      <div className="max-w-[1440px] mx-auto px-4 relative z-10 text-center text-white w-full py-16">
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
            {/* Smart Search Assistant */}
            {activeTab === 'smart-search' && (
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1 w-full bg-[#F5F5F5] rounded-xl p-4 md:p-5 flex items-center gap-4 border-2 border-transparent hover:border-blue-100 transition-all focus-within:border-[#3554D1] focus-within:bg-blue-50/30">
                  <div className="w-10 h-10 rounded-full bg-[#3554D1]/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-[#3554D1]" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Describe your trip... (e.g. '3 days in Sylhet for a couple under 15k BDT')" 
                    className="w-full bg-transparent border-none p-0 focus:ring-0 text-[#051036] font-medium outline-none text-[15px] md:text-lg placeholder:text-gray-400"
                    onKeyPress={(e) => e.key === 'Enter' && handleSmartSearch()}
                  />
                </div>
                <button 
                  onClick={handleSmartSearch}
                  disabled={isSearching}
                  className="w-full md:w-auto bg-[#3554D1] text-white px-8 py-5 rounded-xl font-bold hover:bg-[#2a43b0] transition-colors flex items-center justify-center gap-2 text-base md:text-lg flex-shrink-0 disabled:opacity-80"
                >
                  {isSearching ? (
                    <><Sparkles className="w-5 h-5 animate-spin" /> Analyzing...</>
                  ) : (
                    <><Sparkles className="w-5 h-5" /> Smart Search</>
                  )}
                </button>
              </div>
            )}

            {/* Form for Hotels */}
            {activeTab === 'hotels' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-4 bg-[#F5F5F5] rounded-lg p-3 flex items-center gap-3 border border-transparent hover:border-[#3554D1] transition-colors text-left">
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

                <div className="md:col-span-3 bg-[#F5F5F5] rounded-lg p-3 flex items-center gap-3 border border-transparent hover:border-[#3554D1] transition-colors cursor-pointer text-left">
                  <div className="bg-white shadow-sm p-2 rounded-md flex-shrink-0">
                    <Calendar className="w-4 h-4 text-[#3554D1]" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">Dates</label>
                    <span className="text-sm font-bold text-[#051036]">Apr 30 ~ May 01</span>
                  </div>
                </div>

                <div className="md:col-span-3 bg-[#F5F5F5] rounded-lg p-3 flex items-center gap-3 border border-transparent hover:border-[#3554D1] transition-colors cursor-pointer text-left">
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
            )}

            {/* Flights Banner */}
            {activeTab === 'flights' && (
              <div className="flex flex-col md:flex-row items-center justify-between border border-gray-200 rounded-xl p-4 gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <Plane className="w-5 h-5 text-[#051036]" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-[#051036] font-bold text-[17px] mb-1">Book with Expert Support</h3>
                    <p className="text-gray-500 text-[13px]">Official airline tickets with instant confirmation.</p>
                  </div>
                </div>
                
                <div className="hidden lg:flex items-center gap-6 border-l border-gray-200 pl-6 text-left">
                  <span className="text-gray-500 text-[13px] font-medium">Our official airline partners</span>
                  <div className="flex items-center gap-4 opacity-80">
                    <div className="font-bold text-[#051036] text-[13px]">US-BANGLA</div>
                    <div className="font-bold text-[#051036] text-[13px]">NOVOAIR</div>
                    <div className="font-bold text-[#051036] text-[13px]">AIR ASTRA</div>
                  </div>
                </div>

                <button className="bg-[#1a3b99] text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#112975] transition-colors whitespace-nowrap text-sm w-full md:w-auto justify-center">
                  <FaWhatsapp className="w-4 h-4" /> Talk to an Advisor
                </button>
              </div>
            )}

            {/* Cruise Banner */}
            {activeTab === 'cruise' && (
              <div className="flex flex-col md:flex-row items-center justify-between border border-gray-200 rounded-xl p-4 gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <Ship className="w-5 h-5 text-[#051036]" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-[#051036] font-bold text-[17px] mb-1">Cruise Experiences · Curated for You</h3>
                    <p className="text-gray-500 text-[13px]">Expert planning for Sundarbans, Saint Martin's & beyond.</p>
                  </div>
                </div>

                <button className="bg-[#1a3b99] text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#112975] transition-colors whitespace-nowrap text-sm w-full md:w-auto justify-center">
                  <FaWhatsapp className="w-4 h-4" /> Call Cruise Expert
                </button>
              </div>
            )}

            {/* Tours Banner */}
            {activeTab === 'tours' && (
              <div className="flex flex-col md:flex-row items-center justify-between border border-gray-200 rounded-xl p-4 gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <Sparkles className="w-5 h-5 text-[#051036]" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-[#051036] font-bold text-[17px] mb-1">Tours · Assisted Booking</h3>
                    <p className="text-gray-500 text-[13px]">Plan custom tours, group trips, and experiences with our experts.</p>
                  </div>
                </div>

                <button className="bg-[#1a3b99] text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#112975] transition-colors whitespace-nowrap text-sm w-full md:w-auto justify-center">
                  <FaWhatsapp className="w-4 h-4" /> Talk to an Advisor
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
