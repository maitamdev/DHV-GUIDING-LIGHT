import React from 'react';
interface Props { children: React.ReactNode; className?: string; maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'; }
const widths = { sm: 'max-w-3xl', md: 'max-w-5xl', lg: 'max-w-6xl', xl: 'max-w-7xl', '2xl': 'max-w-screen-2xl', full: 'max-w-full' };
const Container: React.FC<Props> = ({ children, className = '', maxWidth = 'xl' }) => (
  <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${widths[maxWidth]} ${className}`}>{children}</div>
);
export default Container;
