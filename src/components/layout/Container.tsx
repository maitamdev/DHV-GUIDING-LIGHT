import React from 'react';
interface Props { children: React.ReactNode; size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'; className?: string; }
const sizes = { sm: 'max-w-2xl', md: 'max-w-4xl', lg: 'max-w-6xl', xl: 'max-w-7xl', full: 'max-w-full' };
const Container: React.FC<Props> = ({ children, size = 'xl', className = '' }) => (
  <div className={'mx-auto px-4 sm:px-6 lg:px-8 ' + sizes[size] + ' ' + className}>{children}</div>
);
export default Container;
