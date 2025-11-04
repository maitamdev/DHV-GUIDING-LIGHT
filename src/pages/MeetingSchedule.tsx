import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaCalendarAlt, FaClock, FaUsers, FaLink, FaPlus, FaTimes } from 'react-icons/fa';

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
  const [meetings, setMeetings] = useState<Meeting[]>([
    {
      id: 1,
      title: 'JavaScript Advanced - Q&A Session',
      instructor: 'Nguy?n Van A',
      date: '2024-11-15',
      time: '14:00',
      duration: '60 ph�t',
      meetLink: 'https://meet.google.com/abc-defg-hij',
      participants: 45,
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

  const handleCreateMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    const meeting: Meeting = {
      id: meetings.length + 1,
      title: newMeeting.title,
      instructor: 'Current User',
      date: newMeeting.date,
      time: newMeeting.time,
      duration: newMeeting.duration + ' ph�t',
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
      <div className="w-full bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] py-20 mb-12">
        <div className="container mx-auto px-4 py-12">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl text-white font-bold text-center mb-4"
          >
            Phòng Học Trực Tuyến
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Lịch Học Sắp Tới</h2>
          {userRole === 'instructor' && (
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-6 py-3 bg-[#06BBCC] text-white rounded-lg font-semibold hover:bg-[#05a3b3] transition-colors flex items-center gap-2"
            >
              <FaPlus />
              Tạo Buổi Học Mới
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 bg-[#06BBCC]">
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
                    <span className="text-sm">{meeting.participants} ngu?i</span>
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
                  className="w-full py-3 bg-[#06BBCC] hover:bg-[#05a3b3] text-white rounded-lg font-semibold transition-colors"
                >
                  {meeting.status === 'live' ? 'Tham Gia Ngay' : 'Tham Gia'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">T?o bu?i h?c m?i</h3>
              <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-gray-600">
                <FaTimes size={24} />
              </button>
            </div>
            <form onSubmit={handleCreateMeeting} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Tiêu đề</label>
                <input type="text" value={newMeeting.title} onChange={(e) => setNewMeeting({...newMeeting, title: e.target.value})} className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Ng�y</label>
                  <input type="date" value={newMeeting.date} onChange={(e) => setNewMeeting({...newMeeting, date: e.target.value})} className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Gi?</label>
                  <input type="time" value={newMeeting.time} onChange={(e) => setNewMeeting({...newMeeting, time: e.target.value})} className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none" required />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Link Meeting</label>
                <input type="url" value={newMeeting.meetLink} onChange={(e) => setNewMeeting({...newMeeting, meetLink: e.target.value})} className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none" placeholder="https://meet.google.com/abc-defg-hij" required />
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowCreateModal(false)} className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  H?y
                </button>
                <button type="submit" className="flex-1 px-4 py-3 bg-[#06BBCC] text-white rounded-lg font-semibold hover:bg-[#05a3b3] transition-colors">
                  T?o bu?i h?c
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
