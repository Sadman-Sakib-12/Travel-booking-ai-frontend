'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Star, MapPin, ChevronRight, ChevronDown, ChevronUp,
  Check, X, Wifi, Shield, Clock, Users, BedDouble,
  Plus, Minus, ArrowUpRight, Camera,
  Luggage, AirVent, Baby, Globe, ShieldCheck, Tv2,
  Droplets, Tv, Flame, BellRing, Shirt, Utensils, Coffee
} from 'lucide-react';
import Link from 'next/link';

const hotel = {
  name: 'Grand Mostafa Hotel Ababil',
  location: 'Hotel Motel Road, Sylhet, Zindabazar Gate, Sylhet, Sylhet, Bangladesh',
  stars: 4,
  rating: 4.2,
  reviews: 0,
  price: 4752,
  description:
    "You can directly book the best price if your travel dates are available, all discounts are already included. In the following hotel description you will find all information about our listing.",
  images: [
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1280&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=640&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=640&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=640&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=640&auto=format&fit=crop',
  ],
};

const rooms = [
  {
    name: 'Executive Couple',
    price: 3493,
    originalPrice: 6986,
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=400&auto=format&fit=crop',
    ],
    sleeps: 2,
    available: 3,
  },
  {
    name: 'Premium Couple',
    price: 3784,
    originalPrice: 7568,
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=400&auto=format&fit=crop',
    ],
    sleeps: 2,
    available: 2,
  },
  {
    name: 'Royal Deluxe Twin',
    price: 3929,
    originalPrice: 7858,
    images: [
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400&auto=format&fit=crop',
    ],
    sleeps: 2,
    available: 1,
  },
];

