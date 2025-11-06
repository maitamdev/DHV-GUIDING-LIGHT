import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaClock, FaCheckCircle, FaExclamationTriangle, FaBook, FaCalendarAlt, FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

interface Homework {
  id: number;
  courseName: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'completed' | 'overdue';
  estimatedTime: string;
}

const HomeworkReminder = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [activeFilter, setActiveFilter] = useState<'all' | 'pending' | 'completed' | 'overdue'>('all');
  
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  // Mock homework data - In production, fetch from Firestore
  const [homeworks, setHomeworks] = useState<Homework[]>([
    {
      id: 1,
      courseName: 'Web Development Full Stack',
      title: 'Build E-commerce Shopping Cart',
      description: 'Create a functional shopping cart with add/remove items, quantity adjustment, and total calculation.',
      dueDate: '2024-11-10',
      priority: 'high',
      status: 'pending',
      estimatedTime: '4 hours'
    },
    {
      id: 2,
      courseName: 'React & Node.js Bootcamp',
      title: 'REST API Integration',
      description: 'Integrate REST API with React frontend and handle authentication.',
      dueDate: '2024-11-08',
      priority: 'high',
      status: 'overdue',
      estimatedTime: '3 hours'
    },
    {
      id: 3,
      courseName: 'Data Science & Analytics',
      title: 'Data Visualization Project',
      description: 'Create interactive visualizations using Matplotlib and Seaborn.',
      dueDate: '2024-11-12',
      priority: 'medium',
      status: 'pending',
      estimatedTime: '5 hours'
    },
    {
      id: 4,
      courseName: 'Mobile App Development',
      title: 'Weather App UI Design',
      description: 'Design and implement weather app UI with React Native.',
      dueDate: '2024-11-15',
      priority: 'medium',
      status: 'pending',
      estimatedTime: '6 hours'
    },
    {
      id: 5,
      courseName: 'Web Development Full Stack',
      title: 'Database Schema Design',
      description: 'Design MongoDB schema for blog application.',
      dueDate: '2024-11-05',
      priority: 'low',
      status: 'completed',
      estimatedTime: '2 hours'
    },
    {
      id: 6,
      courseName: 'UI/UX Design Masterclass',
      title: 'Wireframe Portfolio Website',
      description: 'Create wireframes for personal portfolio using Figma.',
      dueDate: '2024-11-18',
      priority: 'low',
      status: 'pending',
      estimatedTime: '3 hours'
    }
  ]);

  const filteredHomeworks = homeworks.filter(hw => {
    if (activeFilter === 'all') return true;
    return hw.status === activeFilter;
  });

  const stats = {
    total: homeworks.length,
    pending: homeworks.filter(hw => hw.status === 'pending').length,
    completed: homeworks.filter(hw => hw.status === 'completed').length,
    overdue: homeworks.filter(hw => hw.status === 'overdue').length
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'from-red-500 to-red-600';
      case 'medium': return 'from-yellow-500 to-yellow-600';
      case 'low': return 'from-green-500 to-green-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'overdue': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleMarkComplete = (id: number) => {
    setHomeworks(homeworks.map(hw => 
      hw.id === id ? { ...hw, status: 'completed' as const } : hw
    ));
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this homework?')) {
      setHomeworks(homeworks.filter(hw => hw.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="bg-gradient-to-r from-[#06BBCC] via-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center gap-3">
                  <FaBell className="animate-pulse" /> Homework & Assignment Tracker
                </h1>
                <p className="text-white/90 text-lg">Stay organized and never miss a deadline!</p>
              </div>
              <button
                onClick={() => alert('Add homework feature coming soon!')}
                className="flex items-center gap-2 px-6 py-3 bg-white text-[#06BBCC] font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <FaPlus /> Add Homework
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total', value: stats.total, icon: FaBook, color: 'from-blue-500 to-blue-600', filter: 'all' },
            { label: 'Pending', value: stats.pending, icon: FaClock, color: 'from-yellow-500 to-yellow-600', filter: 'pending' },
            { label: 'Completed', value: stats.completed, icon: FaCheckCircle, color: 'from-green-500 to-green-600', filter: 'completed' },
            { label: 'Overdue', value: stats.overdue, icon: FaExclamationTriangle, color: 'from-red-500 to-red-600', filter: 'overdue' }
          ].map((stat, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveFilter(stat.filter as any)}
              className={`bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all transform hover:scale-105 ${activeFilter === stat.filter ? 'ring-4 ring-[#06BBCC]' : ''}`}
            >
              <div className={`bg-gradient-to-br ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className="text-white text-xl" />
              </div>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.button>
          ))}
        </div>

        {/* Homework List */}
        <div className="space-y-4">
          {filteredHomeworks.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Homework Found</h3>
              <p className="text-gray-600">
                {activeFilter === 'all' ? 'You have no homework yet!' : `No ${activeFilter} homework.`}
              </p>
            </div>
          ) : (
            filteredHomeworks.map((homework, index) => {
              const daysUntilDue = getDaysUntilDue(homework.dueDate);
              
              return (
                <motion.div
                  key={homework.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Priority Indicator */}
                    <div className={`bg-gradient-to-br ${getPriorityColor(homework.priority)} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-sm uppercase">{homework.priority}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <span className="text-sm text-[#06BBCC] font-semibold">{homework.courseName}</span>
                          <h3 className="text-xl font-bold text-gray-800">{homework.title}</h3>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(homework.status)}`}>
                          {homework.status.toUpperCase()}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{homework.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-[#06BBCC]" />
                          <span>Due: {new Date(homework.dueDate).toLocaleDateString()}</span>
                          {homework.status !== 'completed' && (
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                              daysUntilDue < 0 ? 'bg-red-100 text-red-600' : 
                              daysUntilDue <= 2 ? 'bg-yellow-100 text-yellow-600' : 
                              'bg-green-100 text-green-600'
                            }`}>
                              {daysUntilDue < 0 ? `${Math.abs(daysUntilDue)} days overdue` : 
                               daysUntilDue === 0 ? 'Due today!' : 
                               `${daysUntilDue} days left`}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaClock className="text-[#06BBCC]" />
                          <span>Est. {homework.estimatedTime}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-2">
                        {homework.status !== 'completed' && (
                          <button
                            onClick={() => handleMarkComplete(homework.id)}
                            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
                          >
                            <FaCheckCircle /> Mark Complete
                          </button>
                        )}
                        <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#06BBCC] text-[#06BBCC] rounded-lg hover:bg-[#06BBCC] hover:text-white transition-colors">
                          <FaEdit /> Edit
                        </button>
                        <button
                          onClick={() => handleDelete(homework.id)}
                          className="flex items-center gap-2 px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                        >
                          <FaTrash /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Upcoming Deadlines Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaExclamationTriangle className="text-yellow-500" />
            Upcoming Deadlines (Next 7 Days)
          </h3>
          <div className="space-y-2">
            {homeworks
              .filter(hw => {
                const days = getDaysUntilDue(hw.dueDate);
                return days >= 0 && days <= 7 && hw.status !== 'completed';
              })
              .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
              .map((hw) => (
                <div key={hw.id} className="flex items-center justify-between p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
                  <div>
                    <span className="font-bold text-gray-800">{hw.title}</span>
                    <span className="text-sm text-gray-600 ml-2">({hw.courseName})</span>
                  </div>
                  <span className="text-sm font-semibold text-yellow-600">
                    {getDaysUntilDue(hw.dueDate) === 0 ? 'DUE TODAY!' : `${getDaysUntilDue(hw.dueDate)} days`}
                  </span>
                </div>
              ))}
            {homeworks.filter(hw => {
              const days = getDaysUntilDue(hw.dueDate);
              return days >= 0 && days <= 7 && hw.status !== 'completed';
            }).length === 0 && (
              <p className="text-gray-600 text-center py-4">No upcoming deadlines in the next 7 days. Great job!</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeworkReminder;
