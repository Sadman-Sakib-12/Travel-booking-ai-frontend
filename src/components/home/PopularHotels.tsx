'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Link from 'next/link';

const tabs = ["Cox's Bazar", 'Sreemangal', 'Sylhet'];

const hotels: Record<string, Array<{
  name: string; location: string; stars: number;
  rating: number; ratingLabel: string; price: number; image: string; slug: string;
}>> = {
  "Cox's Bazar": [
    { name: 'Hotel The Cox Today', location: "Hotel Motel Zone, Cox's Bazar", stars: 5, rating: 5.0, ratingLabel: 'Very Good', price: 4950, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=640&auto=format&fit=crop', slug: 'hotel-the-cox-today' },
    { name: 'Green Nature Resort & Suites', location: "Suganda, Cox's Bazar", stars: 4, rating: 5.0, ratingLabel: 'Very Good', price: 4547, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=640&auto=format&fit=crop', slug: 'green-nature' },
    { name: 'Windy Terrace Hotel', location: "Kolatoli, Cox's Bazar", stars: 4, rating: 5.0, ratingLabel: 'Very Good', price: 3600, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=640&auto=format&fit=crop', slug: 'windy-terrace' },
    { name: 'Dera Resort & Spa', location: "Inani, Cox's Bazar", stars: 5, rating: 5.0, ratingLabel: 'Very Good', price: 5000, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=640&auto=format&fit=crop', slug: 'dera-resort' },
  ],
  'Sreemangal': [
    { name: 'Grand Sultan Tea Resort', location: 'Sreemangal, Sylhet', stars: 5, rating: 4.9, ratingLabel: 'Excellent', price: 8000, image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=640&auto=format&fit=crop', slug: 'grand-sultan' },
    { name: 'Nishorgo Eco Cottage', location: 'Sreemangal, Sylhet', stars: 3, rating: 4.6, ratingLabel: 'Very Good', price: 3500, image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=640&auto=format&fit=crop', slug: 'nishorgo-eco' },
    { name: 'Tea Heaven Resort', location: 'Sreemangal, Sylhet', stars: 4, rating: 4.7, ratingLabel: 'Very Good', price: 4500, image: 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?q=80&w=640&auto=format&fit=crop', slug: 'tea-heaven' },
    { name: 'Lemon Garden Resort', location: 'Sreemangal, Sylhet', stars: 3, rating: 4.5, ratingLabel: 'Good', price: 2800, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=640&auto=format&fit=crop', slug: 'lemon-garden' },
  ],
  'Sylhet': [
    { name: 'Rose View Hotel', location: 'Zindabazar, Sylhet', stars: 5, rating: 4.8, ratingLabel: 'Excellent', price: 5000, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=640&auto=format&fit=crop', slug: 'rose-view' },
    { name: 'Hotel Star Pacific', location: 'Ambarkhana, Sylhet', stars: 4, rating: 4.6, ratingLabel: 'Very Good', price: 3800, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=640&auto=format&fit=crop', slug: 'hotel-star-pacific' },
    { name: 'Grand Mostafa Hotel', location: 'Sylhet City', stars: 4, rating: 4.5, ratingLabel: 'Good', price: 3200, image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=640&auto=format&fit=crop', slug: 'grand-mostafa' },
    { name: 'Noorjahan Grand Hotel', location: 'Sylhet City', stars: 5, rating: 4.7, ratingLabel: 'Very Good', price: 4500, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=640&auto=format&fit=crop', slug: 'noorjahan-grand' },
  ],
};

const ITEMS_PER_PAGE = 4;

export default function PopularHotels() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [page, setPage] = useState(1);

  const currentHotels = hotels[activeTab] || [];
  const paginated = currentHotels.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleTab = (tab: string) => { setActiveTab(tab); setPage(1); };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Header Area */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-[28px] font-bold text-[#3554D1]">Popular Hotels</h2>
          <p className="text-gray-500 mt-2 text-sm font-medium">Search hotels by popular destinations</p>
        </div>

        {/* Tabs - Right Aligned */}
        <div className="flex justify-end mb-8">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTab(tab)}
                className={`px-6 py-2.5 rounded text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-[#1D4ED8] text-white' 
                    : 'bg-gray-100 text-[#051036] hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginated.map((hotel, idx) => (
            <motion.div
              key={hotel.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 flex flex-col h-full group"
            >
              <Link href={`/trip/${hotel.slug}`} className="flex flex-col h-full">
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Rating Badge & Label */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#1D4ED8] text-white text-[11px] font-bold px-2 py-0.5 rounded">
                      {hotel.rating.toFixed(1)}
                    </span>
                    <span className="text-[#1D4ED8] text-[13px] font-semibold">{hotel.ratingLabel}</span>
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-[#051036] text-[17px] mb-2 line-clamp-1 group-hover:text-[#3554D1] transition-colors">{hotel.name}</h3>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5A623] text-[#F5A623]" />
                    ))}
                  </div>

                  {/* Location */}
                  <div className="text-gray-400 text-[12px] mb-6 font-medium">
                    {hotel.location}
                  </div>

                  {/* Price */}
                  <div className="mt-auto">
                    <p className="text-[13px] text-[#051036] font-medium">
                      From <span className="text-[#3554D1] font-bold text-xl ml-1">BDT {hotel.price}</span><span className="text-gray-400 text-[11px] font-normal ml-0.5">/night</span>
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-12 mb-4">
          {[...Array(12)].map((_, i) => (
            <button 
              key={i} 
              onClick={() => setPage(1)} 
              className={`rounded-full transition-all duration-300 ${i === 6 ? 'w-6 h-2 bg-[#1D4ED8]' : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
