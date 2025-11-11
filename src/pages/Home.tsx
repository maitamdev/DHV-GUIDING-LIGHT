import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaRocket, FaStar, FaUsers, FaGraduationCap, FaChartLine, FaAward, FaBook, FaClock, FaBrain, FaShoppingCart, FaCreditCard, FaSignInAlt, FaQuoteLeft } from 'react-icons/fa';
import AnimatedWaves from '../components/AnimatedWaves';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
      {/* Hero Section with 28Tech Style + Animated Waves */}
      <div className="relative py-32 overflow-hidden" style={{ backgroundColor: '#0b004b' }}>
        {/* Animated Wave Background */}
        <AnimatedWaves 
          colors={[
            'rgba(255, 255, 255, 0.1)', 
            'rgba(255, 255, 255, 0.15)', 
            'rgba(139, 92, 246, 0.25)'
          ]}
          backgroundColor="#0b004b"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Leading Online Learning Platform
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mt-2">
                  DHV GUIDING LIGHT
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Learn anytime, anywhere with hundreds of high-quality courses across all fields. Guided by top industry experts and professional mentors, helping you develop skills and achieve your career goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-2xl hover:scale-105"
                >
                  <FaRocket />
                  View Courses
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30"
                >
                  <FaGraduationCap />
                  Register Now
                </Link>
              </div>
            </motion.div>

            {/* Right - Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Feature 1 - Experienced Instructors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaUsers className="text-3xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Professional Expert Mentors</h3>
                    <p className="text-white/80 leading-relaxed">Learn from industry leaders with years of real-world experience across multiple fields and disciplines</p>
                  </div>
                </div>
              </motion.div>

              {/* Feature 2 - Quality Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaBook className="text-3xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">High-Quality Courses & Content</h3>
                    <p className="text-white/80 leading-relaxed">Comprehensive courses across all fields with video lectures, practical projects, and hands-on learning experiences</p>
                  </div>
                </div>
              </motion.div>

              {/* Feature 3 - Auto Grading Platform */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="text-3xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Flexible Online Learning Platform</h3>
                    <p className="text-white/80 leading-relaxed">Learn at your own pace with our advanced mentor booking system, online classes, and 1-on-1 mentoring sessions</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Skills Section - 28Tech Style */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Skills Our Courses Provide to Students
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With high-quality courses across all fields and expert mentorship, DHV Guiding Light delivers many valuable skills to help you succeed in your career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: FaGraduationCap,
                title: 'Expert Knowledge & Skills',
                description: 'Master essential skills in your chosen field with comprehensive courses and expert guidance',
                gradient: 'from-blue-500 to-indigo-600'
              },
              {
                icon: FaUsers,
                title: 'Professional Mentorship',
                description: 'Connect with experienced mentors who provide personalized guidance and career advice',
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                icon: FaBrain,
                title: 'Critical Thinking & Problem Solving',
                description: 'Develop analytical skills and creative problem-solving abilities applicable to any career',
                gradient: 'from-purple-500 to-pink-600'
              },
              {
                icon: FaBook,
                title: 'Practical Real-World Experience',
                description: 'Work on real projects and case studies that prepare you for industry challenges',
                gradient: 'from-yellow-500 to-orange-600'
              },
              {
                icon: FaChartLine,
                title: 'Career Growth & Development',
                description: 'Build your professional portfolio and advance your career with recognized certifications',
                gradient: 'from-red-500 to-rose-600'
              },
              {
                icon: FaAward,
                title: 'Industry-Recognized Certification',
                description: 'Earn certificates that validate your expertise and boost your professional credibility',
                gradient: 'from-cyan-500 to-blue-600'
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-xl mb-6`}>
                  <skill.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{skill.title}</h3>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Feature Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img 
              src="/img/about.jpg" 
              alt="Learning Platform" 
              className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section - 28Tech Style with Numbers */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Why You Should Learn with DHV Guiding Light
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Reason 01 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">01</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">High Quality</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Course content is invested in both quality and quantity. Expert instructors and professional mentors with years of experience are passionate about teaching. DHV Guiding Light offers diverse courses across all fields with practical projects and comprehensive learning materials.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Reason 02 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">02</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Essential Skills Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    When learning with DHV Guiding Light, you don't just learn theory, but also develop critical thinking, problem-solving abilities, communication skills, and professional expertise. These skills will accompany you forever in your studies and future career across any field.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Reason 03 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">03</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Solid Foundation for Your Career</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Professional skills and industry knowledge are the first things you need when starting your career journey. Learning with DHV Guiding Light provides a solid stepping stone through expert mentorship, practical experience, and comprehensive training in your chosen field.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* How to Register Section - 28Tech Style */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              How to Register for Courses?
            </h2>
            <p className="text-xl text-gray-600">Just 3 simple registration steps</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Step 01 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <FaShoppingCart className="text-5xl text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border-4 border-blue-100">
                  <span className="text-2xl font-bold text-blue-600">01</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Choose Your Course</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse through our extensive course catalog and select the perfect course that matches your learning goals and career aspirations
              </p>
            </motion.div>

            {/* Step 02 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <FaCreditCard className="text-5xl text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border-4 border-green-100">
                  <span className="text-2xl font-bold text-green-600">02</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Complete Payment</h3>
              <p className="text-gray-600 leading-relaxed">
                Securely pay for your selected course using various payment methods. All transactions are encrypted and protected
              </p>
            </motion.div>

            {/* Step 03 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <FaSignInAlt className="text-5xl text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border-4 border-purple-100">
                  <span className="text-2xl font-bold text-purple-600">03</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Start Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Log in to your account and start your learning journey immediately with lifetime access to all course materials
              </p>
            </motion.div>
          </div>
        </div>
      </div>

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

      {/* Testimonials Section - 28Tech Style */}
      <div className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Student Feedback
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              What our students say about learning with DHV Guiding Light
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                name: 'Nguyen Van An',
                course: 'Full Stack Development',
                avatar: 'testimonial-1.jpg',
                comment: 'Excellent course! Quality teaching, enthusiastic instructors and assistants, easy-to-understand teaching helps students easily absorb new knowledge. Thanks to DHV Guiding Light for bringing a great experience to me and fellow students. I will recommend friends and relatives who want to learn programming to DHV Guiding Light!'
              },
              {
                name: 'Tran Thi Binh',
                course: 'UI/UX Design',
                avatar: 'testimonial-2.jpg',
                comment: 'The course is amazing, high quality, easy to understand and wonderful! Instructors are very kind, humorous, approachable, teach clearly and support enthusiastically. Currently I am taking Java and C++ courses from basic to advanced, feel very worth the money and rice bowl despite the affordable tuition fee'
              },
              {
                name: 'Le Hoang Cuong',
                course: 'Data Science',
                avatar: 'testimonial-3.jpg',
                comment: 'The teaching quality of DHV Guiding Light is really good, complete exercises of all types from basic to advanced, registered to study here my coding ability is getting better and better, no longer afraid of difficult exercises at school. Thanks to DHV Guiding Light for helping me achieve results like today'
              },
              {
                name: 'Pham Thi Diem',
                course: 'React Native Development',
                avatar: 'testimonial-4.jpg',
                comment: 'Wonderful course, lots of exercises, easy and difficult all available for everyone to practice together, teachers and teaching assistants are enthusiastic and dedicated, theory is conveyed in an easy-to-understand way, course members freely exchange knowledge with each other to progress together'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="mb-4">
                  <FaQuoteLeft className="text-3xl text-blue-400 mb-3" />
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Excellent course!</h4>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-6">
                    "{testimonial.comment}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={`/img/${testimonial.avatar}`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div>
                    <h5 className="font-bold text-gray-800">{testimonial.name}</h5>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Counter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '3,000+', label: 'Students Nationwide' },
              { number: '30+', label: 'Courses Completed' },
              { number: '100+', label: 'Positive Reviews' },
              { number: '20,000+', label: 'Community Members' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-white/90 font-semibold text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Final CTA Section - 28Tech Style */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - CTA Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Join DHV Guiding Light and Develop Your Professional Skills!
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  We are committed to helping you become the best version of yourself in your chosen career!
                </p>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-full font-bold text-xl hover:from-yellow-500 hover:to-orange-600 transition-all shadow-2xl hover:scale-105"
                >
                  <FaRocket />
                  Register Account
                </Link>
              </motion.div>

              {/* Right - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg p-12 border-l border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  REQUEST FREE CONSULTATION
                </h3>
                <p className="text-white/90 mb-6">
                  Please leave your phone number, we will contact you for consultation as soon as possible.
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60"
                  />
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl"
                  >
                    Send Request
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

