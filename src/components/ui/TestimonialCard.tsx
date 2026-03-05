import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
interface Props { name: string; avatar: string; role?: string; comment: string; rating: number; course: string; }
const TestimonialCard: React.FC<Props> = ({ name, avatar, role, comment, rating, course }) => (
  <motion.div whileHover={{ y: -3 }} className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm'>
    <FaQuoteLeft className='text-blue-200 text-2xl mb-3' />
    <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-4'>{comment}</p>
    <div className='flex gap-1 mb-4'>{Array(5).fill(0).map((_, i) => (<FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-200'} />))}</div>
    <div className='flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700'>
      <img src={avatar} alt={name} className='w-10 h-10 rounded-full' />
      <div><p className='font-semibold text-gray-900 dark:text-white text-sm'>{name}</p>
        {role && <p className='text-xs text-gray-500'>{role}</p>}
        <p className='text-xs text-blue-600'>{course}</p>
      </div>
    </div>
  </motion.div>
);
export default TestimonialCard;
