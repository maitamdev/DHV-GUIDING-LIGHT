import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
interface Props { isOpen: boolean; onClose: () => void; title?: string; position?: 'left' | 'right'; children: React.ReactNode; }
const Drawer: React.FC<Props> = ({ isOpen, onClose, title, position = 'right', children }) => {
  const isRight = position === 'right';
  return (
    <AnimatePresence>{isOpen && (<>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className='fixed inset-0 bg-black/50 z-[90]' />
      <motion.div initial={{ x: isRight ? '100%' : '-100%' }} animate={{ x: 0 }} exit={{ x: isRight ? '100%' : '-100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className={'fixed top-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-gray-800 shadow-2xl z-[95] flex flex-col ' + (isRight ? 'right-0' : 'left-0')}>
        <div className='flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700'>
          {title && <h2 className='text-lg font-bold text-gray-900 dark:text-white'>{title}</h2>}
          <button onClick={onClose} className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'><FaTimes /></button>
        </div>
        <div className='flex-1 overflow-y-auto p-4'>{children}</div>
      </motion.div>
    </>)}</AnimatePresence>
  );
};
export default Drawer;
