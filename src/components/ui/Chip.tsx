import React from 'react';
import { FaTimes } from 'react-icons/fa';
interface Props { label: string; onRemove?: () => void; variant?: 'default' | 'primary' | 'success' | 'warning' | 'error'; size?: 'sm' | 'md'; }
const variants = { default: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', primary: 'bg-blue-100 text-blue-700', success: 'bg-green-100 text-green-700', warning: 'bg-yellow-100 text-yellow-700', error: 'bg-red-100 text-red-700' };
const Chip: React.FC<Props> = ({ label, onRemove, variant = 'default', size = 'sm' }) => (
  <span className={'inline-flex items-center gap-1 rounded-full font-medium ' + variants[variant] + ' ' + (size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm')}>
    {label}
    {onRemove && <button onClick={onRemove} className='ml-0.5 hover:opacity-70'><FaTimes className='text-xs' /></button>}
  </span>
);
export default Chip;
