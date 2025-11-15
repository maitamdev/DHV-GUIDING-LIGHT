import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  FaSearch, FaClock, FaUsers, FaStar, FaCode, FaMobile, FaDatabase, 
  FaCloud, FaShieldAlt, FaPalette, FaChartLine, 
  FaHeart, FaRegHeart, FaPlay, FaShoppingCart, FaCertificate, FaInfinity,
  FaFire, FaAward, FaGraduationCap, FaBriefcase, FaCamera
} from 'react-icons/fa';

interface Course {
  id: number;
  title: string;
  instructor: string;
  instructorAvatar?: string;
  students: number;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  reviews: number;
  description: string;
  badge?: 'bestseller' | 'new' | 'advanced' | 'trending';
  lessons: number;
  enrolled?: number;
}

const coursesData: Course[] = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp 2024',
    instructor: 'Mai Tran Thien Tam',
    instructorAvatar: '/img/team-1.jpg',
    students: 12500,
    price: 149,
    originalPrice: 299,
    image: '/img/course-1.jpg',
    category: 'web-dev',
    level: 'Beginner',
    duration: '42.5 hours',
    rating: 4.9,
    reviews: 1234,
    description: 'Master HTML, CSS, JavaScript, React, Node.js from zero to hero',
    badge: 'bestseller',
    lessons: 248,
    enrolled: 15000
  },
  {
    id: 2,
    title: 'Digital Marketing & Social Media Strategy',
    instructor: 'Nguyen Minh Khai',
    instructorAvatar: '/img/team-2.jpg',
    students: 9800,
    price: 129,
    originalPrice: 249,
    image: '/img/course-2.jpg',
    category: 'marketing',
    level: 'All Levels',
    duration: '32 hours',
    rating: 4.8,
    reviews: 987,
    description: 'Master SEO, Facebook Ads, Google Ads, Content Marketing',
    badge: 'trending',
    lessons: 156,
    enrolled: 11000
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass with Figma',
    instructor: 'Pham Duc Anh',
    instructorAvatar: '/img/team-3.jpg',
    students: 15600,
    price: 179,
    originalPrice: 349,
    image: '/img/course-3.jpg',
    category: 'design',
    level: 'All Levels',
    duration: '28.5 hours',
    rating: 4.9,
    reviews: 1567,
    description: 'Complete UI/UX design course from beginner to professional',
    badge: 'bestseller',
    lessons: 142,
    enrolled: 18000
  },
  {
    id: 4,
    title: 'Business Management & Entrepreneurship',
    instructor: 'Tran Van Long',
    instructorAvatar: '/img/team-4.jpg',
    students: 11200,
    price: 169,
    originalPrice: 329,
    image: '/img/course-1.jpg',
    category: 'business',
    level: 'Intermediate',
    duration: '36 hours',
    rating: 4.7,
    reviews: 876,
    description: 'Learn business strategy, startup, leadership, and management',
    badge: 'new',
    lessons: 198,
    enrolled: 12500
  },
  {
    id: 5,
    title: 'Data Science & Machine Learning A-Z',
    instructor: 'Nguyen Van Minh',
    instructorAvatar: '/img/team-1.jpg',
    students: 9800,
    price: 189,
    originalPrice: 399,
    image: '/img/course-2.jpg',
    category: 'data-science',
    level: 'Advanced',
    duration: '52 hours',
    rating: 4.8,
    reviews: 1098,
    description: 'Python, Pandas, NumPy, Scikit-learn, TensorFlow, and more',
    badge: 'advanced',
    lessons: 298,
    enrolled: 12000
  },
  {
    id: 6,
    title: 'Graphic Design Complete Course',
    instructor: 'Le Thi Mai',
    instructorAvatar: '/img/team-2.jpg',
    students: 13400,
    price: 139,
    originalPrice: 279,
    image: '/img/course-3.jpg',
    category: 'design',
    level: 'Beginner',
    duration: '30 hours',
    rating: 4.9,
    reviews: 1245,
    description: 'Master Photoshop, Illustrator, InDesign for professional design',
    badge: 'bestseller',
    lessons: 165,
    enrolled: 15000
  },
  {
    id: 7,
    title: 'Financial Accounting & Bookkeeping',
    instructor: 'Pham Thanh Ha',
    instructorAvatar: '/img/team-3.jpg',
    students: 8700,
    price: 149,
    originalPrice: 299,
    image: '/img/course-1.jpg',
    category: 'finance',
    level: 'Beginner',
    duration: '38 hours',
    rating: 4.7,
    reviews: 765,
    description: 'Complete accounting fundamentals and QuickBooks training',
    badge: 'trending',
    lessons: 188,
    enrolled: 9500
  },
  {
    id: 8,
    title: 'Photography Masterclass: Complete Guide',
    instructor: 'Nguyen Quoc Bao',
    instructorAvatar: '/img/team-4.jpg',
    students: 10500,
    price: 159,
    originalPrice: 319,
    image: '/img/course-2.jpg',
    category: 'photography',
    level: 'All Levels',
    duration: '34 hours',
    rating: 4.8,
    reviews: 943,
    description: 'Professional photography from basics to advanced techniques',
    badge: 'new',
    lessons: 172,
    enrolled: 11800
  },
  {
    id: 9,
    title: 'Mobile App Development with React Native',
    instructor: 'Tran Minh Quan',
    instructorAvatar: '/img/team-1.jpg',
    students: 7200,
    price: 139,
    originalPrice: 279,
    image: '/img/course-3.jpg',
    category: 'mobile-dev',
    level: 'Intermediate',
    duration: '38 hours',
    rating: 4.6,
    reviews: 654,
    description: 'Build iOS and Android apps with one codebase using React Native',
    badge: 'trending',
    lessons: 176,
    enrolled: 8500
  },
  {
    id: 10,
    title: 'AWS Cloud Practitioner Complete Course',
    instructor: 'Pham Thi Lan',
    instructorAvatar: '/img/team-2.jpg',
    students: 11200,
    price: 159,
    originalPrice: 319,
    image: '/img/course-1.jpg',
    category: 'cloud',
    level: 'Beginner',
    duration: '45 hours',
    rating: 4.8,
    reviews: 1123,
    description: 'Master AWS cloud services and prepare for certification',
    badge: 'bestseller',
    lessons: 234,
    enrolled: 13000
  }
];

