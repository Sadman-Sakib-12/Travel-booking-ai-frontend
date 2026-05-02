'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, Calendar, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AIPlannerPage() {
  // Recommendation System State
  const [interest, setInterest] = useState('Beach');
  const [budget, setBudget] = useState('Low');
  const [isRecommending, setIsRecommending] = useState(false);
  const [recommendation, setRecommendation] = useState<{ title: string; desc: string; image: string } | null>(null);

  // Trip Planner State
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('3');
  const [isPlanning, setIsPlanning] = useState(false);
  const [itinerary, setItinerary] = useState<{ day: number; title: string; activities: string[] }[] | null>(null);

  const handleRecommend = () => {
    setIsRecommending(true);
    setRecommendation(null);
    
    setTimeout(() => {
      if (interest === 'Beach' && budget === 'Low') {
        setRecommendation({ title: "Cox's Bazar", desc: "Perfect for a low budget beach vacation. Enjoy the world's longest sea beach with affordable stays.", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=640" });
      } else if (interest === 'Mountain' && budget === 'Low') {
        setRecommendation({ title: "Bandarban", desc: "Experience the lush green hills and tribal culture at a very reasonable price.", image: "https://images.unsplash.com/photo-1608928052182-4467d1ceb271?q=80&w=640" });
      } else if (interest === 'Forest') {
        setRecommendation({ title: "Sundarbans", desc: "Explore the largest mangrove forest and experience exotic wildlife.", image: "https://images.unsplash.com/photo-1620078864506-69f6880026e6?q=80&w=640" });
      } else {
        setRecommendation({ title: "Sylhet", desc: "A great mix of tea gardens, waterfalls, and comfortable resorts.", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=640" });
      }
      setIsRecommending(false);
    }, 1500);
  };

  const handlePlan = () => {
    if (!destination) return;
    setIsPlanning(true);
    setItinerary(null);

    setTimeout(() => {
      const numDays = parseInt(days) || 3;
      const dummyItinerary = Array.from({ length: numDays }).map((_, i) => ({
        day: i + 1,
        title: i === 0 ? "Arrival & Local Sightseeing" : i === numDays - 1 ? "Shopping & Departure" : "Adventure & Exploration",
        activities: [
          "09:00 AM - Breakfast at the hotel",
          "10:30 AM - Visit local tourist spots",
          "01:30 PM - Lunch with local cuisine",
          "03:30 PM - Relax at a scenic viewpoint",
          "07:00 PM - Dinner and free time"
        ]
      }));
      setItinerary(dummyItinerary);
      setIsPlanning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#3554D1]/10 text-[#3554D1] px-4 py-2 rounded-full font-bold text-sm mb-4">
            <Sparkles className="w-4 h-4" /> TripBooking AI Tools
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#051036] mb-6 leading-tight">
            Plan your next trip with AI
          </h1>
          <p className="text-gray-500 text-lg">
            Let our intelligent assistant find the best destinations and curate a personalized day-by-day itinerary just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recommendation System */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-[0px_10px_40px_0px_rgba(5,16,54,0.05)] border border-gray-100 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-50 text-[#3554D1] rounded-2xl flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#051036]">AI Recommendation</h2>
                <p className="text-gray-500 text-sm">Discover places based on your interests.</p>
              </div>
            </div>

            <div className="space-y-5 mb-8">
              <div>
                <label className="block text-sm font-bold text-[#051036] mb-2">What kind of place do you prefer?</label>
                <select 
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#3554D1] focus:ring-1 focus:ring-[#3554D1] transition-all font-medium text-[#051036]"
                >
                  <option>Beach</option>
                  <option>Mountain</option>
                  <option>Forest</option>
                  <option>Heritage</option>
                  <option>City</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#051036] mb-2">What is your budget?</label>
                <select 
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#3554D1] focus:ring-1 focus:ring-[#3554D1] transition-all font-medium text-[#051036]"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <button 
              onClick={handleRecommend}
              disabled={isRecommending}
              className="w-full bg-[#051036] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#112975] transition-colors disabled:opacity-70 mt-auto"
            >
              {isRecommending ? (
                <span className="flex items-center gap-2"><Sparkles className="w-5 h-5 animate-spin" /> Analyzing...</span>
              ) : (
                <span className="flex items-center gap-2"><Sparkles className="w-5 h-5" /> Get Recommendation</span>
              )}
            </button>

            {/* Recommendation Result */}
            <AnimatePresence>
              {recommendation && !isRecommending && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                  className="overflow-hidden"
                >
                  <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex gap-4">
                    <img src={recommendation.image} alt={recommendation.title} className="w-24 h-24 rounded-xl object-cover" />
                    <div>
                      <div className="flex items-center gap-1.5 text-[#3554D1] text-xs font-bold mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Best Match
                      </div>
                      <h3 className="text-lg font-black text-[#051036]">{recommendation.title}</h3>
          "10:30 AM - Visit local tourist spots",
          "01:30 PM - Lunch with local cuisine",
          "03:30 PM - Relax at a scenic viewpoint",
          "07:00 PM - Dinner and free time"
        ]
      }));
      setItinerary(dummyItinerary);
      setIsPlanning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-28 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_50%)]" />
      <div className="relative max-w-[1440px] mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-full font-bold text-sm mb-6 backdrop-blur-sm">
            <Brain className="w-4 h-4" /> AI-Powered Travel Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Plan your next trip with <span className="text-gradient">AI</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            Let our intelligent assistant find the best destinations and curate a personalized day-by-day itinerary just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recommendation System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-premium p-8 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white">AI Recommendation</h2>
                <p className="text-slate-400 text-sm">Discover places based on your interests.</p>
              </div>
            </div>

            <div className="space-y-5 mb-8">
              <div>
                <label className="block text-sm font-bold text-white mb-3">What kind of place do you prefer?</label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="input-premium w-full"
                >
                  <option>Beach</option>
                  <option>Mountain</option>
                  <option>Forest</option>
                  <option>Heritage</option>
                  <option>City</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-3">What is your budget?</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="input-premium w-full"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleRecommend}
              disabled={isRecommending}
              className="btn-premium w-full flex items-center justify-center gap-2 mt-auto"
            >
              {isRecommending ? (
                <span className="flex items-center gap-2"><Sparkles className="w-5 h-5 animate-spin" /> Analyzing...</span>
              ) : (
                <span className="flex items-center gap-2"><Sparkles className="w-5 h-5" /> Get Recommendation</span>
              )}
            </button>

            {/* Recommendation Result */}
            <AnimatePresence>
              {recommendation && !isRecommending && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                  className="overflow-hidden"
                >
                  <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-3xl p-6 flex gap-4 backdrop-blur-sm">
                    <img src={recommendation.image} alt={recommendation.title} className="w-24 h-24 rounded-2xl object-cover" />
                    <div>
                      <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-bold mb-2">
                        <CheckCircle2 className="w-4 h-4" /> Best Match
                      </div>
                      <h3 className="text-xl font-black text-white">{recommendation.title}</h3>
                      <p className="text-slate-300 text-sm mt-2 leading-relaxed">{recommendation.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Trip Planner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-premium p-8 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-amber-500/20 border border-amber-400/30 text-amber-300 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Calendar className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white">AI Content Generator</h2>
                <p className="text-slate-400 text-sm">Create a complete day-by-day itinerary.</p>
              </div>
            </div>

            <div className="space-y-5 mb-8">
              <div>
                <label className="block text-sm font-bold text-white mb-3">Where are you going?</label>
                <div className="relative">
                  <MapPin className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Cox's Bazar"
                    className="input-premium w-full pl-12"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-3">How many days?</label>
                <div className="relative">
                  <Calendar className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="number"
                    min="1"
                    max="14"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    className="input-premium w-full pl-12"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handlePlan}
              disabled={isPlanning || !destination}
              className="btn-premium w-full flex items-center justify-center gap-2 mt-auto"
            >
              {isPlanning ? (
                <span className="flex items-center gap-2"><Zap className="w-5 h-5 animate-pulse" /> Generating Plan...</span>
              ) : (
                <span className="flex items-center gap-2"><Sparkles className="w-5 h-5" /> Generate Itinerary</span>
              )}
            </button>
          </motion.div>
        </div>

        {/* Itinerary Result */}
        <AnimatePresence>
          {itinerary && !isPlanning && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 card-premium p-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-6 border-b border-white/10 gap-4 text-center sm:text-left">
                <div>
                  <h2 className="text-3xl font-black text-white mb-2">Your {days}-Day Trip to {destination}</h2>
                  <p className="text-slate-400">Curated exclusively for you by TripBooking AI.</p>
                </div>
                <button className="bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-bold px-6 py-3 rounded-2xl hover:bg-cyan-500/30 transition-colors backdrop-blur-sm">
                  Save Itinerary
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {itinerary.map((day) => (
                  <div key={day.day} className="bg-slate-800/60 border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 transition-colors backdrop-blur-sm">
                    <div className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold text-sm px-4 py-2 rounded-xl mb-4 shadow-lg">
                      Day {day.day}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4">{day.title}</h3>
                    <ul className="space-y-3">
                      {day.activities.map((act, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></span>
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Link href="/explore" className="btn-premium inline-flex items-center gap-2">
                  Explore Hotels in {destination} <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
