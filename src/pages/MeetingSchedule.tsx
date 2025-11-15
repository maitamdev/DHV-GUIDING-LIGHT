import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaVideo, FaCalendarAlt, FaClock, FaUsers, FaLink, FaPlus, FaTimes, FaBell, FaChevronLeft, FaChevronRight, FaList, FaCalendarDay } from 'react-icons/fa';

interface Meeting {
  id: number;
  title: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  meetLink: string;
  participants: number;
  status: 'upcoming' | 'live' | 'ended';
}

const MeetingSchedule = () => {
  const [userRole] = useState<'student' | 'instructor'>('student');
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('calendar');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [showReminder, setShowReminder] = useState(false);
  const [reminderMeeting, setReminderMeeting] = useState<Meeting | null>(null);
  
  const [meetings, setMeetings] = useState<Meeting[]>([
    {
      id: 1,
      title: 'JavaScript Advanced - Q&A Session',
      instructor: 'Nguyễn Văn A',
      date: new Date().toISOString().split('T')[0], // Today
      time: new Date(Date.now() + 15 * 60000).toTimeString().slice(0, 5), // 15 minutes from now
      duration: '60 minutes',
      meetLink: 'https://meet.google.com/abc-defg-hij',
      participants: 45,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'React Hooks Deep Dive',
      instructor: 'Trần Thị B',
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
      time: '10:00',
      duration: '90 minutes',
      meetLink: 'https://meet.google.com/xyz-abcd-123',
      participants: 32,
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Node.js Performance Optimization',
      instructor: 'Lê Văn C',
      date: new Date(Date.now() + 172800000).toISOString().split('T')[0], // In 2 days
      time: '15:30',
      duration: '75 minutes',
      meetLink: 'https://meet.google.com/def-ghi-456',
      participants: 28,
      status: 'upcoming'
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newMeeting, setNewMeeting] = useState({
    title: '',
    date: '',
    time: '',
    duration: '60',
    meetLink: ''
  });

  // Check for upcoming meetings and show reminders
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      meetings.forEach((meeting) => {
        const meetingDateTime = new Date(`${meeting.date}T${meeting.time}`);
        const timeDiff = meetingDateTime.getTime() - now.getTime();
        const minutesUntil = Math.floor(timeDiff / 60000);
        
        // Show reminder 15 minutes before meeting
        if (minutesUntil === 15 && meeting.status === 'upcoming') {
          setReminderMeeting(meeting);
          setShowReminder(true);
          
          // Request browser notification permission
          if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Upcoming Meeting!', {
              body: `${meeting.title} starts in 15 minutes`,
              icon: '/img/logo.png',
              badge: '/img/logo.png'
            });
          }
        }
      });
    };

    // Check every minute
    const interval = setInterval(checkReminders, 60000);
    checkReminders(); // Check immediately

    // Request notification permission on mount
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }

    return () => clearInterval(interval);
  }, [meetings]);

  // Calendar helper functions
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const getMeetingsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return meetings.filter(m => m.date === dateStr);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }

      return newDate;
    });
  };

  const handleCreateMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    const meeting: Meeting = {
      id: meetings.length + 1,
      title: newMeeting.title,
      instructor: 'Current User',
      date: newMeeting.date,
      time: newMeeting.time,
      duration: newMeeting.duration + ' minutes',
      meetLink: newMeeting.meetLink,
      participants: 0,
      status: 'upcoming'
    };
    setMeetings([...meetings, meeting]);
    setShowCreateModal(false);
    setNewMeeting({ title: '', date: '', time: '', duration: '60', meetLink: '' });
  };

  const handleJoinMeeting = (meetLink: string) => {
    window.open(meetLink, '_blank');
  };

  return (
    <>
      {/* Meeting Reminder Popup */}
      <AnimatePresence>
        {showReminder && reminderMeeting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-8 right-8 z-50 bg-white rounded-2xl shadow-2xl p-6 max-w-md border-2 border-[#1BC6D5]"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                <FaBell className="text-white text-xl" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-gray-800 mb-1">Meeting Starting Soon!</h4>
                <p className="text-gray-600 text-sm mb-2">{reminderMeeting.title}</p>
                <p className="text-sm text-gray-500 mb-4">
                  <FaClock className="inline mr-1" />
                  Starts in 15 minutes at {reminderMeeting.time}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      handleJoinMeeting(reminderMeeting.meetLink);
                      setShowReminder(false);
                    }}
                    className="flex-1 py-2 bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] text-white rounded-lg font-bold hover:shadow-lg transition-all"
                  >
                    Join Now
                  </button>
                  <button
                    onClick={() => setShowReminder(false)}
                    className="px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-all"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
              <button
                onClick={() => setShowReminder(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full bg-gradient-to-r from-[#27E0A7] via-[#1BC6D5] to-[#06BBCC] py-20 mb-12">
        <div className="container mx-auto px-4 py-12">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl text-white font-bold text-center mb-4"
          >
            Meeting Schedule & Calendar
          </motion.h1>
          <p className="text-center text-white/90 text-xl">
            Manage your online classes and sessions
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-gray-800">
              {viewMode === 'calendar' ? 'Calendar View' : 'Upcoming Classes'}
            </h2>
            {/* View Toggle */}
            <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('calendar')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'calendar'
                    ? 'bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                <FaCalendarDay /> Calendar
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'list'
                    ? 'bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                <FaList /> List
              </button>
            </div>
          </div>
          {userRole === 'instructor' && (
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-6 py-3 bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] text-white rounded-lg font-semibold hover:shadow-xl transition-all flex items-center gap-2"
            >
              <FaPlus />
              Create New Session
            </button>
          )}
        </div>

        {/* Calendar View */}
        {viewMode === 'calendar' && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FaChevronLeft className="text-xl text-gray-600" />
              </button>
              <h3 className="text-2xl font-bold text-gray-800">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h3>
              <button
                onClick={() => navigateMonth('next')}
                className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FaChevronRight className="text-xl text-gray-600" />
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {/* Day headers */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center font-bold text-gray-600 py-3">
                  {day}
                </div>
              ))}

              {/* Calendar days */}
              {(() => {
                const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentDate);
                const days = [];
                
                // Empty cells for days before month starts
                for (let i = 0; i < startingDayOfWeek; i++) {
                  days.push(
                    <div key={`empty-${i}`} className="aspect-square p-2 bg-gray-50 rounded-lg"></div>
                  );
                }

                // Days of the month
                for (let day = 1; day <= daysInMonth; day++) {
                  const date = new Date(year, month, day);
                  const dayMeetings = getMeetingsForDate(date);
                  const isToday = 
                    date.toISOString().split('T')[0] === new Date().toISOString().split('T')[0];

                  days.push(
                    <motion.div
                      key={day}
                      whileHover={{ scale: 1.05 }}
                      className={`aspect-square p-2 rounded-lg border-2 cursor-pointer transition-all ${
                        isToday
                          ? 'border-[#1BC6D5] bg-[#1BC6D5]/10'
                          : 'border-gray-200 hover:border-[#1BC6D5]/50'
                      }`}
                      onClick={() => {
                        if (dayMeetings.length > 0) {
                          setSelectedMeeting(dayMeetings[0]);
                        }
                      }}
                    >
                      <div className="flex flex-col h-full">
                        <span className={`text-sm font-bold mb-1 ${isToday ? 'text-[#1BC6D5]' : 'text-gray-700'}`}>
                          {day}
                        </span>
                        {dayMeetings.length > 0 && (
                          <div className="flex-1 space-y-1 overflow-y-auto">
                            {dayMeetings.slice(0, 2).map((meeting) => (
                              <div
                                key={meeting.id}
                                className="bg-gradient-to-r from-[#27E0A7]/80 to-[#1BC6D5]/80 text-white text-xs p-1 rounded truncate"
                                title={meeting.title}
                              >
                                {meeting.time}
                              </div>
                            ))}
                            {dayMeetings.length > 2 && (
                              <div className="text-xs text-gray-500 font-medium">
                                +{dayMeetings.length - 2} more
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                }

                return days;
              })()}
            </div>
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-4 bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5]">
                <FaVideo className="text-white text-xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{meeting.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span className="text-sm">{meeting.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2" />
                    <span className="text-sm">{meeting.time} - {meeting.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaUsers className="mr-2" />
                    <span className="text-sm">{meeting.participants} people</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded p-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <FaLink className="text-[#06BBCC]" />
                    <a href={meeting.meetLink} target="_blank" rel="noopener noreferrer" className="text-[#06BBCC] hover:underline truncate">
                      {meeting.meetLink}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleJoinMeeting(meeting.meetLink)}
                  className="w-full py-3 bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] hover:shadow-xl text-white rounded-lg font-semibold transition-all"
                >
                  {meeting.status === 'live' ? 'Join Now' : 'Join'}
                </button>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>

      {/* Meeting Details Modal */}
      <AnimatePresence>
        {selectedMeeting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMeeting(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] p-6 text-white">
                <button
                  onClick={() => setSelectedMeeting(null)}
                  className="float-right text-white/80 hover:text-white"
                >
                  <FaTimes className="text-xl" />
                </button>
                <h3 className="text-2xl font-bold mb-2">{selectedMeeting.title}</h3>
                <p className="text-white/90">with {selectedMeeting.instructor}</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <FaCalendarAlt className="text-[#1BC6D5]" />
                  <span>{new Date(selectedMeeting.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaClock className="text-[#1BC6D5]" />
                  <span>{selectedMeeting.time} - {selectedMeeting.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaUsers className="text-[#1BC6D5]" />
                  <span>{selectedMeeting.participants} participants</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <FaLink className="text-[#1BC6D5]" />
                    <a
                      href={selectedMeeting.meetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1BC6D5] hover:underline truncate flex-1"
                    >
                      {selectedMeeting.meetLink}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleJoinMeeting(selectedMeeting.meetLink)}
                  className="w-full py-3 bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Join Meeting
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Create New Session</h3>
              <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-gray-600">
                <FaTimes size={24} />
              </button>
            </div>
            <form onSubmit={handleCreateMeeting} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Title</label>
                <input type="text" value={newMeeting.title} onChange={(e) => setNewMeeting({...newMeeting, title: e.target.value})} className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#1BC6D5] focus:outline-none" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Date</label>
                  <input type="date" value={newMeeting.date} onChange={(e) => setNewMeeting({...newMeeting, date: e.target.value})} className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#1BC6D5] focus:outline-none" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Time</label>
                  <input type="time" value={newMeeting.time} onChange={(e) => setNewMeeting({...newMeeting, time: e.target.value})} className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#1BC6D5] focus:outline-none" required />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Link Meeting</label>
                <input type="url" value={newMeeting.meetLink} onChange={(e) => setNewMeeting({...newMeeting, meetLink: e.target.value})} className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#1BC6D5] focus:outline-none" placeholder="https://meet.google.com/abc-defg-hij" required />
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowCreateModal(false)} className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="flex-1 px-4 py-3 bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] text-white rounded-lg font-semibold hover:shadow-xl transition-all">
                  Create Session
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MeetingSchedule;
