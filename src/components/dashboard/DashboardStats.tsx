import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCheckCircle, FaCertificate, FaFire, FaClock, FaChartLine } from 'react-icons/fa';

interface Stats {
  coursesEnrolled: number;
  coursesCompleted: number;
  certificatesEarned: number;
  hoursLearned: number;
  currentStreak: number;
  averageScore: number;
}

interface Props {
  stats: Stats;
}

const DashboardStats: React.FC<Props> = ({ stats }) => {
  const items = [
    { icon: <FaBook />, label: 'Enrolled', value: stats.coursesEnrolled, color: 'text-blue-600 bg-blue-100' },
    { icon: <FaCheckCircle />, label: 'Completed', value: stats.coursesCompleted, color: 'text-green-600 bg-green-100' },
    { icon: <FaCertificate />, label: 'Certificates', value: stats.certificatesEarned, color: 'text-yellow-600 bg-yellow-100' },
    { icon: <FaClock />, label: 'Hours', value: stats.hoursLearned, color: 'text-purple-600 bg-purple-100' },
    { icon: <FaFire />, label: 'Streak', value: stats.currentStreak, color: 'text-orange-600 bg-orange-100' },
    { icon: <FaChartLine />, label: 'Avg Score', value: stats.averageScore + '%', color: 'text-indigo-600 bg-indigo-100' },
  ];

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8'>
      {items.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className='bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm text-center'>
          <div className={'w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-xl ' + item.color}>
            {item.icon}
          </div>
          <p className='text-2xl font-bold text-gray-900 dark:text-white'>{item.value}</p>
          <p className='text-xs text-gray-500 mt-1'>{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardStats;
