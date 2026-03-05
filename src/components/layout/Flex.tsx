import React from 'react';
interface Props { children: React.ReactNode; direction?: 'row' | 'col'; align?: 'start' | 'center' | 'end' | 'stretch'; justify?: 'start' | 'center' | 'end' | 'between' | 'around'; gap?: number; wrap?: boolean; className?: string; }
const Flex: React.FC<Props> = ({ children, direction = 'row', align = 'start', justify = 'start', gap = 0, wrap = false, className = '' }) => (
  <div className={
    'flex ' +
    (direction === 'col' ? 'flex-col ' : '') +
    'items-' + align + ' justify-' + justify + ' ' +
    (gap ? 'gap-' + gap + ' ' : '') +
    (wrap ? 'flex-wrap ' : '') +
    className
  }>{children}</div>
);
export default Flex;
