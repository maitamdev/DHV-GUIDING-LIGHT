import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { FaTrophy, FaMedal, FaCrown } from 'react-icons/fa';
const mockData = [
  { rank: 1, name: 'Nguyen Van An', avatar: '/img/team-1.jpg', points: 15200, courses: 12 },
  { rank: 2, name: 'Tran Thi Binh', avatar: '/img/team-2.jpg', points: 14800, courses: 10 },
  { rank: 3, name: 'Le Duc Cuong', avatar: '/img/team-1.jpg', points: 13500, courses: 9 },
  { rank: 4, name: 'Pham Thi Dung', avatar: '/img/team-2.jpg', points: 12100, courses: 8 },
  { rank: 5, name: 'Hoang Van Em', avatar: '/img/team-1.jpg', points: 11700, courses: 7 },
  { rank: 6, name: 'Vo Thi Fen', avatar: '/img/team-2.jpg', points: 10300, courses: 7 },
  { rank: 7, name: 'Dang Van Ghi', avatar: '/img/team-1.jpg', points: 9800, courses: 6 },
  { rank: 8, name: 'Bui Thi Hoa', avatar: '/img/team-2.jpg', points: 9200, courses: 6 },
];
const rankIcons: Record<number, React.ReactNode> = { 1: <FaCrown className='text-yellow-400 text-xl' />, 2: <FaMedal className='text-gray-400 text-xl' />, 3: <FaMedal className='text-amber-600 text-xl' /> };
const Leaderboard = () => {
  usePageTitle('Leaderboard');
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16'>
      <div className='container mx-auto px-4 max-w-3xl'>
        <div className='text-center mb-10'>
          <FaTrophy className='text-5xl text-yellow-500 mx-auto mb-4' />
          <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>Leaderboard</h1>
          <p className='text-gray-500 mt-2'>Top learners this month</p>
        </div>
        <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden'>
          {mockData.map(user => (
            <div key={user.rank} className={'flex items-center gap-4 p-5 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 ' + (user.rank <= 3 ? 'bg-gradient-to-r from-yellow-50/50 to-transparent dark:from-yellow-900/10' : '')}>
              <div className='w-10 text-center font-bold text-lg'>{rankIcons[user.rank] || <span className='text-gray-400'>{user.rank}</span>}</div>
              <img src={user.avatar} alt={user.name} className='w-12 h-12 rounded-full object-cover' />
              <div className='flex-1'><p className='font-semibold text-gray-900 dark:text-white'>{user.name}</p><p className='text-sm text-gray-500'>{user.courses} courses completed</p></div>
              <div className='text-right'><p className='font-bold text-blue-600 text-lg'>{user.points.toLocaleString()}</p><p className='text-xs text-gray-500'>points</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Leaderboard;
