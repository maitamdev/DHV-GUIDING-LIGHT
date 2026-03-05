import React from 'react';
interface Props { label?: string; className?: string; orientation?: 'horizontal' | 'vertical'; }
const Divider: React.FC<Props> = ({ label, className = '', orientation = 'horizontal' }) => {
  if (orientation === 'vertical') return <div className={'w-px bg-gray-200 dark:bg-gray-700 self-stretch ' + className} />;
  if (label) return (
    <div className={'flex items-center gap-4 ' + className}>
      <div className='flex-1 h-px bg-gray-200 dark:bg-gray-700' />
      <span className='text-sm text-gray-500 font-medium'>{label}</span>
      <div className='flex-1 h-px bg-gray-200 dark:bg-gray-700' />
    </div>
  );
  return <hr className={'border-gray-200 dark:border-gray-700 ' + className} />;
};
export default Divider;
