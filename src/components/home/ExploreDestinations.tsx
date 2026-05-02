'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const destinations = [
  {
    name: "Cox's Bazar",
    image: 'https://images.unsplash.com/photo-1506929113675-88afadc689ca?q=80&w=640&auto=format&fit=crop',
    slug: 'coxs-bazar'
  },
  {
    name: 'Sylhet',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=640&auto=format&fit=crop',
    slug: 'sylhet'
  },
  {
    name: 'Bandarban',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=640&auto=format&fit=crop',
    slug: 'bandarban'
  },
  {
    name: 'Sreemangal',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=640&auto=format&fit=crop',
    slug: 'sreemangal'
  },
];

export default function ExploreDestinations() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-[28px] font-bold text-[#051036]">Explore Bangladesh</h2>
          <p className="text-gray-500 mt-2 text-sm font-medium">Discover stunning destinations across Bangladesh</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/explore?destination=${dest.slug}`} className="group block relative rounded-xl overflow-hidden h-[240px] md:h-[280px] shadow-sm hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051036]/90 via-[#051036]/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <h3 className="text-white font-bold text-[17px]">{dest.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
