import React from 'react';
import { motion, useScroll } from 'framer-motion';
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  return <motion.div className='fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 origin-left z-[100]' style={{ scaleX: scrollYProgress }} />;
};
export default ScrollProgress;
