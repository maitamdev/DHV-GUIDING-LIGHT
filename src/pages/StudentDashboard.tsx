import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaCalendar, FaBook, FaSearch, FaStar, FaBell, FaEdit, FaSave, FaVideo, FaClock, FaCheckCircle, FaGraduationCap, FaRobot, FaPaperPlane, FaLightbulb, FaChartLine, FaBriefcase, FaTasks, FaBookOpen, FaEye } from 'react-icons/fa';
import { getAIMentorRecommendations, scheduleMentorMeeting } from '../services/aiMentorService';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { currentUser, userData } = useAuth();
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
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<any>(null);
  const [meetingForm, setMeetingForm] = useState({
    preferredTime: '',
    topic: '',
    message: ''
  });
  const [meetingLoading, setMeetingLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '+84 877 724 374',
    university: 'Hung Vuong University',
    major: 'Computer Science',
    year: 'Junior (Year 3)',
    gpa: '3.5/4.0',
    skills: 'React, TypeScript, Node.js',
    bio: 'Third-year Computer Science student passionate about web development with hands-on experience through freelance projects. Always seeking opportunities to learn and develop new skills.',
    goals: 'Become a Full Stack Developer within 6 months, master React and Node.js, participate in real-world projects to accumulate professional experience.',
    projects: 'E-commerce Website (React + Node.js), Personal Blog (Next.js), Task Management App (React Native)',
    certifications: 'AWS Cloud Practitioner, Google UX Design Certificate',
    languages: 'Vietnamese (Native), English (IELTS 7.0)',
    achievements: ' 2nd Place Hackathon 2024\n Top 10% Outstanding Students\n 5+ Completed Projects',
    linkedin: 'linkedin.com/in/maitam',
    github: 'github.com/maitam',
    portfolio: 'maitam.dev',
    location: 'Ho Chi Minh City, Vietnam',
    birthday: '06/20/2005',
    softSkills: 'Leadership, Problem Solving, Communication, Teamwork, Time Management',
    hobbies: 'Coding, Reading Tech Blogs, Photography, Gaming',
    availability: 'Available for freelance/internship'
  });

  // Load user data when component mounts
  useEffect(() => {
    if (userData && currentUser) {
      setProfileData(prev => ({
        ...prev,
        name: userData.displayName || currentUser.displayName || '',
        email: userData.email || currentUser.email || ''
      }));
    }
  }, [userData, currentUser]);

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

  // Purchased Courses - Expanded with more categories
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
      completedLessons: 98,
      level: 'Intermediate',
      rating: 4.9,
      reviews: 1234,
      hours: 42.5
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
      completedLessons: 47,
      level: 'Beginner',
      rating: 4.8,
      reviews: 987,
      hours: 32
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
      completedLessons: 39,
      level: 'Advanced',
      rating: 4.9,
      reviews: 1567,
      hours: 28.5
    },
    { 
      id: 4, 
      title: 'Digital Marketing & Social Media Strategy', 
      progress: 65, 
      instructor: 'Nguyen Minh Khai',
      category: 'marketing',
      image: '/img/course-1.jpg',
      nextLesson: 'Facebook Ads Campaign',
      totalLessons: 85,
      completedLessons: 55,
      level: 'All Levels',
      rating: 4.8,
      reviews: 987,
      hours: 32
    },
    { 
      id: 5, 
      title: 'UI/UX Design Masterclass with Figma', 
      progress: 80, 
      instructor: 'Pham Duc Anh',
      category: 'design',
      image: '/img/course-2.jpg',
      nextLesson: 'Prototyping in Figma',
      totalLessons: 76,
      completedLessons: 61,
      level: 'All Levels',
      rating: 4.9,
      reviews: 1567,
      hours: 28.5
    },
    { 
      id: 6, 
      title: 'Business Management & Entrepreneurship', 
      progress: 45, 
      instructor: 'Tran Van Long',
      category: 'business',
      image: '/img/course-3.jpg',
      nextLesson: 'Financial Planning',
      totalLessons: 102,
      completedLessons: 46,
      level: 'Intermediate',
      rating: 4.7,
      reviews: 876,
      hours: 36
    },
    { 
      id: 7, 
      title: 'Machine Learning A-Z with Python', 
      progress: 20, 
      instructor: 'Le Thanh Tung',
      category: 'ai-ml',
      image: '/img/course-1.jpg',
      nextLesson: 'Neural Networks Basics',
      totalLessons: 156,
      completedLessons: 31,
      level: 'Advanced',
      rating: 5.0,
      reviews: 2341,
      hours: 48
    },
    { 
      id: 8, 
      title: 'Mobile App Development with React Native', 
      progress: 55, 
      instructor: 'Hoang Van Minh',
      category: 'mobile-dev',
      image: '/img/course-2.jpg',
      nextLesson: 'Navigation & Routing',
      totalLessons: 98,
      completedLessons: 54,
      level: 'Intermediate',
      rating: 4.8,
      reviews: 1123,
      hours: 38
    },
    { 
      id: 9, 
      title: 'Photography & Video Editing Masterclass', 
      progress: 70, 
      instructor: 'Nguyen Thu Ha',
      category: 'creative',
      image: '/img/course-3.jpg',
      nextLesson: 'Color Grading in Premiere',
      totalLessons: 67,
      completedLessons: 47,
      level: 'Beginner',
      rating: 4.9,
      reviews: 892,
      hours: 24
    },
    { 
      id: 10, 
      title: 'Financial Analysis & Investment', 
      progress: 35, 
      instructor: 'Tran Quoc Bao',
      category: 'finance',
      image: '/img/course-1.jpg',
      nextLesson: 'Stock Market Analysis',
      totalLessons: 88,
      completedLessons: 31,
      level: 'Intermediate',
      rating: 4.7,
      reviews: 654,
      hours: 30
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
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 min-h-screen">
        {/* Top Header - Blue like DHV image */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticky top-0 bg-[#0066CC] shadow-md z-40"
        >
          <div className="px-8 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white"> Wellcome {profileData.name}!</h1>
              <p className="text-sm text-blue-100 mt-1"> Saturday, November 15 – Books are the most wonderful companions!</p>
            </div>

            {/* Quick Actions - White buttons */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/portfolio')}
                className="px-5 py-2.5 rounded-lg bg-white text-[#0066CC] font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <FaBriefcase />
                Portfolio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/competency-profile')}
                className="px-5 py-2.5 rounded-lg bg-white text-[#0066CC] font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <FaChartLine />
                Competency
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/assignment-submission')}
                className="px-5 py-2.5 rounded-lg bg-white text-[#0066CC] font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <FaTasks />
                Assignments
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-lg bg-white/20 text-white font-semibold hover:bg-white/30 transition-all flex items-center gap-2"
              >
                <FaBookOpen />
                Homework
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Main Stats Cards - Neumorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Enrolled Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer group border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#0066CC] shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaBook className="text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">3</h3>
              <p className="text-gray-500 text-sm font-medium mb-3">Enrolled Courses</p>
              <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                <div className="bg-[#0066CC] h-full rounded-full transition-all" style={{ width: '68%' }}></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">68% average progress</p>
            </motion.div>

            {/* Following Mentors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl p-6 shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.5)] cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9B7BFF] to-[#8B6BE0] shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaUser className="text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">2</h3>
              <p className="text-gray-500 text-sm font-medium mb-3">Following Mentors</p>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5B8DEF] to-[#4A7BD8] border-2 border-white shadow-md"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9B7BFF] to-[#8B6BE0] border-2 border-white shadow-md"></div>
              </div>
            </motion.div>

            {/* Upcoming Meetings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl p-6 shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.5)] cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A8E6CF] to-[#88D4AB] shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaCalendar className="text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">2</h3>
              <p className="text-gray-500 text-sm font-medium mb-3">Upcoming Meetings</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FaClock className="text-[#A8E6CF]" />
                <span>Next: Today, 3:00 PM</span>
              </div>
            </motion.div>

            {/* Completed Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl p-6 shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.5)] cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFB347] to-[#FFA033] shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaCheckCircle className="text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">8</h3>
              <p className="text-gray-500 text-sm font-medium mb-3">Completed Sessions</p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-400 text-sm" />
                ))}
                <span className="text-xs text-gray-500 ml-1">(4.9)</span>
              </div>
            </motion.div>
          </div>

          {/* Profile Overview - Neumorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl p-8 shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.5)] mb-8"
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Student Info */}
              <div className="flex-1">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#5B8DEF] to-[#9B7BFF] shadow-lg flex items-center justify-center">
                    <FaUser className="text-4xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">{profileData.name}</h2>
                    <p className="text-gray-500 mb-2">{profileData.major}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <strong>GPA: 3.8</strong>
                      </span>
                      <span>•</span>
                      <span>Year 3</span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50/50 rounded-2xl p-4 shadow-inner">
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="text-sm font-medium text-gray-800">{profileData.email}</p>
                  </div>
                  <div className="bg-gray-50/50 rounded-2xl p-4 shadow-inner">
                    <p className="text-xs text-gray-500 mb-1">Phone</p>
                    <p className="text-sm font-medium text-gray-800">{profileData.phone}</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="w-full md:w-64 space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 shadow-inner">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Learning Hours</p>
                      <h4 className="text-2xl font-bold text-[#5B8DEF]">32.1h</h4>
                    </div>
                    <FaClock className="text-3xl text-[#5B8DEF] opacity-30" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 shadow-inner">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Achievements</p>
                      <h4 className="text-2xl font-bold text-[#9B7BFF]">12</h4>
                    </div>
                    <FaStar className="text-3xl text-[#9B7BFF] opacity-30" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tabs Navigation */}
          <div className="mb-8">
            <div className="flex gap-3 overflow-x-auto pb-4">
              {[
                { id: 'profile', label: 'Profile', icon: FaUser },
                { id: 'myCourses', label: 'My Courses', icon: FaBook },
                { id: 'mentors', label: 'Find Mentors', icon: FaSearch },
                { id: 'aiSuggest', label: 'AI Mentor', icon: FaRobot },
                { id: 'schedule', label: 'Meeting Schedule', icon: FaCalendar }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#5B8DEF] to-[#9B7BFF] text-white shadow-lg'
                      : 'bg-white text-gray-600 shadow-[4px_4px_8px_rgba(163,177,198,0.3),-4px_-4px_8px_rgba(255,255,255,0.5)]'
                  }`}
                >
                  <tab.icon />
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content - Neumorphism Card */}
          <div className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.5)] overflow-hidden">
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
                      <label className="block text-gray-600 font-semibold mb-3 text-sm uppercase"> Email</label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        disabled={!editMode}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50 font-semibold text-gray-800"
                      />
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                      <label className="block text-gray-600 font-semibold mb-3 text-sm uppercase"> Phone Number</label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                        disabled={!editMode}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50 font-semibold text-gray-800"
                      />
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                      <label className="block text-gray-600 font-semibold mb-3 text-sm uppercase">Languages</label>
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
                      <label className="block text-gray-800 font-bold mb-4 text-lg"> Professional Skills</label>
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
                      <label className="block text-gray-800 font-bold mb-4 text-lg"> Certifications</label>
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
                    <label className="block text-gray-800 font-bold mb-4 text-xl"> About Me</label>
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
                      <label className="block text-gray-800 font-bold mb-4 text-lg"> Career Goals</label>
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
                      <label className="block text-gray-800 font-bold mb-4 text-lg"> Completed Projects</label>
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
                    <label className="block text-gray-800 font-bold mb-4 text-xl flex items-center gap-2">
                      <FaStar className="text-yellow-500" />
                      🏆 Achievements & Awards
                    </label>
                    <textarea
                      value={profileData.achievements}
                      onChange={(e) => setProfileData({ ...profileData, achievements: e.target.value })}
                      disabled={!editMode}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-white/70 text-gray-800 text-lg"
                      placeholder="e.g., 2nd Place Hackathon 2024, Top 10% Outstanding Students..."
                    />
                  </div>

                  {/* Personal Info & Social Links */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Personal Details */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                        <FaUser className="text-blue-500" />
                        Personal Details
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-gray-600 font-semibold mb-2 text-sm">📍 Location</label>
                          <input
                            type="text"
                            value={profileData.location}
                            onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                            disabled={!editMode}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50"
                            placeholder="City, Country"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-600 font-semibold mb-2 text-sm">🎂 Birthday</label>
                          <input
                            type="text"
                            value={profileData.birthday}
                            onChange={(e) => setProfileData({ ...profileData, birthday: e.target.value })}
                            disabled={!editMode}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50"
                            placeholder="MM/DD/YYYY"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-600 font-semibold mb-2 text-sm">💼 Availability</label>
                          <input
                            type="text"
                            value={profileData.availability}
                            onChange={(e) => setProfileData({ ...profileData, availability: e.target.value })}
                            disabled={!editMode}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50"
                            placeholder="e.g., Available for internship"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Social & Portfolio Links */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                        <FaGraduationCap className="text-indigo-500" />
                        Social & Portfolio
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-gray-600 font-semibold mb-2 text-sm">LinkedIn Profile</label>
                          <input
                            type="text"
                            value={profileData.linkedin}
                            onChange={(e) => setProfileData({ ...profileData, linkedin: e.target.value })}
                            disabled={!editMode}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50"
                            placeholder="linkedin.com/in/yourname"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-600 font-semibold mb-2 text-sm">GitHub Profile</label>
                          <input
                            type="text"
                            value={profileData.github}
                            onChange={(e) => setProfileData({ ...profileData, github: e.target.value })}
                            disabled={!editMode}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50"
                            placeholder="github.com/yourname"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-600 font-semibold mb-2 text-sm">Portfolio Website</label>
                          <input
                            type="text"
                            value={profileData.portfolio}
                            onChange={(e) => setProfileData({ ...profileData, portfolio: e.target.value })}
                            disabled={!editMode}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-gray-50"
                            placeholder="yourportfolio.com"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Soft Skills & Hobbies */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-xl p-6 shadow-lg">
                      <label className="block text-gray-800 font-bold mb-4 text-lg flex items-center gap-2">
                        <FaLightbulb className="text-pink-500" />
                        💪 Soft Skills
                      </label>
                      <textarea
                        value={profileData.softSkills}
                        onChange={(e) => setProfileData({ ...profileData, softSkills: e.target.value })}
                        disabled={!editMode}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-white/70 text-gray-800"
                        placeholder="e.g., Leadership, Communication, Teamwork..."
                      />
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl p-6 shadow-lg">
                      <label className="block text-gray-800 font-bold mb-4 text-lg flex items-center gap-2">
                        <FaGraduationCap className="text-teal-500" />
                        🎨 Hobbies & Interests
                      </label>
                      <textarea
                        value={profileData.hobbies}
                        onChange={(e) => setProfileData({ ...profileData, hobbies: e.target.value })}
                        disabled={!editMode}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none disabled:bg-white/70 text-gray-800"
                        placeholder="e.g., Reading, Photography, Gaming..."
                      />
                    </div>
                  </div>

                  {/* Quick Stats Dashboard */}
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 shadow-2xl text-white">
                    <h4 className="font-bold text-2xl mb-6">📊 Your Progress Dashboard</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 text-center">
                        <div className="text-4xl font-black mb-2">12</div>
                        <div className="text-sm opacity-90">Courses Enrolled</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 text-center">
                        <div className="text-4xl font-black mb-2">8</div>
                        <div className="text-sm opacity-90">Completed</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 text-center">
                        <div className="text-4xl font-black mb-2">5</div>
                        <div className="text-sm opacity-90">Certifications</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 text-center">
                        <div className="text-4xl font-black mb-2">4</div>
                        <div className="text-sm opacity-90">Active Mentors</div>
                      </div>
                    </div>
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
                             Available
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                            Busy
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
                   Enter your skills, interests, and goals. Our AI will analyze and match you with the perfect mentors!
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
                        <label className="block text-gray-700 font-semibold mb-2"> Current Skills</label>
                        <textarea
                          value={aiFormData.skills}
                          onChange={(e) => setAiFormData({ ...aiFormData, skills: e.target.value })}
                          placeholder="e.g., React, Node.js, Python, UI/UX Design..."
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2"> Interests & Fields</label>
                        <textarea
                          value={aiFormData.interests}
                          onChange={(e) => setAiFormData({ ...aiFormData, interests: e.target.value })}
                          placeholder="e.g., Web Development, Mobile Apps, AI/ML, Data Science..."
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Career Goals</label>
                        <textarea
                          value={aiFormData.goals}
                          onChange={(e) => setAiFormData({ ...aiFormData, goals: e.target.value })}
                          placeholder="e.g., Become a Full Stack Developer, Get hired at FAANG companies..."
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2"> Experience Level</label>
                        <select
                          value={aiFormData.experience}
                          onChange={(e) => setAiFormData({ ...aiFormData, experience: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        >
                          <option value="">-- Select your level --</option>
                          <option value="beginner">Beginner (Just started)</option>
                          <option value="intermediate">Intermediate (1-2 years)</option>
                          <option value="advanced">Advanced (3+ years)</option>
                          <option value="expert">Expert (5+ years)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2"> Preferred Specialization</label>
                        <input
                          type="text"
                          value={aiFormData.preferredFields}
                          onChange={(e) => setAiFormData({ ...aiFormData, preferredFields: e.target.value })}
                          placeholder="e.g., Backend, Frontend, DevOps, Mobile Development..."
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none text-gray-800"
                        />
                      </div>

                      <button
                        onClick={async () => {
                          if (!aiFormData.skills || !aiFormData.goals) {
                            alert('⚠️ Please fill in at least Skills and Career Goals!');
                            return;
                          }
                          
                          setAiLoading(true);
                          setAiSuggestions(null);
                          
                          try {
                            const recommendations = await getAIMentorRecommendations(aiFormData);
                            setAiSuggestions(recommendations);
                          } catch (error: any) {
                            console.error('AI Recommendation Error:', error);
                            setAiSuggestions({ 
                              error: 'Failed to get recommendations',
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
                            Analyzing with AI...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                             Get AI Recommendations
                          </>
                        )}
                      </button>
                      
                      <p className="text-xs text-gray-500 text-center mt-2">
                        🤖 Powered by Google Gemini AI
                      </p>
                    </div>
                  </div>

                  {/* AI Results */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 shadow-xl max-h-[800px] overflow-y-auto">
                    <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                      <FaStar className="text-yellow-500" />
                      AI Analysis & Recommendations
                    </h4>

                    {!aiSuggestions ? (
                      <div className="text-center py-12">
                        <FaRobot className="text-6xl text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 text-lg mb-2">
                          Ready to find your perfect mentor! 🎯
                        </p>
                        <p className="text-gray-500 text-sm">
                          Fill in your information and click the button to get personalized AI recommendations
                        </p>
                      </div>
                    ) : aiSuggestions.error ? (
                      <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-lg">
                        <p className="text-red-700 font-semibold mb-2">❌ {aiSuggestions.error}</p>
                        <p className="text-red-600 text-sm">{aiSuggestions.message}</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {/* Analysis */}
                        {aiSuggestions.analysis && (
                          <div className="bg-blue-100 border-l-4 border-blue-500 p-5 rounded-lg">
                            <h5 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                              <FaLightbulb className="text-blue-600" />
                              Profile Analysis
                            </h5>
                            <p className="text-blue-800 leading-relaxed">{aiSuggestions.analysis}</p>
                          </div>
                        )}

                        {/* Recommendations */}
                        <div className="space-y-5">
                          <h5 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <FaStar className="text-yellow-500" />
                            Top 3 Recommended Mentors
                          </h5>
                          
                          {aiSuggestions.recommendations?.map((rec: any, index: number) => (
                            <motion.div
                              key={rec.mentorId}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.2 }}
                              className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200 hover:border-purple-400 transition-all"
                            >
                              {/* Mentor Header */}
                              <div className="flex items-start gap-4 mb-4">
                                <div className="relative">
                                  <img 
                                    src={rec.mentor.image} 
                                    alt={rec.mentor.name}
                                    className="w-20 h-20 rounded-full object-cover border-4 border-purple-300"
                                  />
                                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    #{index + 1}
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h6 className="text-xl font-bold text-gray-800">{rec.mentor.name}</h6>
                                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                                      {rec.matchScore}% Match
                                    </span>
                                  </div>
                                  <p className="text-[#06BBCC] font-semibold mb-1">{rec.mentor.title}</p>
                                  <p className="text-gray-600 text-sm">{rec.mentor.company} • {rec.mentor.experience}</p>
                                  <div className="flex items-center gap-3 mt-2 text-sm">
                                    <span className="flex items-center gap-1 text-yellow-600">
                                      <FaStar /> {rec.mentor.rating}
                                    </span>
                                    <span className="text-gray-600">•</span>
                                    <span className="text-gray-600">{rec.mentor.students} students</span>
                                  </div>
                                </div>
                              </div>

                              {/* Match Reasoning */}
                              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                                <p className="font-semibold text-purple-900 mb-2">✨ Why This Match:</p>
                                <p className="text-purple-800 text-sm leading-relaxed">{rec.reasoning}</p>
                              </div>

                              {/* Skills */}
                              <div className="mb-4">
                                <p className="font-semibold text-gray-700 mb-2 text-sm">🎯 Mentor Expertise:</p>
                                <div className="flex flex-wrap gap-2">
                                  {rec.mentor.skills.slice(0, 6).map((skill: string) => (
                                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Suggested Topics */}
                              <div className="mb-4">
                                <p className="font-semibold text-gray-700 mb-2 text-sm">📚 What You'll Learn:</p>
                                <ul className="space-y-1">
                                  {rec.suggestedTopics.map((topic: string, i: number) => (
                                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                      <span>{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Learning Path */}
                              <div className="mb-4">
                                <p className="font-semibold text-gray-700 mb-2 text-sm">🗺️ Recommended Learning Path:</p>
                                <div className="space-y-2">
                                  {rec.learningPath.map((step: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3 text-sm">
                                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                                        {i + 1}
                                      </div>
                                      <p className="text-gray-600 pt-0.5">{step}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Contact & Schedule */}
                              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                                <button
                                  onClick={() => {
                                    setSelectedMentor(rec.mentor);
                                    setShowMeetingModal(true);
                                  }}
                                  className="flex-1 px-4 py-3 bg-gradient-to-r from-[#06BBCC] to-blue-600 text-white rounded-lg font-bold hover:from-blue-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2"
                                >
                                  <FaCalendar />
                                  Schedule Meeting
                                </button>
                                <button
                                  onClick={() => navigate(`/mentor/${rec.mentor.id}`)}
                                  className="flex-1 px-4 py-3 bg-white border-2 border-[#06BBCC] text-[#06BBCC] rounded-lg font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                                >
                                  <FaUser />
                                  View Profile
                                </button>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Career Advice */}
                        {aiSuggestions.careerAdvice && (
                          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6 border-l-4 border-yellow-500">
                            <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                              <FaLightbulb className="text-yellow-600" />
                              Career Guidance for You
                            </h5>
                            <p className="text-gray-700 leading-relaxed mb-4">{aiSuggestions.careerAdvice}</p>
                            
                            {aiSuggestions.nextSteps && (
                              <div className="mt-4">
                                <p className="font-semibold text-gray-800 mb-2">📝 Next Steps:</p>
                                <ul className="space-y-2">
                                  {aiSuggestions.nextSteps.map((step: string, i: number) => (
                                    <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                                      <span className="text-orange-500 font-bold">{i + 1}.</span>
                                      <span>{step}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Meeting Scheduling Modal */}
                {showMeetingModal && selectedMentor && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                          <FaCalendar className="text-[#06BBCC]" />
                          Schedule Meeting with {selectedMentor.name}
                        </h3>
                        <button
                          onClick={() => {
                            setShowMeetingModal(false);
                            setMeetingForm({ preferredTime: '', topic: '', message: '' });
                          }}
                          className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                          ×
                        </button>
                      </div>

                      {/* Mentor Info */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 mb-6">
                        <div className="flex items-center gap-4">
                          <img 
                            src={selectedMentor.image} 
                            alt={selectedMentor.name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-white"
                          />
                          <div>
                            <h4 className="font-bold text-gray-800 text-lg">{selectedMentor.name}</h4>
                            <p className="text-[#06BBCC] font-semibold">{selectedMentor.title}</p>
                            <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <FaStar className="text-yellow-500" /> {selectedMentor.rating}
                              </span>
                              <span>•</span>
                              <span>{selectedMentor.students} students</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Availability */}
                      <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-3">📅 Mentor's Available Times:</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedMentor.availability.map((slot: any, i: number) => (
                            <button
                              key={i}
                              onClick={() => slot.available && setMeetingForm({ ...meetingForm, preferredTime: `${slot.day} ${slot.time}` })}
                              disabled={!slot.available}
                              className={`p-4 rounded-lg border-2 text-left transition-all ${
                                slot.available
                                  ? meetingForm.preferredTime === `${slot.day} ${slot.time}`
                                    ? 'border-[#06BBCC] bg-blue-50'
                                    : 'border-gray-300 hover:border-blue-400'
                                  : 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                              }`}
                            >
                              <div className="font-semibold text-gray-800">{slot.day}</div>
                              <div className="text-sm text-gray-600">{slot.time}</div>
                              {!slot.available && <div className="text-xs text-red-500 mt-1">Not Available</div>}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Meeting Form */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">📌 Meeting Topic:</label>
                          <input
                            type="text"
                            value={meetingForm.topic}
                            onChange={(e) => setMeetingForm({ ...meetingForm, topic: e.target.value })}
                            placeholder="e.g., React Project Review, Career Guidance, Technical Interview Prep..."
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">💬 Additional Message:</label>
                          <textarea
                            value={meetingForm.message}
                            onChange={(e) => setMeetingForm({ ...meetingForm, message: e.target.value })}
                            placeholder="Tell the mentor what you'd like to discuss, any specific questions, or goals for the meeting..."
                            rows={4}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none"
                          />
                        </div>

                        <button
                          onClick={async () => {
                            if (!meetingForm.preferredTime || !meetingForm.topic) {
                              alert('⚠️ Please select a time slot and enter a meeting topic!');
                              return;
                            }

                            setMeetingLoading(true);
                            
                            const result = await scheduleMentorMeeting(selectedMentor.id, {
                              name: profileData.name,
                              email: profileData.email,
                              preferredTime: meetingForm.preferredTime,
                              topic: meetingForm.topic,
                              message: meetingForm.message
                            });

                            setMeetingLoading(false);

                            if (result.success) {
                              alert(`✅ Meeting request sent successfully!\n\nMeeting ID: ${result.meetingId}\n\nThe mentor will contact you via email to confirm the meeting.`);
                              setShowMeetingModal(false);
                              setMeetingForm({ preferredTime: '', topic: '', message: '' });
                            } else {
                              alert(`❌ Failed to schedule meeting: ${result.error}`);
                            }
                          }}
                          disabled={meetingLoading}
                          className="w-full px-8 py-4 bg-gradient-to-r from-[#06BBCC] to-blue-600 text-white rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                          {meetingLoading ? (
                            <>
                              <div className="animate-spin w-6 h-6 border-4 border-white border-t-transparent rounded-full"></div>
                              Sending Request...
                            </>
                          ) : (
                            <>
                              <FaCheckCircle />
                              Send Meeting Request
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
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
                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer"
                        onClick={() => navigate(`/course/${course.id}`)}
                      >
                        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="text-xl font-bold text-gray-800 mb-1">{course.title}</h4>
                              <p className="text-sm text-gray-600">👨‍🏫 {course.instructor}</p>
                            </div>
                            <span className="px-4 py-2 bg-gradient-to-r from-[#06BBCC] to-blue-600 text-white rounded-full font-bold text-sm">
                              {course.progress}%
                            </span>
                          </div>
                          
                          <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                              <span>📚 {course.completedLessons} / {course.totalLessons} lessons</span>
                              <span>⏱️ {course.hours}h</span>
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
                            <p className="font-semibold text-gray-800">▶️ {course.nextLesson}</p>
                          </div>

                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-400">⭐</span>
                              <span className="font-bold text-gray-800">{course.rating}</span>
                              <span className="text-sm text-gray-500">({course.reviews} reviews)</span>
                            </div>
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                              {course.level}
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/course/${course.id}`);
                              }}
                              className="flex-1 px-6 py-3 bg-gradient-to-r from-[#06BBCC] to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                              <FaBook /> Continue Learning
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/course/${course.id}`);
                              }}
                              className="px-6 py-3 border-2 border-[#06BBCC] text-[#06BBCC] rounded-lg hover:bg-[#06BBCC] hover:text-white transition-all font-semibold flex items-center gap-2"
                              title="Xem chi tiết khóa học"
                            >
                              <FaEye /> Chi tiết
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
    </div>
  );
};

export default StudentDashboard;
