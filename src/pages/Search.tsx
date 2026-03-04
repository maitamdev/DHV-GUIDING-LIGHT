import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { FaSearch, FaStar } from 'react-icons/fa';
import { coursesData } from '../data/courses';
const Search = () => { usePageTitle('Search');
  const [query, setQuery] = useState('');
  const results = query.length > 1 ? coursesData.filter(c => c.title.toLowerCase().includes(query.toLowerCase()) || c.category.toLowerCase().includes(query.toLowerCase()) || c.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))) : [];
  return (<div className="min-h-screen bg-gray-50 pt-24 pb-16"><div className="container mx-auto px-4 max-w-4xl">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Search Courses</h1>
    <div className="relative mb-8"><FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search courses, topics, or skills..." className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 text-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" autoFocus /></div>
    {query.length > 1 && <p className="text-gray-600 mb-4">{results.length} results for "<strong>{query}</strong>"</p>}
    <div className="space-y-4">{results.map(c => (
      <Link key={c.id} to={`/course/${c.id}`} className="flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
        <img src={c.thumbnail} alt={c.title} className="w-24 h-24 rounded-lg object-cover" />
        <div className="flex-1"><h3 className="font-semibold text-gray-900 hover:text-blue-600">{c.title}</h3><p className="text-sm text-gray-500 mt-1">{c.instructorName} â€¢ {c.category}</p>
          <div className="flex items-center gap-2 mt-2"><FaStar className="text-yellow-400" /><span className="text-sm font-medium">{c.rating}</span><span className="text-gray-400 text-sm">({c.totalReviews})</span><span className="text-blue-600 font-bold ml-auto">${c.price}</span></div>
        </div></Link>
    ))}</div>
  </div></div>);
};
export default Search;
