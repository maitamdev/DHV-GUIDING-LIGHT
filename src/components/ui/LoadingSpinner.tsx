import React from 'react';

interface LoadingSpinnerProps { size?: 'sm' | 'md' | 'lg'; color?: string; text?: string; fullScreen?: boolean; }
const sizes = { sm: 'w-6 h-6', md: 'w-10 h-10', lg: 'w-16 h-16' };

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'border-blue-600', text, fullScreen }) => {
  const spinner = (
    <div className="flex flex-col items-center gap-3">
      <div className={`${sizes[size]} border-4 border-gray-200 ${color} border-t-transparent rounded-full animate-spin`} />
      {text && <p className="text-gray-600 text-sm font-medium">{text}</p>}
    </div>
  );
  if (fullScreen) return <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">{spinner}</div>;
  return spinner;
};

export default LoadingSpinner;
