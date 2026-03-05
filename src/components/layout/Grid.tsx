import React from 'react';
interface Props { children: React.ReactNode; cols?: 1 | 2 | 3 | 4 | 5 | 6; gap?: 'sm' | 'md' | 'lg'; className?: string; }
const colClasses = { 1: 'grid-cols-1', 2: 'grid-cols-1 md:grid-cols-2', 3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3', 4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4', 5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5', 6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6' };
const gapClasses = { sm: 'gap-4', md: 'gap-6', lg: 'gap-8' };
const Grid: React.FC<Props> = ({ children, cols = 3, gap = 'md', className = '' }) => (
  <div className={'grid ' + colClasses[cols] + ' ' + gapClasses[gap] + ' ' + className}>{children}</div>
);
export default Grid;
