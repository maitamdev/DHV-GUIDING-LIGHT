import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface TagProps { children: React.ReactNode; color?: string; removable?: boolean; onRemove?: () => void; className?: string; }

const Tag: React.FC<TagProps> = ({ children, color = 'bg-blue-100 text-blue-800', removable, onRemove, className = '' }) => (
  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${color} ${className}`}>
    {children}{removable && <button onClick={onRemove} className="ml-0.5 hover:opacity-70"><FaTimes className="text-xs" /></button>}
  </span>
);

export default Tag;
