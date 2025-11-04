import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaCalendar, FaCheckCircle, FaStar, FaDollarSign, FaBook, FaTasks, FaBell, FaPlus, FaVideo, FaLink, FaEdit, FaSave, FaTimes, FaChartLine, FaComments, FaCertificate, FaGraduationCap } from 'react-icons/fa';

const InstructorDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'mentees' | 'schedule' | 'courses' | 'tasks' | 'analytics' | 'meetings'>('overview');
  const [showMeetingLinkModal, setShowMeetingLinkModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState<any>(null);
  const [meetingLink, setMeetingLink] = useState('');

  const stats = [
    { icon: FaUsers, label: 'Tổng Mentees', value: '24', color: 'bg-blue-500' },
    { icon: FaCalendar, label: 'Buổi Đang Hoạt Động', value: '8', color: 'bg-green-500' },
    { icon: FaCheckCircle, label: 'Đã Hoàn Thành', value: '156', color: 'bg-purple-500' },
    { icon: FaStar, label: 'Đánh Giá', value: '4.8/5', color: 'bg-yellow-500' },
    { icon: FaDollarSign, label: 'Thu Nhập Tháng Này', value: '45M VND', color: 'bg-red-500' },
  ];

  const mentees = [
    { id: 1, name: 'Nguyễn Văn A', progress: 75, lastSession: '2 ngày trước', status: 'Đang học', email: 'nguyenvana@email.com', phone: '0901234567' },
    { id: 2, name: 'Trần Thị B', progress: 50, lastSession: '1 tuần trước', status: 'Đang học', email: 'tranthib@email.com', phone: '0912345678' },
    { id: 3, name: 'Lê Văn C', progress: 90, lastSession: 'Hôm nay', status: 'Sắp hoàn thành', email: 'levanc@email.com', phone: '0923456789' },
    { id: 4, name: 'Phạm Thị D', progress: 100, lastSession: '1 ngày trước', status: 'Hoàn thành', email: 'phamthid@email.com', phone: '0934567890' },
  ];

  const upcomingSessions = [
    { id: 1, mentee: 'Nguyễn Văn A', topic: 'React Hooks Advanced', time: '14:00 - 16:00', date: 'Hôm nay', meetingLink: 'https://meet.google.com/abc-defg-hij' },
    { id: 2, mentee: 'Trần Thị B', topic: 'TypeScript Best Practices', time: '10:00 - 12:00', date: 'Ngày mai', meetingLink: '' },
    { id: 3, mentee: 'Lê Văn C', topic: 'Career Mentoring', time: '15:00 - 16:30', date: 'Hôm nay', meetingLink: 'https://zoom.us/j/123456789' },
    { id: 4, mentee: 'Phạm Thị D', topic: 'Portfolio Review', time: '09:00 - 10:00', date: '2 ngày nữa', meetingLink: '' },
  ];

  const handleUpdateMeetingLink = (session: any) => {
    setSelectedSession(session);
    setMeetingLink(session.meetingLink || '');
    setShowMeetingLinkModal(true);
  };

  const handleSaveMeetingLink = () => {
    console.log('Saving meeting link:', meetingLink, 'for session:', selectedSession?.id);
    // TODO: Save to Firestore
    setShowMeetingLinkModal(false);
    alert('Link cuộc họp đã được cập nhật!');
  };

  const courses = [
    { id: 1, title: 'Web Development Bootcamp', students: 156, revenue: '15.6M VND', rating: 4.8 },
    { id: 2, title: 'React & TypeScript Mastery', students: 89, revenue: '8.9M VND', rating: 4.9 },
  ];

  const tasks = [
    { id: 1, title: 'Chuẩn bị tài liệu cho buổi học tiếp theo', priority: 'Cao', deadline: 'Hôm nay' },
    { id: 2, title: 'Chấm bài tập của 5 mentees', priority: 'Trung bình', deadline: 'Ngày mai' },
    { id: 3, title: 'Cập nhật nội dung khóa học', priority: 'Thấp', deadline: '3 ngày nữa' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-2">Dashboard Giảng Viên</h1>
            <p className="text-gray-600 text-lg">Chào mừng trở lại! Quản lý mentees và khóa học của bạn.</p>
          </div>
          <button
            onClick={() => navigate('/create-course')}
            className="flex items-center gap-2 px-6 py-3 bg-[#06BBCC] text-white font-bold rounded-lg hover:bg-[#0099AA] transition-colors shadow-lg"
          >
            <FaPlus /> Tạo Khóa Học Mới
          </button>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className={`${stat.color} p-4 rounded-lg text-white`}>
                  <stat.icon className="text-3xl" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="flex border-b-2 border-gray-200 overflow-x-auto">
            {[
              { id: 'overview', label: 'Tổng Quan', icon: FaBell },
              { id: 'mentees', label: 'Mentees', icon: FaUsers },
              { id: 'meetings', label: 'Cuộc Họp', icon: FaVideo },
              { id: 'schedule', label: 'Lịch Trình', icon: FaCalendar },
              { id: 'courses', label: 'Khóa Học', icon: FaBook },
              { id: 'analytics', label: 'Thống Kê', icon: FaChartLine },
              { id: 'tasks', label: 'Công Việc', icon: FaTasks },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-[#06BBCC] border-b-4 border-[#06BBCC]'
                    : 'text-gray-600 hover:text-[#06BBCC]'
                }`}
              >
                <tab.icon />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Upcoming Sessions */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaCalendar className="text-[#06BBCC]" />
                      Buổi Học Sắp Tới
                    </h3>
                    <div className="space-y-4">
                      {upcomingSessions.map((session) => (
                        <div key={session.id} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#06BBCC]">
                          <p className="font-bold text-gray-800">{session.mentee}</p>
                          <p className="text-gray-600">{session.topic}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-sm text-gray-500">{session.date} • {session.time}</span>
                            <button className="px-4 py-1 bg-[#06BBCC] text-white rounded-lg text-sm hover:bg-[#0099AA]">
                              Tham Gia
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notifications */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaBell className="text-[#06BBCC]" />
                      Thông Báo
                    </h3>
                    <div className="space-y-3">
                      {[
                        { text: 'Nguyễn Văn A đã nộp bài tập', time: '30 phút trước' },
                        { text: 'Trần Thị B đã đặt lịch buổi học mới', time: '2 giờ trước' },
                        { text: 'Bạn có 3 bài tập cần chấm', time: '1 ngày trước' },
                      ].map((notif, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                          <p className="text-gray-800">{notif.text}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Meetings Tab - NEW */}
            {activeTab === 'meetings' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaVideo className="text-[#06BBCC]" />
                  Quản Lý Cuộc Họp
                </h3>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-6 shadow-lg border-l-4 border-[#06BBCC] hover:shadow-2xl transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-gray-800 mb-2">{session.topic}</h4>
                          <div className="flex items-center gap-4 text-gray-600">
                            <span className="flex items-center gap-2">
                              <FaUsers /> {session.mentee}
                            </span>
                            <span className="flex items-center gap-2">
                              <FaCalendar /> {session.date} • {session.time}
                            </span>
                          </div>
                        </div>
                        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm">
                          {session.date === 'Hôm nay' ? '🔴 Live' : 'Sắp tới'}
                        </span>
                      </div>

                      {/* Meeting Link Section */}
                      <div className="bg-white rounded-lg p-4 mb-4 border-2 border-gray-200">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Link Cuộc Họp:
                        </label>
                        {session.meetingLink ? (
                          <div className="flex items-center gap-3">
                            <a
                              href={session.meetingLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-mono text-sm hover:bg-blue-100 transition-colors flex items-center gap-2"
                            >
                              <FaLink /> {session.meetingLink}
                            </a>
                            <button
                              onClick={() => handleUpdateMeetingLink(session)}
                              className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                              title="Sửa link"
                            >
                              <FaEdit />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleUpdateMeetingLink(session)}
                            className="w-full px-4 py-3 bg-yellow-100 text-yellow-700 rounded-lg font-semibold hover:bg-yellow-200 transition-colors flex items-center justify-center gap-2"
                          >
                            <FaLink /> Thêm Link Cuộc Họp
                          </button>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 px-6 py-3 bg-[#06BBCC] text-white rounded-lg font-bold hover:bg-[#0099AA] transition-colors flex items-center justify-center gap-2">
                          <FaVideo /> Tham Gia Ngay
                        </button>
                        <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                          Gửi Nhắc Nhở
                        </button>
                        <button className="px-6 py-3 bg-red-100 text-red-600 rounded-lg font-semibold hover:bg-red-200 transition-colors">
                          Hủy
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mentees Tab - ENHANCED */}
            {activeTab === 'mentees' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaUsers className="text-[#06BBCC]" />
                  Danh Sách Mentees
                </h3>
                <div className="space-y-4">
                  {mentees.map((mentee) => (
                    <div key={mentee.id} className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-6 hover:shadow-2xl transition-all border-l-4 border-[#06BBCC]">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-800 mb-2">{mentee.name}</h4>
                          <div className="space-y-1 text-gray-600">
                            <p className="flex items-center gap-2">
                              📧 {mentee.email}
                            </p>
                            <p className="flex items-center gap-2">
                              📱 {mentee.phone}
                            </p>
                            <p className="text-sm">Buổi học cuối: {mentee.lastSession}</p>
                          </div>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          mentee.status === 'Hoàn thành' ? 'bg-green-100 text-green-700' :
                          mentee.status === 'Sắp hoàn thành' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {mentee.status}
                        </span>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Tiến độ học tập</span>
                          <span className="font-semibold text-gray-800">{mentee.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${mentee.progress}%` }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className={`h-4 rounded-full ${
                              mentee.progress === 100 ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                              mentee.progress >= 75 ? 'bg-gradient-to-r from-blue-500 to-cyan-600' :
                              'bg-gradient-to-r from-yellow-500 to-orange-600'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {mentee.progress === 100 ? (
                          <button className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all flex items-center justify-center gap-2">
                            <FaCertificate /> Cấp Chứng Chỉ
                          </button>
                        ) : (
                          <button className="flex-1 px-4 py-3 bg-[#06BBCC] text-white rounded-lg font-bold hover:bg-[#0099AA] transition-colors flex items-center justify-center gap-2">
                            <FaEdit /> Cập Nhật Tiến Độ
                          </button>
                        )}
                        <button className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center gap-2">
                          <FaComments /> Nhắn Tin
                        </button>
                        <button className="px-4 py-3 bg-blue-100 text-blue-600 rounded-lg font-semibold hover:bg-blue-200 transition-colors">
                          Xem Chi Tiết
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Schedule Tab */}
            {activeTab === 'schedule' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Lịch Trình Dạy Học</h3>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="bg-gradient-to-r from-[#06BBCC] to-[#0099AA] text-white rounded-lg p-6 shadow-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">{session.topic}</h4>
                          <p className="text-lg">Mentee: {session.mentee}</p>
                          <p className="mt-2">{session.date} • {session.time}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-white text-[#06BBCC] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Tham Gia
                          </button>
                          <button className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors">
                            Hủy
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Khóa Học Của Bạn</h3>
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">{course.title}</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-gray-600 text-sm">Học Viên</p>
                          <p className="text-2xl font-bold text-[#06BBCC]">{course.students}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Doanh Thu</p>
                          <p className="text-2xl font-bold text-green-600">{course.revenue}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Đánh Giá</p>
                          <p className="text-2xl font-bold text-yellow-600 flex items-center gap-1">
                            <FaStar /> {course.rating}
                          </p>
                        </div>
                      </div>
                      <button className="mt-4 px-4 py-2 bg-[#06BBCC] text-white rounded-lg hover:bg-[#0099AA] transition-colors">
                        Xem Chi Tiết
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab - NEW */}
            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaChartLine className="text-[#06BBCC]" />
                  Thống Kê & Phân Tích
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Revenue Chart */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaDollarSign className="text-green-600" />
                      Doanh Thu 6 Tháng Qua
                    </h4>
                    <div className="space-y-3">
                      {['Tháng 5: 6.5M', 'Tháng 6: 7.2M', 'Tháng 7: 8.1M', 'Tháng 8: 9.3M', 'Tháng 9: 10.8M', 'Tháng 10: 12.5M'].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-gray-700">{item.split(':')[0]}</span>
                          <div className="flex items-center gap-3 flex-1 ml-4">
                            <div className="flex-1 bg-white rounded-full h-3">
                              <div 
                                className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full"
                                style={{ width: `${50 + idx * 8}%` }}
                              />
                            </div>
                            <span className="font-bold text-green-700">{item.split(':')[1]}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Student Growth */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaGraduationCap className="text-blue-600" />
                      Tăng Trưởng Học Viên
                    </h4>
                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-5xl font-extrabold text-blue-600">+45%</p>
                        <p className="text-gray-600 mt-2">So với tháng trước</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 text-center">
                          <p className="text-3xl font-bold text-blue-600">156</p>
                          <p className="text-sm text-gray-600">Học viên hiện tại</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center">
                          <p className="text-3xl font-bold text-green-600">+32</p>
                          <p className="text-sm text-gray-600">Tháng này</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course Performance */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaBook className="text-purple-600" />
                      Hiệu Suất Khóa Học
                    </h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Web Development', rating: 4.9, students: 156 },
                        { name: 'React & TypeScript', rating: 4.8, students: 89 },
                        { name: 'Data Science', rating: 4.7, students: 67 },
                      ].map((course, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <p className="font-semibold text-gray-800">{course.name}</p>
                            <div className="flex items-center gap-1">
                              <FaStar className="text-yellow-500" />
                              <span className="font-bold text-gray-800">{course.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">{course.students} học viên</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mentee Feedback */}
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaComments className="text-orange-600" />
                      Phản Hồi Gần Đây
                    </h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Nguyễn Văn A', comment: 'Giảng viên nhiệt tình, giảng dạy dễ hiểu!', rating: 5 },
                        { name: 'Trần Thị B', comment: 'Nội dung chất lượng, rất hữu ích cho công việc.', rating: 5 },
                        { name: 'Lê Văn C', comment: 'Mentor tận tâm, luôn hỗ trợ khi cần.', rating: 4 },
                      ].map((feedback, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <p className="font-semibold text-gray-800">{feedback.name}</p>
                            <div className="flex gap-1">
                              {[...Array(feedback.rating)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-500 text-sm" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 italic">"{feedback.comment}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tasks Tab */}
            {activeTab === 'tasks' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Công Việc Cần Làm</h3>
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div key={task.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-4">
                        <input type="checkbox" className="w-5 h-5 accent-[#06BBCC]" />
                        <div>
                          <p className="font-semibold text-gray-800">{task.title}</p>
                          <p className="text-sm text-gray-600">Deadline: {task.deadline}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        task.priority === 'Cao' ? 'bg-red-100 text-red-700' :
                        task.priority === 'Trung bình' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Meeting Link Modal */}
        {showMeetingLinkModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                  <FaLink className="text-[#06BBCC]" />
                  Cập Nhật Link Cuộc Họp
                </h3>
                <button
                  onClick={() => setShowMeetingLinkModal(false)}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Chủ đề:</span> {selectedSession?.topic}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Mentee:</span> {selectedSession?.mentee}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Thời gian:</span> {selectedSession?.date} • {selectedSession?.time}
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3 text-lg">
                  Nhập Link Cuộc Họp:
                </label>
                <input
                  type="url"
                  value={meetingLink}
                  onChange={(e) => setMeetingLink(e.target.value)}
                  placeholder="https://meet.google.com/... hoặc https://zoom.us/j/..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-lg"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Hỗ trợ: Google Meet, Zoom, Microsoft Teams, hoặc bất kỳ link nào khác
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSaveMeetingLink}
                  className="flex-1 px-6 py-4 bg-[#06BBCC] text-white rounded-lg font-bold text-lg hover:bg-[#0099AA] transition-colors flex items-center justify-center gap-2"
                >
                  <FaSave /> Lưu Link
                </button>
                <button
                  onClick={() => setShowMeetingLinkModal(false)}
                  className="px-6 py-4 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Hủy
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorDashboard;
