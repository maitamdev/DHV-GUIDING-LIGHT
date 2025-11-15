import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaSearch,
  FaCode, FaBriefcase, FaMicrochip, FaRobot, FaLightbulb, FaTools
} from 'react-icons/fa';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Top 10 Programming Skills You Need in 2024',
    excerpt: 'Discover the most important programming skills every developer should learn in 2024. From AI, Cloud Computing to Web3...',
    author: 'John Anderson',
    date: 'November 15, 2024',
    readTime: '5 min read',
    image: '/img/course-1.jpg',
    category: 'programming'
  },
  {
    id: 2,
    title: 'How to Become a Full Stack Developer?',
    excerpt: 'Complete roadmap from zero to hero to become a professional Full Stack Developer with an attractive salary...',
    author: 'Sarah Chen',
    date: 'November 12, 2024',
    readTime: '8 min read',
    image: '/img/course-2.jpg',
    category: 'career'
  },
  {
    id: 3,
    title: 'React vs Vue vs Angular: Which Framework Should You Choose?',
    excerpt: 'Detailed comparison of the 3 most popular JavaScript frameworks today. Pros and cons and advice for beginners...',
    author: 'David Williams',
    date: 'November 10, 2024',
    readTime: '6 min read',
    image: '/img/course-3.jpg',
    category: 'technology'
  },
  {
    id: 4,
    title: 'AI and Machine Learning: Career Opportunities in the Future',
    excerpt: 'Learn about AI/ML trends and promising career opportunities in this field...',
    author: 'Emily Parker',
    date: 'November 8, 2024',
    readTime: '7 min read',
    image: '/img/course-1.jpg',
    category: 'ai-ml'
  },
  {
    id: 5,
    title: '5 Common Mistakes Beginner Programmers Make',
    excerpt: 'Common mistakes that beginner programmers often make and effective ways to fix them...',
    author: 'Michael Johnson',
    date: 'November 5, 2024',
    readTime: '4 min read',
    image: '/img/course-2.jpg',
    category: 'learning'
  },
  {
    id: 6,
    title: 'Understanding DevOps: Role and Essential Tools',
    excerpt: 'DevOps is becoming an important trend. Learn about the role, skills and essential tools...',
    author: 'Lisa Nguyen',
    date: 'November 2, 2024',
    readTime: '6 min read',
    image: '/img/course-3.jpg',
    category: 'devops'
  }
];

const categories = [
  { id: 'all', label: 'All', icon: FaSearch },
  { id: 'programming', label: 'Programming', icon: FaCode },
  { id: 'career', label: 'Career', icon: FaBriefcase },
  { id: 'technology', label: 'Technology', icon: FaMicrochip },
  { id: 'ai-ml', label: 'AI & ML', icon: FaRobot },
  { id: 'learning', label: 'Learning', icon: FaLightbulb },
  { id: 'devops', label: 'DevOps', icon: FaTools }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section with Gradient & Wave */}
      <div className="relative bg-gradient-to-r from-[#001A66] via-[#3A0CA3] to-[#4361EE] pt-24 pb-20 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Wave at Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-16 fill-current text-gray-50">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Blog & News
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent mt-2">
                DHV Guiding Light
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              Stay updated with the latest tech trends and knowledge
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 rounded-full border-none focus:outline-none focus:ring-4 focus:ring-white/30 text-lg shadow-2xl"
                  style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
                />
                <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter - Material You / Framer Card Tabs Style */}
      <div className="sticky top-16 z-40 bg-gradient-to-br from-gray-50 via-white to-purple-50 backdrop-blur-xl border-b border-gray-200/50 shadow-xl">
        <div className="container mx-auto px-4 py-8">
          {/* Grid Layout for Card Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: isActive ? 1.05 : 1.08,
                    boxShadow: "0 20px 40px -10px rgba(79, 70, 229, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    group relative flex flex-col items-center justify-center gap-3 p-6 rounded-3xl 
                    font-bold transition-all duration-300 overflow-hidden
                    ${isActive
                      ? 'bg-gradient-to-br from-[#4f46e5] via-[#6366f1] to-[#3b82f6] text-white shadow-2xl shadow-indigo-500/40 scale-105 ring-4 ring-indigo-300/50'
                      : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-xl border-2 border-gray-200/50'
                    }
                  `}
                  style={{
                    fontFamily: "'Poppins', 'Inter', sans-serif",
                    transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  {/* Animated Gradient Background for Active */}
                  {isActive && (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-500 to-purple-600 opacity-90"
                        animate={{
                          background: [
                            'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
                            'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                            'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                            'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
                          ]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      {/* Glow Pulse */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-transparent"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      {/* Shimmer Wave */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                        }}
                        animate={{
                          x: ['-200%', '200%']
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "linear",
                          repeatDelay: 1
                        }}
                      />
                    </>
                  )}
                  
                  {/* Icon with Bounce Animation */}
                  <motion.div
                    animate={isActive ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    } : {}}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    className="relative z-10"
                  >
                    <Icon className={`text-3xl ${isActive ? 'text-white drop-shadow-2xl' : 'text-indigo-600 group-hover:text-indigo-700'}`} />
                  </motion.div>
                  
                  {/* Label */}
                  <span className={`relative z-10 text-xs font-extrabold tracking-wider text-center leading-tight ${isActive ? 'text-white' : 'text-gray-800'}`}>
                    {category.label}
                  </span>

                  {/* Active Checkmark Badge */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full relative z-10 shadow-xl shadow-yellow-400/50 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}

                  {/* Hover Glow for Inactive Cards */}
                  {!isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#06BBCC] text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#06BBCC] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaUser />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-[#06BBCC] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Read more
                      <FaArrowRight className="text-sm" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center gap-2"
          >
            <button className="px-4 py-2 bg-[#06BBCC] text-white rounded-lg font-semibold hover:bg-[#05a3b3] transition-colors">
              1
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors border-2">
              2
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors border-2">
              3
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors border-2">
              →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Subscribe */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Subscribe to Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Receive the latest news, articles and courses via your email
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-[#06BBCC] focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#06BBCC] text-white rounded-lg font-semibold hover:bg-[#05a3b3] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