const categories = [
  { id: 'all', label: 'All Courses', icon: FaGraduationCap },
  { id: 'web-dev', label: 'Web Development', icon: FaCode },
  { id: 'mobile-dev', label: 'Mobile Dev', icon: FaMobile },
  { id: 'data-science', label: 'Data Science', icon: FaDatabase },
  { id: 'marketing', label: 'Marketing', icon: FaChartLine },
  { id: 'design', label: 'Design', icon: FaPalette },
  { id: 'business', label: 'Business', icon: FaBriefcase },
  { id: 'finance', label: 'Finance', icon: FaAward },
  { id: 'photography', label: 'Photography', icon: FaCamera },
  { id: 'cloud', label: 'Cloud', icon: FaCloud },
  { id: 'security', label: 'Security', icon: FaShieldAlt }
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const getBadgeStyles = (badge?: string) => {
    switch (badge) {
      case 'bestseller':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
      case 'new':
        return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white';
      case 'advanced':
        return 'bg-gradient-to-r from-purple-500 to-pink-600 text-white';
      case 'trending':
        return 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white';
      default:
        return '';
    }
  };

  const getBadgeText = (badge?: string) => {
    switch (badge) {
      case 'bestseller':
        return 'Bestseller';
      case 'new':
        return 'New';
      case 'advanced':
        return 'Advanced';
      case 'trending':
        return 'Trending';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
              DHV Courses
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent mt-2">
                Guiding Light
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              Discover 300+ high-quality courses from top experts
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
                  placeholder="Search courses, instructors, topics..."
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
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
                      ? 'bg-gradient-to-br from-[#10b981] via-[#14b8a6] to-[#06b6d4] text-white shadow-2xl shadow-emerald-500/40 scale-105 ring-4 ring-emerald-300/50'
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
                        className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-90"
                        animate={{
                          background: [
                            'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                            'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)',
                            'linear-gradient(135deg, #06b6d4 0%, #14b8a6 100%)',
                            'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
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
                    <Icon className={`text-3xl ${isActive ? 'text-white drop-shadow-2xl' : 'text-gray-600 group-hover:text-gray-800'}`} />
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
                      className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full relative z-10 shadow-xl shadow-emerald-400/50 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}

                  {/* Hover Glow for Inactive Cards */}
                  {!isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {filteredCourses.length} courses
            </h2>
            <p className="text-gray-600 mt-1">
              {selectedCategory === 'all' ? 'All categories' : categories.find(c => c.id === selectedCategory)?.label}
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Course Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badge */}
                  {course.badge && (
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 ${getBadgeStyles(course.badge)}`}>
                        {course.badge === 'bestseller' && <FaFire />}
                        {course.badge === 'new' && <FaAward />}
                        {course.badge === 'trending' && <FaChartLine />}
                        {getBadgeText(course.badge)}
                      </span>
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(course.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
                  >
                    {favorites.includes(course.id) ? (
                      <FaHeart className="text-red-500 text-lg" />
                    ) : (
                      <FaRegHeart className="text-gray-600 text-lg" />
                    )}
                  </button>

                  {/* Level Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                      {course.level}
                    </span>
                  </div>

                  {/* Play Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                      <FaPlay className="text-blue-600 text-xl ml-1" />
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="font-bold text-gray-900">{course.rating}</span>
                    </div>
                    <span className="text-gray-500 text-sm">({course.reviews.toLocaleString()} reviews)</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[56px]">
                    {course.title}
                  </h3>

                  {/* Instructor */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                    <img
                      src={course.instructorAvatar}
                      alt={course.instructor}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <p className="text-sm text-gray-600 font-medium">{course.instructor}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <FaClock className="text-gray-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUsers className="text-gray-400" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <FaCertificate className="text-green-500" />
                      <span>Chứng chỉ</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaInfinity className="text-blue-500" />
                      <span>Trọn đời</span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-blue-600">${course.price}</span>
                        <span className="text-sm text-gray-400 line-through">${course.originalPrice}</span>
                      </div>
                    </div>
                    <Link
                      to={`/courses/${course.id}`}
                      className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-xl"
                    >
                      <FaShoppingCart className="text-lg" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="text-6xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">No courses found</h3>
            <p className="text-gray-600 mb-6">Try searching with different keywords or select another category</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
            >
              View All Courses
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Courses;
