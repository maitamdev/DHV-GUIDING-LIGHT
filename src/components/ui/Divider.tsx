import React from 'react';
interface Props { text?: string; className?: string; }
const Divider: React.FC<Props> = ({ text, className = '' }) => (
  <div className={'flex items-center gap-4 ' + className}>
    <div className='flex-1 h-px bg-gray-200 dark:bg-gray-700' />
    {text && <span className='text-sm text-gray-400 font-medium'>{text}</span>}
    <div className='flex-1 h-px bg-gray-200 dark:bg-gray-700' />
  </div>
);
export default Divider;
