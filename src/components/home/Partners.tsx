'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'Baywatch', logo: 'https://www.tripbooking.ai/hotel_logos/Baywatch.png' },
  { name: 'Best Western', logo: 'https://www.tripbooking.ai/hotel_logos/Best%20western.png' },
  { name: 'Ocean Paradise', logo: 'https://www.tripbooking.ai/hotel_logos/Ocean%20paradise.png' },
  { name: 'Ramada', logo: 'https://www.tripbooking.ai/hotel_logos/ramada.png' },
  { name: 'Sayeman', logo: 'https://www.tripbooking.ai/hotel_logos/Sayman.png' },
  { name: 'Sea Pearl', logo: 'https://www.tripbooking.ai/hotel_logos/Sea%20pearl.png' },
  { name: 'Seagull Hotels', logo: 'https://www.tripbooking.ai/hotel_logos/Seagull.png' },
];

export default function Partners() {
  return (
    <section className="bg-white border-b border-gray-100 py-4">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Left label */}
          <div className="flex-shrink-0 border-r border-gray-200 pr-6 text-center sm:text-left">
            <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest leading-tight">
              Official Partner<br />of Leading Hotels
            </p>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 md:gap-8 flex-1">
            {partners.map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img src={p.logo} alt={p.name} className="h-8 md:h-9 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
