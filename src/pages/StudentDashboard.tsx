import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaCalendar, FaBook, FaSearch, FaStar, FaBell, FaEdit, FaSave, FaVideo, FaClock, FaCheckCircle, FaGraduationCap } from 'react-icons/fa';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'mentors' | 'schedule' | 'courses'>('profile');
  const [editMode, setEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [profileData, setProfileData] = useState({
    name: 'Nguyễn Văn A',
    email: 'student@email.com',
    phone: '0901234567',
    skills: 'React, TypeScript, Node.js',
    bio: 'Sinh viên năm 3 ngành CNTT, đam mê lập trình web',
    goals: 'Trở thành Full Stack Developer trong 6 tháng',
    projects: 'E-commerce website, Blog cá nhân'
  });

  // Danh sách Mentor
  const mentors = [
    {
      id: 1,
      name: 'Trần Văn Minh',
      avatar: '/img/team-1.jpg',
      title: 'Senior Full Stack Developer',
      company: 'FPT Software',
      skills: ['React', 'Node.js', 'AWS'],
      rating: 4.9,
      students: 45,
      experience: '8 năm',
      available: true,
      bio: 'Chuyên gia phát triển web với 8 năm kinh nghiệm. Đã hướng dẫn hơn 45 mentees thành công.'
    },
    {
      id: 2,
      name: 'Lê Thị Hương',
      avatar: '/img/team-2.jpg',
      title: 'UI/UX Design Lead',
      company: 'Viettel',
      skills: ['Figma', 'Adobe XD', 'Design Thinking'],
      rating: 4.8,
      students: 38,
      experience: '6 năm',
      available: true,
      bio: 'Chuyên gia thiết kế giao diện với nhiều dự án lớn. Tận tâm hướng dẫn mentees.'
    },
    {
      id: 3,
      name: 'Phạm Đức Anh',
      avatar: '/img/team-3.jpg',
      title: 'Data Scientist',
      company: 'VNG Corporation',
      skills: ['Python', 'Machine Learning', 'TensorFlow'],
      rating: 4.9,
      students: 32,
      experience: '7 năm',
      available: false,
      bio: 'Chuyên gia AI/ML với kinh nghiệm triển khai nhiều dự án thực tế.'
    },
    {
      id: 4,
      name: 'Ngô Thị Mai',
      avatar: '/img/team-1.jpg',
      title: 'Mobile Developer',
      company: 'Shopee Vietnam',
      skills: ['React Native', 'Flutter', 'iOS'],
      rating: 4.7,
      students: 28,
      experience: '5 năm',
      available: true,
      bio: 'Chuyên phát triển ứng dụng mobile đa nền tảng với hơn 20 app trên store.'
    }
  ];

  // Lịch hẹn với Mentor
  const schedules = [
    {
      id: 1,
      mentorName: 'Trần Văn Minh',
      topic: 'Review Source Code - E-commerce Project',
      date: 'Hôm nay',
      time: '14:00 - 15:30',
      status: 'upcoming',
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      reminder: true
    },
    {
      id: 2,
      mentorName: 'Lê Thị Hương',
      topic: 'UI/UX Portfolio Review',
      date: 'Ngày mai',
      time: '10:00 - 11:00',
      status: 'upcoming',
      meetingLink: 'https://zoom.us/j/123456789',
      reminder: true
    },
    {
      id: 3,
      mentorName: 'Trần Văn Minh',
      topic: 'Career Path Planning',
      date: '2 ngày trước',
      time: '15:00 - 16:00',
      status: 'completed',
      meetingLink: '',
      reminder: false
    }
  ];

  // Khóa học đã đăng ký
  const myCourses = [
    { id: 1, title: 'Web Development Bootcamp', progress: 75, instructor: 'Trần Văn Minh' },
    { id: 2, title: 'React & TypeScript', progress: 50, instructor: 'Lê Thị Hương' },
    { id: 3, title: 'Data Science Fundamentals', progress: 30, instructor: 'Phạm Đức Anh' }
  ];

  const handleSaveProfile = () => {
    setEditMode(false);
    alert('Cập nhật hồ sơ thành công! ✅');
  };

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-5xl font-extrabold text-gray-800 mb-2">Dashboard Mentee</h1>
          <p className="text-gray-600 text-lg">Chào mừng trở lại! Quản lý hồ sơ, tìm mentor và theo dõi tiến độ học tập.</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { icon: FaBook, label: 'Khóa Học Đã Đăng Ký', value: '3', color: 'bg-blue-500' },
            { icon: FaUser, label: 'Mentor Đang Theo Dõi', value: '2', color: 'bg-green-500' },
            { icon: FaCalendar, label: 'Buổi Hẹn Sắp Tới', value: '2', color: 'bg-purple-500' },
            { icon: FaCheckCircle, label: 'Buổi Đã Hoàn Thành', value: '8', color: 'bg-yellow-500' }
          ].map((stat, index) => (
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
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="flex border-b-2 border-gray-200 overflow-x-auto">
            {[
              { id: 'profile', label: 'Hồ Sơ Cá Nhân', icon: FaUser },
              { id: 'mentors', label: 'Tìm Mentor', icon: FaSearch },
              { id: 'schedule', label: 'Lịch Hẹn', icon: FaCalendar },
              { id: 'courses', label: 'Khóa Học Của Tôi', icon: FaBook }
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
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                    <FaUser className="text-[#06BBCC]" />
                    Hồ Sơ Cá Nhân - Portfolio
                  </h3>
                  {!editMode ? (
                    <button
                      onClick={() => setEditMode(true)}
                      className="flex items-center gap-2 px-6 py-3 bg-[#06BBCC] text-white font-bold rounded-lg hover:bg-[#0099AA] transition-colors"
                    >
                      <FaEdit /> Chỉnh Sửa
                    </button>
                  ) : (
                    <button
                      onClick={handleSaveProfile}
                      className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <FaSave /> Lưu Thay Đổi
                    </button>
                  )}
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Họ và Tên</label>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        disabled={!editMode}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        disabled={!editMode}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-100"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Số Điện Thoại</label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                        disabled={!editMode}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Kỹ Năng</label>
                      <input
                        type="text"
                        value={profileData.skills}
                        onChange={(e) => setProfileData({ ...profileData, skills: e.target.value })}
                        disabled={!editMode}
                        placeholder="VD: React, Node.js, Python..."
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Giới Thiệu Bản Thân</label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                      disabled={!editMode}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Mục Tiêu Nghề Nghiệp</label>
                    <textarea
                      value={profileData.goals}
                      onChange={(e) => setProfileData({ ...profileData, goals: e.target.value })}
                      disabled={!editMode}
                      rows={2}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Dự Án Đã Làm</label>
                    <textarea
                      value={profileData.projects}
                      onChange={(e) => setProfileData({ ...profileData, projects: e.target.value })}
                      disabled={!editMode}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-100"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Mentors Tab */}
            {activeTab === 'mentors' && (
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaSearch className="text-[#06BBCC]" />
                  Tìm & Chọn Mentor
                </h3>

                {/* Search Bar */}
                <div className="mb-8">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Tìm kiếm theo tên, kỹ năng, lĩnh vực..."
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-full focus:border-[#06BBCC] focus:outline-none text-lg pl-14"
                    />
                    <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2 ml-4">
                    <strong>Tìm kiếm – Kết nối nhanh:</strong> Lọc theo kỹ năng, kinh nghiệm hoặc lĩnh vực
                  </p>
                </div>

                {/* Mentor Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredMentors.map((mentor) => (
                    <motion.div
                      key={mentor.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#06BBCC]"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={mentor.avatar}
                          alt={mentor.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-[#06BBCC]"
                        />
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-800">{mentor.name}</h4>
                          <p className="text-[#06BBCC] font-semibold">{mentor.title}</p>
                          <p className="text-gray-600 text-sm">{mentor.company}</p>
                        </div>
                        {mentor.available ? (
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                            ✅ Có Lịch
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                            ⏰ Bận
                          </span>
                        )}
                      </div>

                      <p className="text-gray-600 mb-4 text-sm italic">"{mentor.bio}"</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {mentor.skills.map((skill, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-[#06BBCC] flex items-center justify-center gap-1">
                            <FaStar className="text-yellow-500" /> {mentor.rating}
                          </p>
                          <p className="text-xs text-gray-600">Đánh giá</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-800">{mentor.students}</p>
                          <p className="text-xs text-gray-600">Mentees</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-800">{mentor.experience}</p>
                          <p className="text-xs text-gray-600">Kinh nghiệm</p>
                        </div>
                      </div>

                      <button
                        onClick={() => navigate('/meeting')}
                        disabled={!mentor.available}
                        className="w-full px-6 py-3 bg-gradient-to-r from-[#06BBCC] to-[#0066FF] text-white rounded-lg font-bold hover:from-[#0066FF] hover:to-[#FF0000] transition-all disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed"
                      >
                        {mentor.available ? 'Đặt Lịch Hẹn' : 'Hiện Không Có Lịch'}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Schedule Tab */}
            {activeTab === 'schedule' && (
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaCalendar className="text-[#06BBCC]" />
                  Quản Lý Lịch & Nhắc Hẹn
                </h3>
                <p className="text-gray-600 mb-6">
                  <strong>Nhắc lịch tự động:</strong> Hệ thống sẽ gửi thông báo trước mỗi buổi hẹn 30 phút ⏰
                </p>

                <div className="space-y-4">
                  {schedules.map((schedule) => (
                    <motion.div
                      key={schedule.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`rounded-xl p-6 shadow-lg ${
                        schedule.status === 'upcoming'
                          ? 'bg-gradient-to-r from-green-50 to-emerald-100 border-l-4 border-green-500'
                          : 'bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-gray-400'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-800 mb-2">{schedule.topic}</h4>
                          <p className="text-gray-700 flex items-center gap-2 mb-1">
                            <FaUser /> Mentor: <strong>{schedule.mentorName}</strong>
                          </p>
                          <p className="text-gray-700 flex items-center gap-2">
                            <FaClock /> {schedule.date} • {schedule.time}
                          </p>
                        </div>
                        {schedule.status === 'upcoming' ? (
                          <div className="flex items-center gap-2">
                            <FaBell className="text-yellow-500 text-2xl animate-pulse" />
                            <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-bold text-sm">
                              🔔 Nhắc nhở đã bật
                            </span>
                          </div>
                        ) : (
                          <span className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full font-semibold text-sm">
                            ✅ Đã hoàn thành
                          </span>
                        )}
                      </div>

                      {schedule.meetingLink && schedule.status === 'upcoming' && (
                        <div className="bg-white rounded-lg p-4 mb-4">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Link Cuộc Họp:
                          </label>
                          <a
                            href={schedule.meetingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-mono text-sm hover:bg-blue-100 transition-colors"
                          >
                            {schedule.meetingLink}
                          </a>
                        </div>
                      )}

                      {schedule.status === 'upcoming' && (
                        <button className="w-full px-6 py-3 bg-[#06BBCC] text-white rounded-lg font-bold hover:bg-[#0099AA] transition-colors flex items-center justify-center gap-2">
                          <FaVideo /> Tham Gia Cuộc Họp
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaGraduationCap className="text-[#06BBCC]" />
                  Khóa Học Của Tôi
                </h3>
                <div className="space-y-4">
                  {myCourses.map((course) => (
                    <div key={course.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{course.title}</h4>
                          <p className="text-gray-600">Giảng viên: {course.instructor}</p>
                        </div>
                        <span className="px-4 py-2 bg-[#06BBCC] text-white rounded-full font-bold">
                          {course.progress}%
                        </span>
                      </div>
                      <div className="mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${course.progress}%` }}
                            transition={{ duration: 1 }}
                            className="bg-gradient-to-r from-[#06BBCC] to-[#0066FF] h-4 rounded-full"
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => navigate(`/roadmap`)}
                        className="px-6 py-2 bg-[#06BBCC] text-white rounded-lg font-semibold hover:bg-[#0099AA] transition-colors"
                      >
                        Tiếp Tục Học
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
