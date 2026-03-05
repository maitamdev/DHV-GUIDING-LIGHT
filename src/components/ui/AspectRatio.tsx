import React from 'react';
interface Props { ratio: number; children: React.ReactNode; className?: string; }
const AspectRatio: React.FC<Props> = ({ ratio, children, className = '' }) => (
  <div className={'relative w-full ' + className} style={{ paddingBottom: (1 / ratio) * 100 + '%' }}>
    <div className='absolute inset-0'>{children}</div>
  </div>
);
export default AspectRatio;
