import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBook, FaCalendar, FaTasks, FaChartBar, FaCertificate, FaUsers } from 'react-icons/fa';

const actions = [
  { icon: <FaBook />, label: 'My Courses', path: '/courses', color: 'from-blue-500 to-blue-600' },
  { icon: <FaCalendar />, label: 'Meetings', path: '/meeting', color: 'from-purple-500 to-purple-600' },
  { icon: <FaTasks />, label: 'Homework', path: '/homework', color: 'from-orange-500 to-orange-600' },
  { icon: <FaChartBar />, label: 'Analytics', path: '/analytics', color: 'from-green-500 to-green-600' },
  { icon: <FaCertificate />, label: 'Certificates', path: '/certificates', color: 'from-yellow-500 to-yellow-600' },
  { icon: <FaUsers />, label: 'Community', path: '/community', color: 'from-pink-500 to-pink-600' },
];

const QuickActions: React.FC = () => (
  <div className='mb-8'>
    <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>Quick Actions</h2>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
      {actions.map((a, i) => (
        <motion.div key={i} whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link to={a.path} className='block'>
            <div className={'bg-gradient-to-br text-white rounded-2xl p-4 text-center shadow-md hover:shadow-lg transition-shadow ' + a.color}>
              <div className='text-2xl mb-2 flex justify-center'>{a.icon}</div>
              <p className='text-sm font-semibold'>{a.label}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

export default QuickActions;
