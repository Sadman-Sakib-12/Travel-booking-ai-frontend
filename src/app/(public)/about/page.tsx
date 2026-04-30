import { Globe, Users, MapPin, Award, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const team = [
  { name: 'Rafiq Ahmed', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200' },
  { name: 'Nadia Islam', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200' },
  { name: 'Karim Hassan', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200' },
  { name: 'Priya Sharma', role: 'AI Engineer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200' },
];

const stats = [
  { value: '150K+', label: 'Happy Travelers', icon: Users },
  { value: '1,200+', label: 'Destinations', icon: MapPin },
  { value: '45K+', label: 'Bookings Made', icon: Globe },
  { value: '4.9/5', label: 'Average Rating', icon: Award },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero */}
      <div className="bg-[#051036] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3554D1]/10 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-[1320px] mx-auto px-4 relative z-10 text-center">
          <p className="text-[#3554D1] font-bold text-sm uppercase tracking-widest mb-4">About Us</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">We Make Travel <br /><span className="text-[#3554D1]">Effortless</span></h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            TripBooking AI is Bangladesh's leading AI-powered travel booking platform, helping travelers discover, compare, and book the best hotels and flights with ease.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#3554D1] py-14">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center text-white">
                <Icon className="w-8 h-8 mx-auto mb-3 text-white/60" />
                <p className="text-4xl font-black">{value}</p>
                <p className="text-white/70 text-sm mt-1 uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="py-20">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-[#3554D1] font-bold text-sm uppercase tracking-widest">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#051036]">Born from a Passion for Travel</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2023, TripBooking AI started with a simple mission: make travel booking in Bangladesh as seamless as possible. We noticed that travelers were spending hours comparing hotels and prices across multiple platforms. We built an AI-powered solution that does all of that in seconds.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to be the official partner of leading hotels across Bangladesh, offering exclusive rates and a seamless booking experience powered by cutting-edge AI technology.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-400 font-bold uppercase">Trade License</p>
                  <p className="font-black text-[#051036] text-sm mt-1">TRAD/DNCC/002299/2025</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-400 font-bold uppercase">MoCAT Certificate</p>
                  <p className="font-black text-[#051036] text-sm mt-1">No: 0016565</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" alt="Team" className="rounded-3xl shadow-2xl w-full object-cover h-[400px]" />
              <div className="absolute -bottom-6 -left-6 bg-[#3554D1] text-white rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-black">2023</p>
                <p className="text-white/80 text-sm">Founded in Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#3554D1] font-bold text-sm uppercase tracking-widest mb-3">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#051036]">Meet the People Behind TripBooking</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map(member => (
              <div key={member.name} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 shadow-md" />
                <h3 className="font-black text-[#051036]">{member.name}</h3>
                <p className="text-[#3554D1] text-sm font-medium mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-[#3554D1]">
        <div className="max-w-[1320px] mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-white">Ready to Start Your Journey?</h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto">Join over 150,000 travelers who trust TripBooking AI for their travel needs.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/explore" className="bg-white text-[#3554D1] px-8 py-4 rounded-xl font-black hover:bg-gray-50 transition-all shadow-lg">
              Explore Hotels
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-black hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
