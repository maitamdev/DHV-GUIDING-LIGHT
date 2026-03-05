import React, { forwardRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
interface Option { value: string; label: string; }
interface Props extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> { options: Option[]; placeholder?: string; error?: boolean; }
const Select = forwardRef<HTMLSelectElement, Props>(({ options, placeholder, error, className = '', ...props }, ref) => (
  <div className='relative'>
    <select ref={ref} {...props}
      className={'w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white appearance-none transition-colors focus:outline-none focus:ring-2 ' +
        (error ? 'border-red-300 focus:ring-red-500 ' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 ') +
        className}>
      {placeholder && <option value=''>{placeholder}</option>}
      {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
    </select>
    <FaChevronDown className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm' />
  </div>
));
Select.displayName = 'Select';
export default Select;
