import React from 'react';
interface Props { checked: boolean; onChange: (checked: boolean) => void; label?: string; disabled?: boolean; size?: 'sm' | 'md' | 'lg'; }
const sizes = { sm: 'w-8 h-4', md: 'w-11 h-6', lg: 'w-14 h-7' };
const dotSizes = { sm: 'w-3 h-3', md: 'w-5 h-5', lg: 'w-6 h-6' };
const dotTranslate = { sm: 'translate-x-4', md: 'translate-x-5', lg: 'translate-x-7' };
const Switch: React.FC<Props> = ({ checked, onChange, label, disabled = false, size = 'md' }) => (
  <label className={'inline-flex items-center gap-3 cursor-pointer ' + (disabled ? 'opacity-50 cursor-not-allowed' : '')}>
    <button type='button' role='switch' aria-checked={checked} disabled={disabled}
      className={'relative inline-flex flex-shrink-0 rounded-full transition-colors duration-200 ' + sizes[size] + ' ' + (checked ? 'bg-blue-600' : 'bg-gray-300')}
      onClick={() => !disabled && onChange(!checked)}>
      <span className={'inline-block rounded-full bg-white shadow transform transition-transform duration-200 ' + dotSizes[size] + ' ' + (checked ? dotTranslate[size] : 'translate-x-0.5') + ' translate-y-0.5'} />
    </button>
    {label && <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>{label}</span>}
  </label>
);
export default Switch;
