import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaCalendar, FaBook, FaSearch, FaStar, FaBell, FaEdit, FaSave, FaVideo, FaClock, FaCheckCircle, FaGraduationCap, FaRobot, FaPaperPlane, FaLightbulb } from 'react-icons/fa';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'mentors' | 'aiSuggest' | 'schedule' | 'courses'>('profile');
  const [editMode, setEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // AI Suggestion State
  const [aiFormData, setAiFormData] = useState({
    skills: '',
    interests: '',
    goals: '',
    experience: '',
    preferredFields: ''
  });
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<any>(null);
  const [profileData, setProfileData] = useState({
    name: 'Nguyễn Văn A',
    email: 'student@email.com',
    phone: '0901234567',
    university: 'Đại học Bách Khoa Hà Nội',
    major: 'Công nghệ thông tin',
    year: 'Năm 3',
    gpa: '3.5/4.0',
    skills: 'React, TypeScript, Node.js',
    bio: 'Sinh viên năm 3 ngành CNTT, đam mê lập trình web và có kinh nghiệm thực tế qua các dự án freelance. Luôn tìm kiếm cơ hội học hỏi và phát triển kỹ năng mới.',
    goals: 'Trở thành Full Stack Developer trong 6 tháng tới, thành thạo React và Node.js, tham gia các dự án thực tế để tích lũy kinh nghiệm chuyên môn.',
    projects: 'E-commerce Website (React + Node.js), Blog cá nhân (Next.js), Task Management App (React Native)',
    certifications: 'AWS Cloud Practitioner, Google UX Design Certificate',
    languages: 'Tiếng Việt (Bản ngữ), Tiếng Anh (IELTS 7.0)',
    achievements: '🏆 Giải Nhì Hackathon 2024\n🥇 Top 10% sinh viên xuất sắc\n📜 5+ dự án hoàn thành'
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
              { id: 'profile', label: 'Hồ Sơ', icon: FaUser },
              { id: 'mentors', label: 'Tìm Mentor', icon: FaSearch },
              { id: 'aiSuggest', label: 'Hỏi AI', icon: FaRobot },
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

                <div className="space-y-8">
                  {/* Avatar & Basic Info Section */}
                  <div className="bg-gradient-to-r from-[#06BBCC] to-blue-600 rounded-2xl p-8 text-white shadow-xl">
                    <div className="flex items-center gap-6">
                      <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center text-5xl font-bold border-4 border-white/50">
                        {profileData.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        {editMode ? (
                          <input
                            type="text"
                            value={profileData.name}
                            onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                            className="text-4xl font-bold bg-white/20 rounded-lg px-4 py-2 w-full"
                            placeholder="Họ và Tên"
                          />
                        ) : (
                          <h2 className="text-4xl font-bold mb-2">{profileData.name}</h2>
                        )}
                        {editMode ? (
                          <div className="space-y-2 mt-3">
                            <input
                              type="text"
                              value={profileData.university}
                              onChange={(e) => setProfileData({ ...profileData, university: e.target.value })}
                              className="text-lg bg-white/20 rounded-lg px-4 py-2 w-full"
                              placeholder="Trường đại học"
                            />
                            <div className="flex gap-3">
                              <input
                                type="text"
                                value={profileData.major}
                                onChange={(e) => setProfileData({ ...profileData, major: e.target.value })}
                                className="text-lg bg-white/20 rounded-lg px-4 py-2 flex-1"
                                placeholder="Ngành học"
                              />
                              <input
                                type="text"
                                value={profileData.year}
                                onChange={(e) => setProfileData({ ...profileData, year: e.target.value })}
                                className="text-lg bg-white/20 rounded-lg px-4 py-2 w-32"
                                placeholder="Năm"
                              />
                            </div>
                          </div>
                        ) : (
                          <>
                            <p className="text-xl opacity-90">🎓 {profileData.university}</p>
                            <p className="text-lg opacity-80">{profileData.major} • {profileData.year} • GPA: {profileData.gpa}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contact Info Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                      <label className="block text-gray-600 font-semibold mb-3 text-sm uppercase">📧 Email</label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        disabled={!editMode}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50 font-semibold text-gray-800"
                      />
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                      <label className="block text-gray-600 font-semibold mb-3 text-sm uppercase">📱 Điện Thoại</label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                        disabled={!editMode}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50 font-semibold text-gray-800"
                      />
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                      <label className="block text-gray-600 font-semibold mb-3 text-sm uppercase">🌍 Ngôn Ngữ</label>
                      <input
                        type="text"
                        value={profileData.languages}
                        onChange={(e) => setProfileData({ ...profileData, languages: e.target.value })}
                        disabled={!editMode}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50 font-semibold text-gray-800"
                        placeholder="VD: Tiếng Việt, Tiếng Anh..."
                      />
                    </div>
                  </div>

                  {/* Skills & Bio Section */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6 shadow-lg">
                      <label className="block text-gray-800 font-bold mb-4 text-lg">💡 Kỹ Năng Chuyên Môn</label>
                      <textarea
                        value={profileData.skills}
                        onChange={(e) => setProfileData({ ...profileData, skills: e.target.value })}
                        disabled={!editMode}
                        rows={4}
                        placeholder="VD: React, Node.js, Python, UI/UX Design..."
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-white/70 text-gray-800"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 shadow-lg">
                      <label className="block text-gray-800 font-bold mb-4 text-lg">📜 Chứng Chỉ</label>
                      <textarea
                        value={profileData.certifications}
                        onChange={(e) => setProfileData({ ...profileData, certifications: e.target.value })}
                        disabled={!editMode}
                        rows={4}
                        placeholder="VD: AWS Cloud Practitioner, Google UX Design..."
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-white/70 text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Bio Section */}
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <label className="block text-gray-800 font-bold mb-4 text-xl">👤 Giới Thiệu Bản Thân</label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                      disabled={!editMode}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50 text-gray-800 text-lg"
                      placeholder="Giới thiệu ngắn gọn về bản thân, sở thích và đam mê..."
                    />
                  </div>

                  {/* Goals & Projects Section */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl p-6 shadow-lg">
                      <label className="block text-gray-800 font-bold mb-4 text-lg">🎯 Mục Tiêu Nghề Nghiệp</label>
                      <textarea
                        value={profileData.goals}
                        onChange={(e) => setProfileData({ ...profileData, goals: e.target.value })}
                        disabled={!editMode}
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-white/70 text-gray-800"
                        placeholder="Mục tiêu ngắn hạn và dài hạn của bạn..."
                      />
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 shadow-lg">
                      <label className="block text-gray-800 font-bold mb-4 text-lg">🚀 Dự Án Đã Làm</label>
                      <textarea
                        value={profileData.projects}
                        onChange={(e) => setProfileData({ ...profileData, projects: e.target.value })}
                        disabled={!editMode}
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-white/70 text-gray-800"
                        placeholder="Liệt kê các dự án bạn đã hoàn thành..."
                      />
                    </div>
                  </div>

                  {/* Achievements Section */}
                  <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 rounded-xl p-8 shadow-lg border-l-4 border-yellow-500">
                    <label className="block text-gray-800 font-bold mb-4 text-xl">🏆 Thành Tích & Giải Thưởng</label>
                    <textarea
                      value={profileData.achievements}
                      onChange={(e) => setProfileData({ ...profileData, achievements: e.target.value })}
                      disabled={!editMode}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-white/70 text-gray-800 text-lg"
                      placeholder="VD: 🏆 Giải Nhì Hackathon 2024..."
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

            {/* AI Suggestion Tab */}
            {activeTab === 'aiSuggest' && (
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaRobot className="text-[#06BBCC]" />
                  Hỏi AI Gợi Ý Mentor Phù Hợp
                </h3>
                <p className="text-gray-600 mb-8">
                  💡 Nhập thông tin về kỹ năng, sở thích và mục tiêu của bạn. AI sẽ phân tích và gợi ý những mentor phù hợp nhất!
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Form Input */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-8 shadow-xl">
                    <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                      <FaLightbulb className="text-yellow-500" />
                      Thông Tin Của Bạn
                    </h4>
                    
                    <div className="space-y-5">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">🎯 Kỹ Năng Hiện Tại</label>
                        <textarea
                          value={aiFormData.skills}
                          onChange={(e) => setAiFormData({ ...aiFormData, skills: e.target.value })}
                          placeholder="VD: React, Node.js, Python, UI/UX Design..."
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">❤️ Sở Thích & Lĩnh Vực Quan Tâm</label>
                        <textarea
                          value={aiFormData.interests}
                          onChange={(e) => setAiFormData({ ...aiFormData, interests: e.target.value })}
                          placeholder="VD: Web Development, Mobile Apps, AI/ML, Game Development..."
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">🚀 Mục Tiêu Nghề Nghiệp</label>
                        <textarea
                          value={aiFormData.goals}
                          onChange={(e) => setAiFormData({ ...aiFormData, goals: e.target.value })}
                          placeholder="VD: Trở thành Full Stack Developer, Làm việc tại công ty công nghệ lớn..."
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">📊 Trình Độ Hiện Tại</label>
                        <select
                          value={aiFormData.experience}
                          onChange={(e) => setAiFormData({ ...aiFormData, experience: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        >
                          <option value="">-- Chọn trình độ --</option>
                          <option value="beginner">Mới Bắt Đầu</option>
                          <option value="intermediate">Trung Cấp</option>
                          <option value="advanced">Nâng Cao</option>
                          <option value="expert">Chuyên Gia</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">🎓 Lĩnh Vực Ưu Tiên</label>
                        <input
                          type="text"
                          value={aiFormData.preferredFields}
                          onChange={(e) => setAiFormData({ ...aiFormData, preferredFields: e.target.value })}
                          placeholder="VD: Backend, Frontend, DevOps, Data Science..."
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        />
                      </div>

                      <button
                        onClick={async () => {
                          if (!aiFormData.skills || !aiFormData.goals) {
                            alert('⚠️ Vui lòng nhập ít nhất Kỹ Năng và Mục Tiêu!');
                            return;
                          }
                          
                          setAiLoading(true);
                          try {
                            // Call Groq API
                            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY || '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'}`
                              },
                              body: JSON.stringify({
                                model: 'mixtral-8x7b-32768',
                                messages: [{
                                  role: 'user',
                                  content: `Bạn là chuyên gia tư vấn nghề nghiệp. Dựa trên thông tin sau của mentee, hãy gợi ý 3 mentor phù hợp nhất:
                                  
Kỹ năng: ${aiFormData.skills}
Sở thích: ${aiFormData.interests}
Mục tiêu: ${aiFormData.goals}
Trình độ: ${aiFormData.experience}
Lĩnh vực ưu tiên: ${aiFormData.preferredFields}

Hãy trả lời theo format JSON như sau:
{
  "suggestions": [
    {
      "mentorName": "Tên mentor",
      "title": "Chức danh",
      "reason": "Lý do phù hợp",
      "focus": "Lĩnh vực chuyên môn",
      "recommendation": "Gợi ý học tập"
    }
  ],
  "overallAdvice": "Lời khuyên chung cho mentee"
}`
                                }],
                                temperature: 0.7,
                                max_tokens: 1500
                              })
                            });

                            const data = await response.json();
                            const content = data.choices[0].message.content;
                            
                            // Parse JSON from response
                            const jsonMatch = content.match(/\{[\s\S]*\}/);
                            if (jsonMatch) {
                              const result = JSON.parse(jsonMatch[0]);
                              setAiSuggestions(result);
                            } else {
                              setAiSuggestions({ error: 'Không thể phân tích kết quả', raw: content });
                            }
                          } catch (error: any) {
                            console.error('Groq API Error:', error);
                            setAiSuggestions({ 
                              error: 'Có lỗi xảy ra khi kết nối AI',
                              message: error.message 
                            });
                          }
                          setAiLoading(false);
                        }}
                        disabled={aiLoading}
                        className="w-full px-8 py-4 bg-gradient-to-r from-[#06BBCC] to-blue-600 text-white rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
                      >
                        {aiLoading ? (
                          <>
                            <div className="animate-spin w-6 h-6 border-4 border-white border-t-transparent rounded-full"></div>
                            Đang Phân Tích...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                            Gợi Ý Mentor Cho Tôi
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* AI Results */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 shadow-xl">
                    <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                      <FaStar className="text-yellow-500" />
                      Gợi Ý Từ AI
                    </h4>

                    {!aiSuggestions ? (
                      <div className="text-center py-12">
                        <FaRobot className="text-6xl text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 text-lg">
                          Điền thông tin bên trái và nhấn nút để nhận gợi ý từ AI! 🤖
                        </p>
                      </div>
                    ) : aiSuggestions.error ? (
                      <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-lg">
                        <p className="text-red-700 font-semibold mb-2">❌ {aiSuggestions.error}</p>
                        <p className="text-red-600 text-sm">{aiSuggestions.message || aiSuggestions.raw}</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {aiSuggestions.suggestions?.map((suggestion: any, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500"
                          >
                            <div className="flex items-start gap-4 mb-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <h5 className="text-xl font-bold text-gray-800 mb-1">{suggestion.mentorName}</h5>
                                <p className="text-[#06BBCC] font-semibold">{suggestion.title}</p>
                              </div>
                            </div>
                            
                            <div className="space-y-3 pl-16">
                              <div>
                                <span className="font-semibold text-gray-700">✅ Lý do phù hợp:</span>
                                <p className="text-gray-600 mt-1">{suggestion.reason}</p>
                              </div>
                              <div>
                                <span className="font-semibold text-gray-700">🎯 Chuyên môn:</span>
                                <p className="text-gray-600 mt-1">{suggestion.focus}</p>
                              </div>
                              <div>
                                <span className="font-semibold text-gray-700">💡 Gợi ý:</span>
                                <p className="text-gray-600 mt-1">{suggestion.recommendation}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}

                        {aiSuggestions.overallAdvice && (
                          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6 border-l-4 border-yellow-500">
                            <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                              <FaLightbulb className="text-yellow-600" />
                              Lời Khuyên Chung
                            </h5>
                            <p className="text-gray-700 leading-relaxed">{aiSuggestions.overallAdvice}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
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
                        <a
                          href={schedule.meetingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-6 py-3 bg-[#06BBCC] text-white rounded-lg font-bold hover:bg-[#0099AA] transition-colors flex items-center justify-center gap-2"
                        >
                          <FaVideo /> Tham Gia Cuộc Họp
                        </a>
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
