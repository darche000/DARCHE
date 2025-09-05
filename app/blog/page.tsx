import MusicPlayer from '../../components/MusicPlayer'
import NavLogo from '../../components/NavLogo'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Architectural Visualization",
      excerpt: "Exploring how emerging technologies like VR and AI are revolutionizing the way we design and present architectural concepts.",
      date: "2024-03-15",
      category: "Architecture",
      readTime: "5 min read",
      image: "/images/web-design-1.jpg"
    },
    {
      id: 2,
      title: "Design Thinking in Digital Spaces",
      excerpt: "How human-centered design principles can be applied to create more intuitive and engaging digital experiences.",
      date: "2024-03-10",
      category: "Design",
      readTime: "7 min read",
      image: "/images/mobile-app-1.jpg"
    },
    {
      id: 3,
      title: "Sustainable Architecture: Beyond Green Building",
      excerpt: "A deep dive into innovative approaches to sustainable design that go beyond traditional green building practices.",
      date: "2024-03-05",
      category: "Sustainability",
      readTime: "8 min read",
      image: "/images/brand-identity-1.jpg"
    },
    {
      id: 4,
      title: "The Psychology of Space",
      excerpt: "Understanding how architectural design influences human behavior and emotional well-being in built environments.",
      date: "2024-02-28",
      category: "Research",
      readTime: "6 min read",
      image: "/images/ecommerce-1.jpg"
    },
    {
      id: 5,
      title: "Building Digital Brand Identities",
      excerpt: "Creating cohesive brand experiences across physical and digital touchpoints in the modern marketplace.",
      date: "2024-02-20",
      category: "Branding",
      readTime: "4 min read",
      image: "/images/social-media-1.jpg"
    },
    {
      id: 6,
      title: "Innovation in Urban Planning",
      excerpt: "How data-driven approaches and community engagement are shaping the future of urban development.",
      date: "2024-02-15",
      category: "Urban Planning",
      readTime: "9 min read",
      image: "/images/dashboard-1.jpg"
    }
  ]

  const categories = ["All", "Architecture", "Design", "Sustainability", "Research", "Branding", "Urban Planning"]

  return (
    <main className="min-h-screen bg-[#860123]">
      {/* Navigation Logo */}
      <NavLogo />
      {/* Music Player */}
      <MusicPlayer />
      
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/2.png" 
            alt="Blog Background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#860123]/60 via-[#860123]/30 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold font-mono mb-6">
              BLOG
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Insights, thoughts, and discoveries from the intersection of design, technology, and innovation
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto max-w-[1400px] px-4 py-16">
        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-all duration-200 font-medium text-sm ${
                  category === "All" 
                    ? "bg-[#860123] text-white" 
                    : "bg-black/40 text-white/80 hover:bg-[#860123]/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        <section className="mb-16">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#860123] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-[#860123] text-sm font-semibold">{blogPosts[0].category}</span>
                  <span className="text-white/60 text-sm">•</span>
                  <span className="text-white/60 text-sm">{blogPosts[0].date}</span>
                  <span className="text-white/60 text-sm">•</span>
                  <span className="text-white/60 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 font-mono">
                  {blogPosts[0].title}
                </h2>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <a 
                  href={`/blog/${blogPosts[0].id}`}
                  className="inline-block bg-[#860123] hover:bg-[#980025] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 font-mono">LATEST POSTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#860123] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-white/60 text-sm">{post.date}</span>
                    <span className="text-white/60 text-sm">•</span>
                    <span className="text-white/60 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-mono line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/80 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <a 
                    href={`/blog/${post.id}`}
                    className="text-[#860123] hover:text-[#980025] font-semibold transition-colors duration-300"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-[#860123]/20 to-black/40 backdrop-blur-sm rounded-lg p-12 border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">STAY UPDATED</h2>
            <p className="text-lg text-white/80 mb-8">
              Get the latest insights and updates delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[#860123] focus:outline-none transition-colors duration-300"
              />
              <button className="bg-[#860123] hover:bg-[#980025] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
