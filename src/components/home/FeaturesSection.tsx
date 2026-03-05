import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaChalkboardTeacher, FaRoad, FaCertificate, FaUsers, FaBriefcase } from 'react-icons/fa';
const features = [
  { icon: <FaRobot />, title: 'AI Mentor Matching', desc: 'Get paired with the perfect mentor using intelligent AI matching', color: 'from-blue-500 to-cyan-500' },
  { icon: <FaChalkboardTeacher />, title: 'Expert Instructors', desc: 'Learn from industry professionals with real-world experience', color: 'from-purple-500 to-pink-500' },
  { icon: <FaRoad />, title: 'Learning Roadmaps', desc: 'Follow structured paths designed for your career goals', color: 'from-orange-500 to-red-500' },
  { icon: <FaCertificate />, title: 'Certificates', desc: 'Earn verified certificates to showcase your skills', color: 'from-green-500 to-emerald-500' },
  { icon: <FaUsers />, title: 'Community', desc: 'Join a vibrant community of learners and developers', color: 'from-indigo-500 to-violet-500' },
  { icon: <FaBriefcase />, title: 'Portfolio Builder', desc: 'Build a professional portfolio to impress employers', color: 'from-yellow-500 to-orange-500' },
];
const FeaturesSection: React.FC = () => (
  <section className='py-24 bg-white dark:bg-gray-900'>
    <div className='container mx-auto px-4'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-gray-900 dark:text-white'>Why Choose <span className='text-blue-600'>DHV Guiding Light?</span></h2>
        <p className='text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto'>Everything you need to accelerate your tech career, powered by AI and guided by experts.</p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}
            className='bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow'>
            <div className={'w-14 h-14 bg-gradient-to-br rounded-xl flex items-center justify-center text-white text-2xl mb-4 ' + f.color}>{f.icon}</div>
            <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>{f.title}</h3>
            <p className='text-gray-600 dark:text-gray-400'>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default FeaturesSection;
