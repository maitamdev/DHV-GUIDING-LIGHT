import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface AccordionItem { id: string; title: string; content: React.ReactNode; }
interface AccordionProps { items: AccordionItem[]; allowMultiple?: boolean; className?: string; }

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false, className = '' }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const toggle = (id: string) => { setOpenItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : allowMultiple ? [...prev, id] : [id]); };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map(item => (
        <div key={item.id} className="border border-gray-200 rounded-xl overflow-hidden">
          <button onClick={() => toggle(item.id)} className="w-full flex items-center justify-between p-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
            {item.title}<FaChevronDown className={`transition-transform duration-300 ${openItems.includes(item.id) ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openItems.includes(item.id) && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                <div className="px-4 pb-4 text-gray-600">{item.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
