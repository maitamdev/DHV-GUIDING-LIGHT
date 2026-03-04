import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  className?: string;
}

const variantStyles: Record<string, string> = {
  primary: 'bg-blue-100 text-blue-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  info: 'bg-indigo-100 text-indigo-800',
  neutral: 'bg-gray-100 text-gray-800',
};

const sizeStyles: Record<string, string> = { sm: 'px-2 py-0.5 text-xs', md: 'px-2.5 py-1 text-sm', lg: 'px-3 py-1.5 text-base' };

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', size = 'md', dot, className = '' }) => (
  <span className={`inline-flex items-center gap-1.5 font-medium rounded-full ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
    {dot && <span className={`w-1.5 h-1.5 rounded-full ${variant === 'success' ? 'bg-green-500' : variant === 'error' ? 'bg-red-500' : variant === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'}`} />}
    {children}
  </span>
);

export default Badge;
