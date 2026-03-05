import React from 'react';
import { motion } from 'framer-motion';
interface Props { children: React.ReactNode; className?: string; }
const Sparkle: React.FC<Props> = ({ children, className = '' }) => (
  <span className={'relative inline-block ' + className}>
    {children}
    <motion.span animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], rotate: [0, 180] }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
      className='absolute -top-1 -right-1 text-yellow-400 text-xs'>*</motion.span>
  </span>
);
export default Sparkle;
