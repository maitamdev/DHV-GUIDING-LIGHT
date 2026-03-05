import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
const CTASection: React.FC = () => (
  <section className='py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden'>
    <div className='absolute inset-0'><div className='absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2' /><div className='absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3' /></div>
    <div className='container mx-auto px-4 text-center relative z-10'>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <FaRocket className='text-5xl text-yellow-300 mx-auto mb-6' />
        <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>Ready to Start Learning?</h2>
        <p className='text-xl text-blue-100 max-w-2xl mx-auto mb-10'>Join thousands of students who are already building their dream careers with DHV Guiding Light.</p>
        <Link to='/signup'>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className='px-10 py-4 bg-white text-blue-700 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-900/30 hover:shadow-xl'>
            Get Started for Free
          </motion.button>
        </Link>
      </motion.div>
    </div>
  </section>
);
export default CTASection;
