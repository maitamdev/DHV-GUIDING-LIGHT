import React from 'react';
import { motion } from 'framer-motion';
const stats = [
  { value: '10K+', label: 'Active Students' },
  { value: '500+', label: 'Courses' },
  { value: '50+', label: 'Expert Mentors' },
  { value: '95%', label: 'Satisfaction Rate' },
];
const StatsSection: React.FC = () => (
  <section className='py-16 bg-gradient-to-r from-blue-600 to-indigo-700'>
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className='text-center text-white'>
            <p className='text-4xl md:text-5xl font-bold'>{s.value}</p>
            <p className='mt-2 text-blue-200 font-medium'>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default StatsSection;
