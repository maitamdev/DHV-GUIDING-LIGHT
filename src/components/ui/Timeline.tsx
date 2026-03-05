import React from 'react';
interface TimelineItem { date: string; title: string; description: string; icon?: React.ReactNode; color?: string; }
interface Props { items: TimelineItem[]; className?: string; }
const Timeline: React.FC<Props> = ({ items, className = '' }) => (
  <div className={'relative ' + className}>
    <div className='absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700' />
    {items.map((item, i) => (
      <div key={i} className='relative pl-12 pb-8 last:pb-0'>
        <div className={'absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ' + (item.color || 'bg-blue-600')}>
          {item.icon || (i + 1)}
        </div>
        <div className='bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700'>
          <span className='text-xs text-gray-500 font-medium'>{item.date}</span>
          <h3 className='font-semibold text-gray-900 dark:text-white mt-1'>{item.title}</h3>
          <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);
export default Timeline;
