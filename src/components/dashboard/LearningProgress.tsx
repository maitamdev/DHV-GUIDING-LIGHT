import React from 'react';
import { motion } from 'framer-motion';

interface CourseProgress {
  id: number;
  title: string;
  progress: number;
  thumbnail: string;
  lastAccessed: string;
}

interface Props {
  courses: CourseProgress[];
}

const LearningProgress: React.FC<Props> = ({ courses }) => (
  <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm mb-8'>
    <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>Continue Learning</h2>
    <div className='space-y-4'>
      {courses.map((course) => (
        <motion.div key={course.id} whileHover={{ x: 4 }}
          className='flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer'>
          <img src={course.thumbnail} alt={course.title} className='w-16 h-12 rounded-lg object-cover' />
          <div className='flex-1 min-w-0'>
            <h3 className='font-semibold text-gray-900 dark:text-white text-sm truncate'>{course.title}</h3>
            <p className='text-xs text-gray-500 mt-0.5'>{course.lastAccessed}</p>
            <div className='mt-2 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden'>
              <motion.div initial={{ width: 0 }} animate={{ width: course.progress + '%' }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className='h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full' />
            </div>
          </div>
          <span className='text-sm font-bold text-blue-600'>{course.progress}%</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default LearningProgress;
