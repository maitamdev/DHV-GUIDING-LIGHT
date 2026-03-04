import { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { FaBell, FaCheck, FaTrash } from 'react-icons/fa';
const mockNotifications = [
  { id: 1, title: 'New course available', message: 'React Advanced Patterns course is now live!', type: 'info' as const, isRead: false, time: '2 hours ago' },
  { id: 2, title: 'Assignment due', message: 'Your JavaScript project is due in 2 days', type: 'warning' as const, isRead: false, time: '5 hours ago' },
  { id: 3, title: 'Meeting scheduled', message: 'Meeting with mentor Nguyen Van Minh tomorrow at 7 PM', type: 'success' as const, isRead: true, time: '1 day ago' },
  { id: 4, title: 'Certificate earned', message: 'Congratulations! You earned the Web Development certificate', type: 'success' as const, isRead: true, time: '3 days ago' },
];
const Notifications = () => { usePageTitle('Notifications');
  const [notifications, setNotifications] = useState(mockNotifications);
  const markAllRead = () => setNotifications(n => n.map(x => ({ ...x, isRead: true })));
  const unread = notifications.filter(n => !n.isRead).length;
  return (<div className="min-h-screen bg-gray-50 pt-24 pb-16"><div className="container mx-auto px-4 max-w-3xl">
    <div className="flex items-center justify-between mb-8"><h1 className="text-3xl font-bold text-gray-900">Notifications {unread > 0 && <span className="text-sm bg-red-500 text-white px-2 py-1 rounded-full ml-2">{unread}</span>}</h1>
      <button onClick={markAllRead} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"><FaCheck /> Mark all read</button></div>
    <div className="space-y-3">{notifications.map(n => (
      <div key={n.id} className={`bg-white rounded-xl p-4 shadow-sm border-l-4 ${n.isRead ? 'border-gray-200 opacity-70' : n.type === 'warning' ? 'border-yellow-500' : n.type === 'success' ? 'border-green-500' : 'border-blue-500'}`}>
        <div className="flex items-start justify-between"><div><h3 className="font-semibold text-gray-900">{n.title}</h3><p className="text-gray-600 text-sm mt-1">{n.message}</p><p className="text-gray-400 text-xs mt-2">{n.time}</p></div>
          <button className="text-gray-400 hover:text-red-500"><FaTrash /></button></div>
      </div>
    ))}</div>
    {notifications.length === 0 && <div className="text-center py-16"><FaBell className="text-5xl text-gray-300 mx-auto mb-4" /><p className="text-gray-500">No notifications</p></div>}
  </div></div>);
};
export default Notifications;
