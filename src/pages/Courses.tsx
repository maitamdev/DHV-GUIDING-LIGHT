import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaSearch, FaFilter, FaClock, FaUsers, FaStar, FaCode, FaMobile, FaDatabase, FaRobot, FaCloud, FaShieldAlt, FaPalette, FaServer } from 'react-icons/fa';

interface Course {
  id: number;
  title: string;
  instructor: string;
  students: number;
  price: string;
  image: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  description: string;
}

const courses: Course[] = [
  // Web Development
  {
    id: 1,
    title: 'Full Stack Web Development Masterclass',
    instructor: 'Michael Chen',
    students: 2340,
    price: '$129',
    image: '/img/course-1.jpg',
    category: 'web-development',
    level: 'Intermediate',
    duration: '6 months',
    rating: 4.9,
    description: 'Master HTML, CSS, JavaScript, React, Node.js, and MongoDB'
  },
  {
    id: 2,
    title: 'React & Node.js Complete Bootcamp',
    instructor: 'Sarah Johnson',
    students: 1987,
    price: '$139',
    image: '/img/course-2.jpg',
    category: 'web-development',
    level: 'Advanced',
    duration: '4 months',
    rating: 4.8,
    description: 'Build modern full-stack applications with React and Node.js'
  },
  {
    id: 3,
    title: 'TypeScript for React Developers',
    instructor: 'David Williams',
    students: 1456,
    price: '$99',
    image: '/img/course-3.jpg',
    category: 'web-development',
    level: 'Intermediate',
    duration: '3 months',
    rating: 4.7,
    description: 'Learn TypeScript and build type-safe React applications'
  },
  {
    id: 4,
    title: 'Next.js 14 - The Complete Guide',
    instructor: 'Emily Parker',
    students: 1234,
    price: '$119',
    image: '/img/team-1.jpg',
    category: 'web-development',
    level: 'Advanced',
    duration: '4 months',
    rating: 4.9,
    description: 'Master Next.js 14 with App Router, Server Components, and more'
  },

  // Mobile Development
  {
    id: 5,
    title: 'React Native - Build iOS & Android Apps',
    instructor: 'Alex Martinez',
    students: 1876,
    price: '$149',
    image: '/img/team-2.jpg',
    category: 'mobile-development',
    level: 'Intermediate',
    duration: '5 months',
    rating: 4.8,
    description: 'Create cross-platform mobile apps with React Native'
  },
  {
    id: 6,
    title: 'Flutter & Dart Complete Course',
    instructor: 'Jessica Taylor',
    students: 1543,
    price: '$139',
    image: '/img/team-3.jpg',
    category: 'mobile-development',
    level: 'Beginner',
    duration: '4 months',
    rating: 4.7,
    description: 'Build beautiful native apps with Flutter and Dart'
  },
  {
    id: 7,
    title: 'iOS Development with Swift 5',
    instructor: 'James Anderson',
    students: 987,
    price: '$159',
    image: '/img/course-1.jpg',
    category: 'mobile-development',
    level: 'Advanced',
    duration: '6 months',
    rating: 4.9,
    description: 'Master iOS app development with Swift 5 and SwiftUI'
  },

  // Data Science
  {
    id: 8,
    title: 'Data Science & Machine Learning Bootcamp',
    instructor: 'Dr. Robert Kim',
    students: 3210,
    price: '$169',
    image: '/img/course-2.jpg',
    category: 'data-science',
    level: 'Advanced',
    duration: '8 months',
    rating: 4.9,
    description: 'Python, Pandas, NumPy, Scikit-learn, and data visualization'
  },
  {
    id: 9,
    title: 'Python for Data Science',
    instructor: 'Lisa Wang',
    students: 2456,
    price: '$109',
    image: '/img/course-3.jpg',
    category: 'data-science',
    level: 'Beginner',
    duration: '4 months',
    rating: 4.6,
    description: 'Learn Python programming for data analysis and visualization'
  },
  {
    id: 10,
    title: 'Advanced Data Analytics with R',
    instructor: 'Dr. Thomas Lee',
    students: 1234,
    price: '$149',
    image: '/img/team-1.jpg',
    category: 'data-science',
    level: 'Advanced',
    duration: '5 months',
    rating: 4.8,
    description: 'Statistical analysis and data visualization with R'
  },

  // AI & Machine Learning
  {
    id: 11,
    title: 'Deep Learning & Neural Networks',
    instructor: 'Dr. Anna Schmidt',
    students: 2187,
    price: '$189',
    image: '/img/team-2.jpg',
    category: 'ai-ml',
    level: 'Advanced',
    duration: '9 months',
    rating: 4.9,
    description: 'TensorFlow, PyTorch, CNNs, RNNs, and Transformers'
  },
  {
    id: 12,
    title: 'Machine Learning A-Z',
    instructor: 'Prof. Mark Johnson',
    students: 2876,
    price: '$179',
    image: '/img/team-3.jpg',
    category: 'ai-ml',
    level: 'Intermediate',
    duration: '7 months',
    rating: 4.8,
    description: 'Comprehensive ML course covering all major algorithms'
  },
  {
    id: 13,
    title: 'Natural Language Processing with Python',
    instructor: 'Dr. Sarah Chen',
    students: 1654,
    price: '$169',
    image: '/img/course-1.jpg',
    category: 'ai-ml',
    level: 'Advanced',
    duration: '6 months',
    rating: 4.7,
    description: 'NLP, BERT, GPT, and text analysis'
  },

  // Cloud Computing
  {
    id: 14,
    title: 'AWS Certified Solutions Architect',
    instructor: 'Kevin Brown',
    students: 1876,
    price: '$159',
    image: '/img/course-2.jpg',
    category: 'cloud-computing',
    level: 'Intermediate',
    duration: '5 months',
    rating: 4.9,
    description: 'Prepare for AWS certification and master cloud architecture'
  },
  {
    id: 15,
    title: 'Microsoft Azure Administrator',
    instructor: 'Rachel Green',
    students: 1432,
    price: '$149',
    image: '/img/course-3.jpg',
    category: 'cloud-computing',
    level: 'Intermediate',
    duration: '4 months',
    rating: 4.7,
    description: 'Azure fundamentals, VM management, and cloud services'
  },
  {
    id: 16,
    title: 'Google Cloud Platform (GCP) Complete Guide',
    instructor: 'Daniel Park',
    students: 1098,
    price: '$139',
    image: '/img/team-1.jpg',
    category: 'cloud-computing',
    level: 'Beginner',
    duration: '4 months',
    rating: 4.6,
    description: 'GCP services, deployment, and cloud infrastructure'
  },

  // Cybersecurity
  {
    id: 17,
    title: 'Ethical Hacking & Penetration Testing',
    instructor: 'Chris Evans',
    students: 1654,
    price: '$179',
    image: '/img/team-2.jpg',
    category: 'cybersecurity',
    level: 'Advanced',
    duration: '7 months',
    rating: 4.9,
    description: 'Learn ethical hacking, Kali Linux, and security testing'
  },
  {
    id: 18,
    title: 'Network Security Fundamentals',
    instructor: 'Jennifer White',
    students: 1234,
    price: '$129',
    image: '/img/team-3.jpg',
    category: 'cybersecurity',
    level: 'Beginner',
    duration: '4 months',
    rating: 4.7,
    description: 'Firewalls, VPNs, encryption, and network protocols'
  },

  // UI/UX Design
  {
    id: 19,
    title: 'UI/UX Design Masterclass with Figma',
    instructor: 'Sophia Lee',
    students: 2340,
    price: '$119',
    image: '/img/course-1.jpg',
    category: 'ui-ux',
    level: 'Intermediate',
    duration: '4 months',
    rating: 4.8,
    description: 'Design beautiful interfaces with Figma and Adobe XD'
  },
  {
    id: 20,
    title: 'User Experience (UX) Research & Design',
    instructor: 'Oliver Martinez',
    students: 1765,
    price: '$109',
    image: '/img/course-2.jpg',
    category: 'ui-ux',
    level: 'Beginner',
    duration: '3 months',
    rating: 4.6,
    description: 'User research, wireframing, prototyping, and usability testing'
  },

  // DevOps
  {
    id: 21,
    title: 'DevOps Engineering - Docker & Kubernetes',
    instructor: 'Andrew Wilson',
    students: 1543,
    price: '$159',              
    image: '/img/course-3.jpg',
    category: 'devops',
    level: 'Advanced',
    duration: '6 months',
    rating: 4.9,
    description: 'Containerization, orchestration, and CI/CD pipelines'
  },
  {
    id: 22,
    title: 'Jenkins CI/CD Complete Course',
    instructor: 'Michelle Davis',
    students: 987,
    price: '$129',
    image: '/img/team-1.jpg',
    category: 'devops',
    level: 'Intermediate',
    duration: '3 months',
    rating: 4.7,
    description: 'Automate build, test, and deployment processes'
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

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesCategory && matchesSearch && matchesLevel;
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

          {/* Level Filter */}
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-700 flex items-center gap-2">
              <FaFilter /> Filter by Level:
            </span>
            {['all', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedLevel === level
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level === 'all' ? 'All Levels' : level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {selectedCategory === 'all' ? 'All Courses' : categories.find(c => c.id === selectedCategory)?.name}
              <span className="text-blue-600 ml-3">({filteredCourses.length})</span>
            </h2>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No courses found. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white rounded-full text-sm font-bold text-blue-600 shadow-lg">
                        {course.price}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                      <i className="fas fa-user-tie"></i>
                      <span>{course.instructor}</span>
                    </div>

                    <div className="flex items-center justify-between mb-4 pb-4 border-b">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <FaUsers className="text-blue-600" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaClock className="text-green-600" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        <span className="font-bold text-gray-800">{course.rating}</span>
                        <span className="text-gray-500 text-sm">/5.0</span>
                      </div>
                      <Link
                        to={`/courses/${course.id}`}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                      >
                        Enroll Now
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
