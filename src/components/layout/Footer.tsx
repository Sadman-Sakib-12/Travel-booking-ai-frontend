'use client';

import Link from 'next/link';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const footerLinks = {
  'Quick Links': [
    { name: 'Try Our AI', href: 'https://app.tripbooking.ai/' },
    { name: 'Home', href: '/' },
    { name: 'Hotels', href: '/hotels' },
    { name: 'Offers', href: '/offers' },
  ],
  Company: [
    { name: 'About us', href: 'https://portfolio.tripbooking.ai/' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Partner with Us', href: 'https://portfolio.tripbooking.ai/partner-with-us' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Condition', href: '/terms-conditions' },
    { name: 'Cancellation, Refund & Modification Policy', href: '/cancellation-refund-modification-policy' },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-5 lg:col-span-2 lg:pr-10">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight text-[#3554D1]">tripbooking.ai</span>
            </Link>
            <p className="text-gray-500 text-sm">
              Plan. Compare. Book with AI
            </p>
            
            <div className="space-y-3 text-sm text-gray-600 mt-6">
              <p><span className="font-bold text-[#051036]">Trade License No :</span> TRAD/DNCC/002299/2025</p>
              <p><span className="font-bold text-[#051036]">MoCAT Certificate No:</span> 0016565</p>
              <p><span className="font-bold text-[#051036]">Address:</span> Level 08, A R Tower, 24 Kamal Ataturk Avenue, Banani, Dhaka, Bangladesh.</p>
            </div>

            <div className="space-y-3 mt-6">
              <a href="mailto:hello@tripbooking.ai" className="flex items-center gap-3 text-[#051036] hover:text-[#3554D1] transition-colors">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="font-bold">hello@tripbooking.ai</span>
              </a>
              <a href="tel:+8801992222450" className="flex items-center gap-3 text-[#051036] hover:text-[#3554D1] transition-colors">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="font-bold">+88 01992222450</span>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[15px] font-bold text-[#051036] mb-6">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#3554D1] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Gateways */}
        <div className="mb-8">
          <img 
            src="https://securepay.sslcommerz.com/public/image/SSLCommerz-Pay-With-logo-All-Size-03.png" 
            alt="Payment Methods" 
            className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-bold text-[#051036]">Follow us</span>
            <div className="flex items-center gap-2">
              <a href="#" className="w-8 h-8 rounded-full bg-[#3554D1] text-white flex items-center justify-center hover:bg-[#051036] transition-colors">
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#3554D1] text-white flex items-center justify-center hover:bg-[#051036] transition-colors">
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#3554D1] text-white flex items-center justify-center hover:bg-[#051036] transition-colors">
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 TripBooking AI | All Rights Reserved.
            </p>
            <button onClick={scrollToTop} className="w-10 h-10 rounded-full bg-blue-50 text-[#3554D1] flex items-center justify-center hover:bg-[#3554D1] hover:text-white transition-all">
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
