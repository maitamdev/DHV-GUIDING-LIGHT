import { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { FaSearch, FaBook, FaVideo, FaHeadset, FaEnvelope } from 'react-icons/fa';
const helpCategories = [
  { icon: FaBook, title: 'Getting Started', description: 'Learn the basics of using the platform', articles: 12 },
  { icon: FaVideo, title: 'Course Help', description: 'Troubleshoot course-related issues', articles: 18 },
  { icon: FaHeadset, title: 'Technical Support', description: 'Fix technical problems', articles: 15 },
  { icon: FaEnvelope, title: 'Account & Billing', description: 'Manage your account and payments', articles: 10 },
];
const Help = () => { usePageTitle('Help Center');
  const [search, setSearch] = useState('');
  return (<div className="min-h-screen bg-gray-50 pt-24 pb-16"><div className="container mx-auto px-4 max-w-4xl">
    <div className="text-center mb-12"><h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help?</h1>
      <div className="relative max-w-xl mx-auto"><FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for help..." className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" /></div></div>
    <div className="grid md:grid-cols-2 gap-6">{helpCategories.map((cat, i) => (
      <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><cat.icon className="text-blue-600 text-xl" /></div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{cat.title}</h3><p className="text-gray-600 text-sm mb-3">{cat.description}</p><span className="text-blue-600 text-sm font-medium">{cat.articles} articles</span>
      </div>
    ))}</div>
  </div></div>);
};
export default Help;
