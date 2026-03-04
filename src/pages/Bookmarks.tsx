import { usePageTitle } from '../hooks/usePageTitle';
import { FaBookmark, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const mockBookmarks = [
  { id: 1, title: 'Complete Web Development Bootcamp', thumbnail: '/img/course-1.jpg', instructor: 'Mai Tran Thien Tam', rating: 4.9, price: 149 },
  { id: 2, title: 'React & Node.js Complete Guide', thumbnail: '/img/course-2.jpg', instructor: 'Le Thi Huong', rating: 4.8, price: 129 },
];
const Bookmarks = () => { usePageTitle('Bookmarks');
  return (<div className="min-h-screen bg-gray-50 pt-24 pb-16"><div className="container mx-auto px-4 max-w-4xl">
    <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"><FaBookmark className="text-blue-600" /> My Bookmarks</h1>
    <div className="space-y-4">{mockBookmarks.map(b => (
      <Link key={b.id} to={`/course/${b.id}`} className="flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
        <img src={b.thumbnail} alt={b.title} className="w-28 h-20 rounded-lg object-cover" />
        <div className="flex-1"><h3 className="font-semibold text-gray-900">{b.title}</h3><p className="text-sm text-gray-500 mt-1">{b.instructor}</p>
          <div className="flex items-center gap-2 mt-2"><FaStar className="text-yellow-400 text-sm" /><span className="text-sm">{b.rating}</span><span className="text-blue-600 font-bold ml-auto">${b.price}</span></div>
        </div></Link>
    ))}</div>
  </div></div>);
};
export default Bookmarks;
