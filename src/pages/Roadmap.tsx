import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaDatabase, FaRobot, FaServer, FaChartLine, FaBook, FaClock, FaArrowRight, FaStar, FaCloud, FaShieldAlt, FaGamepad, FaPalette } from 'react-icons/fa';

const roadmaps = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Path to become a Full Stack Web Developer',
    icon: FaCode,
    color: 'bg-emerald-500',
    courses: 12,
    duration: '6 months',
    image: '/img/course-1.jpg',
    level: 'Beginner to Advanced',
    students: 1240
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile application development with React Native & Flutter',
    icon: FaMobile,
    color: 'bg-teal-500',
    courses: 10,
    duration: '5 months',
    image: '/img/course-2.jpg',
    level: 'Intermediate',
    students: 856
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    description: 'Master data analysis, visualization, and statistical modeling',
    icon: FaChartLine,
    color: 'bg-cyan-500',
    courses: 15,
    duration: '8 months',
    image: '/img/course-3.jpg',
    level: 'Beginner to Advanced',
    students: 1120
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Build intelligent systems with deep learning and neural networks',
    icon: FaRobot,
    color: 'bg-emerald-600',
    courses: 14,
    duration: '9 months',
    image: '/img/team-1.jpg',
    level: 'Advanced',
    students: 945
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud Engineering',
    description: 'Master CI/CD, Docker, Kubernetes, and cloud platforms',
    icon: FaServer,
    color: 'bg-teal-600',
    courses: 11,
    duration: '6 months',
    image: '/img/team-2.jpg',
    level: 'Intermediate to Advanced',
    students: 732
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing (AWS, Azure, GCP)',
    description: 'Become a certified cloud architect and solutions specialist',
    icon: FaCloud,
    color: 'bg-cyan-600',
    courses: 13,
    duration: '7 months',
    image: '/img/team-3.jpg',
    level: 'Intermediate',
    students: 1050
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Specialist',
    description: 'Learn ethical hacking, penetration testing, and security protocols',
    icon: FaShieldAlt,
    color: 'bg-emerald-700',
    courses: 12,
    duration: '8 months',
    image: '/img/team-1.jpg',
    level: 'Advanced',
    students: 680
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Design beautiful user interfaces with Figma, Adobe XD, and user research',
    icon: FaPalette,
    color: 'bg-teal-700',
    courses: 9,
    duration: '4 months',
    image: '/img/team-2.jpg',
    level: 'Beginner to Intermediate',
    students: 1340
  },
  {
    id: 'game-development',
    title: 'Game Development',
    description: 'Create games with Unity, Unreal Engine, and C#',
    icon: FaGamepad,
    color: 'bg-cyan-700',
    courses: 10,
    duration: '7 months',
    image: '/img/team-3.jpg',
    level: 'Intermediate',
    students: 565
  },
  {
    id: 'database',
    title: 'Database Administration',
    description: 'Advanced SQL, NoSQL, database optimization, and management',
    icon: FaDatabase,
    color: 'bg-emerald-500',
    courses: 9,
    duration: '5 months',
    image: '/img/course-1.jpg',
    level: 'Intermediate to Advanced',
    students: 420
  },
];

const Roadmap = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      {/* Header with Enhanced Design */}
      <section className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white py-24 overflow-hidden">
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
                    className="block bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500"
                  >
                    {/* Image Header */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={roadmap.image} 
                        alt={roadmap.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className={`${roadmap.color} p-4 rounded-2xl shadow-xl`}>
                          <Icon className="text-4xl text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-2xl font-bold mb-1">{roadmap.title}</h3>
                        <p className="text-sm text-gray-200">{roadmap.level}</p>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                      <p className="text-gray-600 mb-6 leading-relaxed">{roadmap.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                            <FaBook className="text-lg" />
                          </div>
                          <p className="text-2xl font-bold text-gray-800">{roadmap.courses}</p>
                          <p className="text-xs text-gray-500">Courses</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                            <FaClock className="text-lg" />
                          </div>
                          <p className="text-2xl font-bold text-gray-800">{roadmap.duration}</p>
                          <p className="text-xs text-gray-500">Duration</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-purple-600 mb-1">
                            <FaStar className="text-lg" />
                          </div>
                          <p className="text-2xl font-bold text-gray-800">{roadmap.students}</p>
                          <p className="text-xs text-gray-500">Students</p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex items-center justify-between py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-500 shadow-lg">
                        <span>View Roadmap</span>
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
