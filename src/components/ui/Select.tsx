import React, { forwardRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface SelectOption { label: string; value: string | number; disabled?: boolean; }
interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string; options: SelectOption[]; error?: string; placeholder?: string; onChange?: (value: string) => void; fullWidth?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ label, options, error, placeholder, onChange, fullWidth, className = '', ...props }, ref) => (
  <div className={fullWidth ? 'w-full' : ''}>
    {label && <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>}
    <div className="relative">
      <select ref={ref} onChange={e => onChange?.(e.target.value)}
        className={`w-full appearance-none px-4 py-2.5 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'} ${className}`} {...props}>
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map(o => <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>)}
      </select>
      <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
    </div>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
));

Select.displayName = 'Select';
export default Select;
