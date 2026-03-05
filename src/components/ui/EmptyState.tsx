import React from 'react';
interface Props { icon?: React.ReactNode; title: string; description?: string; action?: React.ReactNode; className?: string; }
const EmptyState: React.FC<Props> = ({ icon, title, description, action, className = '' }) => (
  <div className={'flex flex-col items-center justify-center py-16 px-4 text-center ' + className}>
    {icon && <div className='w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 text-3xl text-gray-400'>{icon}</div>}
    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>{title}</h3>
    {description && <p className='text-gray-500 max-w-md mb-6'>{description}</p>}
    {action}
  </div>
);
export default EmptyState;
