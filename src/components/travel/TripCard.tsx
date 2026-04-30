import Image from 'next/image';
import { Star, MapPin, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TripCardProps {
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  duration?: string;
  category?: string;
}

export default function TripCard({
  image,
  title,
  location,
  price,
  rating,
  reviews,
  duration,
  category
}: TripCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 border border-border/50"
    >
      {/* Image Container */}
      <div className="relative h-[240px] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
          {category || 'Best Seller'}
        </div>
        <button className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-text-muted hover:text-red-500 transition-colors shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-1 text-text-muted text-xs">
          <MapPin className="w-3.5 h-3.5" />
          {location}
        </div>
        
        <h3 className="text-lg font-bold text-secondary line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-accent/10 px-2 py-0.5 rounded text-accent text-sm font-bold">
            <Star className="w-3.5 h-3.5 fill-accent" />
            {rating}
          </div>
          <span className="text-text-muted text-xs">({reviews} Reviews)</span>
        </div>

        <div className="pt-3 border-t border-border/50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-text-muted">Starting from</span>
            <span className="text-xl font-bold text-primary">${price}</span>
          </div>
          
          <div className="flex items-center gap-1 text-text-muted text-xs font-medium">
            <Clock className="w-3.5 h-3.5" />
            {duration || '3 Days'}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
