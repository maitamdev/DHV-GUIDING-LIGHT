import React from 'react';
import { FaClock, FaEye, FaHeart, FaCalendar } from 'react-icons/fa';
interface Props { title: string; author: string; authorAvatar: string; category: string; readingTime: number; publishedAt: string; views: number; likes: number; coverImage: string; }
const BlogHeader: React.FC<Props> = ({ title, author, authorAvatar, category, readingTime, publishedAt, views, likes, coverImage }) => (
  <div className='relative'>
    <div className='h-[400px] relative'><img src={coverImage} alt={title} className='w-full h-full object-cover' /><div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' /></div>
    <div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
      <span className='px-3 py-1 bg-blue-600 rounded-full text-sm font-bold'>{category}</span>
      <h1 className='text-4xl font-bold mt-4 mb-4'>{title}</h1>
      <div className='flex items-center gap-6'>
        <div className='flex items-center gap-2'><img src={authorAvatar} alt={author} className='w-8 h-8 rounded-full' /><span className='font-medium'>{author}</span></div>
        <span className='flex items-center gap-1 text-sm text-gray-300'><FaCalendar />{publishedAt}</span>
        <span className='flex items-center gap-1 text-sm text-gray-300'><FaClock />{readingTime} min read</span>
        <span className='flex items-center gap-1 text-sm text-gray-300'><FaEye />{views}</span>
        <span className='flex items-center gap-1 text-sm text-gray-300'><FaHeart />{likes}</span>
      </div>
    </div>
  </div>
);
export default BlogHeader;
