'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, SlidersHorizontal, ChevronLeft, ChevronRight, X, Heart, ArrowUpRight, BadgeCheck, BedDouble, Activity, Waves, Dumbbell, Bath, Sparkles } from 'lucide-react';
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

  const resetFilters = () => {
    setCategory('All');
    setMaxPrice(10000);
    setMinRating(0);
    setSearch('');
    setPage(1);
  };

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
            {/* AI Smart Search */}
            <div className="max-w-3xl bg-white rounded-2xl p-2 flex gap-2 shadow-2xl border-2 border-transparent focus-within:border-blue-200 transition-colors">
              <div className="flex-1 flex items-center gap-3 px-4">
                <div className="w-8 h-8 rounded-full bg-[#3554D1]/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-[#3554D1]" />
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={e => { setSearch(e.target.value); setPage(1); }}
                  placeholder="Ask AI: e.g. 'Beach resorts under 5k BDT with pool'"
                  className="w-full bg-transparent border-none outline-none text-[#051036] text-[15px] font-medium placeholder:text-gray-400"
                />
                {search && <button onClick={() => setSearch('')}><X className="w-4 h-4 text-gray-400" /></button>}
              </div>
              <button className="bg-[#051036] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#112975] transition-all flex items-center gap-2 flex-shrink-0">
                <Sparkles className="w-4 h-4" /> Smart Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`lg:w-72 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="space-y-6">
              {/* Map Preview */}
              <div className="bg-blue-50/50 rounded-xl p-2 relative overflow-hidden h-[160px] flex items-center justify-center border border-gray-200">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%233554D1\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '20px 20px' }}></div>
                <button className="relative z-10 bg-white border border-[#3554D1] text-[#3554D1] font-bold text-sm px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-sm hover:bg-blue-50 transition-colors">
                  <MapPin className="w-4 h-4" /> Show on map
                </button>
              </div>

              {/* Search */}
              <div>
                <h4 className="text-[15px] font-bold text-[#051036] mb-3">Search by property name</h4>
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="text" placeholder="Search hotel name" className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 text-sm outline-none focus:border-[#3554D1] text-[#051036]" />
                </div>
              </div>

              <div className="w-full h-px bg-gray-200"></div>

              {/* Price Range */}
              <div>
                <h4 className="text-[15px] font-bold text-[#051036] mb-4">Price Range</h4>
                <p className="text-sm font-medium text-gray-500 mb-4">BDT 0 - BDT {maxPrice.toLocaleString()}</p>
                <div className="relative px-2">
                  <input
                    type="range"
                    min="1000"
                    max="40000"
                    step="1000"
                    value={maxPrice}
                    onChange={e => { setMaxPrice(Number(e.target.value)); setPage(1); }}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3554D1]"
                  />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-[3px] border-[#3554D1] rounded-full pointer-events-none"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-[3px] border-[#3554D1] rounded-full pointer-events-none" style={{ left: `calc(${(maxPrice - 1000) / 39000 * 100}% - 6px)` }}></div>
                </div>
              </div>

              <div className="w-full h-px bg-gray-200"></div>

              {/* Star Rating */}
              <div>
                <h4 className="text-[15px] font-bold text-[#051036] mb-4">Star Rating</h4>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5].map(r => (
                    <button
                      key={r}
                      onClick={() => { setMinRating(r); setPage(1); }}
                      className={`px-2 py-2 rounded-lg text-xs font-bold border transition-all ${minRating === r ? 'bg-[#3554D1]/5 border-[#3554D1] text-[#3554D1]' : 'border-gray-200 text-gray-500 hover:border-[#3554D1] hover:text-[#3554D1]'}`}
                    >
                      {r} Star{r > 1 && 's'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-gray-200"></div>

              {/* Checkbox Lists */}
              {[
                { title: 'Accommodation Type', items: ['Hotel', 'Resort'] },
                { title: 'Facilities', items: ['Breakfast', 'Non-smoking', 'WiFi', 'Parking', 'Swimming Pool', 'Room Service', 'Airport Shuttle', 'Air Conditioning'] },
                { title: 'Amenities', items: ['Air conditioning', 'Balcony', 'Bathtub', 'Hill View', 'Non-Smoking Room', 'Smoking Room', 'Tea and Coffee', 'TV', 'Wi-Fi', 'Sea View'] },
                { title: 'Neighborhood', items: ['Kolatoli', 'Hotel Motel Zone', 'Inani', 'Sugandha', 'Laboni', 'Marine Drive'] }
              ].map((section, sidx) => (
                <div key={sidx} className="space-y-4">
                  <h4 className="text-[15px] font-bold text-[#051036]">{section.title}</h4>
                  <div className="space-y-3">
                    {section.items.map(item => (
                      <label key={item} className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-4 h-4 mt-0.5">
                          <input type="checkbox" className="w-4 h-4 border-2 border-gray-300 rounded-sm appearance-none checked:bg-[#3554D1] checked:border-[#3554D1] transition-colors peer cursor-pointer" />
                          <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-[13px] font-medium text-[#051036] leading-tight group-hover:text-[#3554D1] transition-colors">{item}</span>
                      </label>
                    ))}
                  </div>
                  {sidx < 3 && <div className="w-full h-px bg-gray-200 mt-6"></div>}
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* AI Recommendation Banner */}
            <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/50 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
               <div>
                  <h3 className="font-black text-[#051036] flex items-center gap-2 text-lg"><Sparkles className="w-5 h-5 text-[#3554D1]"/> AI Top Picks for You</h3>
                  <p className="text-gray-600 text-sm mt-1">Based on your recent searches for beach resorts.</p>
               </div>
               <button className="text-sm font-bold text-[#3554D1] bg-white px-5 py-2.5 rounded-xl border border-blue-100 hover:bg-blue-50 transition-colors shadow-sm whitespace-nowrap">
                  View Recommendations
               </button>
            </div>

            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 text-sm font-bold text-[#051036] border border-gray-200 px-3 py-2 rounded-lg">
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
              <div className="hidden lg:block"></div>
              <div className="flex items-center">
                <div className="relative">
                  <select
                    value={sort}
                    onChange={e => { setSort(e.target.value); setPage(1); }}
                    className="appearance-none bg-white border border-[#3554D1] rounded-full px-5 py-2.5 pr-10 text-sm font-bold text-[#3554D1] outline-none hover:bg-blue-50 cursor-pointer transition-colors shadow-sm"
                  >
                    <option>Sort by Popularity</option>
                    {sortOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <Search className="w-4 h-4 text-[#3554D1] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* List */}
            {paginated.length === 0 ? (
              <div className="bg-white rounded-2xl p-16 text-center border border-gray-200">
                <p className="text-gray-400 font-medium">No hotels found. Try adjusting your filters.</p>
                <button onClick={resetFilters} className="mt-4 text-[#3554D1] font-bold text-sm hover:underline">Reset Filters</button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {paginated.map((hotel, idx) => (
                  <motion.div
                    key={hotel.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="bg-white rounded-[16px] overflow-hidden border border-gray-200 flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300 group"
                  >
                    {/* Image Section */}
                    <div className="relative w-full md:w-[280px] h-[220px] md:h-auto flex-shrink-0 p-3">
                      <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
                        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors z-10">
                          <Heart className="w-3.5 h-3.5 text-gray-400 hover:text-red-500 transition-colors" />
                        </button>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-4 md:p-5 md:pl-2 flex flex-col justify-between">
                      <div className="flex flex-col md:flex-row justify-between gap-4 h-full">
                        <div className="flex-1 flex flex-col">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="text-[20px] font-bold text-[#051036] leading-tight hover:text-[#3554D1] transition-colors cursor-pointer">{hotel.name}</h3>
                            <div className="flex items-center gap-0.5">
                              {[...Array(hotel.stars)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                            </div>
                          </div>
                          
                          <p className="text-[13px] text-gray-500 flex items-center gap-1.5 flex-wrap mb-4">
                            28-29, Hotel Motel Zone, Kolatoli, Cox's Bazar <span className="text-gray-400 font-bold">•</span> <button className="text-[#3554D1] hover:underline">Show on map</button>
                          </p>

                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#3554D1] text-[#3554D1] text-[13px] font-medium mb-4 w-fit">
                            <BadgeCheck className="w-4 h-4" fill="#3554D1" stroke="white" /> Official Partner
                          </div>

                          <div className="mt-auto">
                            <p className="text-[14px] text-[#051036] flex items-center gap-1 mb-1">
                              Deluxe King Without Balcony <span className="text-gray-400 font-bold mx-1">•</span> 1x <BedDouble className="w-4 h-4 text-[#3554D1]" />
                            </p>
                            <p className="text-[14px] font-medium text-[#008768] mb-4">Only {(hotel.reviews % 5) + 1} rooms left at this price</p>
                            
                            <div className="inline-flex items-center gap-4 bg-gray-100/80 rounded-full px-4 py-1.5 text-[13px] text-gray-600 font-medium flex-wrap">
                              <span className="flex items-center gap-1.5"><Activity className="w-4 h-4 text-[#3554D1]" /> Spa</span>
                              <span className="flex items-center gap-1.5"><Waves className="w-4 h-4 text-[#3554D1]" /> Pool</span>
                              <span className="flex items-center gap-1.5"><Dumbbell className="w-4 h-4 text-[#3554D1]" /> Gym</span>
                              <span className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-[#3554D1]" /> Bathtub</span>
                            </div>
                          </div>
                        </div>

                        {/* Right side details */}
                        <div className="flex flex-col items-end text-right min-w-[160px] justify-between">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="font-medium text-[#051036] text-[13px]">Exceptional</span>
                            <div className="bg-[#1a3b99] text-white font-bold text-[13px] px-2 py-1 rounded-[4px]">
                              {hotel.rating.toFixed(1)}
                            </div>
                          </div>

                          <div className="flex flex-col items-end">
                            <div className="bg-[#fef4e3] text-[#b8761a] font-medium text-[13px] px-2 py-0.5 rounded-[4px] mb-1.5">
                              Save 51%
                            </div>
                            <p className="text-[13px] text-gray-500 mb-0.5">
                              Starts from <span className="line-through">BDT {(hotel.price * 2).toLocaleString()}</span>
                            </p>
                            <p className="text-[26px] font-bold text-[#051036] leading-none mb-1 tracking-tight">
                              BDT {hotel.price.toLocaleString()}
                            </p>
                            <p className="text-[12px] text-gray-500 mb-4">
                              for 1 night, per room
                            </p>
                            
                            <Link href={`/trip/${hotel.id}`} className="bg-[#1a3b99] text-white font-medium text-[14px] px-6 py-2.5 rounded-lg flex items-center gap-1.5 hover:bg-[#112975] transition-colors w-full justify-center">
                              See availability <ArrowUpRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-8">
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
          </div>
        </div>
      </div>
    </div>
  );
}
