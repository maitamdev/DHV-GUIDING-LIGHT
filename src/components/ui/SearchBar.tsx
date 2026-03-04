import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface SearchBarProps { placeholder?: string; onSearch: (query: string) => void; className?: string; defaultValue?: string; }

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...', onSearch, className = '', defaultValue = '' }) => {
  const [query, setQuery] = useState(defaultValue);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); onSearch(query); };
  const handleClear = () => { setQuery(''); onSearch(''); };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder={placeholder}
        className="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
      {query && <button type="button" onClick={handleClear} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"><FaTimes /></button>}
    </form>
  );
};

export default SearchBar;
