import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';
interface Props { isOpen: boolean; title: string; message: string; confirmText?: string; cancelText?: string; variant?: 'danger' | 'warning' | 'info'; onConfirm: () => void; onCancel: () => void; }
const colors = { danger: 'bg-red-600 hover:bg-red-700', warning: 'bg-yellow-600 hover:bg-yellow-700', info: 'bg-blue-600 hover:bg-blue-700' };
const ConfirmDialog: React.FC<Props> = ({ isOpen, title, message, confirmText = 'Confirm', cancelText = 'Cancel', variant = 'danger', onConfirm, onCancel }) => (
  <AnimatePresence>{isOpen && (
    <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4'>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
        className='bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-md w-full'>
        <div className='flex items-center gap-3 mb-4'><FaExclamationTriangle className='text-yellow-500 text-xl' /><h3 className='text-lg font-bold text-gray-900 dark:text-white'>{title}</h3></div>
        <p className='text-gray-600 dark:text-gray-300 mb-6'>{message}</p>
        <div className='flex gap-3 justify-end'>
          <button onClick={onCancel} className='px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium'>{cancelText}</button>
          <button onClick={onConfirm} className={'px-4 py-2 rounded-xl text-white font-medium ' + colors[variant]}>{confirmText}</button>
        </div>
      </motion.div>
    </div>
  )}</AnimatePresence>
);
export default ConfirmDialog;
