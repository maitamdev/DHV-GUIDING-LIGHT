import React from 'react';
interface Props { children: React.ReactNode; }
const KBD: React.FC<Props> = ({ children }) => (
  <kbd className='px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-600 dark:text-gray-400 shadow-sm'>
    {children}
  </kbd>
);
export default KBD;
