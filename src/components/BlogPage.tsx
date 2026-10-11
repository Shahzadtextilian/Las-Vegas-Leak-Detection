import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { PHONE_NUMBER, PHONE_HREF } from '../data/siteData';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  CheckCircle,
  Phone,
  Tag,
  Share2,
  ChevronLeft,
  ShieldCheck,
  Droplets,
  AlertTriangle,
  Flame,
  Waves
} from 'lucide-react';

interface BlogPageProps {
  onNavigate: (slug: string) => void;
  activePostSlug?: string;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, activePostSlug }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(
    activePostSlug ? BLOG_POSTS.find((p) => p.slug === activePostSlug) || null : null
  );
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['All', 'Slab Leaks', 'Pool Leaks', 'Gas Leaks', 'Water Leaks', 'Prevention & Tips'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleShare = (post: BlogPost) => {
    const url = `${window.location.origin}/blog/${post.slug}/`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // If a post is selected to read
  if (selectedPost) {
    return (
      <article className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center text-xs text-slate-500 font-medium">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('');
                }}
                className="hover:text-[#1E70B8] transition-colors"
              >
                Home
              </a>
              <span className="mx-2 text-slate-300">/</span>
              <button
                onClick={() => setSelectedPost(null)}
                className="hover:text-[#1E70B8] transition-colors"
              >
                Blog & Leak Guides
              </button>
              <span className="mx-2 text-slate-300">/</span>
              <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
                {selectedPost.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="bg-white border-b border-slate-200 py-10 lg:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E70B8] hover:text-[#0F2942] uppercase tracking-wider mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </button>

            <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-4">
              <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 font-medium border border-amber-200/60">
                {selectedPost.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {selectedPost.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedPost.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-6 font-display">
              {selectedPost.title}
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-light">
              {selectedPost.excerpt}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F2942] text-white flex items-center justify-center font-bold text-sm">
                  NV
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{selectedPost.author}</div>
                  <div className="text-xs text-slate-500">{selectedPost.authorRole} • Clark County, NV</div>
                </div>
              </div>

              <button
                onClick={() => handleShare(selectedPost)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#1E70B8] px-3 py-1.5 rounded-lg border border-slate-200 hover:border-[#1E70B8] transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Article Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Featured Image */}
              {selectedPost.featuredImage && (
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                  <img
                    src={selectedPost.featuredImage}
                    alt={selectedPost.title}
                    width={800}
                    height={500}
                    className="w-full h-64 sm:h-80 object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              )}

              {/* Introduction Box */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-base text-slate-800 leading-relaxed font-normal">
                {selectedPost.content.introduction}
              </div>

              {/* Sections */}
              {selectedPost.content.sections.map((section, sIdx) => (
                <div key={sIdx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    {section.heading}
                  </h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
                    {section.body.map((b, bIdx) => (
                      <p key={bIdx}>{b}</p>
                    ))}
                  </div>

                  {section.keyTakeaways && (
                    <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 mt-4 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
                        Key Takeaway:
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                        {section.keyTakeaways.map((kt, kIdx) => (
                          <li key={kIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{kt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {/* Conclusion and Urgent Call to Action */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0F2942] text-white space-y-4 shadow-lg">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Spring Valley Diagnostic Team Conclusion</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {selectedPost.content.conclusion}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={PHONE_HREF}
                    className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call 24/7: {PHONE_NUMBER}</span>
                  </a>
                  <button
                    onClick={() => {
                      setSelectedPost(null);
                      onNavigate('contact');
                    }}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-colors"
                  >
                    Contact & Location Details
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> Tags:
                </span>
                {selectedPost.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Emergency Call Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E70B8]">
                  <Droplets className="w-4 h-4 text-[#1E70B8]" />
                  <span>24/7 Leak Assistance</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Have an Active Leak in Spring Valley?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Don't let hidden moisture damage your slab, walls, or foundation. Our specialists provide non-invasive detection across Clark County.
                </p>
                <a
                  href={PHONE_HREF}
                  className="w-full py-3 bg-[#0F2942] hover:bg-[#1E70B8] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </div>

              {/* Other Articles */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                  Related Leak Guides
                </h4>
                <div className="space-y-3">
                  {BLOG_POSTS.filter((p) => p.id !== selectedPost.id).map((other) => (
                    <button
                      key={other.id}
                      onClick={() => {
                        setSelectedPost(other);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full text-left p-3 rounded-xl border border-slate-100 hover:border-[#1E70B8] hover:bg-slate-50 transition-colors group block"
                    >
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#1E70B8] line-clamp-2">
                        {other.title}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 flex items-center justify-between">
                        <span>{other.category}</span>
                        <span>{other.readTime}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    );
  }

  // Blog Index View
  return (
    <article className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center text-xs text-slate-500 font-medium">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('');
              }}
              className="hover:text-[#1E70B8] transition-colors"
            >
              Home
            </a>
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-slate-900 font-semibold" aria-current="page">
              Leak Detection Blog & Knowledge Base
            </span>
          </nav>
        </div>
      </div>

      {/* Header Banner */}
      <header className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200/80 mb-3 font-display">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Spring Valley Leak Knowledge Base</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4 font-display">
              Leak Detection Guides & Expert Prevention Tips
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Technical insights, DIY diagnostic procedures, and emergency safety protocols for water, gas, slab, and swimming pool leaks in Spring Valley and Clark County, NV.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0F2942] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#1E70B8] focus:bg-white transition-colors"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No articles found</h3>
            <p className="text-sm text-slate-500 mt-1">Try adjusting your search terms or category filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#0F2942] text-white text-xs font-semibold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group cursor-pointer"
                onClick={() => {
                  setSelectedPost(post);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {/* Thumbnail Image */}
                {post.featuredImage && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-amber-900 font-semibold text-xs shadow-xs border border-amber-200/60">
                        {post.category}
                      </span>
                    </div>
                  </div>
                )}

                {/* Category & Badge Bar */}
                <div className="p-6 pb-3 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Article Info */}
                <div className="px-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-950 font-display group-hover:text-[#1E70B8] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{post.date}</span>
                  <span className="font-bold text-[#1E70B8] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Fast Action Banner */}
        <section className="mt-16 p-8 rounded-2xl bg-linear-to-br from-[#0F2942] to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
              Direct Local Assistance
            </span>
            <h3 className="text-2xl font-bold font-display">
              Suspect an Active Leak on Your Property?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Don't wait for moisture to damage foundations or spike your utility bills. Speak directly with our Spring Valley leak specialists today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={PHONE_HREF}
              className="w-full sm:w-auto px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span>Call {PHONE_NUMBER}</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-sm rounded-xl border border-white/20 transition-colors"
            >
              Contact & Location Info
            </button>
          </div>
        </section>
      </div>
    </article>
  );
};
