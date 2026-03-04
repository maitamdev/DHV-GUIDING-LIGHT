import React from 'react';

interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  className?: string;
  count?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ variant = 'text', width, height, className = '', count = 1 }) => {
  const baseClass = 'animate-pulse bg-gray-200 rounded';
  const variantClass = variant === 'circular' ? 'rounded-full' : variant === 'rectangular' ? 'rounded-xl' : 'rounded-md';
  const defaultHeight = variant === 'text' ? 'h-4' : variant === 'circular' ? 'h-10 w-10' : 'h-32';
  const style = { width: width || (variant === 'text' ? '100%' : undefined), height: height || undefined };

  return (<>{Array.from({ length: count }).map((_, i) => (
    <div key={i} className={`${baseClass} ${variantClass} ${defaultHeight} ${className}`} style={style} />
  ))}</>);
};

export const CardSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
    <Skeleton variant="rectangular" height={200} />
    <div className="p-6 space-y-3"><Skeleton count={2} /><Skeleton width="60%" /></div>
  </div>
);

export default Skeleton;
