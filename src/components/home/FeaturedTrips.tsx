'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Star, MapPin, Clock } from 'lucide-react';

const featuredTrips = [
  {
    image: 'https://images.unsplash.com/photo-1506929113675-88afadc689ca?q=80&w=2070&auto=format&fit=crop',
    title: 'Luxury Beach Resort in Cox\'s Bazar',
    location: 'Cox\'s Bazar, Bangladesh',
    price: 250,
    rating: 4.9,
    reviews: 128,
    duration: '3 Days',
    category: 'Relaxation'
  },
  {
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
    title: 'Modern Mountain Villa in Sylhet',
    location: 'Sylhet, Bangladesh',
    price: 180,
    rating: 4.7,
    reviews: 85,
    duration: '2 Days',
    category: 'Adventure'
  },
  {
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    title: 'Paris City Lights & Eiffel Tour',
    location: 'Paris, France',
    price: 1200,
    rating: 5.0,
    reviews: 2450,
    duration: '7 Days',
    category: 'City Tour'
  },
  {
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop',
    title: 'Desert Camping Experience',
    location: 'Dubai, UAE',
    price: 450,
    rating: 4.8,
    reviews: 560,
    duration: '1 Day',
    category: 'Camping'
  }
];

const categories = [
  { name: 'Beach', icon: '🏖️' },
  { name: 'Mountain', icon: '🏔️' },
  { name: 'City', icon: '🏙️' },
  { name: 'Adventure', icon: '🛶' },
  { name: 'Culture', icon: '🏛️' },
  { name: 'Food', icon: '🍱' },
];

export default function FeaturedTrips() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#051036]"
            >
              Discover Most <span className="text-[#3554D1]">Popular Destinations</span>
            </motion.h2>
            <p className="text-gray-500 text-lg">
              Explore the world's most stunning places with our handpicked travel packages.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="flex items-center gap-2 text-[#3554D1] font-semibold hover:gap-3 transition-all">
              View All Destinations <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-gray-50 hover:bg-[#3554D1] transition-all duration-300 p-6 rounded-2xl flex flex-col items-center gap-3 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{cat.icon}</span>
              <span className="font-semibold text-[#051036] group-hover:text-white transition-colors">{cat.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTrips.map((trip, idx) => (
            <motion.div
              key={trip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-[240px] overflow-hidden">
                <img src={trip.image} alt={trip.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#3554D1] shadow-sm">
                  {trip.category}
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <MapPin className="w-3.5 h-3.5" /> {trip.location}
                </div>
                <h3 className="text-lg font-bold text-[#051036] line-clamp-1 group-hover:text-[#3554D1] transition-colors">{trip.title}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded text-amber-500 text-sm font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500" /> {trip.rating}
                  </div>
                  <span className="text-gray-400 text-xs">({trip.reviews} Reviews)</span>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400">Starting from</span>
                    <span className="text-xl font-bold text-[#3554D1]">${trip.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                    <Clock className="w-3.5 h-3.5" /> {trip.duration}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
