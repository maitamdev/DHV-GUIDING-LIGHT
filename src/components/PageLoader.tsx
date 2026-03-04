import React from 'react';
import { motion } from 'framer-motion';
const PageLoader: React.FC = () => (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-600 font-medium">Loading...</p>
    </motion.div>
  </div>
);
export default PageLoader;
