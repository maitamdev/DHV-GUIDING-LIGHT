import React from 'react';
interface Props { count: number; maxCount?: number; className?: string; children: React.ReactNode; }
const NotificationBadge: React.FC<Props> = ({ count, maxCount = 99, className = '', children }) => (
  <div className={'relative inline-flex ' + className}>
    {children}
    {count > 0 && (
      <span className='absolute -top-2 -right-2 min-w-[20px] h-5 flex items-center justify-center px-1.5 text-xs font-bold text-white bg-red-500 rounded-full animate-pulse'>
        {count > maxCount ? maxCount + '+' : count}
      </span>
    )}
  </div>
);
export default NotificationBadge;
