import React from 'react';
interface Props { children: React.ReactNode; from?: string; to?: string; className?: string; as?: keyof JSX.IntrinsicElements; }
const GradientText: React.FC<Props> = ({ children, from = 'from-blue-600', to = 'to-indigo-600', className = '', as: Tag = 'span' }) => (
  <Tag className={'bg-gradient-to-r bg-clip-text text-transparent ' + from + ' ' + to + ' ' + className}>{children}</Tag>
);
export default GradientText;
