import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaSearch, FaFilter, FaClock, FaUsers, FaStar, FaCode, FaMobile, FaDatabase, FaRobot, FaCloud, FaShieldAlt, FaPalette, FaServer, FaPlay, FaChartLine, FaGraduationCap, FaHeart, FaRegHeart, FaArrowRight, FaSortAmountDown } from 'react-icons/fa';

interface Course {
  id: number;
  title: string;
  instructor: string;
  instructorAvatar?: string;
  students: number;
  price: string;
  image: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  description: string;
  bestseller?: boolean;
  new?: boolean;
  lessons?: number;
}

const courses: Course[] = [
  // Web Development
  {
    id: 1,
    title: 'Full Stack Web Development Masterclass',
    instructor: 'Michael Chen',
    instructorAvatar: '/img/team-1.jpg',
    students: 2340,
    price: '$129',
    image: '/img/course-1.jpg',
    category: 'web-development',
    level: 'Intermediate',
    duration: '6 months',
    rating: 4.9,
    description: 'Master HTML, CSS, JavaScript, React, Node.js, and MongoDB',
    bestseller: true,
    lessons: 248
  },
  {
    id: 2,
    title: 'React & Node.js Complete Bootcamp',
    instructor: 'Sarah Johnson',
    instructorAvatar: '/img/team-2.jpg',
    students: 1987,
    price: '$139',
    image: '/img/course-2.jpg',
    category: 'web-development',
    level: 'Advanced',
    duration: '4 months',
    rating: 4.8,
    description: 'Build modern full-stack applications with React and Node.js',
    new: true,
    lessons: 186
  },
  {
    id: 3,
    title: 'TypeScript for React Developers',
    instructor: 'David Williams',
    instructorAvatar: '/img/team-3.jpg',
    students: 1456,
    price: '$99',
    image: '/img/course-3.jpg',
    category: 'web-development',
    level: 'Intermediate',
    duration: '3 months',
    rating: 4.7,
    description: 'Learn TypeScript and build type-safe React applications',
    lessons: 142
  },
  {
    id: 4,
    title: 'Next.js 14 - The Complete Guide',
    instructor: 'Emily Parker',
    instructorAvatar: '/img/team-4.jpg',
    students: 1234,
    price: '$119',
    image: '/img/team-1.jpg',
    category: 'web-development',
    level: 'Advanced',
    duration: '4 months',
    rating: 4.9,
    description: 'Master Next.js 14 with App Router, Server Components, and more',
    bestseller: true,
    lessons: 198
  },

  // Mobile Development
  {
    id: 5,
    title: 'React Native - Build iOS & Android Apps',
    instructor: 'Alex Martinez',
    instructorAvatar: '/img/team-2.jpg',
    students: 1876,
    price: '$149',
    image: '/img/team-2.jpg',
    category: 'mobile-development',
    level: 'Intermediate',
    duration: '5 months',
    rating: 4.8,
    description: 'Create cross-platform mobile apps with React Native',
    lessons: 215
  },
  {
    id: 6,
    title: 'Flutter & Dart Complete Course',
    instructor: 'Jessica Taylor',
    instructorAvatar: '/img/team-3.jpg',
    students: 1543,
    price: '$139',
    image: '/img/team-3.jpg',
    category: 'mobile-development',
    level: 'Beginner',
    duration: '4 months',
    rating: 4.7,
    description: 'Build beautiful native apps with Flutter and Dart',
    lessons: 189
  },
  {
    id: 7,
    title: 'iOS Development with Swift 5',
    instructor: 'James Anderson',
    instructorAvatar: '/img/team-1.jpg',
    students: 987,
    price: '$159',
    image: '/img/course-1.jpg',
    category: 'mobile-development',
    level: 'Advanced',
    duration: '6 months',
    rating: 4.9,
    description: 'Master iOS app development with Swift 5 and SwiftUI',
    bestseller: true,
    lessons: 256
  },

  // Data Science
  {
    id: 8,
    title: 'Data Science & Machine Learning Bootcamp',
    instructor: 'Dr. Robert Kim',
    instructorAvatar: '/img/team-4.jpg',
    students: 3210,
    price: '$169',
    image: '/img/course-2.jpg',
    category: 'data-science',
    level: 'Advanced',
    duration: '8 months',
    rating: 4.9,
    description: 'Python, Pandas, NumPy, Scikit-learn, and data visualization',
    bestseller: true,
    lessons: 312
  },
  {
    id: 9,
    title: 'Python for Data Science',
    instructor: 'Lisa Wang',
    instructorAvatar: '/img/team-2.jpg',
    students: 2456,
    price: '$109',
    image: '/img/course-3.jpg',
    category: 'data-science',
    level: 'Beginner',
    duration: '4 months',
    rating: 4.6,
    description: 'Learn Python programming for data analysis and visualization',
    lessons: 156
  },
  {
    id: 10,
    title: 'Advanced Data Analytics with R',
    instructor: 'Dr. Thomas Lee',
    instructorAvatar: '/img/team-1.jpg',
    students: 1234,
    price: '$149',
    image: '/img/team-1.jpg',
    category: 'data-science',
    level: 'Advanced',
    duration: '5 months',
    rating: 4.8,
    description: 'Statistical analysis and data visualization with R',
    lessons: 187
  },

  // AI & Machine Learning
  {
    id: 11,
    title: 'Deep Learning & Neural Networks',
    instructor: 'Dr. Anna Schmidt',
    instructorAvatar: '/img/team-3.jpg',
    students: 2187,
    price: '$189',
    image: '/img/team-2.jpg',
    category: 'ai-ml',
    level: 'Advanced',
    duration: '9 months',
    rating: 4.9,
    description: 'TensorFlow, PyTorch, CNNs, RNNs, and Transformers',
    bestseller: true,
    new: true,
    lessons: 342
  },
  {
    id: 12,
    title: 'Machine Learning A-Z',
    instructor: 'Prof. Mark Johnson',
    instructorAvatar: '/img/team-4.jpg',
    students: 2876,
    price: '$179',
    image: '/img/team-3.jpg',
    category: 'ai-ml',
    level: 'Intermediate',
    duration: '7 months',
    rating: 4.8,
    description: 'Comprehensive ML course covering all major algorithms',
    bestseller: true,
    lessons: 298
  },
  {
    id: 13,
    title: 'Natural Language Processing with Python',
    instructor: 'Dr. Sarah Chen',
    instructorAvatar: '/img/team-2.jpg',
    students: 1654,
    price: '$169',
    image: '/img/course-1.jpg',
    category: 'ai-ml',
    level: 'Advanced',
    duration: '6 months',
    rating: 4.7,
    description: 'NLP, BERT, GPT, and text analysis',
    new: true,
    lessons: 234
  },

  // Cloud Computing
  {
    id: 14,
    title: 'AWS Certified Solutions Architect',
    instructor: 'Kevin Brown',
    instructorAvatar: '/img/team-1.jpg',
    students: 1876,
    price: '$159',
    image: '/img/course-2.jpg',
    category: 'cloud-computing',
    level: 'Intermediate',
    duration: '5 months',
    rating: 4.9,
    description: 'Prepare for AWS certification and master cloud architecture',
    bestseller: true,
    lessons: 176
  },
  {
    id: 15,
    title: 'Microsoft Azure Administrator',
    instructor: 'Rachel Green',
    instructorAvatar: '/img/team-3.jpg',
    students: 1432,
    price: '$149',
    image: '/img/course-3.jpg',
    category: 'cloud-computing',
    level: 'Intermediate',
    duration: '4 months',
    rating: 4.7,
    description: 'Azure fundamentals, VM management, and cloud services',
    lessons: 158
  },
  {
    id: 16,
    title: 'Google Cloud Platform (GCP) Complete Guide',
    instructor: 'Daniel Park',
    instructorAvatar: '/img/team-4.jpg',
    students: 1098,
    price: '$139',
    image: '/img/team-1.jpg',
    category: 'cloud-computing',
    level: 'Beginner',
    duration: '4 months',
    rating: 4.6,
    description: 'GCP services, deployment, and cloud infrastructure',
    lessons: 145
  },

  // Cybersecurity
  {
    id: 17,
    title: 'Ethical Hacking & Penetration Testing',
    instructor: 'Chris Evans',
    instructorAvatar: '/img/team-2.jpg',
    students: 1654,
    price: '$179',
    image: '/img/team-2.jpg',
    category: 'cybersecurity',
    level: 'Advanced',
    duration: '7 months',
    rating: 4.9,
    description: 'Learn ethical hacking, Kali Linux, and security testing',
    bestseller: true,
    lessons: 267
  },
  {
    id: 18,
    title: 'Network Security Fundamentals',
    instructor: 'Jennifer White',
    instructorAvatar: '/img/team-1.jpg',
    students: 1234,
    price: '$129',
    image: '/img/team-3.jpg',
    category: 'cybersecurity',
    level: 'Beginner',
    duration: '4 months',
    rating: 4.7,
    description: 'Firewalls, VPNs, encryption, and network protocols',
    lessons: 132
  },

  // UI/UX Design
  {
    id: 19,
    title: 'UI/UX Design Masterclass with Figma',
    instructor: 'Sophia Lee',
    instructorAvatar: '/img/team-3.jpg',
    students: 2340,
    price: '$119',
    image: '/img/course-1.jpg',
    category: 'ui-ux',
    level: 'Intermediate',
    duration: '4 months',
    rating: 4.8,
    description: 'Design beautiful interfaces with Figma and Adobe XD',
    bestseller: true,
    lessons: 164
  },
  {
    id: 20,
    title: 'User Experience (UX) Research & Design',
    instructor: 'Oliver Martinez',
    instructorAvatar: '/img/team-4.jpg',
    students: 1765,
    price: '$109',
    image: '/img/course-2.jpg',
    category: 'ui-ux',
    level: 'Beginner',
    duration: '3 months',
    rating: 4.6,
    description: 'User research, wireframing, prototyping, and usability testing',
    lessons: 118
  },

  // DevOps
  {
    id: 21,
    title: 'DevOps Engineering - Docker & Kubernetes',
    instructor: 'Andrew Wilson',
    instructorAvatar: '/img/team-2.jpg',
    students: 1543,
    price: '$159',
    image: '/img/course-3.jpg',
    category: 'devops',
    level: 'Advanced',
    duration: '6 months',
    rating: 4.9,
    description: 'Containerization, orchestration, and CI/CD pipelines',
    bestseller: true,
    lessons: 201
  },
  {
    id: 22,
    title: 'Jenkins CI/CD Complete Course',
    instructor: 'Michelle Davis',
    instructorAvatar: '/img/team-1.jpg',
    students: 987,
    price: '$129',
    image: '/img/team-1.jpg',
    category: 'devops',
    level: 'Intermediate',
    duration: '3 months',
    rating: 4.7,
    description: 'Automate build, test, and deployment processes',
    lessons: 96
  },
];

