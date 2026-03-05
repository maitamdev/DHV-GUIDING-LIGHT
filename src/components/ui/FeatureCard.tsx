import React from 'react';
import { motion } from 'framer-motion';
interface Props { icon: React.ReactNode; title: string; description: string; color?: string; }
const FeatureCard: React.FC<Props> = ({ icon, title, description, color = 'from-blue-500 to-indigo-600' }) => (
  <motion.div whileHover={{ y: -5, scale: 1.02 }} className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow'>
    <div className={'w-14 h-14 bg-gradient-to-br rounded-xl flex items-center justify-center mb-4 text-white text-2xl ' + color}>{icon}</div>
    <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2'>{title}</h3>
    <p className='text-gray-600 dark:text-gray-400 text-sm'>{description}</p>
  </motion.div>
);
export default FeatureCard;
