'use client';

import { motion } from 'framer-motion';
import { Sparkles, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const recommendations = [
  {
    id: 1,
    title: "Sayeman Beach Resort",
    location: "Cox's Bazar",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=640",
    match: "98%",
    reason: "Because you searched for 'luxury beach resorts'"
  },
  {
    id: 2,
    title: "Grand Sultan Tea Resort",
    location: "Sreemangal",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=640",
    match: "95%",
    reason: "Great alternative for your nature trip preference"
  },
  {
    id: 3,
    title: "Ocean Paradise Hotel",
    location: "Cox's Bazar",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=640",
    match: "92%",
    reason: "Popular among couples looking for sea views"
  }
];

export default function AIRecommendations() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#3554D1] font-bold text-sm bg-[#3554D1]/10 px-3 py-1.5 rounded-full mb-3">
              <Sparkles className="w-4 h-4" /> AI Personalization
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#051036] mb-4">Recommended for You</h2>
            <p className="text-gray-500 text-lg">Curated properties based on your recent searches and preferences.</p>
          </div>
          <Link href="/explore" className="inline-flex items-center gap-2 text-[#3554D1] font-bold hover:underline">
            View all recommendations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0px_10px_40px_0px_rgba(5,16,54,0.05)] border border-gray-100 group cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" /> {item.match} Match
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-[#3554D1] bg-blue-50 inline-block px-2 py-1 rounded-md mb-3">
                  {item.reason}
                </div>
                <h3 className="text-xl font-bold text-[#051036] mb-2 group-hover:text-[#3554D1] transition-colors">{item.title}</h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 mr-1" /> {item.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
