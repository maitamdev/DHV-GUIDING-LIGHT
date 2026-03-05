import React from 'react';
interface Props { text: string; color?: string; position?: 'top-left' | 'top-right'; }
const Ribbon: React.FC<Props> = ({ text, color = 'bg-red-500', position = 'top-right' }) => (
  <div className={'absolute z-10 ' + (position === 'top-right' ? '-right-2 -top-2' : '-left-2 -top-2')}>
    <div className={color + ' text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg shadow-md'}>{text}</div>
  </div>
);
export default Ribbon;
