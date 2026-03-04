import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bordered' | 'elevated' | 'glass';
  onClick?: () => void;
}

const paddingStyles = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8' };
const variantStyles = {
  default: 'bg-white shadow-md',
  bordered: 'bg-white border border-gray-200',
  elevated: 'bg-white shadow-xl',
  glass: 'bg-white/10 backdrop-blur-xl border border-white/20',
};

const Card: React.FC<CardProps> = ({ children, className = '', hover = true, padding = 'md', variant = 'default', onClick }) => {
  const Component = hover ? motion.div : 'div';
  const hoverProps = hover ? { whileHover: { y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }, transition: { duration: 0.3 } } : {};
  return (
    <Component className={`rounded-2xl overflow-hidden transition-all duration-300 ${variantStyles[variant]} ${paddingStyles[padding]} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick} {...hoverProps}>{children}</Component>
  );
};

export default Card;
