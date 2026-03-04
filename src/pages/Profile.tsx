import { usePageTitle } from '../hooks/usePageTitle';
import { useAuth } from '../context/AuthContext';
import { FaEnvelope, FaCalendar, FaBook, FaAward } from 'react-icons/fa';
const Profile = () => { usePageTitle('Profile');
  const { currentUser, userData } = useAuth();
  return (<div className="min-h-screen bg-gray-50 pt-24 pb-16"><div className="container mx-auto px-4 max-w-3xl">
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600" />
      <div className="px-8 pb-8 -mt-12"><div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center text-3xl font-bold text-blue-600">{currentUser?.displayName?.charAt(0) || '?'}</div>
        <h1 className="text-2xl font-bold text-gray-900 mt-4">{currentUser?.displayName || 'User'}</h1>
        <p className="text-gray-500 capitalize">{userData?.role || 'Student'}</p>
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500"><span className="flex items-center gap-1"><FaEnvelope />{currentUser?.email}</span><span className="flex items-center gap-1"><FaCalendar />Joined 2024</span></div>
        <div className="grid grid-cols-3 gap-4 mt-8">{[{ icon: FaBook, label: 'Courses', value: '5' }, { icon: FaAward, label: 'Certificates', value: '3' }, { icon: FaBook, label: 'Hours', value: '156' }].map((s, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-4 text-center"><s.icon className="text-blue-600 text-xl mx-auto mb-2" /><p className="text-xl font-bold text-gray-900">{s.value}</p><p className="text-gray-500 text-sm">{s.label}</p></div>
        ))}</div>
      </div>
    </div>
  </div></div>);
};
export default Profile;
