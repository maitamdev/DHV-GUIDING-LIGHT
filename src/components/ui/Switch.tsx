import React from 'react';
import { motion } from 'framer-motion';

interface SwitchProps { checked: boolean; onChange: (checked: boolean) => void; label?: string; disabled?: boolean; size?: 'sm' | 'md'; }

const Switch: React.FC<SwitchProps> = ({ checked, onChange, label, disabled, size = 'md' }) => {
  const w = size === 'sm' ? 'w-8' : 'w-11'; const h = size === 'sm' ? 'h-4' : 'h-6';
  const dot = size === 'sm' ? 'w-3 h-3' : 'w-5 h-5';
  return (
    <label className={`inline-flex items-center gap-3 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
      <button type="button" role="switch" aria-checked={checked} onClick={() => !disabled && onChange(!checked)}
        className={`relative ${w} ${h} rounded-full transition-colors duration-200 ${checked ? 'bg-blue-600' : 'bg-gray-300'}`}>
        <motion.div animate={{ x: checked ? (size === 'sm' ? 16 : 20) : 2 }} transition={{ duration: 0.2 }}
          className={`absolute top-0.5 ${dot} bg-white rounded-full shadow-sm`} />
      </button>
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
    </label>
  );
};

export default Switch;