const similar = [
  { id: 'rose-view', name: 'Rose View Hotel', location: 'Sylhet', rating: 4.5, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=400' },
  { id: 'grand-sylhet', name: 'Grand Sylhet Hotel and Resort', location: 'Sylhet', rating: 4.6, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=400' },
  { id: 'grand-sultan', name: 'Grand Sultan Tea Resort & Golf', location: 'Sreemangal', rating: 4.9, image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=400' },
  { id: 'panshi-inn', name: 'Panshi Inn', location: 'Sylhet', rating: 4.3, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=400' },
];

const facilities = [
  {
    category: 'Front Desk',
    items: [
      { name: 'Luggage Storage', available: true, icon: Luggage },
    ],
  },
  {
    category: 'General',
    items: [
      { name: 'Air Conditioning', available: true, icon: AirVent },
      { name: 'Family/Kid Friendly', available: false, icon: Baby },
      { name: 'Internet Access', available: true, icon: Globe },
      { name: 'Free Wi-Fi', available: true, icon: Wifi },
      { name: 'Security Guard', available: false, icon: Shield },
    ],
  },
  {
    category: 'Room Amenities',
    items: [
      { name: 'A/C Room', available: true, icon: AirVent },
      { name: 'Bottled Water', available: false, icon: Droplets },
      { name: 'Cable TV', available: false, icon: Tv },
      { name: 'Electric Kettle', available: false, icon: Flame },
      { name: 'Room Service', available: false, icon: BellRing },
      { name: 'Toiletries', available: true, icon: Shirt },
      { name: 'Wardrobe/Closet', available: false, icon: Shirt },
    ],
  },
  {
    category: 'Cleaning',
    items: [
      { name: 'Daily Housekeeping', available: true, icon: Utensils },
    ],
  },
  {
    category: 'Safety Security',
    items: [
      { name: '24-Hour Security', available: true, icon: ShieldCheck },
    ],
  },
  {
    category: 'Service',
    items: [
      { name: 'Breakfast', available: true, icon: Coffee },
    ],
  },
];

const faqs = [
  {
    q: 'Is my hotel booking instantly confirmed?',
    a: 'Yes, your booking is instantly confirmed upon successful payment. You will receive a confirmation email with your booking details.',
  },
  {
    q: 'What documents are required at check in?',
    a: 'Guests are required to present a valid national ID card or passport at check-in. For local guests, a national ID is mandatory. Married couples must present proof of marriage.',
  },
  {
    q: 'What are the standard check in and check out times?',
    a: 'Standard check-in time is 2:00 PM and check-out time is 11:00 AM.',
  },
  {
    q: 'Are early check in or late check out guaranteed?',
    a: 'Early check-in and late check-out are subject to availability and cannot be guaranteed. Please contact the hotel directly to request these services.',
  },
  {
    q: 'Are taxes and service charges included in the price?',
    a: 'Yes, all applicable taxes and service charges are included in the displayed price. There are no hidden fees.',
  },
];

// ─── Star Rating Row ────────────────────────────────────────────────────────
function StarRatingRow({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-sm text-gray-600 w-32">{label}</span>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} type="button" onClick={() => onChange(n)}>
            <Star className={`w-4 h-4 ${n <= value ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── FAQ Accordion Item ──────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#051036] text-sm pr-4">{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Room Card ───────────────────────────────────────────────────────────────
function RoomCard({ room, index }: { room: typeof rooms[0]; index: number }) {
  const [added, setAdded] = useState(false);
  const discount = Math.round((1 - room.price / room.originalPrice) * 100);
  const taxes = Math.round(room.price * 0.36);

  return (
    <div className="flex flex-col md:flex-row border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">

      {/* ── LEFT PANEL ── */}
      <div className="md:w-[300px] flex-shrink-0 bg-white p-4 border-r border-gray-100">
        {/* Room name */}
        <h3 className="font-bold text-[#051036] text-[17px] mb-3">{room.name}</h3>

        {/* Main image */}
        <div className="w-full h-[160px] rounded-lg overflow-hidden mb-2">
          <img src={room.images[0]} alt={room.name} className="w-full h-full object-cover" />
        </div>

        {/* 3 thumbnails */}
        <div className="grid grid-cols-3 gap-1.5 mb-4">
          {room.images.slice(1).map((img, i) => (
            <div key={i} className="h-[60px] rounded-md overflow-hidden">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Show Room Information */}
        <button className="text-[#3554D1] text-sm font-semibold hover:underline underline-offset-2 mb-4 block">
          Show Room Information
        </button>

        {/* Sleeps + availability */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">Sleeps</p>
            <div className="flex items-center gap-1">
              {[...Array(room.sleeps)].map((_, i) => (
                <Users key={i} className="w-5 h-5 text-gray-400" />
              ))}
            </div>
          </div>
          <span className="bg-red-50 text-red-500 border border-red-200 text-xs font-bold px-3 py-1 rounded-full">
            Only {room.available} rooms left!
          </span>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex-1 bg-[#f8f9fc] p-5 flex flex-col justify-between">
        <div>
          {/* Option label + Save badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-600 border border-gray-300 bg-white rounded-md px-3 py-1">
              Option {index + 1}
            </span>
            <span className="bg-amber-100 text-amber-700 text-sm font-bold px-3 py-1 rounded-md">
              Save {discount}%
            </span>
          </div>

          {/* Your price includes */}
          <p className="text-sm font-semibold text-gray-700 mb-1">Your price includes</p>
          <div className="flex items-center gap-1.5 mb-5">
            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span className="text-sm text-green-600 font-medium">Breakfast Included</span>
          </div>

          {/* Pricing */}
          <div className="text-right mb-1">
            <p className="text-xs text-gray-400">
              Starts from <span className="line-through">BDT {room.originalPrice.toLocaleString()}</span>
            </p>
            <p className="text-[32px] font-black text-[#051036] leading-none">
              BDT {room.price.toLocaleString()}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">+ BDT {taxes.toLocaleString()} Taxes &amp; Fees</p>
            <p className="text-xs text-gray-400">for 1 night</p>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-5">
          {/* Exclusive offer button */}
          <button className="flex items-center gap-2 border border-gray-300 bg-white text-[#051036] text-sm font-semibold px-4 py-2.5 rounded-lg hover:border-[#3554D1] hover:text-[#3554D1] transition-colors">
            <BedDouble className="w-4 h-4 text-[#3554D1]" />
            Exclusive TripBooking.Ai Offer
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          </button>

          {/* Add room button */}
          <button
            onClick={() => setAdded(!added)}
            className={`flex items-center justify-center gap-2 text-sm font-bold px-6 py-2.5 rounded-lg transition-colors ${
              added
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-[#3554D1] text-white hover:bg-[#2a43b0]'
            }`}
          >
            {added ? (
              <><Check className="w-4 h-4" /> Room Added</>
            ) : (
              <><span>Add room {index + 1}</span> <Plus className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function TripDetailsPage() {
  const [showMore, setShowMore] = useState(false);
  const [reviewRatings, setReviewRatings] = useState({ service: 5, cleanliness: 5, comfort: 5, condition: 5, neighbourhood: 5 });
  const [reviewForm, setReviewForm] = useState({ title: '', email: '', name: '', comment: '' });

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-[1440px] mx-auto px-4 py-10">

        {/* Breadcrumb + Title Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-3">
              <Link href="/" className="hover:text-[#3554D1]">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/explore" className="hover:text-[#3554D1]">Sylhet Hotels</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#051036] font-semibold">Grand Mostafa Hotel</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-[#051036] mb-2">{hotel.name}</h1>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(hotel.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <MapPin className="w-3.5 h-3.5 text-[#3554D1]" />
                <span>{hotel.location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-right">
              <p className="text-xs text-gray-400">From</p>
              <p className="text-xl font-black text-[#051036]">BDT {hotel.price.toLocaleString()}</p>
            </div>
            <button className="bg-[#3554D1] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#2a43b0] transition-colors text-sm whitespace-nowrap">
              Select Rooms
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-4 gap-2 h-[400px] mb-10 rounded-2xl overflow-hidden">
          <div className="col-span-2 row-span-2 relative overflow-hidden">
            <img src={hotel.images[0]} alt={hotel.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          {hotel.images.slice(1).map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              {i === 3 && (
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center cursor-pointer">
                  <Camera className="w-6 h-6 text-white mb-1" />
                  <span className="text-white font-bold text-sm">See All Photos</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* TWO-COLUMN LAYOUT - sections 1-4 + sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-[65%] space-y-10">
            {/* 1. Property Highlights */}
            <section>
              <h2 className="text-xl font-black text-[#051036] mb-3">Property Highlights</h2>
              <p className="text-gray-400 text-sm italic">No highlights available</p>
            </section>

            {/* 2. Overview */}
            <section>
              <h2 className="text-xl font-black text-[#051036] mb-3">Overview</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {showMore ? hotel.description + ' ' + hotel.description : hotel.description}
              </p>
              <button onClick={() => setShowMore(!showMore)} className="text-[#3554D1] text-sm font-semibold mt-2 hover:underline">
                {showMore ? 'Show Less' : 'Show More'}
              </button>
            </section>

            {/* 3. Most Popular Facilities */}
            <section>
              <h2 className="text-xl font-black text-[#051036] mb-4">Most Popular Facilities</h2>
              <div className="flex flex-wrap gap-4">
                {[{ label: 'Free Wi-Fi', icon: Wifi }, { label: '24 Hour Security', icon: Shield }].map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#3554D1]" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#3554D1]" />
                      <span className="text-sm font-semibold text-[#051036]">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Check-in / Check-out */}
            <section>
              <h2 className="text-xl font-black text-[#051036] mb-4">Check-in / Check-out</h2>
              <div className="flex gap-4">
                <div className="flex-1 border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-[#3554D1]" />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Check In</span>
                  </div>
                  <p className="text-lg font-black text-[#051036]">02:00 PM</p>
                </div>
                <div className="flex-1 border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-[#3554D1]" />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Check Out</span>
                  </div>
                  <p className="text-lg font-black text-[#051036]">11:00 AM</p>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR - Map + Room Summary */}
          <aside className="lg:w-[35%]">
            <div className="sticky top-24 space-y-4">
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 relative flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-[#3554D1] mx-auto mb-2" />
                    <p className="text-xs text-gray-500 px-4 text-center">{hotel.location}</p>
                  </div>
                </div>
                <div className="p-3">
                  <button className="w-full border border-[#3554D1] text-[#3554D1] font-bold text-sm py-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" /> Show on map
                  </button>
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-black text-[#051036] text-base mb-3">Room Summary</h3>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <BedDouble className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p className="font-bold text-gray-400 text-sm mb-1">No Rooms Added</p>
                  <p className="text-xs text-gray-400 leading-relaxed">Select a room from the available options below to see pricing details</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* FULL WIDTH SECTIONS - sections 5-11 */}
        <div className="mt-10 space-y-0">

          {/* 5. Available Rooms */}
          <section className="pt-8 border-t border-gray-100">
            <h2 className="text-xl font-black text-[#051036] mb-4">Available Rooms</h2>
            <div className="space-y-4">
              {rooms.map((room, i) => (
                <RoomCard key={room.name} room={room} index={i} />
              ))}
            </div>
          </section>

          {/* 6. Hotel & Room Facilities */}
          <section className="pt-8 border-t border-gray-100 mt-10">
            <h2 className="text-xl font-black text-[#051036] mb-5">Hotel &amp; Room Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* col 1: Front Desk + General */}
              <div className="space-y-4">
                {facilities.filter(cat => cat.category === 'Front Desk' || cat.category === 'General').map((cat) => (
                  <div key={cat.category} className="bg-[#f8f9fc] border border-gray-100 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Check className="w-4 h-4 text-[#3554D1] flex-shrink-0" />
                      <h3 className="font-bold text-[#051036] text-sm">{cat.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {cat.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.name} className="flex items-center gap-2 text-sm">
                            <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${item.available ? 'text-[#3554D1]' : 'text-gray-300'}`} />
                            <span className={item.available ? 'text-gray-700' : 'text-gray-400'}>
                              {item.name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
              {/* col 2: Room Amenities */}
              <div className="space-y-4">
                {facilities.filter(cat => cat.category === 'Room Amenities').map((cat) => (
                  <div key={cat.category} className="bg-[#f8f9fc] border border-gray-100 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Check className="w-4 h-4 text-[#3554D1] flex-shrink-0" />
                      <h3 className="font-bold text-[#051036] text-sm">{cat.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {cat.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.name} className="flex items-center gap-2 text-sm">
                            <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${item.available ? 'text-[#3554D1]' : 'text-gray-300'}`} />
                            <span className={item.available ? 'text-gray-700' : 'text-gray-400'}>
                              {item.name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
              {/* col 3: Cleaning + Safety Security + Service */}
              <div className="space-y-4">
                {facilities.filter(cat => cat.category === 'Cleaning' || cat.category === 'Safety Security' || cat.category === 'Service').map((cat) => (
                  <div key={cat.category} className="bg-[#f8f9fc] border border-gray-100 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Check className="w-4 h-4 text-[#3554D1] flex-shrink-0" />
                      <h3 className="font-bold text-[#051036] text-sm">{cat.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {cat.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.name} className="flex items-center gap-2 text-sm">
                            <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${item.available ? 'text-[#3554D1]' : 'text-gray-300'}`} />
                            <span className={item.available ? 'text-gray-700' : 'text-gray-400'}>
                              {item.name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Guest Reviews */}
          <section className="pt-8 border-t border-gray-100 mt-10">
            <h2 className="text-xl font-black text-[#051036] mb-4">Guest Reviews</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-gray-50 rounded-xl p-6 flex items-center justify-center">
                <p className="text-gray-400 text-sm italic">No reviews available yet</p>
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-6 flex items-center justify-center">
                <p className="text-gray-400 text-sm italic">No reviews available yet</p>
              </div>
            </div>
          </section>

          {/* 8. Leave a Reply */}
          <section className="pt-8 border-t border-gray-100 mt-10">
            <h2 className="text-xl font-black text-[#051036] mb-4">Leave a Reply</h2>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-48 flex-shrink-0">
                  <p className="text-sm font-bold text-[#051036] mb-3">Your Rating</p>
                  <StarRatingRow label="Service" value={reviewRatings.service} onChange={(v) => setReviewRatings(p => ({ ...p, service: v }))} />
                  <StarRatingRow label="Cleanliness" value={reviewRatings.cleanliness} onChange={(v) => setReviewRatings(p => ({ ...p, cleanliness: v }))} />
                  <StarRatingRow label="Comfort" value={reviewRatings.comfort} onChange={(v) => setReviewRatings(p => ({ ...p, comfort: v }))} />
                  <StarRatingRow label="Condition" value={reviewRatings.condition} onChange={(v) => setReviewRatings(p => ({ ...p, condition: v }))} />
                  <StarRatingRow label="Neighbourhood" value={reviewRatings.neighbourhood} onChange={(v) => setReviewRatings(p => ({ ...p, neighbourhood: v }))} />
                </div>
                <div className="flex-1 space-y-3">
                  <input type="text" placeholder="Title" value={reviewForm.title} onChange={(e) => setReviewForm(p => ({ ...p, title: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#3554D1]" />
                  <input type="email" placeholder="Email *" value={reviewForm.email} onChange={(e) => setReviewForm(p => ({ ...p, email: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#3554D1]" />
                  <input type="text" placeholder="Name" value={reviewForm.name} onChange={(e) => setReviewForm(p => ({ ...p, name: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#3554D1]" />
                  <textarea placeholder="Write Your Comment" value={reviewForm.comment} onChange={(e) => setReviewForm(p => ({ ...p, comment: e.target.value }))} rows={4} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#3554D1] resize-none" />
                  <button type="button" className="bg-[#3554D1] text-white font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-[#2a43b0] transition-colors flex items-center gap-2">
                    Post Comment <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 9. Hotel Policies */}
          <section className="pt-8 border-t border-gray-100 mt-10">
              <h2 className="text-xl font-black text-[#051036] mb-4">Hotel Policies</h2>
              <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
                <div className="bg-gray-50 px-5 py-4">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-44 flex-shrink-0"><p className="font-bold text-[#051036] text-sm">Pet Policy</p></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2">Pets are not allowed.</p>
                      <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
                        <tbody><tr className="bg-white"><td className="px-3 py-2 font-semibold text-gray-600 border-r border-gray-100">Pets Allowed</td><td className="px-3 py-2 text-gray-500">No</td></tr></tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-44 flex-shrink-0"><p className="font-bold text-[#051036] text-sm">Check In &amp; Check Out Policy</p></div>
                    <div className="flex-1 text-sm text-gray-600 space-y-1">
                      <p>Check In: From 2:00 PM</p>
                      <p>Check Out: Until 11:00 AM</p>
                      <p className="text-xs text-gray-400">Early check-in and late check-out are subject to availability.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-4">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-44 flex-shrink-0"><p className="font-bold text-[#051036] text-sm">House Rules</p></div>
                    <div className="flex-1">
                      <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-100"><tr><th className="px-3 py-2 text-left font-semibold text-gray-600 border-r border-gray-200">Policy Note</th><th className="px-3 py-2 text-left font-semibold text-gray-600">Details</th></tr></thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                          <tr><td className="px-3 py-2 text-gray-600 border-r border-gray-100">Identification</td><td className="px-3 py-2 text-gray-500">Local identification required</td></tr>
                          <tr><td className="px-3 py-2 text-gray-600 border-r border-gray-100">Couples</td><td className="px-3 py-2 text-gray-500">Proof of marriage required</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-44 flex-shrink-0"><p className="font-bold text-[#051036] text-sm">Child Policy</p></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2">Children of all ages welcome.</p>
                      <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-100"><tr><th className="px-3 py-2 text-left font-semibold text-gray-600 border-r border-gray-200">Age Group</th><th className="px-3 py-2 text-left font-semibold text-gray-600">Rate</th></tr></thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                          <tr><td className="px-3 py-2 text-gray-600 border-r border-gray-100">Children below 5 years</td><td className="px-3 py-2 text-gray-500">Free</td></tr>
                          <tr><td className="px-3 py-2 text-gray-600 border-r border-gray-100">Children 6–11 years</td><td className="px-3 py-2 text-gray-500">Per child rate applies</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-4">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-44 flex-shrink-0"><p className="font-bold text-[#051036] text-sm">Extra Bed Policy</p></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2">Extra beds are not included and must be paid directly at the property.</p>
                      <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-100"><tr><th className="px-3 py-2 text-left font-semibold text-gray-600 border-r border-gray-200">Type</th><th className="px-3 py-2 text-left font-semibold text-gray-600">Rate</th></tr></thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                          <tr><td className="px-3 py-2 text-gray-600 border-r border-gray-100">Rollaway / Extra Bed</td><td className="px-3 py-2 text-gray-500">BDT 1,000 per night</td></tr>
                          <tr><td className="px-3 py-2 text-gray-600 border-r border-gray-100">Baby Cot</td><td className="px-3 py-2 text-gray-500">Free</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-44 flex-shrink-0"><p className="font-bold text-[#051036] text-sm">Cancellation Policy</p></div>
                    <div className="flex-1 text-sm text-gray-600 space-y-1.5">
                      <p>Refundable bookings may be cancelled free of charge up to 48 hours before check-in. Non-refundable rates cannot be cancelled or modified.</p>
                      <p className="text-xs text-gray-400">Blackout dates may apply during peak seasons and public holidays. Please review the specific rate conditions before booking.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-4">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-44 flex-shrink-0"><p className="font-bold text-[#051036] text-sm">Breakfast</p></div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-600 space-y-0.5 mb-2">
                        <p><span className="font-semibold text-[#051036]">Cuisine:</span> Multi-cuisine</p>
                        <p><span className="font-semibold text-[#051036]">Style:</span> Buffet / Set Menu</p>
                        <p><span className="font-semibold text-[#051036]">Opening Hours:</span> 7:00 AM to 10:00 AM</p>
                      </div>
                      <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-100"><tr><th className="px-3 py-2 text-left font-semibold text-gray-600 border-r border-gray-200">Guest Type</th><th className="px-3 py-2 text-left font-semibold text-gray-600">Rate</th></tr></thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                          <tr><td className="px-3 py-2 text-gray-600 border-r border-gray-100">Children below 5 years</td><td className="px-3 py-2 text-gray-500">Free</td></tr>
                          <tr><td className="px-3 py-2 text-gray-600 border-r border-gray-100">Children 6–11 years</td><td className="px-3 py-2 text-gray-500">Per child rate</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          {/* 10. FAQs */}
          <section className="pt-8 border-t border-gray-100 mt-10">
            <h2 className="text-xl font-black text-[#051036] mb-4">FAQs about hotel</h2>
            <div className="space-y-2">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </section>

          {/* 11. Popular Similar Properties */}
          <section className="pt-8 border-t border-gray-100 mt-10">
            <h2 className="text-xl font-black text-[#051036] mb-1">Popular properties similar to hotel</h2>
            <p className="text-sm text-gray-400 mb-5">Guests who viewed this hotel also viewed these properties</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {similar.map((s) => (
                <Link key={s.id} href={`/trip/${s.id}`} className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="h-32 overflow-hidden relative">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">Very Good</span>
                  </div>
                  <div className="p-3">
                    <p className="font-bold text-[#051036] text-xs line-clamp-2 mb-1">{s.name}</p>
                    <div className="flex items-center gap-0.5 mb-1">
                      {[...Array(4)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-[10px] text-gray-400">{s.rating} after hotel</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 mt-5">
              {[0, 1, 2].map((i) => (
                <button key={i} className={`w-2 h-2 rounded-full transition-colors ${i === 0 ? 'bg-[#3554D1]' : 'bg-gray-200'}`} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
