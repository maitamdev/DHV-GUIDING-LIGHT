import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaEye } from 'react-icons/fa';
interface Props { id: number; title: string; excerpt: string; coverImage: string; author: string; authorAvatar: string; category: string; readingTime: number; publishedAt: string; views: number; slug: string; }
const BlogCard: React.FC<Props> = ({ title, excerpt, coverImage, author, authorAvatar, category, readingTime, views, slug }) => (
  <motion.article whileHover={{ y: -3 }} className='bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow'>
    <Link to={'/blog/' + slug}>
      <img src={coverImage} alt={title} className='w-full h-48 object-cover' />
      <div className='p-5'>
        <span className='text-xs font-bold text-blue-600 uppercase tracking-wider'>{category}</span>
        <h3 className='text-lg font-bold text-gray-900 dark:text-white mt-2 line-clamp-2'>{title}</h3>
        <p className='text-gray-500 text-sm mt-2 line-clamp-2'>{excerpt}</p>
        <div className='flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700'>
          <div className='flex items-center gap-2'><img src={authorAvatar} alt={author} className='w-7 h-7 rounded-full' /><span className='text-sm text-gray-600 dark:text-gray-400'>{author}</span></div>
          <div className='flex items-center gap-3 text-xs text-gray-400'>
            <span className='flex items-center gap-1'><FaClock />{readingTime}m</span>
            <span className='flex items-center gap-1'><FaEye />{views}</span>
          </div>
        </div>
      </div>
    </Link>
  </motion.article>
);
export default BlogCard;
