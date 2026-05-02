'use client';

import { motion } from 'framer-motion';
import { Plane, CheckCircle, ShieldCheck } from 'lucide-react';

const offers = [
  {
    id: 1,
    type: 'flight',
    bg: 'bg-[#1a3b99]',
    badge: { text: 'UP TO', highlight: '8% OFF', sub: 'Official Airline Tickets' },
    title: 'Domestic',
    titleHighlight: 'Flight Offer',
    titleIcon: <Plane className="w-5 h-5 inline-block ml-1 -mt-1" />,
    footer: [
      { icon: <CheckCircle className="w-4 h-4 text-[#3554D1]" />, label: 'Instant Confirmation' },
      { icon: <ShieldCheck className="w-4 h-4 text-[#3554D1]" />, label: 'Secure Booking' },
    ],
  },
  {
    id: 2,
    type: 'image',
    image: 'https://www.tripbooking.ai/offers/falong-zee.jpg',
    fallbackBg: 'bg-[#1a3b99]',
    badge: { text: '৭%', sub: 'ডিসকাউন্ট' },
    title: 'কক্সবাজারে',
    titleHighlight: 'হোটেল বুকিংয়ে',
    sub: 'Falong Zee তে থাকছে',
    logo: 'FALONG ZEE',
  },
  {
    id: 3,
    type: 'eid',
    bg: 'bg-[#0a1a4a]',
    badge: { text: 'Up to 70% OFF', sub: 'on Domestic Hotels' },
    title: 'Book Early. Stay Happy.',
    script: 'Eid Stay Offer',
    cta: 'Book Now',
  },
];

export default function OffersCarousel() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-2xl md:text-[28px] font-black text-[#051036] mb-6">
          Offers for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 — Domestic Flight Offer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="bg-[#1a3b99] rounded-2xl overflow-hidden relative min-h-[200px] flex flex-col justify-between p-6 cursor-pointer hover:shadow-xl transition-shadow"
          >
            {/* Decorative circle */}
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/5 rounded-full" />
            <div className="absolute -right-4 top-8 w-24 h-24 bg-white/5 rounded-full" />

            <div className="relative z-10">
              <p className="text-white/80 text-sm font-medium flex items-center gap-1">
                Domestic <Plane className="w-4 h-4" />
              </p>
              <h3 className="text-white text-2xl font-black mt-0.5">Flight Offer</h3>
            </div>

            {/* Badge */}
            <div className="relative z-10 my-4 self-start">
              <div className="bg-[#f5a623] text-[#1a3b99] rounded-lg px-4 py-2 inline-block shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-wide">UP TO</p>
                <p className="text-2xl font-black leading-none">8% OFF</p>
                <p className="text-[9px] font-semibold mt-0.5">Official Airline Tickets</p>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#3554D1]" />
                <span className="text-[11px] font-bold text-[#051036]">Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3554D1]" />
                <span className="text-[11px] font-bold text-[#051036]">Secure Booking</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Falong Zee */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#1a3b99] rounded-2xl overflow-hidden relative min-h-[200px] flex flex-col justify-between p-6 cursor-pointer hover:shadow-xl transition-shadow"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
                backgroundSize: '10px 10px',
              }}
            />

            <div className="relative z-10 flex items-start justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium">Falong Zee তে থাকছে</p>
                <h3 className="text-white text-xl font-black mt-1 leading-tight">
                  কক্সবাজারে<br />হোটেল বুকিংয়ে
                </h3>
              </div>
              {/* Logo placeholder */}
              <div className="bg-[#f5a623] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-[#1a3b99] font-black text-[10px] text-center leading-tight">FZ</span>
              </div>
            </div>

            {/* Discount badge */}
            <div className="relative z-10 mt-4 self-start">
              <div className="bg-[#f5a623] text-[#1a3b99] rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-xl">
                <p className="text-2xl font-black leading-none">৭%</p>
                <p className="text-[10px] font-bold">ডিসকাউন্ট</p>
              </div>
            </div>

            {/* Bottom label */}
            <div className="relative z-10 mt-4">
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">FALONG ZEE</span>
            </div>
          </motion.div>

          {/* Card 3 — Eid Stay Offer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0a1a4a] rounded-2xl overflow-hidden relative min-h-[200px] flex flex-col justify-between p-6 cursor-pointer hover:shadow-xl transition-shadow"
          >
            {/* Stars decoration */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                style={{
                  top: `${[15, 25, 10, 35, 20, 8][i]}%`,
                  left: `${[10, 30, 55, 70, 85, 45][i]}%`,
                }}
              />
            ))}

            {/* Moon */}
            <div className="absolute top-4 right-6 text-3xl opacity-80">🌙</div>

            <div className="relative z-10">
              {/* Script style title */}
              <p className="text-white/90 text-lg italic font-light" style={{ fontFamily: 'Georgia, serif' }}>
                Eid Stay Offer
              </p>
            </div>

            {/* Discount */}
            <div className="relative z-10 my-3">
              <div className="bg-[#f5a623] text-[#0a1a4a] rounded-lg px-4 py-2 inline-block shadow-lg">
                <p className="text-xl font-black leading-none">Up to 70% OFF</p>
                <p className="text-[10px] font-semibold mt-0.5">on Domestic Hotels</p>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-white text-xl font-black leading-tight mb-4">
                Book Early. Stay Happy.
              </h3>
              <button className="bg-[#f5a623] text-[#0a1a4a] font-black px-6 py-2.5 rounded-full text-sm hover:bg-amber-400 transition-colors shadow-lg">
                Book Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
