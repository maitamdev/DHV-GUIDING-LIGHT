import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaPlay, FaLock } from 'react-icons/fa';
interface Lesson { id: number; title: string; duration: string; isFree: boolean; }
interface Section { id: number; title: string; lessons: Lesson[]; }
interface Props { sections: Section[]; }
const CourseSyllabus: React.FC<Props> = ({ sections }) => {
  const [openSection, setOpenSection] = useState<number | null>(0);
  return (
    <div className='space-y-3'>
      <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>Course Content</h2>
      {sections.map((section) => (
        <div key={section.id} className='border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden'>
          <button onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
            className='w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'>
            <span className='font-semibold text-gray-900 dark:text-white'>{section.title}</span>
            <div className='flex items-center gap-2'>
              <span className='text-sm text-gray-500'>{section.lessons.length} lessons</span>
              <FaChevronDown className={'transition-transform ' + (openSection === section.id ? 'rotate-180' : '')} />
            </div>
          </button>
          <AnimatePresence>{openSection === section.id && (
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className='overflow-hidden'>
              <div className='p-2'>{section.lessons.map(lesson => (
                <div key={lesson.id} className='flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg'>
                  <div className='flex items-center gap-3'>
                    {lesson.isFree ? <FaPlay className='text-blue-500 text-sm' /> : <FaLock className='text-gray-400 text-sm' />}
                    <span className='text-sm text-gray-700 dark:text-gray-300'>{lesson.title}</span>
                  </div>
                  <span className='text-xs text-gray-500'>{lesson.duration}</span>
                </div>
              ))}</div>
            </motion.div>
          )}</AnimatePresence>
        </div>
      ))}
    </div>
  );
};
export default CourseSyllabus;
