import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaUsers, FaBook } from 'react-icons/fa';
interface Props { id: number; name: string; avatar: string; title: string; bio: string; rating: number; totalStudents: number; courseCount: number; }
const CourseInstructor: React.FC<Props> = ({ id, name, avatar, title, bio, rating, totalStudents, courseCount }) => (
  <div className='bg-gray-50 dark:bg-gray-800 rounded-2xl p-6'>
    <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>Instructor</h2>
    <Link to={'/mentor/' + id} className='flex items-start gap-4'>
      <img src={avatar} alt={name} className='w-20 h-20 rounded-full object-cover border-4 border-white shadow' />
      <div>
        <h3 className='text-lg font-bold text-blue-600 hover:underline'>{name}</h3>
        <p className='text-sm text-gray-500'>{title}</p>
        <div className='flex items-center gap-4 mt-2 text-sm text-gray-600'>
          <span className='flex items-center gap-1'><FaStar className='text-yellow-400' />{rating}</span>
          <span className='flex items-center gap-1'><FaUsers />{totalStudents.toLocaleString()}</span>
          <span className='flex items-center gap-1'><FaBook />{courseCount} courses</span>
        </div>
        <p className='text-sm text-gray-600 dark:text-gray-400 mt-3'>{bio}</p>
      </div>
    </Link>
  </div>
);
export default CourseInstructor;
