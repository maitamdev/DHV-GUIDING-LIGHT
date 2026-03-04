import { usePageTitle } from '../hooks/usePageTitle';
import { FaUsers, FaComments, FaCalendar, FaTrophy } from 'react-icons/fa';
const Community = () => { usePageTitle('Community');
  const features = [{ icon: FaComments, title: 'Discussion Forums', desc: 'Ask questions and share knowledge with peers', color: 'from-blue-500 to-indigo-600' }, { icon: FaUsers, title: 'Study Groups', desc: 'Join or create study groups for your courses', color: 'from-green-500 to-emerald-600' }, { icon: FaCalendar, title: 'Events & Workshops', desc: 'Attend live workshops and networking events', color: 'from-purple-500 to-pink-600' }, { icon: FaTrophy, title: 'Leaderboard', desc: 'Compete and earn recognition for your achievements', color: 'from-yellow-500 to-orange-600' }];
  return (<div className="min-h-screen bg-gray-50 pt-24 pb-16"><div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-12"><h1 className="text-4xl font-bold text-gray-900 mb-4">Community</h1><p className="text-gray-600 text-lg">Connect, learn, and grow together</p></div>
    <div className="grid md:grid-cols-2 gap-6">{features.map((f, i) => (
      <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className={`w-14 h-14 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center mb-4`}><f.icon className="text-2xl text-white" /></div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3><p className="text-gray-600">{f.desc}</p>
      </div>
    ))}</div>
    <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white"><h2 className="text-2xl font-bold mb-2">Community Coming Soon!</h2><p className="text-white/80">We are building an amazing community experience. Stay tuned!</p></div>
  </div></div>);
};
export default Community;
