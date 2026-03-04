import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps { value: number; max?: number; label?: string; showPercentage?: boolean; size?: 'sm' | 'md' | 'lg'; color?: string; className?: string; animated?: boolean; }
const sizeH = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-4' };

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max = 100, label, showPercentage = true, size = 'md', color = 'from-blue-500 to-indigo-600', className = '', animated = true }) => {
  const percentage = Math.min(Math.round((value / max) * 100), 100);
  return (
    <div className={className}>
      {(label || showPercentage) && <div className="flex justify-between items-center mb-1.5">{label && <span className="text-sm font-medium text-gray-700">{label}</span>}{showPercentage && <span className="text-sm font-semibold text-gray-600">{percentage}%</span>}</div>}
      <div className={`w-full ${sizeH[size]} bg-gray-200 rounded-full overflow-hidden`}>
        <motion.div initial={animated ? { width: 0 } : false} animate={{ width: `${percentage}%` }} transition={{ duration: 1, ease: 'easeOut' }}
          className={`${sizeH[size]} bg-gradient-to-r ${color} rounded-full`} />
      </div>
    </div>
  );
};

export default ProgressBar;
