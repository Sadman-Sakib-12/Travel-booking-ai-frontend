'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'Baywatch', logo: 'https://www.tripbooking.ai/hotel_logos/Baywatch.png' },
  { name: 'Best Western', logo: 'https://www.tripbooking.ai/hotel_logos/Best%20western.png' },
  { name: 'Ocean Paradise', logo: 'https://www.tripbooking.ai/hotel_logos/Ocean%20paradise.png' },
  { name: 'Ramada', logo: 'https://www.tripbooking.ai/hotel_logos/ramada.png' },
  { name: 'Sayman', logo: 'https://www.tripbooking.ai/hotel_logos/Sayman.png' },
  { name: 'Sea Pearl', logo: 'https://www.tripbooking.ai/hotel_logos/Sea%20pearl.png' },
  { name: 'Seagull', logo: 'https://www.tripbooking.ai/hotel_logos/Seagull.png' },
];

export default function Partners() {
  return (
    <section className="py-10 bg-white border-b border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
          Official Partner of Leading Hotels
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img src={p.logo} alt={p.name} className="h-10 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
