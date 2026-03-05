import React from 'react';
import { FaCheck } from 'react-icons/fa';
interface Props { checked: boolean; onChange: (checked: boolean) => void; label: string; id: string; disabled?: boolean; }
const Checkbox: React.FC<Props> = ({ checked, onChange, label, id, disabled }) => (
  <label htmlFor={id} className={'flex items-center gap-3 cursor-pointer ' + (disabled ? 'opacity-50 cursor-not-allowed' : '')}>
    <div className='relative'>
      <input type='checkbox' id={id} checked={checked} onChange={e => !disabled && onChange(e.target.checked)} className='sr-only' />
      <div className={'w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ' +
        (checked ? 'bg-blue-600 border-blue-600' : 'border-gray-300 dark:border-gray-600')}>
        {checked && <FaCheck className='text-white text-xs' />}
      </div>
    </div>
    <span className='text-sm text-gray-700 dark:text-gray-300'>{label}</span>
  </label>
);
export default Checkbox;
