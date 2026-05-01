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
      <div className="max-w-[1320px] mx-auto px-4">
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
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">{recommendation.desc}</p>
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
            className="bg-white rounded-3xl p-8 shadow-[0px_10px_40px_0px_rgba(5,16,54,0.05)] border border-gray-100 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#051036]">AI Content Generator</h2>
                <p className="text-gray-500 text-sm">Create a complete day-by-day itinerary.</p>
              </div>
            </div>

            <div className="space-y-5 mb-8">
              <div>
                <label className="block text-sm font-bold text-[#051036] mb-2">Where are you going?</label>
                <div className="relative">
                  <MapPin className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Cox's Bazar"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#3554D1] focus:ring-1 focus:ring-[#3554D1] transition-all font-medium text-[#051036]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#051036] mb-2">How many days?</label>
                <div className="relative">
                  <Calendar className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input 
                    type="number"
                    min="1"
                    max="14"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#3554D1] focus:ring-1 focus:ring-[#3554D1] transition-all font-medium text-[#051036]"
                  />
                </div>
              </div>
            </div>

            <button 
              onClick={handlePlan}
              disabled={isPlanning || !destination}
              className="w-full bg-[#3554D1] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#2a43b0] transition-colors disabled:opacity-70 mt-auto"
            >
              {isPlanning ? (
                <span className="flex items-center gap-2"><Sparkles className="w-5 h-5 animate-spin" /> Generating Plan...</span>
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
              className="mt-8 bg-white rounded-3xl p-8 shadow-[0px_10px_40px_0px_rgba(5,16,54,0.05)] border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-6 border-b border-gray-100 gap-4 text-center sm:text-left">
                <div>
                  <h2 className="text-2xl font-black text-[#051036] mb-2">Your {days}-Day Trip to {destination}</h2>
                  <p className="text-gray-500">Curated exclusively for you by TripBooking AI.</p>
                </div>
                <button className="bg-blue-50 text-[#3554D1] font-bold px-6 py-3 rounded-xl hover:bg-blue-100 transition-colors">
                  Save Itinerary
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {itinerary.map((day) => (
                  <div key={day.day} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#3554D1]/30 transition-colors">
                    <div className="inline-flex items-center justify-center bg-[#051036] text-white font-bold text-sm px-3 py-1 rounded-lg mb-4">
                      Day {day.day}
                    </div>
                    <h3 className="text-lg font-bold text-[#051036] mb-4">{day.title}</h3>
                    <ul className="space-y-3">
                      {day.activities.map((act, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-[#3554D1] rounded-full mt-1.5 flex-shrink-0"></span>
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <Link href="/explore" className="inline-flex items-center gap-2 bg-[#3554D1] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#2a43b0] transition-colors">
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
