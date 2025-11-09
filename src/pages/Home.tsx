import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaPlay, FaRocket, FaStar, FaUsers, FaGraduationCap, FaChartLine, FaAward, FaBook, FaClock, FaInfinity } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const [studentsCount, setStudentsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [instructorsCount, setInstructorsCount] = useState(0);

  // Counter animation
  useEffect(() => {
    const animateCount = (target: number, setter: (n: number) => void, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    animateCount(50000, setStudentsCount);
    animateCount(200, setCoursesCount);
    animateCount(150, setInstructorsCount);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Modern Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
        
        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20"
              >
                <FaAward className="text-yellow-400" />
                <span className="text-white text-sm font-medium">Trusted by 50,000+ Students</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Learn Without
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Limits
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/90 mb-8 leading-relaxed"
              >
                Master in-demand skills with expert-led courses. From web development to AI, find your perfect learning path and transform your career.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <Link
                  to="/courses"
                  className="group relative inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <FaRocket className="group-hover:rotate-12 transition-transform" />
                  Explore Courses
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
                >
                  <FaPlay />
                  Watch Demo
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center gap-6"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`/img/team-${i}.jpg`}
                        alt="Student"
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <div className="text-white">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <FaStar key={i} className="text-yellow-400 text-xs" />
                      ))}
                    </div>
                    <p className="text-sm">4.9/5 from 12,000+ reviews</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Image Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="/img/carousel-1.jpg"
                    alt="Learning"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>

                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-10 -left-10 bg-white rounded-2xl p-6 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <FaUsers className="text-white text-2xl" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-800">{studentsCount.toLocaleString()}+</div>
                      <div className="text-gray-600">Active Students</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute bottom-10 -right-10 bg-white rounded-2xl p-6 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                      <FaGraduationCap className="text-white text-2xl" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-800">{coursesCount}+</div>
                      <div className="text-gray-600">Expert Courses</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="absolute top-1/2 -right-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-4 shadow-2xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-white text-sm">Success Rate</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
              >
                <div className="w-1.5 h-2 bg-white/60 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Companies Trust Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-gray-50 border-y border-gray-200"
      >
        <div className="container mx-auto px-4">
          <motion.p
            variants={fadeInUp}
            className="text-center text-gray-600 mb-8 font-semibold"
          >
            Trusted by leading companies worldwide
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Netflix'].map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of students who are transforming their careers with our comprehensive learning platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: FaGraduationCap, 
                title: 'Expert Instructors', 
                description: 'Learn from industry leaders with real-world experience and proven track records',
                gradient: 'from-blue-500 to-indigo-600',
                color: 'text-blue-500'
              },
              { 
                icon: FaInfinity, 
                title: 'Lifetime Access', 
                description: 'Get unlimited access to course materials, updates, and new content forever',
                gradient: 'from-purple-500 to-pink-600',
                color: 'text-purple-500'
              },
              { 
                icon: FaBook, 
                title: 'Practical Projects', 
                description: 'Build real-world projects and create an impressive portfolio to showcase',
                gradient: 'from-green-500 to-emerald-600',
                color: 'text-green-500'
              },
              { 
                icon: FaAward, 
                title: 'Certificates', 
                description: 'Earn recognized certificates to boost your resume and career prospects',
                gradient: 'from-orange-500 to-red-600',
                color: 'text-orange-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-transparent h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-white text-2xl" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm">Learn more</span>
                    <FaPlay className="text-xs" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Row */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: studentsCount.toLocaleString() + '+', label: 'Active Students', icon: FaUsers },
              { number: coursesCount + '+', label: 'Quality Courses', icon: FaBook },
              { number: instructorsCount + '+', label: 'Expert Instructors', icon: FaGraduationCap },
              { number: '98%', label: 'Success Rate', icon: FaChartLine }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl mb-4">
                  <stat.icon className="text-blue-600 text-2xl" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="relative h-[500px]">
              <img className="w-full h-full object-cover rounded-lg shadow-xl" src="/img/about.jpg" alt="About" />
            </motion.div>
            <motion.div variants={fadeInRight}>
              <h6 className="text-[#06BBCC] text-lg font-semibold mb-2">About Us</h6>
              <h1 className="text-4xl font-bold mb-6">Welcome To DHV GUIDING LIGHT</h1>
              <p className="text-gray-600 mb-4">Vietnam's leading online learning platform, connecting students with experienced experts and professional mentors. We are committed to delivering high-quality and effective learning experiences.</p>
              <p className="text-gray-600 mb-6">With an advanced mentor management system, you can easily search, schedule and join online mentoring sessions. Learn flexibly, develop skills and achieve your career goals.</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  'Professional Mentors',
                  'Online Classes',
                  'Practical Certification',
                  'Expert Mentoring',
                  '24/7 Support',
                  'Real Projects'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fa fa-arrow-right text-[#06BBCC] mr-2"></i>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="bg-[#06BBCC] text-white px-8 py-4 rounded hover:bg-[#05a3b3] transition-all inline-block font-semibold">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h6 className="text-[#06BBCC] text-lg font-semibold mb-2">Categories</h6>
            <h1 className="text-4xl font-bold">Courses Categories</h1>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-7">
              <div className="grid gap-4">
                <motion.div variants={fadeInUp} className="relative overflow-hidden rounded-lg group cursor-pointer">
                  <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="/img/cat-1.jpg" alt="Web Design" />
                  <div className="absolute bottom-4 right-4 bg-white px-6 py-3 rounded shadow-lg">
                    <h5 className="text-xl font-bold mb-1">Web Design</h5>
                    <small className="text-[#06BBCC]">49 Courses</small>
                  </div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { img: 'cat-2.jpg', title: 'Graphic Design', courses: 49, delay: 0.3 },
                    { img: 'cat-3.jpg', title: 'Video Editing', courses: 49, delay: 0.5 }
                  ].map((cat, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      className="relative overflow-hidden rounded-lg group cursor-pointer"
                    >
                      <img className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" src={`/img/${cat.img}`} alt={cat.title} />
                      <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded shadow-lg">
                        <h5 className="text-lg font-bold mb-1">{cat.title}</h5>
                        <small className="text-[#06BBCC]">{cat.courses} Courses</small>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid gap-4">
                {[
                  { img: 'cat-4.jpg', title: 'Online Marketing', courses: 49, delay: 0.1 },
                  { img: 'cat-5.jpg', title: 'SEO Optimization', courses: 49, delay: 0.3 }
                ].map((cat, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="relative overflow-hidden rounded-lg group cursor-pointer h-64"
                  >
                    <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src={`/img/${cat.img}`} alt={cat.title} />
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded shadow-lg">
                      <h5 className="text-lg font-bold mb-1">{cat.title}</h5>
                      <small className="text-[#06BBCC]">{cat.courses} Courses</small>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Courses Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
              FEATURED COURSES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Most Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most loved courses taught by industry experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                img: 'course-1.jpg', 
                price: '$149', 
                rating: 4.9, 
                reviews: 1234, 
                title: 'Complete Web Development Bootcamp 2024', 
                instructor: 'Mai Tran Thien Tam',
                avatar: 'team-1.jpg',
                students: 12500,
                duration: '42.5',
                level: 'Beginner',
                category: 'Web Development'
              },
              { 
                img: 'course-2.jpg', 
                price: '$129', 
                rating: 4.8, 
                reviews: 987, 
                title: 'React & Node.js - The Complete Guide', 
                instructor: 'Le Thi Huong',
                avatar: 'team-2.jpg',
                students: 8450,
                duration: '36.5',
                level: 'Intermediate',
                category: 'Full Stack'
              },
              { 
                img: 'course-3.jpg', 
                price: '$179', 
                rating: 4.9, 
                reviews: 1567, 
                title: 'UI/UX Design Masterclass with Figma', 
                instructor: 'Pham Duc Anh',
                avatar: 'team-3.jpg',
                students: 15600,
                duration: '28.5',
                level: 'All Levels',
                category: 'Design'
              }
            ].map((course, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                  {/* Course Image */}
                  <div className="relative overflow-hidden h-56">
                    <img 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                      src={`/img/${course.img}`} 
                      alt={course.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                        {course.price}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                        {course.category}
                      </div>
                    </div>

                    {/* Level Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {course.level}
                      </div>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400 text-sm" />
                        <span className="font-bold text-gray-900">{course.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm">({course.reviews.toLocaleString()} reviews)</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>

                    {/* Instructor */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                      <img 
                        src={`/img/${course.avatar}`} 
                        alt={course.instructor}
                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                      />
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">Instructor</p>
                        <p className="font-semibold text-gray-900">{course.instructor}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <FaUsers className="text-gray-400" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock className="text-gray-400" />
                        <span>{course.duration} hours</span>
                      </div>
                    </div>

                    {/* Enroll Button */}
                    <Link
                      to="/courses"
                      className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Explore All Courses</span>
              <FaPlay className="text-sm" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h6 className="text-[#06BBCC] text-lg font-semibold mb-2">Mentors</h6>
            <h1 className="text-4xl font-bold">Our Professional Mentor Team</h1>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: 'team-1.jpg', name: 'Mai Trần Thiện Tâm', designation: 'Senior Full Stack Developer' },
              { img: 'team-2.jpg', name: 'Lê Thị Hương', designation: 'UI/UX Design Lead' },
              { img: 'team-3.jpg', name: 'Phạm Đức Anh', designation: 'AI/ML Engineer' },
              { img: 'team-4.jpg', name: 'Ngô Thị Mai', designation: 'Mobile Developer' }
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" src={`/img/${member.img}`} alt={member.name} />
                  <div className="absolute inset-0 bg-[rgba(6,187,204,0.7)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-2">
                      <a href="#" className="w-10 h-10 bg-white text-[#06BBCC] rounded-full flex items-center justify-center hover:bg-[#06BBCC] hover:text-white transition-all">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white text-[#06BBCC] rounded-full flex items-center justify-center hover:bg-[#06BBCC] hover:text-white transition-all">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white text-[#06BBCC] rounded-full flex items-center justify-center hover:bg-[#06BBCC] hover:text-white transition-all">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-1">{member.name}</h5>
                <small className="text-gray-600">{member.designation}</small>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
              STUDENT SUCCESS STORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Thousands of Students
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              See what our graduates have to say about their learning journey
            </p>
          </motion.div>

          {/* Testimonials Slider */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-white'
            }}
            loop
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16"
          >
            {[
              { 
                name: 'Nguyen Van An', 
                profession: 'Full Stack Developer', 
                company: 'VNG Corporation',
                img: 'testimonial-1.jpg', 
                rating: 5,
                feedback: 'The course content is incredibly comprehensive and well-structured. After completing the Full Stack bootcamp, I landed my dream job at VNG with a 40% salary increase. The instructors are world-class!' 
              },
              { 
                name: 'Tran Thi Binh', 
                profession: 'Senior UI/UX Designer', 
                company: 'FPT Software',
                img: 'testimonial-2.jpg',
                rating: 5, 
                feedback: 'DHV Guiding Light transformed my career completely. The UI/UX course gave me practical skills that I use every single day. The portfolio projects helped me stand out in interviews!' 
              },
              { 
                name: 'Le Hoang Cuong', 
                profession: 'Data Scientist', 
                company: 'Grab Vietnam',
                img: 'testimonial-3.jpg',
                rating: 5, 
                feedback: 'Best investment I ever made in my career. The Data Science program is hands-on and industry-relevant. Within 6 months, I transitioned from marketing to data science at Grab!' 
              },
              { 
                name: 'Pham Thi Diem', 
                profession: 'Mobile Developer', 
                company: 'Momo',
                img: 'testimonial-4.jpg',
                rating: 5, 
                feedback: 'The React Native course is outstanding! The instructors are supportive, the community is amazing, and the curriculum is cutting-edge. Now I am building apps used by millions!' 
              },
              { 
                name: 'Hoang Minh Tuan', 
                profession: 'AI Engineer', 
                company: 'Zalo',
                img: 'team-3.jpg',
                rating: 5, 
                feedback: 'The AI and ML courses are world-class. I went from zero coding experience to building production AI models in just 8 months. The career support was incredible!' 
              },
              { 
                name: 'Vu Thi Mai', 
                profession: 'DevOps Engineer', 
                company: 'Tiki',
                img: 'team-4.jpg',
                rating: 5, 
                feedback: 'DHV Guiding Light provided the perfect blend of theory and practice. The DevOps bootcamp prepared me for real-world challenges. I got 3 job offers after graduation!' 
              }
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                        <i className="fa fa-quote-left text-white text-xl"></i>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-lg" />
                      ))}
                    </div>

                    {/* Feedback */}
                    <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                      "{testimonial.feedback}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                      <img 
                        className="w-16 h-16 rounded-full object-cover border-4 border-gray-100 shadow-md" 
                        src={`/img/${testimonial.img}`} 
                        alt={testimonial.name} 
                      />
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-gray-900">{testimonial.name}</h5>
                        <p className="text-gray-600 text-sm">{testimonial.profession}</p>
                        <p className="text-blue-600 text-sm font-semibold">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Trust Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '50,000+', label: 'Happy Students' },
              { number: '98%', label: 'Success Rate' },
              { number: '4.9/5', label: 'Average Rating' },
              { number: '12,000+', label: 'Reviews' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Join 50,000+ students already learning on DHV Guiding Light. Start your free trial today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/signup"
                className="group inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                <FaRocket className="group-hover:rotate-12 transition-transform" />
                <span>Get Started Free</span>
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                <FaBook />
                <span>Browse Courses</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;

