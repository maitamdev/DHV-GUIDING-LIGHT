import React from 'react';
const LoadingDots: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={'inline-flex gap-1 ' + className}>
    {[0, 1, 2].map(i => (<span key={i} className='w-2 h-2 bg-blue-600 rounded-full animate-bounce' style={{ animationDelay: i * 0.15 + 's' }} />))}
  </span>
);
export default LoadingDots;
