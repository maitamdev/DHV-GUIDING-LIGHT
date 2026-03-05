import React, { useState, useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
interface DropdownItem { label: string; value: string; icon?: React.ReactNode; }
interface Props { trigger: React.ReactNode; items: DropdownItem[]; onSelect: (value: string) => void; className?: string; }
const Dropdown: React.FC<Props> = ({ trigger, items, onSelect, className = '' }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));
  return (
    <div ref={ref} className={'relative inline-block ' + className}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div className='absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-1 z-50'>
          {items.map(item => (
            <button key={item.value} onClick={() => { onSelect(item.value); setOpen(false); }}
              className='w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left'>
              {item.icon}{item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