const categories = [
  { id: 'all', name: 'All Courses', icon: FaCode, count: courses.length },
  { id: 'web-development', name: 'Web Development', icon: FaCode, count: courses.filter(c => c.category === 'web-development').length },
  { id: 'mobile-development', name: 'Mobile Development', icon: FaMobile, count: courses.filter(c => c.category === 'mobile-development').length },
  { id: 'data-science', name: 'Data Science', icon: FaDatabase, count: courses.filter(c => c.category === 'data-science').length },
  { id: 'ai-ml', name: 'AI & Machine Learning', icon: FaRobot, count: courses.filter(c => c.category === 'ai-ml').length },
  { id: 'cloud-computing', name: 'Cloud Computing', icon: FaCloud, count: courses.filter(c => c.category === 'cloud-computing').length },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: FaShieldAlt, count: courses.filter(c => c.category === 'cybersecurity').length },
  { id: 'ui-ux', name: 'UI/UX Design', icon: FaPalette, count: courses.filter(c => c.category === 'ui-ux').length },
  { id: 'devops', name: 'DevOps', icon: FaServer, count: courses.filter(c => c.category === 'devops').length },
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (courseId: number) => {
    setFavorites(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    // Price filter
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const price = parseInt(course.price.replace('$', ''));
      if (priceRange === 'free') matchesPrice = price === 0;
      else if (priceRange === 'under-100') matchesPrice = price < 100;
      else if (priceRange === '100-150') matchesPrice = price >= 100 && price <= 150;
      else if (priceRange === 'over-150') matchesPrice = price > 150;
    }
    
    return matchesCategory && matchesSearch && matchesLevel && matchesPrice;
  });

  // Sorting
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.students - a.students;
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', ''));
      case 'newest':
        return (b.new ? 1 : 0) - (a.new ? 1 : 0);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-6"
          >
            📚 Explore Our Courses
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Master in-demand skills with expert-led courses. From web development to AI, find your perfect learning path.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search courses by title, instructor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-xl"
              />
            </div>
          </motion.div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <p className="text-4xl font-bold">{courses.length}</p>
              <p className="text-blue-100">Courses</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">{categories.length - 1}</p>
              <p className="text-blue-100">Categories</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">50K+</p>
              <p className="text-blue-100">Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="text-lg" />
                  {category.name}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-sm">{category.count}</span>
                </button>
              );
            })}
          </div>

          {/* Filters Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Level Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FaGraduationCap className="text-blue-600" /> Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none font-medium"
              >
                <option value="all">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Price Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FaFilter className="text-blue-600" /> Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none font-medium"
              >
                <option value="all">All Prices</option>
                <option value="free">Free</option>
                <option value="under-100">Under $100</option>
                <option value="100-150">$100 - $150</option>
                <option value="over-150">Over $150</option>
              </select>
            </div>

            {/* Sort By */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FaSortAmountDown className="text-blue-600" /> Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none font-medium"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="flex flex-col justify-end">
              <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-100">
                <p className="text-sm text-gray-600">Showing Results</p>
                <p className="text-2xl font-bold text-blue-600">{sortedCourses.length}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-800">
              {selectedCategory === 'all' ? 'All Courses' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">
              <span className="font-bold text-blue-600">{sortedCourses.length}</span> courses found
            </p>
          </div>

          {sortedCourses.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-white rounded-3xl shadow-xl"
            >
              <div className="text-6xl mb-4">📚</div>
              <p className="text-2xl font-bold text-gray-800 mb-2">No courses found</p>
              <p className="text-gray-500">Try adjusting your filters or search query</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative"
                >
                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(course.id)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                  >
                    {favorites.includes(course.id) ? (
                      <FaHeart className="text-red-500 text-lg" />
                    ) : (
                      <FaRegHeart className="text-gray-600 text-lg" />
                    )}
                  </button>

                  {/* Course Image */}
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {course.bestseller && (
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                          <FaStar /> BESTSELLER
                        </span>
                      )}
                      {course.new && (
                        <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-xs font-bold shadow-lg">
                          🆕 NEW
                        </span>
                      )}
                      <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold shadow-lg">
                        {course.level}
                      </span>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white px-4 py-2 rounded-full font-bold text-blue-600 shadow-xl text-lg">
                        {course.price}
                      </div>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                        <FaPlay className="text-blue-600 text-xl ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    {/* Category Tag */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold">
                        {categories.find(c => c.id === course.category)?.name}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[3.5rem]">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Instructor */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                      <img
                        src={course.instructorAvatar || '/img/team-1.jpg'}
                        alt={course.instructor}
                        className="w-10 h-10 rounded-full object-cover border-2 border-blue-100"
                      />
                      <div>
                        <p className="text-xs text-gray-500">Instructor</p>
                        <p className="font-semibold text-gray-800 text-sm">{course.instructor}</p>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
                        <FaUsers className="text-blue-600" />
                        <span className="font-medium">{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
                        <FaClock className="text-green-600" />
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
                        <FaChartLine className="text-purple-600" />
                        <span className="font-medium">{course.lessons || 120} lessons</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
                        <FaStar className="text-yellow-500" />
                        <span className="font-bold text-gray-800">{course.rating}</span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-sm text-gray-500 line-through">{parseInt(course.price.replace('$', '')) + 50}</p>
                        <p className="text-3xl font-bold text-gray-800">{course.price}</p>
                      </div>
                      <Link
                        to={`/courses/${course.id}`}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Enroll <FaArrowRight className="text-sm" />
                      </Link>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
