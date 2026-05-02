import Link from 'next/link';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const posts = [
  { slug: '1', title: "Top 10 Hotels in Cox's Bazar for 2026", excerpt: "Discover the finest beachfront hotels offering luxury stays, stunning sea views, and world-class amenities along the world's longest natural sea beach.", image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=640', category: "Cox's Bazar", date: 'April 20, 2026', readTime: '5 min read', author: 'Rafiq Ahmed' },
  { slug: '2', title: 'A Complete Travel Guide to Sreemangal', excerpt: "Sreemangal, the tea capital of Bangladesh, offers lush green landscapes, wildlife sanctuaries, and a peaceful escape from city life.", image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=640', category: 'Travel Guide', date: 'April 15, 2026', readTime: '7 min read', author: 'Nadia Islam' },
  { slug: '3', title: 'How AI is Changing the Way We Book Travel', excerpt: "From personalized recommendations to instant price comparisons, AI is revolutionizing the travel industry in ways we never imagined.", image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=640', category: 'AI & Travel', date: 'April 10, 2026', readTime: '4 min read', author: 'Karim Hassan' },
  { slug: '4', title: 'Best Budget Hotels in Sylhet Under BDT 3000', excerpt: "Traveling on a budget? Sylhet has some incredible affordable hotels that don't compromise on comfort or location.", image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=640', category: 'Budget Travel', date: 'April 5, 2026', readTime: '6 min read', author: 'Priya Sharma' },
  { slug: '5', title: "Bandarban: The Hidden Gem of Bangladesh", excerpt: "Nestled in the Chittagong Hill Tracts, Bandarban offers breathtaking mountain views, tribal culture, and adventure activities.", image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=640', category: 'Adventure', date: 'March 28, 2026', readTime: '8 min read', author: 'Rafiq Ahmed' },
  { slug: '6', title: 'Tips for Booking Hotels During Peak Season', excerpt: "Peak season can mean sold-out hotels and inflated prices. Here are our top tips to secure the best deals even during busy periods.", image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=640', category: 'Travel Tips', date: 'March 20, 2026', readTime: '5 min read', author: 'Nadia Islam' },
];

const categories = ['All', "Cox's Bazar", 'Travel Guide', 'AI & Travel', 'Budget Travel', 'Adventure', 'Travel Tips'];

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <div className="bg-[#051036] py-16">
        <div className="max-w-[1440px] mx-auto px-4 text-center">
          <p className="text-[#3554D1] font-bold text-sm uppercase tracking-widest mb-3">Our Blog</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Travel Stories & Tips</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">Discover travel guides, hotel reviews, and insider tips from our team of travel experts.</p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-16 space-y-16">
        {/* Categories */}
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button key={cat} className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${cat === 'All' ? 'bg-[#3554D1] text-white' : 'bg-gray-100 text-gray-600 hover:bg-[#3554D1] hover:text-white'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="group block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all">
            <div className="h-64 lg:h-auto overflow-hidden">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-4">
              <span className="inline-block bg-[#3554D1] text-white text-xs font-bold px-3 py-1 rounded-full w-fit">{featured.category}</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#051036] group-hover:text-[#3554D1] transition-colors">{featured.title}</h2>
              <p className="text-gray-500 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
              </div>
              <div className="flex items-center gap-2 text-[#3554D1] font-bold text-sm group-hover:gap-3 transition-all">
                Read Article <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <div className="h-52 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <span className="inline-block bg-blue-50 text-[#3554D1] text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                <h3 className="font-black text-[#051036] text-lg leading-snug group-hover:text-[#3554D1] transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
