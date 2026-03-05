import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaGraduationCap } from 'react-icons/fa';
interface Props { id: number; name: string; avatar: string; title: string; specializations: string[]; rating: number; totalMentees: number; }
const MentorCard: React.FC<Props> = ({ id, name, avatar, title, specializations, rating, totalMentees }) => (
  <motion.div whileHover={{ y: -5 }} className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center'>
    <Link to={'/mentor/' + id}>
      <img src={avatar} alt={name} className='w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100' />
      <h3 className='text-lg font-bold text-gray-900 dark:text-white'>{name}</h3>
      <p className='text-sm text-gray-500 mt-1'>{title}</p>
      <div className='flex flex-wrap gap-1 justify-center mt-3'>{specializations.slice(0, 3).map((s, i) => (
        <span key={i} className='px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full font-medium'>{s}</span>
      ))}</div>
      <div className='flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 text-sm text-gray-500'>
        <span className='flex items-center gap-1'><FaStar className='text-yellow-400' />{rating}</span>
        <span className='flex items-center gap-1'><FaGraduationCap />{totalMentees} mentees</span>
      </div>
    </Link>
  </motion.div>
);
export default MentorCard;
