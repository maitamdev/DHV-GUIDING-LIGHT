import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Tab { id: string; label: string; icon?: React.ReactNode; badge?: number; }
interface TabsProps { tabs: Tab[]; defaultTab?: string; onChange?: (tabId: string) => void; children: (activeTab: string) => React.ReactNode; className?: string; }

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, onChange, children, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || '');
  const handleChange = (id: string) => { setActiveTab(id); onChange?.(id); };

  return (
    <div className={className}>
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => handleChange(tab.id)}
            className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
            {tab.icon}{tab.label}
            {tab.badge !== undefined && <span className="px-1.5 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full">{tab.badge}</span>}
            {activeTab === tab.id && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
          </button>
        ))}
      </div>
      <div className="pt-4">{children(activeTab)}</div>
    </div>
  );
};

export default Tabs;
