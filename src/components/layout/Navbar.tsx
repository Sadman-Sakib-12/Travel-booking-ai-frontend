'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';

const megaMenuHotels = {
  popular: [
    { name: 'Grand Mostafa Hotel Ababil', href: '/trip/grand-mostafa' },
    { name: 'Sayeman Beach Resort', href: '/trip/sayeman-beach-resort' },
    { name: 'Ramada by Wyndham Cox\'s Bazar', href: '/trip/ramada-by-wyndham' },
    { name: 'Sayeman Heritage', href: '/trip/sayeman-heritage' },
    { name: 'Ocean Paradise Hotel & Resort', href: '/trip/ocean-paradise' },
  ],
  bestSellers: [
    { name: 'White Orchid', href: '/trip/white-orchid' },
    { name: 'Ramada by Wyndham Cox\'s Bazar', href: '/trip/ramada-by-wyndham' },
  ],
  hotDeals: [
    { name: 'White Orchid', href: '/trip/white-orchid' },
    { name: 'Windy Terrace Hotel', href: '/trip/windy-terrace' },
    { name: 'Hotel Star Pacific', href: '/trip/hotel-star-pacific' },
  ]
};

const destinationLinks = [
  { name: 'Dhaka', href: '/explore?city=dhaka' },
  { name: 'Cox\'s Bazar', href: '/explore?city=coxs-bazar' },
  { name: 'Sylhet', href: '/explore?city=sylhet' },
  { name: 'Chittagong', href: '/explore?city=chittagong' },
  { name: 'Bandarban', href: '/explore?city=bandarban' },
  { name: 'Sreemangal', href: '/explore?city=sreemangal' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hotelsOpen, setHotelsOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const hotelsRef = useRef<HTMLDivElement>(null);
  const destRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (hotelsRef.current && !hotelsRef.current.contains(e.target as Node)) setHotelsOpen(false);
      if (destRef.current && !destRef.current.contains(e.target as Node)) setDestOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav className="w-full bg-white border-b border-gray-100 fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-[1320px] mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center xl:gap-16 lg:gap-10">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <span className="text-2xl font-black tracking-tight">
              <span className="text-[#3554D1]">tripb</span>
              <span className="text-[#F5A623] tracking-tighter">oo</span>
              <span className="text-[#3554D1]">king.ai</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-[#3554D1] font-bold text-sm">Home</Link>

          {/* Hotels Dropdown */}
          <div ref={hotelsRef} className="relative">
            <button
              onClick={() => { setHotelsOpen(!hotelsOpen); setDestOpen(false); }}
              className="flex items-center gap-1 text-[#051036] font-medium text-sm hover:text-[#3554D1] transition-colors"
            >
              Hotels <ChevronDown className={`w-4 h-4 transition-transform ${hotelsOpen ? 'rotate-180' : ''}`} />
            </button>
            {hotelsOpen && (
              <div className="absolute top-full left-0 mt-6 w-[750px] bg-white rounded-2xl shadow-[0px_10px_60px_0px_rgba(5,16,54,0.08)] border border-gray-100 p-8 z-50 cursor-default">
                <div className="grid grid-cols-3 gap-8">
                  {/* Popular Hotels */}
                  <div>
                    <h4 className="text-[15px] font-bold text-[#051036] mb-3">Popular Hotels</h4>
                    <div className="w-full h-[1px] bg-gray-100 mb-5"></div>
                    <ul className="space-y-4">
                      {megaMenuHotels.popular.map((link) => (
                        <li key={link.name}>
                          <Link href={link.href} onClick={() => setHotelsOpen(false)} className="text-[15px] text-gray-500 hover:text-[#3554D1] transition-colors block">
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Best Sellers */}
                  <div>
                    <h4 className="text-[15px] font-bold text-[#051036] mb-3">Best Sellers</h4>
                    <div className="w-full h-[1px] bg-gray-100 mb-5"></div>
                    <ul className="space-y-4">
                      {megaMenuHotels.bestSellers.map((link) => (
                        <li key={link.name}>
                          <Link href={link.href} onClick={() => setHotelsOpen(false)} className="text-[15px] text-gray-500 hover:text-[#3554D1] transition-colors block">
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Hot Deals */}
                  <div>
                    <h4 className="text-[15px] font-bold text-[#051036] mb-3">Hot Deals</h4>
                    <div className="w-full h-[1px] bg-gray-100 mb-5"></div>
                    <ul className="space-y-4">
                      {megaMenuHotels.hotDeals.map((link) => (
                        <li key={link.name}>
                          <Link href={link.href} onClick={() => setHotelsOpen(false)} className="text-[15px] text-gray-500 hover:text-[#3554D1] transition-colors block">
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Destinations Dropdown */}
          <div ref={destRef} className="relative">
            <button
              onClick={() => { setDestOpen(!destOpen); setHotelsOpen(false); }}
              className="flex items-center gap-1 text-[#051036] font-medium text-sm hover:text-[#3554D1] transition-colors"
            >
              Destinations <ChevronDown className={`w-4 h-4 transition-transform ${destOpen ? 'rotate-180' : ''}`} />
            </button>
            {destOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                {destinationLinks.map((link) => (
                  <Link key={link.name} href={link.href} onClick={() => setDestOpen(false)} className="block px-4 py-2.5 text-sm text-[#051036] hover:bg-blue-50 hover:text-[#3554D1] transition-colors font-medium">
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="text-[#051036] font-medium text-sm hover:text-[#3554D1] transition-colors">Contact</Link>
          </div>
        </div>

        {/* Auth */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/login" className="border border-[#3554D1] text-[#3554D1] bg-white px-5 py-2 rounded font-medium text-sm hover:bg-[#3554D1] hover:text-white transition-all">
            Sign In / Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm font-bold text-[#3554D1]">Home</Link>
          <Link href="/explore" onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm font-medium text-[#051036]">Hotels</Link>
          <Link href="/explore" onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm font-medium text-[#051036]">Destinations</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm font-medium text-[#051036]">Contact</Link>
          <div className="pt-3 border-t border-gray-100">
            <Link href="/login" onClick={() => setMobileOpen(false)} className="block w-full text-center border border-[#3554D1] text-[#3554D1] py-2.5 rounded-lg font-semibold text-sm hover:bg-[#3554D1] hover:text-white transition-all">
              Sign In / Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
