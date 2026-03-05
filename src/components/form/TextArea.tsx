import React, { forwardRef } from 'react';
interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { error?: boolean; }
const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ error, className = '', ...props }, ref) => (
  <textarea ref={ref} {...props}
    className={'w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 resize-none ' +
      (error ? 'border-red-300 focus:ring-red-500 ' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 ') +
      className}
  />
));
TextArea.displayName = 'TextArea';
export default TextArea;
