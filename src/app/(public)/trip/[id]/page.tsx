'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Wifi, Coffee, Car, ShieldCheck, Waves, Dumbbell, ChevronRight, Heart, Share2, Check } from 'lucide-react';
import Link from 'next/link';

const hotel = {
  name: 'Sayeman Beach Resort',
  location: "Marine Drive Road, Cox's Bazar",
  stars: 5,
  rating: 4.9,
  reviews: 1240,
  price: 6000,
  description: "Sayeman Beach Resort is a premium 5-star destination nestled right on the Marine Drive of Cox's Bazar — the world's longest natural sea beach. The resort offers breathtaking panoramic views of the Bay of Bengal from every room. Designed with a blend of modern luxury and local heritage, each suite is equipped with world-class amenities to ensure an unforgettable stay. Whether you're here for a romantic getaway, a family vacation, or a corporate retreat, Sayeman delivers an experience beyond expectations.",
  images: [
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1280&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=640&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=640&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=640&auto=format&fit=crop',
  ],
  amenities: [
    { name: 'Free WiFi', icon: Wifi },
    { name: 'Breakfast Included', icon: Coffee },
    { name: 'Free Parking', icon: Car },
    { name: '24/7 Security', icon: ShieldCheck },
    { name: 'Infinity Pool', icon: Waves },
    { name: 'Fitness Center', icon: Dumbbell },
  ],
};

