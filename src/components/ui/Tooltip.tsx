import React, { useState } from 'react';
interface Props { content: string; position?: 'top' | 'bottom' | 'left' | 'right'; children: React.ReactNode; }
const positions = { top: 'bottom-full left-1/2 -translate-x-1/2 mb-2', bottom: 'top-full left-1/2 -translate-x-1/2 mt-2', left: 'right-full top-1/2 -translate-y-1/2 mr-2', right: 'left-full top-1/2 -translate-y-1/2 ml-2' };
const Tooltip: React.FC<Props> = ({ content, position = 'top', children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='relative inline-flex' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && <div className={'absolute z-50 px-3 py-1.5 text-sm text-white bg-gray-900 rounded-lg whitespace-nowrap ' + positions[position]}>{content}</div>}
    </div>
  );
};
export default Tooltip;
