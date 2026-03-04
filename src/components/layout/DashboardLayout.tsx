import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaBriefcase, FaVideo, FaClipboard, FaAward, FaBookmark, FaChartBar, FaCog } from 'react-icons/fa';
const menuItems = [
  { icon: FaHome, label: 'Dashboard', path: '/student-dashboard' }, { icon: FaBook, label: 'My Courses', path: '/courses' },
  { icon: FaBriefcase, label: 'Portfolio', path: '/portfolio' }, { icon: FaVideo, label: 'Meetings', path: '/meeting' },
  { icon: FaClipboard, label: 'Homework', path: '/homework' }, { icon: FaAward, label: 'Certificates', path: '/certificates' },
  { icon: FaBookmark, label: 'Bookmarks', path: '/bookmarks' }, { icon: FaChartBar, label: 'Analytics', path: '/analytics' },
  { icon: FaCog, label: 'Settings', path: '/settings' },
];
interface Props { children: React.ReactNode; title?: string; }
const DashboardLayout: React.FC<Props> = ({ children, title }) => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="flex"><aside className="hidden lg:block w-64 bg-white border-r border-gray-200 min-h-screen p-4 sticky top-16">
        <nav className="space-y-1">{menuItems.map(item => (
          <Link key={item.path} to={item.path} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${location.pathname === item.path ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>
            <item.icon className="text-lg" />{item.label}</Link>
        ))}</nav></aside>
        <main className="flex-1 p-6 lg:p-8">{title && <h1 className="text-2xl font-bold text-gray-900 mb-6">{title}</h1>}{children}</main>
      </div>
    </div>
  );
};
export default DashboardLayout;
