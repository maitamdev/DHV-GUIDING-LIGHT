import { usePageTitle } from '../hooks/usePageTitle';
import { FaChartLine, FaClock, FaFire, FaTrophy } from 'react-icons/fa';
const Analytics = () => { usePageTitle('Learning Analytics');
  const stats = [{ icon: FaClock, label: 'Hours Learned', value: '156h', color: 'text-blue-600 bg-blue-100' }, { icon: FaFire, label: 'Day Streak', value: '12', color: 'text-orange-600 bg-orange-100' }, { icon: FaTrophy, label: 'Courses Done', value: '8', color: 'text-green-600 bg-green-100' }, { icon: FaChartLine, label: 'Avg Score', value: '87%', color: 'text-purple-600 bg-purple-100' }];
  return (<div className="min-h-screen bg-gray-50 pt-24 pb-16"><div className="container mx-auto px-4 max-w-5xl">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Learning Analytics</h1>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">{stats.map((s, i) => (
      <div key={i} className="bg-white rounded-2xl p-6 shadow-sm"><div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center mb-3`}><s.icon className="text-xl" /></div>
        <p className="text-2xl font-bold text-gray-900">{s.value}</p><p className="text-gray-500 text-sm">{s.label}</p></div>
    ))}</div>
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm"><h3 className="text-lg font-bold text-gray-900 mb-4">Weekly Activity</h3><div className="flex items-end gap-2 h-40">{[2.5,3,1.5,4,2,5,3.5].map((h,i) => (<div key={i} className="flex-1 flex flex-col items-center gap-1"><div className="w-full bg-blue-500 rounded-t-lg" style={{height:`${h*25}px`}} /><span className="text-xs text-gray-400">{['M','T','W','T','F','S','S'][i]}</span></div>))}</div></div>
      <div className="bg-white rounded-2xl p-6 shadow-sm"><h3 className="text-lg font-bold text-gray-900 mb-4">Top Skills</h3><div className="space-y-3">{[{name:'React',level:85},{name:'TypeScript',level:78},{name:'CSS',level:90},{name:'Node.js',level:72}].map((s,i) => (<div key={i}><div className="flex justify-between text-sm mb-1"><span className="font-medium">{s.name}</span><span className="text-gray-500">{s.level}%</span></div><div className="h-2 bg-gray-200 rounded-full"><div className="h-2 bg-blue-500 rounded-full" style={{width:`${s.level}%`}} /></div></div>))}</div></div>
    </div>
  </div></div>);
};
export default Analytics;
