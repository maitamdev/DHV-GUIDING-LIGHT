import React from 'react';
interface Option { value: string; label: string; description?: string; }
interface Props { name: string; options: Option[]; value: string; onChange: (value: string) => void; }
const RadioGroup: React.FC<Props> = ({ name, options, value, onChange }) => (
  <div className='space-y-2'>
    {options.map(opt => (
      <label key={opt.value} className='flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50'
        style={{ borderColor: value === opt.value ? '#3B82F6' : undefined, backgroundColor: value === opt.value ? 'rgba(59,130,246,0.05)' : undefined }}>
        <input type='radio' name={name} value={opt.value} checked={value === opt.value} onChange={() => onChange(opt.value)} className='mt-1' />
        <div>
          <p className='font-medium text-gray-900 dark:text-white text-sm'>{opt.label}</p>
          {opt.description && <p className='text-xs text-gray-500 mt-0.5'>{opt.description}</p>}
        </div>
      </label>
    ))}
  </div>
);
export default RadioGroup;