const reviews = [
  { name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100', rating: 5, date: 'March 2026', comment: 'Absolutely stunning resort! The sea view from our room was breathtaking. Staff was incredibly helpful and the food was delicious.' },
  { name: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100', rating: 5, date: 'February 2026', comment: 'Best hotel experience in Bangladesh. The infinity pool overlooking the ocean is a must. Will definitely come back!' },
  { name: 'Emma Williams', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100', rating: 4, date: 'January 2026', comment: 'Great location and beautiful rooms. The breakfast spread was amazing. Slightly pricey but worth every penny.' },
];

const related = [
  { id: 'ramada-by-wyndham', name: 'Ramada by Wyndham', location: "Cox's Bazar", price: 6000, rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400' },
  { id: 'ocean-paradise', name: 'Ocean Paradise Hotel', location: "Cox's Bazar", price: 5500, rating: 4.8, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=400' },
  { id: 'sea-pearl', name: 'Sea Pearl Beach Resort', location: "Cox's Bazar", price: 7200, rating: 4.9, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=400' },
  { id: 'windy-terrace', name: 'Windy Terrace Hotel', location: "Cox's Bazar", price: 4200, rating: 4.5, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=400' },
];

export default function TripDetailsPage() {
  const [liked, setLiked] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [reviewForm, setReviewForm] = useState({ name: '', comment: '', rating: 5 });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-[1320px] mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-[#3554D1]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/explore" className="hover:text-[#3554D1]">Hotels</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#051036] font-bold">{hotel.name}</span>
        </div>

        {/* Title Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-black text-[#051036]">{hotel.name}</h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(hotel.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-400" /> {hotel.rating}
                <span className="text-gray-400 font-normal text-sm">({hotel.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 text-[#3554D1]" /> {hotel.location}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLiked(!liked)} className={`p-3 rounded-xl border transition-all ${liked ? 'bg-red-50 border-red-200 text-red-500' : 'border-gray-200 text-gray-400 hover:border-red-200 hover:text-red-400'}`}>
              <Heart className={`w-5 h-5 ${liked ? 'fill-red-500' : ''}`} />
            </button>
            <button className="p-3 rounded-xl border border-gray-200 text-gray-400 hover:border-[#3554D1] hover:text-[#3554D1] transition-all">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-4 gap-3 h-[400px] mb-12 rounded-2xl overflow-hidden">
          <div className="col-span-2 row-span-2 relative overflow-hidden cursor-pointer" onClick={() => setActiveImg(0)}>
            <img src={hotel.images[0]} alt={hotel.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          {hotel.images.slice(1).map((img, i) => (
            <div key={i} className="relative overflow-hidden cursor-pointer" onClick={() => setActiveImg(i + 1)}>
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              {i === 2 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">+12 Photos</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-black text-[#051036] mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed text-base">{hotel.description}</p>
            </section>

            {/* Amenities */}
            <section>
              <h2 className="text-2xl font-black text-[#051036] mb-6">What This Place Offers</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map(({ name, icon: Icon }) => (
                  <div key={name} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#3554D1]" />
                    </div>
                    <span className="text-sm font-semibold text-[#051036]">{name}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-[#051036]">Guest Reviews</h2>
                <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-xl">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="font-black text-[#051036] text-lg">{hotel.rating}</span>
                  <span className="text-gray-400 text-sm">/ 5</span>
                </div>
              </div>
              <div className="space-y-5 mb-8">
                {reviews.map((r, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="font-bold text-[#051036] text-sm">{r.name}</p>
                          <p className="text-xs text-gray-400">{r.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">"{r.comment}"</p>
                  </div>
                ))}
              </div>

              {/* Write Review */}
              <div className="bg-blue-50 rounded-2xl p-6 space-y-4">
                <h3 className="font-black text-[#051036]">Write a Review</h3>
                {reviewSubmitted ? (
                  <div className="flex items-center gap-2 text-green-600 font-bold">
                    <Check className="w-5 h-5" /> Review submitted successfully!
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setReviewSubmitted(true); }} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={reviewForm.name}
                      onChange={e => setReviewForm(p => ({ ...p, name: e.target.value }))}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#3554D1] bg-white"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#051036]">Rating:</span>
                      {[1,2,3,4,5].map(n => (
                        <button key={n} type="button" onClick={() => setReviewForm(p => ({ ...p, rating: n }))}>
                          <Star className={`w-5 h-5 ${n <= reviewForm.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                        </button>
                      ))}
                    </div>
                    <textarea
                      placeholder="Share your experience..."
                      value={reviewForm.comment}
                      onChange={e => setReviewForm(p => ({ ...p, comment: e.target.value }))}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#3554D1] bg-white resize-none"
                    />
                    <button type="submit" className="bg-[#3554D1] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#2a43b0] transition-all">
                      Submit Review
                    </button>
                  </form>
                )}
              </div>
            </section>

            {/* Related */}
            <section>
              <h2 className="text-2xl font-black text-[#051036] mb-6">Similar Hotels</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {related.map(r => (
                  <Link key={r.id} href={`/trip/${r.id}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className="h-28 overflow-hidden">
                      <img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-3">
                      <p className="font-bold text-[#051036] text-xs line-clamp-1">{r.name}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[#3554D1] font-black text-xs">BDT {r.price.toLocaleString()}</span>
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span className="text-xs text-gray-500">{r.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24 bg-white border border-gray-200 rounded-3xl p-7 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-black text-[#3554D1]">BDT {hotel.price.toLocaleString()}</span>
                  <span className="text-gray-400 text-sm font-medium"> / night</span>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-xl">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-black text-[#051036] text-sm">{hotel.rating}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 border border-gray-200 rounded-xl overflow-hidden">
                  <div className="p-3 border-r border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Check In</p>
                    <p className="text-sm font-bold text-[#051036] mt-0.5">Apr 30, 2026</p>
                  </div>
                  <div className="p-3 hover:bg-gray-50 cursor-pointer transition-colors">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Check Out</p>
                    <p className="text-sm font-bold text-[#051036] mt-0.5">May 02, 2026</p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-xl p-3 hover:bg-gray-50 cursor-pointer transition-colors">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Guests</p>
                  <p className="text-sm font-bold text-[#051036] mt-0.5">2 Adults, 1 Room</p>
                </div>
              </div>

              <button className="w-full bg-[#3554D1] text-white py-4 rounded-xl font-black hover:bg-[#2a43b0] transition-all shadow-lg shadow-blue-500/20 text-base">
                Reserve Now
              </button>
              <p className="text-center text-xs text-gray-400">You won't be charged yet</p>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                {[['BDT 6,000 × 2 nights', 'BDT 12,000'], ['Discount (10%)', '-BDT 1,200'], ['Service fee', 'BDT 800']].map(([l, v]) => (
                  <div key={l} className="flex justify-between text-sm">
                    <span className="text-gray-500">{l}</span>
                    <span className={`font-bold ${v.startsWith('-') ? 'text-green-600' : 'text-[#051036]'}`}>{v}</span>
                  </div>
                ))}
                <div className="flex justify-between font-black text-[#051036] text-base pt-3 border-t border-gray-100">
                  <span>Total</span>
                  <span>BDT 11,600</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
