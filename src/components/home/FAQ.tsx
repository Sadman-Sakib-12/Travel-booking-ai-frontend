'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: 'How do I book a trip on TripBooking?',
    a: 'Simply browse our destinations, select your preferred trip, and click on "Book Now". Follow the instructions to provide your details and make the payment.'
  },
  {
    q: 'Can I cancel my booking later?',
    a: 'Yes, cancellation depends on the specific hotel or tour policy. Most of our bookings offer free cancellation up to 24-48 hours before the trip starts.'
  },
  {
    q: 'Is there any group discount available?',
    a: 'Absolutely! For groups of 10 or more, we offer exclusive discounts. Please contact our support team for more details.'
  },
  {
    q: 'How do I contact customer support?',
    a: 'Our support team is available 24/7. You can reach us via the Live Chat on our website, email us at support@tripbooking.ai, or call us directly.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#F5F7FF]">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#051036]">
              Frequently Asked <span className="text-[#3554D1]">Questions</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Can't find what you're looking for? Check out our help center or contact support.
            </p>
            <button className="btn-primary !px-10">Contact Support</button>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#F5F7FF] transition-colors"
                >
                  <span className="text-lg font-bold text-[#051036]">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", openIndex === idx ? "rotate-180" : "")} />
                </button>
                
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-8 pb-6 text-gray-500 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
