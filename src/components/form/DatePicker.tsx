import React from 'react';
import { FaCalendar } from 'react-icons/fa';
interface Props { value: string; onChange: (value: string) => void; label?: string; min?: string; max?: string; error?: boolean; }
const DatePicker: React.FC<Props> = ({ value, onChange, label, min, max, error }) => (
  <div>
    {label && <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>{label}</label>}
    <div className='relative'>
      <FaCalendar className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
      <input type='date' value={value} onChange={e => onChange(e.target.value)} min={min} max={max}
        className={'w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 ' +
          (error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500')} />
    </div>
  </div>
);
export default DatePicker;
