import React from 'react';
import { motion } from 'framer-motion';
interface Props { icon: React.ReactNode; label: string; value: string | number; change?: string; trend?: 'up' | 'down' | 'neutral'; className?: string; }
const trendColors = { up: 'text-green-600', down: 'text-red-600', neutral: 'text-gray-500' };
const StatsCard: React.FC<Props> = ({ icon, label, value, change, trend = 'neutral', className = '' }) => (
  <motion.div whileHover={{ y: -2 }} className={'bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 ' + className}>
    <div className='flex items-center justify-between mb-4'>
      <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600'>{icon}</div>
      {change && <span className={'text-sm font-medium ' + trendColors[trend]}>{change}</span>}
    </div>
    <p className='text-2xl font-bold text-gray-900 dark:text-white'>{value}</p>
    <p className='text-sm text-gray-500 mt-1'>{label}</p>
  </motion.div>
);
export default StatsCard;
