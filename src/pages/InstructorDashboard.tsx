import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  FaCalendar, FaCheckCircle, FaStar, FaDollarSign, 
  FaBook, FaChartLine, FaVideo, FaPlus, FaBell, FaUserGraduate
} from 'react-icons/fa';

const InstructorDashboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'sessions' | 'courses' | 'earnings' | 'analytics'>('overview');

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const stats = [
    { icon: FaUserGraduate, label: 'Active Students', value: '48', color: 'from-blue-500 to-blue-600', trend: '+12%' },
    { icon: FaCalendar, label: 'Sessions This Month', value: '24', color: 'from-green-500 to-green-600', trend: '+8%' },
    { icon: FaBook, label: 'Total Courses', value: '12', color: 'from-purple-500 to-purple-600', trend: '+2' },
    { icon: FaStar, label: 'Average Rating', value: '4.9/5', color: 'from-yellow-500 to-yellow-600', trend: '+0.2' },
    { icon: FaDollarSign, label: 'Monthly Earnings', value: '$2,450', color: 'from-red-500 to-red-600', trend: '+15%' },
    { icon: FaCheckCircle, label: 'Completed Sessions', value: '156', color: 'from-indigo-500 to-indigo-600', trend: '+23' },
  ];

  const upcomingSessions = [
    { id: 1, student: 'John Anderson', topic: 'Advanced React Patterns', time: '2:00 PM', date: 'Today', duration: '1 hour', status: 'confirmed' },
    { id: 2, student: 'Emma Wilson', topic: 'System Design Interview', time: '4:30 PM', date: 'Today', duration: '1.5 hours', status: 'confirmed' },
    { id: 3, student: 'Michael Chen', topic: 'Career Development', time: '10:00 AM', date: 'Tomorrow', duration: '1 hour', status: 'pending' },
  ];

  const recentActivities = [
    { text: 'Completed session with John Anderson', time: '2 hours ago', icon: FaVideo },
    { text: 'New 5-star review from Emma Wilson', time: '4 hours ago', icon: FaStar },
    { text: '3 new students enrolled in React course', time: '1 day ago', icon: FaUserGraduate },
    { text: 'Payment of $450 received', time: '2 days ago', icon: FaDollarSign },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 py-8">
      <div className="container mx-auto px-4">
        
        {/* 🎓 MENTOR DASHBOARD HEADER - COMPLETELY DIFFERENT FROM STUDENT */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-[#06BBCC] rounded-3xl shadow-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">🎓 Professional Mentor Dashboard</h1>
                <p className="text-blue-100 text-lg md:text-xl">Welcome back, Mentor! Your students are waiting.</p>
                <p className="text-white/90 mt-2">Empower students • Share knowledge • Make impact</p>
              </div>
              <button
                onClick={() => navigate('/create-course')}
                className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <FaPlus /> Create Course
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-gradient-to-br ${stat.color} p-4 rounded-xl text-white shadow-lg`}>
                  <stat.icon className="text-2xl" />
                </div>
                <span className="text-green-500 text-sm font-bold">{stat.trend}</span>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'overview', label: 'Overview', icon: FaChartLine },
              { id: 'students', label: 'Students', icon: FaUserGraduate },
              { id: 'sessions', label: 'Sessions', icon: FaVideo },
              { id: 'courses', label: 'Courses', icon: FaBook },
              { id: 'earnings', label: 'Earnings', icon: FaDollarSign },
              { id: 'analytics', label: 'Analytics', icon: FaChartLine },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#06BBCC] to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Upcoming Sessions */}
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaCalendar className="text-[#06BBCC]" />
                    Upcoming Sessions
                  </h3>
                  <button className="text-[#06BBCC] hover:text-[#05a3b3] font-semibold">View All</button>
                </div>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="border-l-4 border-[#06BBCC] bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-gray-800">{session.topic}</h4>
                          <p className="text-sm text-gray-600">with {session.student}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          session.status === 'confirmed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {session.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>📅 {session.date}</span>
                        <span>🕐 {session.time}</span>
                        <span>⏱️ {session.duration}</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-[#06BBCC] text-white px-4 py-2 rounded-lg hover:bg-[#05a3b3] transition-colors font-semibold">
                          Start Session
                        </button>
                        <button className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-[#06BBCC] transition-colors">
                          Reschedule
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activities */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FaBell className="text-[#06BBCC]" />
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                      <div className="bg-gradient-to-br from-[#06BBCC] to-blue-600 p-2 rounded-lg text-white">
                        <activity.icon />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">{activity.text}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other Tabs - Placeholder */}
          {activeTab === 'students' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Students Management</h2>
              <p className="text-gray-600">Detailed student management features coming soon...</p>
            </div>
          )}
          
          {activeTab === 'sessions' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Sessions Management</h2>
              <p className="text-gray-600">Schedule and manage your mentoring sessions here...</p>
            </div>
          )}
          
          {activeTab === 'courses' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Courses Management</h2>
              <p className="text-gray-600">Manage your courses, content, and curriculum here...</p>
            </div>
          )}
          
          {activeTab === 'earnings' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Earnings & Payments</h2>
              <p className="text-gray-600">Track your earnings and payment history here...</p>
            </div>
          )}
          
          {activeTab === 'analytics' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Analytics & Reports</h2>
              <p className="text-gray-600">View detailed analytics and performance reports here...</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
