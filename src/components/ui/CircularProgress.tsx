import React from 'react';
interface Props { value: number; max?: number; size?: number; strokeWidth?: number; color?: string; className?: string; children?: React.ReactNode; }
const CircularProgress: React.FC<Props> = ({ value, max = 100, size = 120, strokeWidth = 8, color = '#3B82F6', className = '', children }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / max) * circumference;
  return (
    <div className={'relative inline-flex items-center justify-center ' + className} style={{ width: size, height: size }}>
      <svg width={size} height={size} className='-rotate-90'>
        <circle cx={size/2} cy={size/2} r={radius} fill='none' stroke='#E5E7EB' strokeWidth={strokeWidth} />
        <circle cx={size/2} cy={size/2} r={radius} fill='none' stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap='round' style={{ transition: 'stroke-dashoffset 0.5s ease' }} />
      </svg>
      <div className='absolute inset-0 flex items-center justify-center'>{children || <span className='text-lg font-bold'>{Math.round((value/max)*100)}%</span>}</div>
    </div>
  );
};
export default CircularProgress;
