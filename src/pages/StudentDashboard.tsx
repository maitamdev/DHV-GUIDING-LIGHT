import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaCalendar, FaBook, FaSearch, FaStar, FaBell, FaEdit, FaSave, FaVideo, FaClock, FaCheckCircle, FaGraduationCap, FaRobot, FaPaperPlane, FaLightbulb, FaChartLine, FaUpload } from 'react-icons/fa';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'mentors' | 'aiSuggest' | 'schedule' | 'courses' | 'myCourses'>('profile');
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
    name: 'John Anderson',
    email: 'student@email.com',
    phone: '+84 901 234 567',
    university: 'Hanoi University of Science and Technology',
    major: 'Computer Science',
    year: 'Junior (Year 3)',
    gpa: '3.5/4.0',
    skills: 'React, TypeScript, Node.js',
    bio: 'Third-year Computer Science student passionate about web development with hands-on experience through freelance projects. Always seeking opportunities to learn and develop new skills.',
    goals: 'Become a Full Stack Developer within 6 months, master React and Node.js, participate in real-world projects to accumulate professional experience.',
    projects: 'E-commerce Website (React + Node.js), Personal Blog (Next.js), Task Management App (React Native)',
    certifications: 'AWS Cloud Practitioner, Google UX Design Certificate',
    languages: 'Vietnamese (Native), English (IELTS 7.0)',
    achievements: '🏆 2nd Place Hackathon 2024\n🥇 Top 10% Outstanding Students\n📜 5+ Completed Projects'
  });

  // Mentor List
  const mentors = [
    {
      id: 1,
      name: 'Michael Chen',
      avatar: '/img/team-1.jpg',
      title: 'Senior Full Stack Developer',
      company: 'FPT Software',
      skills: ['React', 'Node.js', 'AWS'],
      rating: 4.9,
      students: 45,
      experience: '8 years',
      available: true,
      bio: 'Web development expert with 8 years of experience. Successfully mentored over 45 mentees.'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      avatar: '/img/team-2.jpg',
      title: 'UI/UX Design Lead',
      company: 'Viettel',
      skills: ['Figma', 'Adobe XD', 'Design Thinking'],
      rating: 4.8,
      students: 38,
      experience: '6 years',
      available: true,
      bio: 'Interface design expert with many large projects. Dedicated to mentoring students.'
    },
    {
      id: 3,
      name: 'David Nguyen',
      avatar: '/img/team-3.jpg',
      title: 'Data Scientist',
      company: 'VNG Corporation',
      skills: ['Python', 'Machine Learning', 'TensorFlow'],
      rating: 4.9,
      students: 32,
      experience: '7 years',
      available: false,
      bio: 'AI/ML expert with experience deploying many real-world projects.'
    },
    {
      id: 4,
      name: 'Emily Parker',
      avatar: '/img/team-1.jpg',
      title: 'Mobile Developer',
      company: 'Shopee Vietnam',
      skills: ['React Native', 'Flutter', 'iOS'],
      rating: 4.7,
      students: 28,
      experience: '5 years',
      available: true,
      bio: 'Cross-platform mobile app development specialist with 20+ apps on stores.'
    }
  ];

  // Meeting Schedule with Mentors
  const schedules = [
    {
      id: 1,
      mentorName: 'Michael Chen',
      topic: 'Source Code Review - E-commerce Project',
      date: 'Today',
      time: '2:00 PM - 3:30 PM',
      status: 'upcoming',
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      reminder: true
    },
    {
      id: 2,
      mentorName: 'Sarah Williams',
      topic: 'UI/UX Portfolio Review',
      date: 'Tomorrow',
      time: '10:00 AM - 11:00 AM',
      status: 'upcoming',
      meetingLink: 'https://zoom.us/j/123456789',
      reminder: true
    },
    {
      id: 3,
      mentorName: 'Michael Chen',
      topic: 'Career Path Planning',
      date: '2 days ago',
      time: '3:00 PM - 4:00 PM',
      status: 'completed',
      meetingLink: '',
      reminder: false
    }
  ];

  // Purchased Courses - In production, fetch from Firebase based on userData.purchasedCourses
  const myCourses = [
    { 
      id: 1, 
      title: 'Web Development Full Stack', 
      progress: 75, 
      instructor: 'Nguyen Van A',
      category: 'web-development',
      image: '/img/course-1.jpg',
      nextLesson: 'React Hooks Advanced',
      totalLessons: 130,
      completedLessons: 98
    },
    { 
      id: 2, 
      title: 'React & Node.js Bootcamp', 
      progress: 50, 
      instructor: 'Tran Van B',
      category: 'web-development',
      image: '/img/course-2.jpg',
      nextLesson: 'Building REST APIs',
      totalLessons: 93,
      completedLessons: 47
    },
    { 
      id: 3, 
      title: 'Data Science & Analytics', 
      progress: 30, 
      instructor: 'Pham Thi E',
      category: 'data-science',
      image: '/img/course-3.jpg',
      nextLesson: 'Pandas Data Manipulation',
      totalLessons: 129,
      completedLessons: 39
    }
  ];

  const handleSaveProfile = () => {
    setEditMode(false);
    alert('Profile updated successfully! ✅');
  };

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-10">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold mb-3 text-white tracking-tight"
                >
                  📚 Student Dashboard
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-blue-100 text-lg font-medium"
                >
                  Welcome back, <span className="text-white font-semibold">{profileData.name}</span>! Track your progress and connect with mentors.
                </motion.p>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                <button
                  onClick={() => navigate('/portfolio')}
                  className="group flex items-center gap-2 px-5 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <FaGraduationCap className="group-hover:rotate-12 transition-transform" /> Portfolio
                </button>
                <button
                  onClick={() => navigate('/competency-profile')}
                  className="group flex items-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <FaChartLine className="group-hover:scale-110 transition-transform" /> Competency
                </button>
                <button
                  onClick={() => navigate('/assignment-submission')}
                  className="group flex items-center gap-2 px-5 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <FaUpload className="group-hover:translate-y-1 transition-transform" /> Assignments
                </button>
                <button
                  onClick={() => navigate('/homework')}
                  className="group flex items-center gap-2 px-5 py-3 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <FaBell className="group-hover:swing transition-transform" /> Homework
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards - Unified Blue Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { icon: FaBook, label: 'Enrolled Courses', value: '3' },
            { icon: FaUser, label: 'Following Mentors', value: '2' },
            { icon: FaCalendar, label: 'Upcoming Meetings', value: '2' },
            { icon: FaCheckCircle, label: 'Completed Sessions', value: '8' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg hover:shadow-2xl p-6 text-white transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                  <stat.icon className="text-2xl text-white" />
                </div>
                <span className="text-4xl font-bold">{stat.value}</span>
              </div>
              <p className="text-white/90 font-medium text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-xl mb-10 overflow-hidden">
          <div className="flex border-b border-gray-200 overflow-x-auto bg-gradient-to-r from-gray-50 to-blue-50">
            {[
              { id: 'profile', label: 'My Profile', icon: FaUser },
              { id: 'myCourses', label: 'My Courses', icon: FaBook },
              { id: 'mentors', label: 'Find Mentors', icon: FaSearch },
              { id: 'aiSuggest', label: 'AI Mentor', icon: FaRobot },
              { id: 'schedule', label: 'Meeting Schedule', icon: FaCalendar }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative flex items-center gap-2 px-8 py-5 font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-blue-600 bg-white'
                    : 'text-gray-600 hover:text-blue-500 hover:bg-white/50'
                }`}
              >
                <tab.icon className={`text-lg transition-transform ${activeTab === tab.id ? 'scale-110' : ''}`} />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="p-10">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-4xl font-bold text-gray-800 flex items-center gap-3 mb-2">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl">
                        <FaUser className="text-white" />
                      </div>
                      Personal Profile
                    </h3>
                    <p className="text-gray-600 ml-16">Manage your information and showcase your achievements</p>
                  </div>
                  {!editMode ? (
                    <button
                      onClick={() => setEditMode(true)}
                      className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <FaEdit className="group-hover:rotate-12 transition-transform" /> Edit Profile
                    </button>
                  ) : (
                    <button
                      onClick={handleSaveProfile}
                      className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <FaSave className="group-hover:scale-110 transition-transform" /> Save Changes
                    </button>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Avatar & Basic Info Section */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                    </div>
                    
                    <div className="relative z-10 flex items-center gap-8">
                      <div className="w-36 h-36 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center text-6xl font-bold border-4 border-white/50 shadow-2xl">
                        {profileData.name.charAt(0)}
                      </div>
                      <div className="flex-1">{editMode ? (
                          <input
                            type="text"
                            value={profileData.name}
                            onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                            className="text-4xl font-bold bg-white/20 rounded-lg px-4 py-2 w-full"
                            placeholder="Full Name"
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
                              placeholder="University"
                            />
                            <div className="flex gap-3">
                              <input
                                type="text"
                                value={profileData.major}
                                onChange={(e) => setProfileData({ ...profileData, major: e.target.value })}
                                className="text-lg bg-white/20 rounded-lg px-4 py-2 flex-1"
                                placeholder="Major"
                              />
                              <input
                                type="text"
                                value={profileData.year}
                                onChange={(e) => setProfileData({ ...profileData, year: e.target.value })}
                                className="text-lg bg-white/20 rounded-lg px-4 py-2 w-32"
                                placeholder="Year"
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
                      <label className="block text-gray-600 font-semibold mb-3 text-sm uppercase">📱 Phone Number</label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                        disabled={!editMode}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50 font-semibold text-gray-800"
                      />
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                      <label className="block text-gray-600 font-semibold mb-3 text-sm uppercase">🌍 Languages</label>
                      <input
                        type="text"
                        value={profileData.languages}
                        onChange={(e) => setProfileData({ ...profileData, languages: e.target.value })}
                        disabled={!editMode}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50 font-semibold text-gray-800"
                        placeholder="e.g., Vietnamese, English..."
                      />
                    </div>
                  </div>

                  {/* Skills & Bio Section */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6 shadow-lg">
                      <label className="block text-gray-800 font-bold mb-4 text-lg">💡 Professional Skills</label>
                      <textarea
                        value={profileData.skills}
                        onChange={(e) => setProfileData({ ...profileData, skills: e.target.value })}
                        disabled={!editMode}
                        rows={4}
                        placeholder="e.g., React, Node.js, Python, UI/UX Design..."
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-white/70 text-gray-800"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 shadow-lg">
                      <label className="block text-gray-800 font-bold mb-4 text-lg">📜 Certifications</label>
                      <textarea
                        value={profileData.certifications}
                        onChange={(e) => setProfileData({ ...profileData, certifications: e.target.value })}
                        disabled={!editMode}
                        rows={4}
                        placeholder="e.g., AWS Cloud Practitioner, Google UX Design..."
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-white/70 text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Bio Section */}
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <label className="block text-gray-800 font-bold mb-4 text-xl">👤 About Me</label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                      disabled={!editMode}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50 text-gray-800 text-lg"
                      placeholder="Brief introduction about yourself, interests and passions..."
                    />
                  </div>

                  {/* Goals & Projects Section */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl p-6 shadow-lg">
                      <label className="block text-gray-800 font-bold mb-4 text-lg">🎯 Career Goals</label>
                      <textarea
                        value={profileData.goals}
                        onChange={(e) => setProfileData({ ...profileData, goals: e.target.value })}
                        disabled={!editMode}
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-white/70 text-gray-800"
                        placeholder="Your short-term and long-term career goals..."
                      />
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 shadow-lg">
                      <label className="block text-gray-800 font-bold mb-4 text-lg">🚀 Completed Projects</label>
                      <textarea
                        value={profileData.projects}
                        onChange={(e) => setProfileData({ ...profileData, projects: e.target.value })}
                        disabled={!editMode}
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-white/70 text-gray-800"
                        placeholder="List your completed projects..."
                      />
                    </div>
                  </div>

                  {/* Achievements Section */}
                  <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 rounded-xl p-8 shadow-lg border-l-4 border-yellow-500">
                    <label className="block text-gray-800 font-bold mb-4 text-xl">🏆 Achievements & Awards</label>
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
              </motion.div>
            )}

            {/* Mentors Tab */}
            {activeTab === 'mentors' && (
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaSearch className="text-[#06BBCC]" />
                  Find & Select Mentor
                </h3>

                {/* Search Bar */}
                <div className="mb-8">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by name, skills, field..."
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-full focus:border-[#06BBCC] focus:outline-none text-lg pl-14"
                    />
                    <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2 ml-4">
                    <strong>Smart Search – Quick Connect:</strong> Filter by skills, experience, or field
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
                            ✅ Available
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                            ⏰ Busy
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
                          <p className="text-xs text-gray-600">Rating</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-800">{mentor.students}</p>
                          <p className="text-xs text-gray-600">Mentees</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-800">{mentor.experience}</p>
                          <p className="text-xs text-gray-600">Experience</p>
                        </div>
                      </div>

                      <button
                        onClick={() => navigate('/meeting')}
                        disabled={!mentor.available}
                        className="w-full px-6 py-3 bg-gradient-to-r from-[#06BBCC] to-[#0066FF] text-white rounded-lg font-bold hover:from-[#0066FF] hover:to-[#FF0000] transition-all disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed"
                      >
                        {mentor.available ? 'Schedule Meeting' : 'Currently Unavailable'}
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
                  AI-Powered Mentor Recommendations
                </h3>
                <p className="text-gray-600 mb-8">
                  💡 Enter your skills, interests, and goals. AI will analyze and suggest the best mentors for you!
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Form Input */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-8 shadow-xl">
                    <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                      <FaLightbulb className="text-yellow-500" />
                      Your Information
                    </h4>
                    
                    <div className="space-y-5">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">🎯 Current Skills</label>
                        <textarea
                          value={aiFormData.skills}
                          onChange={(e) => setAiFormData({ ...aiFormData, skills: e.target.value })}
                          placeholder="e.g., React, Node.js, Python, UI/UX Design..."
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">❤️ Interests & Fields</label>
                        <textarea
                          value={aiFormData.interests}
                          onChange={(e) => setAiFormData({ ...aiFormData, interests: e.target.value })}
                          placeholder="e.g., Web Development, Mobile Apps, AI/ML, Game Development..."
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">🚀 Career Goals</label>
                        <textarea
                          value={aiFormData.goals}
                          onChange={(e) => setAiFormData({ ...aiFormData, goals: e.target.value })}
                          placeholder="e.g., Become a Full Stack Developer, Work at a major tech company..."
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">📊 Current Level</label>
                        <select
                          value={aiFormData.experience}
                          onChange={(e) => setAiFormData({ ...aiFormData, experience: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        >
                          <option value="">-- Select level --</option>
                          <option value="beginner">Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                          <option value="expert">Expert</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">🎓 Preferred Fields</label>
                        <input
                          type="text"
                          value={aiFormData.preferredFields}
                          onChange={(e) => setAiFormData({ ...aiFormData, preferredFields: e.target.value })}
                          placeholder="e.g., Backend, Frontend, DevOps, Data Science..."
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        />
                      </div>

                      <button
                        onClick={async () => {
                          if (!aiFormData.skills || !aiFormData.goals) {
                            alert('⚠️ Please enter at least Skills and Goals!');
                            return;
                          }
                          
                          setAiLoading(true);
                          try {
                            // Call Groq API
                            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
                              },
                              body: JSON.stringify({
                                model: 'mixtral-8x7b-32768',
                                messages: [{
                                  role: 'user',
                                  content: `You are a career counseling expert. Based on the following mentee information, suggest 3 most suitable mentors:
                                  
Skills: ${aiFormData.skills}
Interests: ${aiFormData.interests}
Goals: ${aiFormData.goals}
Level: ${aiFormData.experience}
Preferred Fields: ${aiFormData.preferredFields}

Please respond in JSON format:
{
  "suggestions": [
    {
      "mentorName": "Mentor name",
      "title": "Title",
      "reason": "Why suitable",
      "focus": "Area of expertise",
      "recommendation": "Learning recommendations"
    }
  ],
  "overallAdvice": "General advice for mentee"
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
                              setAiSuggestions({ error: 'Unable to parse results', raw: content });
                            }
                          } catch (error: any) {
                            console.error('Groq API Error:', error);
                            setAiSuggestions({ 
                              error: 'Error connecting to AI',
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
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                            Get Mentor Recommendations
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* AI Results */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 shadow-xl">
                    <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                      <FaStar className="text-yellow-500" />
                      AI Recommendations
                    </h4>

                    {!aiSuggestions ? (
                      <div className="text-center py-12">
                        <FaRobot className="text-6xl text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 text-lg">
                          Fill in the information on the left and click the button to get AI recommendations! 🤖
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
                                <span className="font-semibold text-gray-700">✅ Why Suitable:</span>
                                <p className="text-gray-600 mt-1">{suggestion.reason}</p>
                              </div>
                              <div>
                                <span className="font-semibold text-gray-700">🎯 Expertise:</span>
                                <p className="text-gray-600 mt-1">{suggestion.focus}</p>
                              </div>
                              <div>
                                <span className="font-semibold text-gray-700">💡 Recommendations:</span>
                                <p className="text-gray-600 mt-1">{suggestion.recommendation}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}

                        {aiSuggestions.overallAdvice && (
                          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6 border-l-4 border-yellow-500">
                            <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                              <FaLightbulb className="text-yellow-600" />
                              Overall Advice
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
                  Schedule Management & Reminders
                </h3>
                <p className="text-gray-600 mb-6">
                  <strong>Auto Reminders:</strong> System will send notifications 30 minutes before each meeting ⏰
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
                              🔔 Reminder Active
                            </span>
                          </div>
                        ) : (
                          <span className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full font-semibold text-sm">
                            ✅ Completed
                          </span>
                        )}
                      </div>

                      {schedule.meetingLink && schedule.status === 'upcoming' && (
                        <div className="bg-white rounded-lg p-4 mb-4">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Meeting Link:
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
                          <FaVideo /> Join Meeting
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* My Courses Tab - Purchased Courses */}
            {activeTab === 'myCourses' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                    <FaBook className="text-[#06BBCC]" />
                    My Purchased Courses
                  </h3>
                  <button
                    onClick={() => navigate('/courses')}
                    className="px-4 py-2 border-2 border-[#06BBCC] text-[#06BBCC] rounded-lg hover:bg-[#06BBCC] hover:text-white transition-colors font-semibold"
                  >
                    Browse More Courses
                  </button>
                </div>
                
                {myCourses.length === 0 ? (
                  <div className="text-center py-12 bg-gray-50 rounded-2xl">
                    <FaBook className="text-6xl text-gray-300 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-600 mb-2">No Courses Yet</h4>
                    <p className="text-gray-500 mb-4">Start your learning journey by purchasing a course!</p>
                    <button
                      onClick={() => navigate('/courses')}
                      className="px-6 py-3 bg-[#06BBCC] text-white rounded-lg font-bold hover:bg-[#05a3b3] transition-colors"
                    >
                      Explore Courses
                    </button>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {myCourses.map((course) => (
                      <motion.div 
                        key={course.id} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                      >
                        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="text-xl font-bold text-gray-800 mb-1">{course.title}</h4>
                              <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
                            </div>
                            <span className="px-4 py-2 bg-gradient-to-r from-[#06BBCC] to-blue-600 text-white rounded-full font-bold text-sm">
                              {course.progress}%
                            </span>
                          </div>
                          
                          <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                              <span>{course.completedLessons} / {course.totalLessons} lessons completed</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${course.progress}%` }}
                                transition={{ duration: 1 }}
                                className="bg-gradient-to-r from-[#06BBCC] to-blue-600 h-3 rounded-full"
                              />
                            </div>
                          </div>

                          <div className="bg-blue-50 border-l-4 border-[#06BBCC] p-3 rounded-lg mb-4">
                            <p className="text-sm text-gray-600">Next Lesson:</p>
                            <p className="font-semibold text-gray-800">{course.nextLesson}</p>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => navigate(`/roadmap/${course.category}`)}
                              className="flex-1 px-6 py-3 bg-gradient-to-r from-[#06BBCC] to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                              <FaBook /> Continue Learning
                            </button>
                            <button
                              onClick={() => navigate(`/course/${course.id}`)}
                              className="px-4 py-3 border-2 border-[#06BBCC] text-[#06BBCC] rounded-lg hover:bg-[#06BBCC] hover:text-white transition-colors"
                              title="View Course Details"
                            >
                              <FaStar />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
