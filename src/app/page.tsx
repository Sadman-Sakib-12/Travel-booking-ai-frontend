import Hero from '@/components/home/Hero';
import ExploreDestinations from '@/components/home/ExploreDestinations';
import PopularHotels from '@/components/home/PopularHotels';
import RecommendedFlights from '@/components/home/RecommendedFlights';
import Newsletter from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ExploreDestinations />
      <PopularHotels />
      <RecommendedFlights />
      <Newsletter />
    </div>
  );
}
