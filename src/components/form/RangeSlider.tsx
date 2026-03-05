import React from 'react';
interface Props { value: number; onChange: (value: number) => void; min?: number; max?: number; step?: number; label?: string; showValue?: boolean; }
const RangeSlider: React.FC<Props> = ({ value, onChange, min = 0, max = 100, step = 1, label, showValue = true }) => (
  <div>
    <div className='flex justify-between mb-1'>
      {label && <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>{label}</label>}
      {showValue && <span className='text-sm font-bold text-blue-600'>{value}</span>}
    </div>
    <input type='range' value={value} onChange={e => onChange(Number(e.target.value))} min={min} max={max} step={step}
      className='w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-blue-600' />
    <div className='flex justify-between text-xs text-gray-400 mt-1'>
      <span>{min}</span><span>{max}</span>
    </div>
  </div>
);
export default RangeSlider;
