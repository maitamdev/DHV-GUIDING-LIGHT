import React from 'react';
interface Props { label: string; htmlFor: string; required?: boolean; error?: string; hint?: string; children: React.ReactNode; }
const FormGroup: React.FC<Props> = ({ label, htmlFor, required, error, hint, children }) => (
  <div className='mb-4'>
    <label htmlFor={htmlFor} className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
      {label}{required && <span className='text-red-500 ml-0.5'>*</span>}
    </label>
    {children}
    {hint && !error && <p className='mt-1 text-xs text-gray-500'>{hint}</p>}
    {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
  </div>
);
export default FormGroup;
