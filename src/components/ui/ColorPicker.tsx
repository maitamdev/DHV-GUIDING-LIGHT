import React, { useState } from 'react';
const presetColors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#06B6D4', '#F97316', '#6366F1', '#14B8A6', '#E11D48', '#0EA5E9'];
interface Props { value: string; onChange: (color: string) => void; label?: string; }
const ColorPicker: React.FC<Props> = ({ value, onChange, label }) => {
  const [showPicker, setShowPicker] = useState(false);
  return (
    <div className='relative'>
      {label && <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>{label}</label>}
      <button onClick={() => setShowPicker(!showPicker)} className='flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'>
        <div className='w-6 h-6 rounded-full border-2 border-white shadow' style={{ backgroundColor: value }} />
        <span className='text-sm text-gray-600 dark:text-gray-400'>{value}</span>
      </button>
      {showPicker && (
        <div className='absolute top-full mt-2 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-50'>
          <div className='grid grid-cols-6 gap-2'>
            {presetColors.map(c => (<button key={c} onClick={() => { onChange(c); setShowPicker(false); }}
              className={'w-8 h-8 rounded-full border-2 hover:scale-110 transition-transform ' + (c === value ? 'border-gray-900 dark:border-white scale-110' : 'border-transparent')}
              style={{ backgroundColor: c }} />))}
          </div>
        </div>
      )}
    </div>
  );
};
export default ColorPicker;
