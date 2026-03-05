import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCode, FaAward, FaVideo, FaPlay } from 'react-icons/fa';

interface Activity {
  id: number;
  type: string;
  title: string;
  time: string;
  icon: string;
}

interface Props {
  activities: Activity[];
}

const iconMap: Record<string, React.ReactNode> = {
  book: <FaBook className='text-blue-500' />,
  code: <FaCode className='text-green-500' />,
  award: <FaAward className='text-yellow-500' />,
  video: <FaVideo className='text-purple-500' />,
  play: <FaPlay className='text-indigo-500' />,
};

const RecentActivity: React.FC<Props> = ({ activities }) => (
  <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm'>
    <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>Recent Activity</h2>
    <div className='space-y-3'>
      {activities.map((a, i) => (
        <motion.div key={a.id} initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
          className='flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700'>
          <div className='w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center'>
            {iconMap[a.icon] || <FaBook />}
          </div>
          <div className='flex-1'>
            <p className='text-sm font-medium text-gray-900 dark:text-white'>{a.title}</p>
            <p className='text-xs text-gray-500'>{a.time}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default RecentActivity;
