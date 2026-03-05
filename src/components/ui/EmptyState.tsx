import React from 'react';
import { motion } from 'framer-motion';
interface Props { icon: React.ReactNode; title: string; description?: string; action?: { label: string; onClick: () => void }; className?: string; }
const EmptyState: React.FC<Props> = ({ icon, title, description, action, className = '' }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
    className={'text-center py-16 px-4 ' + className}>
    <div className='text-5xl mb-4 opacity-40'>{icon}</div>
    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>{title}</h3>
    {description && <p className='text-gray-500 max-w-md mx-auto mb-6'>{description}</p>}
    {action && <button onClick={action.onClick} className='px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700'>{action.label}</button>}
  </motion.div>
);
export default EmptyState;
