'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const offers = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1280&auto=format&fit=crop',
    title: 'Up to 30% Off on Cox\'s Bazar Hotels',
    subtitle: 'Limited time offer — Book before May 31',
    badge: '30% OFF',
    color: 'from-blue-900/70',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1280&auto=format&fit=crop',
    title: 'Exclusive Weekend Deals in Sylhet',
    subtitle: 'Stay 2 nights, get 1 free — Valid this weekend',
    badge: 'WEEKEND DEAL',
    color: 'from-emerald-900/70',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1280&auto=format&fit=crop',
    title: 'Early Bird Discount — Bandarban',
    subtitle: 'Book 7 days ahead and save up to 25%',
    badge: '25% OFF',
    color: 'from-amber-900/70',
  },
];

export default function OffersCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? offers.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === offers.length - 1 ? 0 : c + 1));

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1320px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#051036] mb-8">
          Offers for You
        </h2>

        <div className="relative rounded-2xl overflow-hidden h-[220px] md:h-[280px] shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <img
                src={offers[current].image}
                alt={offers[current].title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${offers[current].color} to-transparent`} />
              <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16">
                <span className="inline-block bg-[#3554D1] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                  {offers[current].badge}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {offers[current].title}
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  {offers[current].subtitle}
                </p>
                <button className="mt-6 bg-white text-[#3554D1] font-bold px-6 py-2.5 rounded-xl w-fit text-sm hover:bg-[#3554D1] hover:text-white transition-all">
                  Book Now
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
          >
            <ChevronLeft className="w-5 h-5 text-[#051036]" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
          >
            <ChevronRight className="w-5 h-5 text-[#051036]" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {offers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
