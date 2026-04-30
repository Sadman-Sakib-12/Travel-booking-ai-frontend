'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Active Users', value: '150K+' },
  { label: 'Total Destinations', value: '1.2K+' },
  { label: 'Successful Trips', value: '45K+' },
  { label: 'Customer Rating', value: '4.9/5' },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-[#3554D1] overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center text-white space-y-2"
            >
              <h3 className="text-4xl md:text-5xl font-bold">{stat.value}</h3>
              <p className="text-white/70 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
