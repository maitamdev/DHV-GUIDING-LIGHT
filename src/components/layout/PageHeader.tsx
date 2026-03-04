import React from 'react';
import { motion } from 'framer-motion';
interface Props { title: string; subtitle?: string; breadcrumbs?: { label: string; path?: string }[]; background?: string; children?: React.ReactNode; }
const PageHeader: React.FC<Props> = ({ title, subtitle, children, background = 'from-blue-600 to-indigo-700' }) => (
  <div className={`relative py-16 md:py-24 bg-gradient-to-r ${background} overflow-hidden`}>
    <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" /><div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" /></div>
    <div className="container mx-auto px-4 relative z-10 text-center">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</motion.h1>
      {subtitle && <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-white/80 max-w-2xl mx-auto">{subtitle}</motion.p>}
      {children && <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6">{children}</motion.div>}
    </div>
  </div>
);
export default PageHeader;
