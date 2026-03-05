import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { FaUserPlus, FaRoad, FaBook, FaRobot, FaCertificate, FaBriefcase } from 'react-icons/fa';
const steps = [
  { icon: <FaUserPlus />, title: 'Create Account', desc: 'Sign up with your email or Google account', link: '/signup' },
  { icon: <FaRoad />, title: 'Take Assessment', desc: 'Complete a quick skills assessment', link: '/skills-assessment' },
  { icon: <FaBook />, title: 'Choose Courses', desc: 'Browse and enroll in courses that match your goals', link: '/courses' },
  { icon: <FaRobot />, title: 'Get Matched', desc: 'Our AI matches you with the perfect mentor', link: '/mentee-form' },
  { icon: <FaCertificate />, title: 'Earn Certificates', desc: 'Complete courses and earn verified certificates', link: '/certificates' },
  { icon: <FaBriefcase />, title: 'Build Portfolio', desc: 'Showcase your skills with our portfolio builder', link: '/portfolio' },
];
const GettingStarted = () => {
  usePageTitle('Getting Started');
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16'><div className='container mx-auto px-4 max-w-3xl'>
      <div className='text-center mb-12'><h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>Getting Started</h1><p className='text-lg text-gray-500'>Follow these steps to begin your learning journey</p></div>
      <div className='space-y-6'>{steps.map((s, i) => (
        <Link key={i} to={s.link} className='block bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-start gap-5'>
            <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 text-xl flex-shrink-0'>{s.icon}</div>
            <div><div className='flex items-center gap-3'><span className='text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full'>Step {i + 1}</span><h3 className='font-bold text-gray-900 dark:text-white'>{s.title}</h3></div><p className='text-gray-500 mt-1'>{s.desc}</p></div>
          </div>
        </Link>
      ))}</div>
    </div></div>
  );
};
export default GettingStarted;
