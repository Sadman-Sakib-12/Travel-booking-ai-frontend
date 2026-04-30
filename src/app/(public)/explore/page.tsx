'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, SlidersHorizontal, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';

const allHotels = [
  { id: 'sayeman-beach-resort', name: 'Sayeman Beach Resort', location: "Cox's Bazar", category: "Cox's Bazar", stars: 5, rating: 5.0, reviews: 1240, price: 6000, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=640&auto=format&fit=crop' },
  { id: 'ramada-by-wyndham', name: 'Ramada by Wyndham', location: "Cox's Bazar", category: "Cox's Bazar", stars: 5, rating: 4.9, reviews: 980, price: 6000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=640&auto=format&fit=crop' },
  { id: 'ocean-paradise', name: 'Ocean Paradise Hotel', location: "Cox's Bazar", category: "Cox's Bazar", stars: 5, rating: 4.8, reviews: 760, price: 5500, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=640&auto=format&fit=crop' },
  { id: 'sea-pearl', name: 'Sea Pearl Beach Resort', location: "Cox's Bazar", category: "Cox's Bazar", stars: 5, rating: 4.9, reviews: 1100, price: 7200, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=640&auto=format&fit=crop' },
  { id: 'grand-sultan', name: 'Grand Sultan Tea Resort', location: 'Sreemangal', category: 'Sreemangal', stars: 5, rating: 4.9, reviews: 540, price: 8000, image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=640&auto=format&fit=crop' },
  { id: 'nishorgo-eco', name: 'Nishorgo Eco Cottage', location: 'Sreemangal', category: 'Sreemangal', stars: 3, rating: 4.6, reviews: 320, price: 3500, image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=640&auto=format&fit=crop' },
  { id: 'rose-view', name: 'Rose View Hotel', location: 'Sylhet', category: 'Sylhet', stars: 5, rating: 4.8, reviews: 890, price: 5000, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=640&auto=format&fit=crop' },
  { id: 'hotel-star-pacific', name: 'Hotel Star Pacific', location: 'Sylhet', category: 'Sylhet', stars: 4, rating: 4.6, reviews: 430, price: 3800, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=640&auto=format&fit=crop' },
  { id: 'noorjahan-grand', name: 'Noorjahan Grand Hotel', location: 'Sylhet', category: 'Sylhet', stars: 5, rating: 4.7, reviews: 610, price: 4500, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=640&auto=format&fit=crop' },
  { id: 'windy-terrace', name: 'Windy Terrace Hotel', location: "Cox's Bazar", category: "Cox's Bazar", stars: 4, rating: 4.5, reviews: 280, price: 4200, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=640&auto=format&fit=crop' },
  { id: 'tea-heaven', name: 'Tea Heaven Resort', location: 'Sreemangal', category: 'Sreemangal', stars: 4, rating: 4.7, reviews: 390, price: 4500, image: 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?q=80&w=640&auto=format&fit=crop' },
  { id: 'grand-mostafa', name: 'Grand Mostafa Hotel', location: 'Sylhet', category: 'Sylhet', stars: 4, rating: 4.5, reviews: 210, price: 3200, image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=640&auto=format&fit=crop' },
];

const ITEMS_PER_PAGE = 8;
const categories = ["All", "Cox's Bazar", 'Sreemangal', 'Sylhet'];
const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Top Rated'];

export default function ExplorePage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(10000);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState('Newest');
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = allHotels.filter(h => {
      if (search && !h.name.toLowerCase().includes(search.toLowerCase()) && !h.location.toLowerCase().includes(search.toLowerCase())) return false;
      if (category !== 'All' && h.category !== category) return false;
      if (h.price > maxPrice) return false;
      if (h.rating < minRating) return false;
      return true;
    });
    if (sort === 'Price: Low to High') list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === 'Price: High to Low') list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === 'Top Rated') list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [search, category, maxPrice, minRating, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const resetFilters = () => { setCategory('All'); setMaxPrice(10000); setMinRating(0); setSearch(''); setPage(1); };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-[#051036] py-14">
        <div className="max-w-[1320px] mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-white">Explore Hotels</h1>
              <p className="text-white/60 mt-2">Find and book the perfect hotel for your next trip</p>
            </div>
            {/* Search Bar */}
            <div className="max-w-2xl bg-white rounded-2xl p-2 flex gap-2 shadow-2xl">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  value={search}
                  onChange={e => { setSearch(e.target.value); setPage(1); }}
                  placeholder="Search hotels, destinations..."
                  className="w-full bg-transparent border-none outline-none text-[#051036] text-sm font-medium placeholder:text-gray-400"
                />
                {search && <button onClick={() => setSearch('')}><X className="w-4 h-4 text-gray-400" /></button>}
              </div>
              <button className="bg-[#3554D1] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#2a43b0] transition-all">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`lg:w-72 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-7 sticky top-24">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-[#051036] flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-[#3554D1]" /> Filters
                </h3>
                <button onClick={resetFilters} className="text-xs text-[#3554D1] font-bold hover:underline">Reset All</button>
              </div>

              {/* Category */}
              <div className="space-y-3">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Destination</h4>
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={category === cat}
                      onChange={() => { setCategory(cat); setPage(1); }}
                      className="w-4 h-4 accent-[#3554D1]"
                    />
                    <span className={`text-sm font-medium transition-colors ${category === cat ? 'text-[#3554D1] font-bold' : 'text-gray-600 group-hover:text-[#3554D1]'}`}>{cat}</span>
                  </label>
                ))}
              </div>

              {/* Price Range */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Max Price</h4>
                  <span className="text-xs font-bold text-[#3554D1]">BDT {maxPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="10000"
                  step="500"
                  value={maxPrice}
                  onChange={e => { setMaxPrice(Number(e.target.value)); setPage(1); }}
                  className="w-full accent-[#3554D1]"
                />
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                  <span>BDT 1,000</span>
                  <span>BDT 10,000</span>
                </div>
              </div>

              {/* Min Rating */}
              <div className="space-y-3">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Min Rating</h4>
                <div className="flex gap-2 flex-wrap">
                  {[0, 4, 4.5, 4.8].map(r => (
                    <button
                      key={r}
                      onClick={() => { setMinRating(r); setPage(1); }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${minRating === r ? 'bg-[#3554D1] text-white border-[#3554D1]' : 'border-gray-200 text-gray-600 hover:border-[#3554D1]'}`}
                    >
                      {r === 0 ? 'All' : `${r}+`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 space-y-6">
            {/* Toolbar */}
            <div className="flex items-center justify-between bg-white px-5 py-3.5 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 text-sm font-bold text-[#051036] border border-gray-200 px-3 py-2 rounded-lg">
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </button>
                <span className="text-gray-500 text-sm">
                  <span className="font-bold text-[#051036]">{filtered.length}</span> hotels found
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400 hidden sm:block">Sort:</span>
                <select
                  value={sort}
                  onChange={e => { setSort(e.target.value); setPage(1); }}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm font-bold text-[#051036] outline-none focus:border-[#3554D1]"
                >
                  {sortOptions.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>

            {/* Grid */}
            {paginated.length === 0 ? (
              <div className="bg-white rounded-2xl p-16 text-center">
                <p className="text-gray-400 font-medium">No hotels found. Try adjusting your filters.</p>
                <button onClick={resetFilters} className="mt-4 text-[#3554D1] font-bold text-sm hover:underline">Reset Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {paginated.map((hotel, idx) => (
                  <motion.div
                    key={hotel.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col h-full group"
                  >
                    <div className="relative h-[180px] overflow-hidden">
                      <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-[#051036]">{hotel.rating}</span>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-center gap-1 text-gray-400 text-xs mb-1.5">
                        <MapPin className="w-3 h-3" /> {hotel.location}
                      </div>
                      <h3 className="font-bold text-[#051036] text-sm mb-1 line-clamp-2 group-hover:text-[#3554D1] transition-colors">{hotel.name}</h3>
                      <div className="flex items-center gap-0.5 mb-3">
                        {[...Array(hotel.stars)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                      </div>
                      <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-gray-400">From</span>
                          <p className="text-[#3554D1] font-black text-sm">BDT {hotel.price.toLocaleString()}<span className="text-[10px] font-normal text-gray-400">/night</span></p>
                        </div>
                        <Link href={`/trip/${hotel.id}`} className="bg-[#3554D1] text-white text-xs font-bold px-3 py-2 rounded-lg hover:bg-[#2a43b0] transition-all">
                          View
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-4">
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#3554D1] hover:text-[#3554D1] disabled:opacity-40 transition-all">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button key={i} onClick={() => setPage(i + 1)} className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${page === i + 1 ? 'bg-[#3554D1] text-white' : 'border border-gray-200 hover:border-[#3554D1] hover:text-[#3554D1]'}`}>
                    {i + 1}
                  </button>
                ))}
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#3554D1] hover:text-[#3554D1] disabled:opacity-40 transition-all">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
