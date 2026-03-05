import React from 'react';
interface Props { children: React.ReactNode; title?: string; subtitle?: string; className?: string; dark?: boolean; }
const Section: React.FC<Props> = ({ children, title, subtitle, className = '', dark }) => (
  <section className={'py-16 md:py-24 ' + (dark ? 'bg-gray-900 text-white ' : 'bg-white dark:bg-gray-900 ') + className}>
    <div className='container mx-auto px-4'>
      {(title || subtitle) && (
        <div className='text-center mb-12'>
          {title && <h2 className='text-3xl md:text-4xl font-bold'>{title}</h2>}
          {subtitle && <p className='text-gray-500 dark:text-gray-400 mt-3 max-w-2xl mx-auto'>{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);
export default Section;
