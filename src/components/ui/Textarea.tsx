import React, { forwardRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string; error?: string; helperText?: string; fullWidth?: boolean; showCount?: boolean; maxLength?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, error, helperText, fullWidth, showCount, maxLength, className = '', value, ...props }, ref) => (
  <div className={fullWidth ? 'w-full' : ''}>
    {label && <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>}
    <textarea ref={ref} value={value} maxLength={maxLength}
      className={`w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y min-h-[100px] ${error ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'} ${className}`} {...props} />
    <div className="flex justify-between mt-1">
      {error ? <p className="text-sm text-red-600">{error}</p> : helperText ? <p className="text-sm text-gray-500">{helperText}</p> : <span />}
      {showCount && maxLength && <span className="text-sm text-gray-400">{String(value || '').length}/{maxLength}</span>}
    </div>
  </div>
));

Textarea.displayName = 'Textarea';
export default Textarea;
