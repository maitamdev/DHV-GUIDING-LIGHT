import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaHeart, FaUsers, FaLightbulb, FaGraduationCap, FaStar, FaChartLine, FaGlobe } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaUsers, number: '10,000+', label: 'Students', color: 'from-blue-500 to-cyan-500' },
    { icon: FaGraduationCap, number: '200+', label: 'Courses', color: 'from-purple-500 to-pink-500' },
    { icon: FaStar, number: '150+', label: 'Professional Mentors', color: 'from-yellow-500 to-orange-500' },
    { icon: FaGlobe, number: '50+', label: 'Countries', color: 'from-green-500 to-emerald-500' },
  ];

  const values = [
    {
      icon: FaRocket,
      title: 'Innovation & Creativity',
      description: 'Leveraging cutting-edge technology to create unique and effective learning experiences.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaHeart,
      title: 'Dedication & Quality',
      description: 'Committed to delivering the best educational quality, always listening and supporting students.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: FaUsers,
      title: 'Connected Community',
      description: 'Building a dynamic learning community where everyone grows together.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: FaLightbulb,
      title: 'Lifelong Learning',
      description: 'Encouraging a culture of continuous learning and personal development.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const milestones = [
    { year: '2020', title: 'The Beginning', description: 'Launched the platform with 10 initial courses' },
    { year: '2021', title: 'Growth', description: 'Reached 1000+ students and expanded programs' },
    { year: '2022', title: 'Expansion', description: 'Partnered with 50+ major enterprises' },
    { year: '2023', title: 'Going Global', description: 'Present in 20+ countries worldwide' },
    { year: '2024', title: 'Breakthrough', description: 'Launched AI Mentor and AR Learning features' },
  ];

  return (
    <>
      {/* Hero Section với Gradient */}
      <div className="relative w-full bg-gradient-to-br from-[#06BBCC] via-blue-600 to-purple-700 py-32 overflow-hidden shadow-2xl">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000"></div>
          <div className="absolute w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto">
                <FaGraduationCap className="text-6xl text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
              DHV GUIDING LIGHT
            </h1>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              🌟 Illuminate Your Future - Lead to Success 🌟
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Vietnam's leading online learning platform, connecting you with knowledge, 
              professional mentors, and unlimited career development opportunities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`inline-block p-6 bg-gradient-to-br ${stat.color} rounded-3xl shadow-2xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <stat.icon className="text-5xl text-white" />
                </div>
                <h3 className="text-4xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-semibold text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Mission & Vision</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#06BBCC] to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-cyan-50 via-blue-50 to-blue-100 rounded-3xl p-10 shadow-2xl border-l-8 border-[#06BBCC] hover:shadow-3xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#06BBCC] rounded-2xl">
                  <FaRocket className="text-4xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>DHV Guiding Light</strong> was founded with the mission to <strong>democratize education</strong>, 
                bringing high-quality knowledge to everyone, everywhere. We believe that learning 
                should have no barriers, and every individual deserves the opportunity to maximize their potential.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <FaChartLine className="text-2xl text-[#06BBCC] mt-1" />
                  <p className="text-gray-700">Provide high-quality courses at affordable prices</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaChartLine className="text-2xl text-[#06BBCC] mt-1" />
                  <p className="text-gray-700">Connect students with experienced professional mentors</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaChartLine className="text-2xl text-[#06BBCC] mt-1" />
                  <p className="text-gray-700">Apply AI technology to personalize learning paths</p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-purple-50 via-pink-50 to-pink-100 rounded-3xl p-10 shadow-2xl border-l-8 border-purple-600 hover:shadow-3xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-purple-600 rounded-2xl">
                  <FaLightbulb className="text-4xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become <strong>Southeast Asia's #1 online education platform</strong> by 2030, 
                where millions of learners trust and choose us for their career development. We envision 
                a world where learning is a joy, not a burden.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <FaGlobe className="text-2xl text-purple-600 mt-1" />
                  <p className="text-gray-700">Expand to 100+ countries worldwide</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaGlobe className="text-2xl text-purple-600 mt-1" />
                  <p className="text-gray-700">Train 10 million+ students with 21st-century skills</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaGlobe className="text-2xl text-purple-600 mt-1" />
                  <p className="text-gray-700">Lead learning trends with AI and virtual reality</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The values that guide all our actions and decisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-100"
              >
                <div className={`inline-block p-5 bg-gradient-to-br ${value.gradient} rounded-2xl mb-6`}>
                  <value.icon className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Important milestones in our growth story</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-3xl font-bold text-[#06BBCC] mb-2">{milestone.year}</h3>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{milestone.title}</h4>
                  <p className="text-gray-600 text-lg">{milestone.description}</p>
                </div>
                
                <div className="relative">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#06BBCC] to-purple-600 rounded-full shadow-lg"></div>
                  {index < milestones.length - 1 && (
                    <div className="absolute left-1/2 top-6 w-1 h-20 bg-gradient-to-b from-[#06BBCC] to-purple-600 transform -translate-x-1/2"></div>
                  )}
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-[#06BBCC] to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-extrabold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Join thousands of students transforming their lives every day
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link 
                to="/courses" 
                className="px-10 py-5 bg-white text-[#06BBCC] rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 transform"
              >
                Explore Courses
              </Link>
              <Link 
                to="/signup" 
                className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full font-bold text-xl hover:from-yellow-500 hover:to-orange-600 transition-all shadow-2xl hover:scale-105 transform"
              >
                Sign Up Now
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
