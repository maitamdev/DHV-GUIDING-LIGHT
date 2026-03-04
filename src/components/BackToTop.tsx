import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useScrollPosition } from '../hooks/useScrollPosition';
const BackToTop: React.FC = () => {
  const { y } = useScrollPosition();
  const show = y > 400;
  return (
    <AnimatePresence>{show && (
      <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110"
        aria-label="Back to top"><FaArrowUp /></motion.button>
    )}</AnimatePresence>
  );
};
export default BackToTop;
