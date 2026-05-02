'use client';

import { motion } from 'framer-motion';
import { Shield, Plane, Headset, CreditCard } from 'lucide-react';

const services = [
  {
    title: 'Best Price Guarantee',
    desc: 'We offer the most competitive prices in the travel market, ensuring you get the best value.',
    icon: <CreditCard className="w-8 h-8" />,
    color: 'bg-blue-500'
  },
  {
    title: 'Safe and Secure',
    desc: 'Your data and payments are protected with world-class security and encryption systems.',
    icon: <Shield className="w-8 h-8" />,
    color: 'bg-emerald-500'
  },
  {
    title: 'Worldwide Coverage',
    desc: 'From hidden gems to popular landmarks, we cover over 150+ countries globally.',
    icon: <Plane className="w-8 h-8" />,
    color: 'bg-amber-500'
  },
  {
    title: '24/7 Premium Support',
    desc: 'Our dedicated support team is always available to assist you with any queries.',
    icon: <Headset className="w-8 h-8" />,
    color: 'bg-purple-500'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#051036]">
            Why Choose <span className="text-[#3554D1]">TripBooking</span>?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We prioritize your comfort and safety above all, providing a seamless travel experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#051036] mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
