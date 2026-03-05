import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { FaBook, FaCode, FaAward, FaVideo, FaPlay, FaComment } from 'react-icons/fa';
const activities = [
  { id: 1, icon: <FaBook className='text-blue-500' />, title: 'Completed: React Hooks Deep Dive', time: '2 hours ago', type: 'lesson' },
  { id: 2, icon: <FaCode className='text-green-500' />, title: 'Submitted: Todo App Project', time: '5 hours ago', type: 'assignment' },
  { id: 3, icon: <FaAward className='text-yellow-500' />, title: 'Earned: JavaScript Fundamentals Certificate', time: '1 day ago', type: 'certificate' },
  { id: 4, icon: <FaComment className='text-purple-500' />, title: 'Commented on: TypeScript Advanced Course', time: '1 day ago', type: 'comment' },
  { id: 5, icon: <FaVideo className='text-red-500' />, title: 'Attended: AI Workshop with Dr. Nguyen', time: '2 days ago', type: 'meeting' },
  { id: 6, icon: <FaPlay className='text-indigo-500' />, title: 'Started: Machine Learning Basics', time: '3 days ago', type: 'course' },
  { id: 7, icon: <FaBook className='text-blue-500' />, title: 'Completed: CSS Grid Masterclass', time: '4 days ago', type: 'lesson' },
  { id: 8, icon: <FaCode className='text-green-500' />, title: 'Submitted: E-commerce Dashboard', time: '5 days ago', type: 'assignment' },
];
const Activity = () => {
  usePageTitle('Activity');
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16'>
      <div className='container mx-auto px-4 max-w-2xl'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-8'>Activity Feed</h1>
        <div className='relative'><div className='absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700' />
          {activities.map(a => (
            <div key={a.id} className='relative pl-14 pb-8'>
              <div className='absolute left-2 w-7 h-7 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700'>{a.icon}</div>
              <div className='bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm'>
                <p className='text-sm font-medium text-gray-900 dark:text-white'>{a.title}</p>
                <p className='text-xs text-gray-500 mt-1'>{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Activity;
