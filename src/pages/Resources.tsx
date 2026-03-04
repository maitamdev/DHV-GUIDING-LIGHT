import { usePageTitle } from '../hooks/usePageTitle';
import { FaBook, FaVideo, FaFileAlt, FaLink, FaDownload } from 'react-icons/fa';
const resources = [
  { icon: FaBook, title: 'E-Books & Guides', desc: 'Free downloadable learning materials', count: 25, color: 'bg-blue-100 text-blue-600' },
  { icon: FaVideo, title: 'Video Tutorials', desc: 'Free introductory video content', count: 50, color: 'bg-green-100 text-green-600' },
  { icon: FaFileAlt, title: 'Cheat Sheets', desc: 'Quick reference guides for technologies', count: 30, color: 'bg-purple-100 text-purple-600' },
  { icon: FaLink, title: 'Useful Links', desc: 'Curated collection of learning resources', count: 100, color: 'bg-orange-100 text-orange-600' },
];
const Resources = () => { usePageTitle('Resources');
  return (<div className="min-h-screen bg-gray-50 pt-24 pb-16"><div className="container mx-auto px-4 max-w-4xl">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Learning Resources</h1>
    <div className="grid md:grid-cols-2 gap-6">{resources.map((r, i) => (
      <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className={`w-12 h-12 ${r.color} rounded-xl flex items-center justify-center mb-4`}><r.icon className="text-xl" /></div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{r.title}</h3><p className="text-gray-600 text-sm mb-3">{r.desc}</p>
        <div className="flex items-center justify-between"><span className="text-sm text-gray-400">{r.count} items</span><button className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700"><FaDownload />Browse</button></div>
      </div>
    ))}</div>
  </div></div>);
};
export default Resources;
