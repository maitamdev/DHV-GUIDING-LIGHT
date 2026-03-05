import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaUsers, FaClock } from 'react-icons/fa';
interface Props { id: number; title: string; thumbnail: string; instructorName: string; price: number; discountPrice?: number; rating: number; totalStudents: number; duration: number; category: string; }
const CourseCard: React.FC<Props> = ({ id, title, thumbnail, instructorName, price, discountPrice, rating, totalStudents, duration, category }) => (
  <motion.div whileHover={{ y: -5 }} className='bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700'>
    <Link to={'/course/' + id}>
      <div className='relative'><img src={thumbnail} alt={title} className='w-full h-48 object-cover' />
        <span className='absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full'>{category}</span>
      </div>
      <div className='p-5'>
        <h3 className='text-lg font-bold text-gray-900 dark:text-white line-clamp-2 mb-2'>{title}</h3>
        <p className='text-sm text-gray-500 mb-3'>{instructorName}</p>
        <div className='flex items-center gap-3 text-sm text-gray-500 mb-3'>
          <span className='flex items-center gap-1'><FaStar className='text-yellow-400' />{rating}</span>
          <span className='flex items-center gap-1'><FaUsers />{totalStudents}</span>
          <span className='flex items-center gap-1'><FaClock />{duration}h</span>
        </div>
        <div className='flex items-center gap-2'>
          {discountPrice ? (<><span className='text-xl font-bold text-blue-600'>{discountPrice} USD</span><span className='text-sm text-gray-400 line-through'>{price} USD</span></>) : (<span className='text-xl font-bold text-blue-600'>{price} USD</span>)}
        </div>
      </div>
    </Link>
  </motion.div>
);
export default CourseCard;
