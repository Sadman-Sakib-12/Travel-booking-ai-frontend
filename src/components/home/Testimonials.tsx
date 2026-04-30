'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Adventure Traveler',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    content: 'My trip to Switzerland was perfectly organized. The hotel recommendations were spot on, and the support team was very helpful!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Digital Nomad',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    content: 'The user interface is so intuitive. I could book my entire Europe trip in under 10 minutes. Highly recommended for busy travelers.',
    rating: 5
  },
  {
    name: 'Emma Williams',
    role: 'Luxury Traveler',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    content: 'Amazing experiences! The AI travel planner suggested destinations I never thought of visiting. Every place was a gem.',
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#051036]">
            What Our <span className="text-[#3554D1]">Travelers Say</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Real stories from real travelers who explored the world with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#F5F7FF]/30 p-8 rounded-3xl relative group border border-[#E2E8F0]/10"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-[#3554D1]/10 group-hover:text-[#3554D1]/20 transition-colors" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-500 italic mb-8 relative z-10 leading-relaxed">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover shadow-md" />
                <div>
                  <h4 className="font-bold text-[#051036]">{item.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
