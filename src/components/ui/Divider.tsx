import React from 'react';

interface DividerProps { text?: string; className?: string; orientation?: 'horizontal' | 'vertical'; }

const Divider: React.FC<DividerProps> = ({ text, className = '', orientation = 'horizontal' }) => {
  if (orientation === 'vertical') return <div className={`w-px bg-gray-200 self-stretch ${className}`} />;
  if (text) return <div className={`flex items-center gap-4 ${className}`}><div className="flex-1 h-px bg-gray-200" /><span className="text-sm text-gray-500 font-medium">{text}</span><div className="flex-1 h-px bg-gray-200" /></div>;
  return <hr className={`border-gray-200 ${className}`} />;
};

export default Divider;
