import React from 'react';
import { FaStar, FaUsers, FaClock, FaPlay } from 'react-icons/fa';
interface Props { title: string; description: string; instructor: string; rating: number; students: number; duration: number; lessons: number; category: string; thumbnail: string; }
const CourseHeader: React.FC<Props> = ({ title, description, instructor, rating, students, duration, lessons, category, thumbnail }) => (
  <div className='relative bg-gradient-to-r from-gray-900 to-blue-900 text-white'>
    <div className='absolute inset-0 opacity-20'><img src={thumbnail} alt='' className='w-full h-full object-cover' /></div>
    <div className='relative container mx-auto px-4 py-16'>
      <span className='px-3 py-1 bg-blue-600 rounded-full text-sm font-bold'>{category}</span>
      <h1 className='text-4xl font-bold mt-4 mb-4'>{title}</h1>
      <p className='text-lg text-gray-300 max-w-2xl mb-6'>{description}</p>
      <p className='text-gray-300'>Created by <span className='text-white font-semibold'>{instructor}</span></p>
      <div className='flex items-center gap-6 mt-4 text-sm'>
        <span className='flex items-center gap-1'><FaStar className='text-yellow-400' />{rating} rating</span>
        <span className='flex items-center gap-1'><FaUsers />{students.toLocaleString()} students</span>
        <span className='flex items-center gap-1'><FaClock />{duration} hours</span>
        <span className='flex items-center gap-1'><FaPlay />{lessons} lessons</span>
      </div>
    </div>
  </div>
);
export default CourseHeader;
