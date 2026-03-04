import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps { children: React.ReactNode; content: string; position?: 'top' | 'bottom' | 'left' | 'right'; className?: string; }

const posStyles = { top: 'bottom-full left-1/2 -translate-x-1/2 mb-2', bottom: 'top-full left-1/2 -translate-x-1/2 mt-2', left: 'right-full top-1/2 -translate-y-1/2 mr-2', right: 'left-full top-1/2 -translate-y-1/2 ml-2' };

const Tooltip: React.FC<TooltipProps> = ({ children, content, position = 'top', className = '' }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={`relative inline-flex ${className}`} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      <AnimatePresence>
        {show && <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
          className={`absolute ${posStyles[position]} px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-50 pointer-events-none`}>{content}</motion.div>}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
