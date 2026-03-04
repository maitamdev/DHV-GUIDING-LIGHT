import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';

export interface ToastProps {
  id: string;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose: (id: string) => void;
}

const icons = { success: FaCheckCircle, error: FaTimesCircle, warning: FaExclamationCircle, info: FaInfoCircle };
const styles = {
  success: 'bg-green-50 border-green-500 text-green-800',
  error: 'bg-red-50 border-red-500 text-red-800',
  warning: 'bg-yellow-50 border-yellow-500 text-yellow-800',
  info: 'bg-blue-50 border-blue-500 text-blue-800',
};

const Toast: React.FC<ToastProps> = ({ id, message, type = 'info', duration = 5000, onClose }) => {
  const Icon = icons[type];
  useEffect(() => { if (duration > 0) { const t = setTimeout(() => onClose(id), duration); return () => clearTimeout(t); } }, [id, duration, onClose]);

  return (
    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }}
      className={`flex items-center gap-3 p-4 rounded-xl border-l-4 shadow-lg ${styles[type]} min-w-[320px] max-w-md`}>
      <Icon className="text-xl flex-shrink-0" /><p className="flex-1 text-sm font-medium">{message}</p>
      <button onClick={() => onClose(id)} className="p-1 hover:opacity-70"><FaTimes /></button>
    </motion.div>
  );
};

export const ToastContainer: React.FC<{ toasts: ToastProps[] }> = ({ toasts }) => (
  <div className="fixed top-4 right-4 z-[100] space-y-3">
    <AnimatePresence>{toasts.map(t => <Toast key={t.id} {...t} />)}</AnimatePresence>
  </div>
);

export default Toast;
