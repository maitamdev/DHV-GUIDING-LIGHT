import { usePageTitle } from '../hooks/usePageTitle';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
const upcomingEvents = [
  { id: 1, title: 'React Workshop: Building Modern UIs', date: 'Mar 15, 2024', time: '7:00 PM', location: 'Online (Zoom)', attendees: 45, type: 'Workshop' },
  { id: 2, title: 'Career Talk: Breaking into Tech', date: 'Mar 20, 2024', time: '6:00 PM', location: 'DHV Campus', attendees: 120, type: 'Talk' },
  { id: 3, title: 'Hackathon: Build in 24 Hours', date: 'Apr 01, 2024', time: '9:00 AM', location: 'Online', attendees: 80, type: 'Hackathon' },
];
const Events = () => { usePageTitle('Events');
  return (<div className="min-h-screen bg-gray-50 pt-24 pb-16"><div className="container mx-auto px-4 max-w-4xl">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h1>
    <div className="space-y-4">{upcomingEvents.map(e => (
      <div key={e.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start gap-4"><div className="w-16 h-16 bg-blue-100 rounded-xl flex flex-col items-center justify-center"><FaCalendarAlt className="text-blue-600" /><span className="text-xs text-blue-600 font-bold mt-1">{e.date.split(',')[0]}</span></div>
          <div className="flex-1"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">{e.type}</span><h3 className="text-lg font-bold text-gray-900 mt-1">{e.title}</h3>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500"><span className="flex items-center gap-1"><FaClock />{e.time}</span><span className="flex items-center gap-1"><FaMapMarkerAlt />{e.location}</span><span className="flex items-center gap-1"><FaUsers />{e.attendees} attending</span></div>
          </div><button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 text-sm">Register</button>
        </div></div>
    ))}</div>
  </div></div>);
};
export default Events;
