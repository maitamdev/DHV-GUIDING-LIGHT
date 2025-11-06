import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaDatabase, FaRobot, FaServer, FaChartLine, FaBook, FaClock, FaArrowRight, FaStar } from 'react-icons/fa';

const roadmaps = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Path to become a Full Stack Web Developer',
    icon: FaCode,
    color: 'bg-blue-500',
    courses: 12,
    duration: '6 months'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile application development',
    icon: FaMobile,
    color: 'bg-green-500',
    courses: 10,
    duration: '5 months'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Data science and analytics',
    icon: FaChartLine,
    color: 'bg-purple-500',
    courses: 15,
    duration: '8 months'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Artificial intelligence and machine learning',
    icon: FaRobot,
    color: 'bg-red-500',
    courses: 14,
    duration: '9 months'
  },
  {
    id: 'devops',
    title: 'DevOps Engineer',
    description: 'System management and automated deployment',
    icon: FaServer,
    color: 'bg-yellow-500',
    courses: 8,
    duration: '4 months'
  },
  {
    id: 'database',
    title: 'Database Administrator',
    description: 'Advanced database administration',
    icon: FaDatabase,
    color: 'bg-indigo-500',
    courses: 9,
    duration: '5 months'
  },
];

const Roadmap = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      {/* Header with Enhanced Design */}
      <section className="relative bg-gradient-to-r from-[#0066FF] via-[#06BBCC] to-[#FF0000] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-extrabold text-center mb-6 drop-shadow-2xl"
          >
            🚀 Learning Roadmaps
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-center text-white drop-shadow-lg max-w-3xl mx-auto"
          >
            Choose a roadmap that fits your career goals. Each roadmap is designed by top experts!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6 mt-10"
          >
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl px-8 py-4 text-center">
              <p className="text-4xl font-bold">6+</p>
              <p className="text-sm">Roadmaps</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl px-8 py-4 text-center">
              <p className="text-4xl font-bold">68+</p>
              <p className="text-sm">Courses</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl px-8 py-4 text-center">
              <p className="text-4xl font-bold">37+</p>
              <p className="text-sm">Months Content</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmaps Grid with Enhanced Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {roadmaps.map((roadmap, index) => {
              const Icon = roadmap.icon;
              return (
                <motion.div
                  key={roadmap.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Link
                    to={`/roadmap/${roadmap.id}`}
                    className="block bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 border-4 border-transparent hover:border-[#06BBCC]"
                  >
                    {/* Icon Header with Gradient */}
                    <div className={`${roadmap.color} relative p-10 text-white bg-gradient-to-br from-current to-transparent overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                      <Icon className="text-8xl mb-4 drop-shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500" />
                      <h3 className="text-3xl font-extrabold mb-3 relative z-10">{roadmap.title}</h3>
                      <p className="text-gray-100 text-lg relative z-10">{roadmap.description}</p>
                    </div>

                    {/* Info Section with Better Layout */}
                    <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2 text-gray-700">
                          <FaBook className="text-[#06BBCC] text-2xl" />
                          <div>
                            <p className="text-sm text-gray-500">Courses</p>
                            <p className="text-xl font-bold">{roadmap.courses}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <FaClock className="text-[#06BBCC] text-2xl" />
                          <div>
                            <p className="text-sm text-gray-500">Duration</p>
                            <p className="text-xl font-bold">{roadmap.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <FaStar className="text-yellow-500 text-2xl" />
                          <div>
                            <p className="text-sm text-gray-500">Rating</p>
                            <p className="text-xl font-bold">4.9</p>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Popularity</span>
                          <span className="font-semibold text-[#06BBCC]">{85 + index * 2}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${85 + index * 2}%` }}
                            transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                            className="bg-gradient-to-r from-[#06BBCC] to-[#0066FF] h-3 rounded-full"
                          />
                        </div>
                      </div>

                      {/* CTA Button with Arrow */}
                      <div className="flex items-center justify-between py-4 px-6 bg-gradient-to-r from-[#06BBCC] to-[#0066FF] text-white rounded-2xl font-bold text-lg group-hover:from-[#0066FF] group-hover:to-[#FF0000] transition-all duration-500 shadow-lg">
                        <span>View Details</span>
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0066FF] via-[#06BBCC] to-[#FF0000] relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl"
          >
            Not Sure About Your Path? 🤔
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl text-white mb-10 max-w-3xl mx-auto drop-shadow-lg"
          >
            Schedule a <span className="font-bold">FREE</span> consultation with our experts. We'll help you choose the most suitable path!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#06BBCC] rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-110 hover:shadow-[0_20px_50px_rgba(255,255,255,0.5)]"
            >
              <FaArrowRight /> Schedule Consultation Now
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-4 border-white text-white rounded-full font-bold text-xl hover:bg-white hover:text-[#06BBCC] transition-all duration-300 shadow-2xl hover:scale-110"
            >
              <FaBook /> View All Courses
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
