import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { FaCheck, FaTimes } from 'react-icons/fa';
const courses = [
  { name: 'React Fundamentals', price: 29, hours: 20, lessons: 45, cert: true, mentor: false, projects: 3, level: 'Beginner' },
  { name: 'React Advanced', price: 49, hours: 35, lessons: 72, cert: true, mentor: true, projects: 5, level: 'Advanced' },
  { name: 'Full Stack Bundle', price: 79, hours: 60, lessons: 120, cert: true, mentor: true, projects: 8, level: 'All Levels' },
];
const CourseComparison = () => {
  usePageTitle('Compare Courses');
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16'>
      <div className='container mx-auto px-4 max-w-5xl'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>Compare Courses</h1>
        <div className='overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm'>
          <table className='w-full'>
            <thead><tr className='border-b border-gray-100 dark:border-gray-700'>
              <th className='p-4 text-left text-gray-500 font-medium'>Feature</th>
              {courses.map(c => <th key={c.name} className='p-4 text-center font-bold text-gray-900 dark:text-white'>{c.name}</th>)}
            </tr></thead>
            <tbody>
              {[['Price', (c: typeof courses[0]) => '$' + c.price], ['Duration', (c: typeof courses[0]) => c.hours + 'h'], ['Lessons', (c: typeof courses[0]) => String(c.lessons)], ['Level', (c: typeof courses[0]) => c.level], ['Projects', (c: typeof courses[0]) => String(c.projects)],
               ['Certificate', (c: typeof courses[0]) => c.cert ? <FaCheck className='text-green-500 mx-auto' /> : <FaTimes className='text-red-400 mx-auto' />],
               ['1:1 Mentor', (c: typeof courses[0]) => c.mentor ? <FaCheck className='text-green-500 mx-auto' /> : <FaTimes className='text-red-400 mx-auto' />],
              ].map(([label, fn], i) => (
                <tr key={String(label)} className={i % 2 ? 'bg-gray-50 dark:bg-gray-700/30' : ''}>
                  <td className='p-4 text-sm font-medium text-gray-700 dark:text-gray-300'>{String(label)}</td>
                  {courses.map(c => <td key={c.name} className='p-4 text-center text-sm'>{typeof fn === 'function' ? (fn as (c: typeof courses[0]) => React.ReactNode)(c) : ''}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CourseComparison;
