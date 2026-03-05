import React from 'react';
interface Props { children: React.ReactNode; speed?: number; direction?: 'left' | 'right'; className?: string; }
const Marquee: React.FC<Props> = ({ children, speed = 30, direction = 'left', className = '' }) => (
  <div className={'overflow-hidden whitespace-nowrap ' + className}>
    <div className='inline-flex' style={{ animation: 'marquee ' + speed + 's linear infinite', animationDirection: direction === 'right' ? 'reverse' : 'normal' }}>
      {children}{children}
    </div>
  </div>
);
export default Marquee;
