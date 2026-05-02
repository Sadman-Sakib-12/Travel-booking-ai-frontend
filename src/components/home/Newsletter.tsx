'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#3554D1] rounded-3xl overflow-hidden relative"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-10 md:p-16">
            {/* Left */}
            <div className="text-center lg:text-left max-w-lg">
              <img
                src="https://www.tripbooking.ai/img/newsletter/1.png"
                alt="Newsletter"
                className="h-32 mx-auto lg:mx-0 mb-6 object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Your Travel Journey <br /> Starts Here
              </h2>
              <p className="text-white/75 mt-3 text-base">
                Sign up and we'll send the best deals to you
              </p>
              <div className="mt-6 space-y-2">
                <a href="mailto:hello@tripbooking.ai" className="block text-white font-bold hover:underline">hello@tripbooking.ai</a>
                <a href="tel:+8801992222450" className="block text-white font-bold hover:underline">+88 01992222450</a>
              </div>
            </div>

            {/* Right */}
            <div className="w-full max-w-md">
              {submitted ? (
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                  <CheckCircle className="w-8 h-8 text-green-300 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg">You're subscribed!</p>
                    <p className="text-white/70 text-sm">We'll send the best deals to {email}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-white px-5 py-4 rounded-xl focus:outline-none text-[#051036] font-medium text-sm placeholder:text-gray-400"
                  />
                  <button
                    type="submit"
                    className="bg-[#051036] text-white px-7 py-4 rounded-xl font-bold hover:bg-[#051036]/90 transition-all flex items-center justify-center gap-2 text-sm flex-shrink-0"
                  >
                    Subscribe <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
              <p className="text-white/50 text-xs mt-3 text-center lg:text-left">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
