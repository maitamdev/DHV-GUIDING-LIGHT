import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight } from 'react-icons/fa';
const HeroSection: React.FC = () => (
  <section className='relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden'>
    <div className='absolute inset-0'>
      <div className='absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal dark:opacity-10 filter blur-xl opacity-30 animate-pulse' />
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal dark:opacity-10 filter blur-xl opacity-30 animate-pulse' style={{ animationDelay: '2s' }} />
    </div>
    <div className='container mx-auto px-4 relative z-10'>
      <div className='max-w-3xl'>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className='px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold'>Welcome to DHV Guiding Light</span>
          <h1 className='text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mt-6 leading-tight'>
            Learn. Grow. <br /><span className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>Succeed.</span>
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-xl'>
            Discover courses, connect with mentors, and build your tech career with AI-powered personalized learning paths.
          </p>
          <div className='flex flex-wrap gap-4 mt-8'>
            <Link to='/courses'>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl'>
                Explore Courses <FaArrowRight />
              </motion.button>
            </Link>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className='px-8 py-4 bg-white dark:bg-gray-800 rounded-2xl font-bold flex items-center gap-2 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300'>
              <FaPlay className='text-blue-600' /> Watch Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
export default HeroSection;
