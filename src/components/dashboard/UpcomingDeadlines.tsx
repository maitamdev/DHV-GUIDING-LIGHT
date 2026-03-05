import React from 'react';
import { FaClock, FaExclamationCircle } from 'react-icons/fa';

interface Deadline {
  id: number;
  title: string;
  course: string;
  dueDate: string;
  daysLeft: number;
}

interface Props {
  deadlines: Deadline[];
}

const UpcomingDeadlines: React.FC<Props> = ({ deadlines }) => (
  <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm'>
    <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2'>
      <FaClock className='text-orange-500' /> Upcoming Deadlines
    </h2>
    {deadlines.length === 0 ? (
      <p className='text-gray-500 text-center py-8'>No upcoming deadlines!</p>
    ) : (
      <div className='space-y-3'>
        {deadlines.map(d => (
          <div key={d.id} className={'p-4 rounded-xl border-l-4 ' + (d.daysLeft <= 1 ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : d.daysLeft <= 3 ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10' : 'border-blue-500 bg-blue-50 dark:bg-blue-900/10')}>
            <div className='flex justify-between items-start'>
              <div>
                <h3 className='font-semibold text-gray-900 dark:text-white text-sm'>{d.title}</h3>
                <p className='text-xs text-gray-500 mt-1'>{d.course}</p>
              </div>
              <span className={'text-xs font-bold px-2 py-1 rounded-full ' + (d.daysLeft <= 1 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700')}>
                {d.daysLeft <= 0 ? <><FaExclamationCircle className='inline mr-1' />Overdue</> : d.daysLeft + 'd left'}
              </span>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default UpcomingDeadlines;
