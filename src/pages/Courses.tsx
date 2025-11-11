import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaSearch, FaClock, FaUsers, FaStar, FaCode, FaMobile, FaDatabase, FaRobot, FaCloud, FaShieldAlt, FaPalette, FaServer, FaChartLine, FaHeart, FaRegHeart } from 'react-icons/fa';

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
    <div className="min-h-screen bg-white">
      {/* Hero Header - Simple 28Tech style */}
      <section className="relative bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Khóa Học DHV
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-100 max-w-2xl"
          >
            Học tập không giới hạn - Nắm vững kỹ năng với các khóa học chất lượng từ chuyên gia
          </motion.p>
        </div>
      </section>

      {/* Category Filter & Search - Clean 28Tech style */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative max-w-2xl">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm khóa học..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex items-center gap-3 mb-4 overflow-x-auto pb-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="text-sm" />
                  {category.name}
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Filters Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {/* Level Filter */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-gray-600 mb-1">Cấp độ</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-sm"
              >
                <option value="all">Tất cả</option>
                <option value="Beginner">Cơ bản</option>
                <option value="Intermediate">Trung cấp</option>
                <option value="Advanced">Nâng cao</option>
              </select>
            </div>

            {/* Price Filter */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-gray-600 mb-1">Giá</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-sm"
              >
                <option value="all">Tất cả</option>
                <option value="free">Miễn phí</option>
                <option value="under-100">Dưới $100</option>
                <option value="100-150">$100 - $150</option>
                <option value="over-150">Trên $150</option>
              </select>
            </div>

            {/* Sort By */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-gray-600 mb-1">Sắp xếp</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-sm"
              >
                <option value="popular">Phổ biến</option>
                <option value="rating">Đánh giá cao</option>
                <option value="newest">Mới nhất</option>
                <option value="price-low">Giá thấp</option>
                <option value="price-high">Giá cao</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="flex flex-col justify-end">
              <div className="px-3 py-2 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-xs text-gray-600">Kết quả</p>
                <p className="text-lg font-bold text-blue-600">{sortedCourses.length}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid - Clean 28Tech style */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {sortedCourses.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-white rounded-lg"
            >
              <div className="text-5xl mb-3">📚</div>
              <p className="text-xl font-bold text-gray-800 mb-1">Không tìm thấy khóa học</p>
              <p className="text-gray-500">Thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {sortedCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 relative"
                >
                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(course.id)}
                    className="absolute top-2 right-2 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow hover:bg-white transition-all hover:scale-110"
                  >
                    {favorites.includes(course.id) ? (
                      <FaHeart className="text-red-500 text-sm" />
                    ) : (
                      <FaRegHeart className="text-gray-600 text-sm" />
                    )}
                  </button>

                  {/* Course Image */}
                  <div className="relative overflow-hidden h-44">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {course.bestseller && (
                        <span className="px-2 py-1 bg-yellow-500 text-white rounded text-xs font-bold shadow">
                          <FaStar className="inline mr-1" />BESTSELLER
                        </span>
                      )}
                      {course.new && (
                        <span className="px-2 py-1 bg-green-500 text-white rounded text-xs font-bold shadow">
                          🆕 NEW
                        </span>
                      )}
                    </div>

                    {/* Level Badge */}
                    <div className="absolute bottom-2 left-2">
                      <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs font-medium">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-4">
                    {/* Category Tag */}
                    <div className="mb-2">
                      <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-medium">
                        {categories.find(c => c.id === course.category)?.name}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[2.5rem]">
                      {course.title}
                    </h3>

                    {/* Instructor */}
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
                      <img
                        src={course.instructorAvatar || '/img/team-1.jpg'}
                        alt={course.instructor}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <p className="font-medium text-gray-700 text-xs truncate">{course.instructor}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <FaUsers className="text-blue-600" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <FaClock className="text-green-600" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <FaChartLine className="text-purple-600" />
                        <span>{course.lessons || 120} bài</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <FaStar className="text-yellow-500" />
                        <span className="font-bold">{course.rating}</span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div>
                        <p className="text-xl font-bold text-gray-800">{course.price}</p>
                      </div>
                      <Link
                        to={`/courses/${course.id}`}
                        className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all text-sm"
                      >
                        Chi tiết
                      </Link>
                    </div>
                  </div>
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
