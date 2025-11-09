import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaHeart, FaUsers, FaGraduationCap, FaChartLine, FaShieldAlt, FaClock, FaCertificate, FaHeadset, FaBook, FaUserTie, FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  const goals = [
    {
      icon: FaUsers,
      title: 'Build Community',
      description: 'DHV Guiding Light aims to help students and new programmers entering the IT field become excellent developers',
      image: '/img/team-1.jpg'
    },
    {
      icon: FaChartLine,
      title: 'Enhance Quality',
      description: 'Our team continuously improves skills, teaching methods, and attitudes to enhance the quality of current and future courses',
      image: '/img/team-2.jpg'
    },
    {
      icon: FaShieldAlt,
      title: 'Advanced Platform',
      description: 'We use modern learning management systems and automatic grading platforms to provide the best experience',
      image: '/img/team-3.jpg'
    },
    {
      icon: FaHeart,
      title: 'Student Trust',
      description: 'This is our top priority. We aspire to connect, support, and be the trusted platform for students nationwide',
      image: '/img/team-4.jpg'
    }
  ];

  const commitments = [
    {
      icon: FaUserTie,
      title: 'Dedicated, highly skilled teachers',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: FaHeadset,
      title: '24/7 student support',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: FaBook,
      title: 'Diverse theory and practical exercises',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: FaCertificate,
      title: 'Modern auto-grading platform',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const testimonials = [
    {
      name: 'Nguyen Van An',
      course: 'Full Stack Development',
      avatar: '/img/testimonial-1.jpg',
      comment: 'Excellent teaching quality, enthusiastic instructors and assistants, easy-to-understand teaching helps students easily absorb new knowledge. Thank you DHV Guiding Light for bringing a wonderful experience to me and fellow students. I will recommend friends and relatives who want to learn programming to DHV Guiding Light'
    },
    {
      name: 'Tran Thi Binh',
      course: 'Data Science & AI',
      avatar: '/img/testimonial-2.jpg',
      comment: 'The course is amazing, high quality, easy to understand and wonderful; Unbelievable! The instructor is super friendly, humorous, approachable, teaches clearly and provides enthusiastic support. Currently participating in Java and C++ courses from basic to advanced, I feel it is very worth the money, although the tuition is very affordable'
    },
    {
      name: 'Le Hoang Cuong',
      course: 'Mobile Development',
      avatar: '/img/testimonial-3.jpg',
      comment: 'The teaching quality of DHV Guiding Light is really great, with complete exercises from basic to advanced on Hackerrank. After registering to study here, my coding ability has clearly improved day by day, no longer afraid of difficult exercises at school. Thank you DHV Guiding Light for helping me achieve the results I have today'
    },
    {
      name: 'Pham Thi Diem',
      course: 'UI/UX Design',
      avatar: '/img/testimonial-4.jpg',
      comment: 'Great course, lots of exercises, easy and difficult to practice, enthusiastic teachers and assistants, theory is conveyed in an easy-to-understand way, course members freely exchange knowledge to progress together'
    }
  ];

  const stats = [
    { number: '3,000+', label: 'Students Nationwide' },
    { number: '30+', label: 'Courses Completed' },
    { number: '100+', label: 'Positive Reviews' },
    { number: '20,000+', label: 'Community Members' }
  ];

  return (
    <>
      {/* Hero Section - Welcome */}
      <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                <FaGraduationCap className="text-6xl text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Welcome to DHV GUIDING LIGHT
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Vietnam's leading online learning platform, connecting students with experienced experts and professional mentors. We are committed to delivering high-quality and effective learning experiences.
            </p>
            <Link 
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/50 transform hover:scale-105"
            >
              <FaRocket />
              Register Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Goals Section - 4 Cards */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Goals of DHV Guiding Light Team!
            </h2>
            <p className="text-xl text-gray-600">DHV Guiding Light - Become A Better Developer</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl">
                  <img 
                    src={goal.image} 
                    alt={goal.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <goal.icon className="text-5xl text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{goal.title}</h3>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Commitments Section - Learn Anytime, Anywhere */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                Learn Anytime, Anywhere
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Course commitments from DHV Guiding Light team
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className={`p-4 bg-gradient-to-br ${commitment.color} rounded-xl flex-shrink-0`}>
                      <commitment.icon className="text-2xl text-white" />
                    </div>
                    <p className="font-semibold text-gray-700 leading-relaxed">
                      {commitment.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/img/about.jpg" 
                alt="Learning" 
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Sections - Become Teacher / Student */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Become Teacher */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <img 
                src="/img/team-1.jpg" 
                alt="Teacher" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-indigo-900/70 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <h3 className="text-3xl font-extrabold text-white mb-4">
                  Become a Teacher at DHV Guiding Light
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  DHV Guiding Light continuously recruits excellent teachers with passion for teaching with attractive remuneration.
                </p>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl w-fit"
                >
                  <FaUserTie />
                  Apply Now
                </Link>
              </div>
            </motion.div>

            {/* Become Student */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <img 
                src="/img/carousel-1.jpg" 
                alt="Student" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <h3 className="text-3xl font-extrabold text-white mb-4">
                  Become a Student at DHV Guiding Light
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  Join the DHV Guiding Light student community. We are committed to providing students with the most valuable knowledge.
                </p>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl w-fit"
                >
                  <FaGraduationCap />
                  Register Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Student Feedback
            </h2>
            <p className="text-xl text-gray-600">What our students say about DHV Guiding Light</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <FaQuoteLeft className="text-2xl text-blue-400 mb-2" />
                  <h5 className="font-bold text-lg text-gray-800 mb-2">Excellent course!</h5>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-6">
                    "{testimonial.comment}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Counter */}
      <div className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
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
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              REQUEST FREE CONSULTATION
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Please leave your phone number, we will contact you for consultation as soon as possible.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-2xl hover:scale-105 transform"
            >
              <FaClock />
              Contact Now
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
