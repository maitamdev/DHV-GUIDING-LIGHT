import React, { forwardRef } from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> { icon?: React.ReactNode; error?: boolean; }
const TextInput = forwardRef<HTMLInputElement, Props>(({ icon, error, className = '', ...props }, ref) => (
  <div className='relative'>
    {icon && <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>{icon}</div>}
    <input ref={ref} {...props}
      className={'w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 ' +
        (icon ? 'pl-10 ' : '') +
        (error ? 'border-red-300 focus:ring-red-500 ' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 ') +
        className}
    />
  </div>
));
TextInput.displayName = 'TextInput';
export default TextInput;
