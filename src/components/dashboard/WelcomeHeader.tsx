import React from 'react';
import { FaHandSparkles } from 'react-icons/fa';

interface Props {
  userName: string;
  streak: number;
}

const WelcomeHeader: React.FC<Props> = ({ userName, streak }) => {
  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className='bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-8'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold flex items-center gap-3'>
            {getGreeting()}, {userName}! <FaHandSparkles className='text-yellow-300' />
          </h1>
          <p className='mt-2 text-blue-100 text-lg'>
            Ready to continue your learning journey?
          </p>
        </div>
        {streak > 0 && (
          <div className='bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 text-center'>
            <p className='text-3xl font-bold'>{streak}</p>
            <p className='text-sm text-blue-100'>Day Streak</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomeHeader;
