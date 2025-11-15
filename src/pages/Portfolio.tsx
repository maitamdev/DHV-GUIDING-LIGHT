import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaGlobe, FaDownload, FaCertificate, FaTrophy, FaCode, FaStar, FaProjectDiagram, FaCalendar, FaEdit, FaSave, FaTimes, FaPlus, FaTrash, FaCheck } from 'react-icons/fa';

const Portfolio = () => {
  const navigate = useNavigate();
  const { currentUser, userData } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'certificates' | 'skills'>('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [newSkill, setNewSkill] = useState({ name: '', level: 50, category: 'Frontend' });

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  // Mock data - In production, fetch from Firestore
  const [portfolioData, setPortfolioData] = useState({
    name: (userData as any)?.name || 'Mai Tran Thien Tam',
    title: 'Full Stack Developer | Data Science Enthusiast',
    bio: 'Passionate learner on DHV Guiding Light platform. Completed multiple courses and built real-world projects in web development and data science.',
    email: currentUser?.email || '',
    github: 'github.com/student',
    linkedin: 'linkedin.com/in/student',
    website: 'studentportfolio.com',
    profileImage: '/img/team-1.jpg',
    
    stats: {
      coursesCompleted: 5,
      projectsBuilt: 12,
      certificatesEarned: 5,
      totalHours: 340,
      skillsMastered: 24
    },

    completedCourses: [
      { 
        id: 1, 
        title: 'Web Development Full Stack', 
        completedDate: '2024-11-01', 
        grade: 95,
        certificate: '/certificates/web-dev-cert.pdf'
      },
      { 
        id: 2, 
        title: 'React & Node.js Bootcamp', 
        completedDate: '2024-10-15', 
        grade: 92,
        certificate: '/certificates/react-node-cert.pdf'
      },
      { 
        id: 5, 
        title: 'Data Science & Analytics', 
        completedDate: '2024-09-20', 
        grade: 88,
        certificate: '/certificates/data-science-cert.pdf'
      },
    ],

    projects: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce application with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: '/img/course-1.jpg',
        githubLink: 'github.com/student/ecommerce',
        liveLink: 'ecommerce-demo.com',
        completedDate: '2024-10-25'
      },
      {
        id: 2,
        title: 'Social Media Dashboard',
        description: 'Real-time social media analytics dashboard with data visualization. Built with React, D3.js, and Firebase.',
        technologies: ['React', 'D3.js', 'Firebase', 'Tailwind CSS'],
        image: '/img/course-2.jpg',
        githubLink: 'github.com/student/social-dashboard',
        liveLink: 'social-dashboard-demo.com',
        completedDate: '2024-10-10'
      },
      {
        id: 3,
        title: 'Weather Forecast App',
        description: 'Mobile weather application using React Native with geolocation and weather API integration.',
        technologies: ['React Native', 'APIs', 'Geolocation'],
        image: '/img/course-3.jpg',
        githubLink: 'github.com/student/weather-app',
        liveLink: null,
        completedDate: '2024-09-28'
      },
      {
        id: 4,
        title: 'Customer Churn Prediction',
        description: 'Machine learning model to predict customer churn using Python, scikit-learn, and data analysis techniques.',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
        image: '/img/course-1.jpg',
        githubLink: 'github.com/student/churn-prediction',
        liveLink: null,
        completedDate: '2024-09-15'
      }
    ],

    skills: [
      { name: 'JavaScript', level: 95, category: 'Frontend' },
      { name: 'React.js', level: 92, category: 'Frontend' },
      { name: 'Node.js', level: 88, category: 'Backend' },
      { name: 'Python', level: 85, category: 'Data Science' },
      { name: 'MongoDB', level: 82, category: 'Database' },
      { name: 'HTML/CSS', level: 98, category: 'Frontend' },
      { name: 'TypeScript', level: 87, category: 'Frontend' },
      { name: 'Express.js', level: 85, category: 'Backend' },
      { name: 'Pandas', level: 80, category: 'Data Science' },
      { name: 'Git', level: 90, category: 'Tools' },
      { name: 'Docker', level: 75, category: 'DevOps' },
      { name: 'AWS', level: 70, category: 'Cloud' }
    ],

    certificates: [
      { 
        id: 1, 
        title: 'Web Development Full Stack Certificate',
        issueDate: '2024-11-01',
        credentialId: 'DHV-WEB-2024-1234',
        image: '/img/course-1.jpg'
      },
      { 
        id: 2, 
        title: 'React & Node.js Bootcamp Certificate',
        issueDate: '2024-10-15',
        credentialId: 'DHV-REACT-2024-5678',
        image: '/img/course-2.jpg'
      },
      { 
        id: 3, 
        title: 'Data Science & Analytics Certificate',
        issueDate: '2024-09-20',
        credentialId: 'DHV-DATA-2024-9101',
        image: '/img/course-3.jpg'
      }
    ]
  });

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSaving(false);
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleAddSkill = () => {
    if (newSkill.name.trim()) {
      setPortfolioData(prev => ({
        ...prev,
        skills: [...prev.skills, { ...newSkill }],
        stats: { ...prev.stats, skillsMastered: prev.stats.skillsMastered + 1 }
      }));
      setNewSkill({ name: '', level: 50, category: 'Frontend' });
    }
  };

  const handleRemoveSkill = (index: number) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
      stats: { ...prev.stats, skillsMastered: Math.max(0, prev.stats.skillsMastered - 1) }
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container mx-auto px-4">
        
        {/* Success Notification */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <FaCheck className="text-green-600" />
              </div>
              <div>
                <p className="font-bold text-lg">Portfolio Updated!</p>
                <p className="text-sm text-white/90">Your changes have been saved successfully</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Header Card */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="bg-gradient-to-r from-[#27E0A7] via-[#1BC6D5] to-[#06BBCC] rounded-3xl shadow-2xl p-8 text-white relative">
            
            {/* Edit/Save Button */}
            <div className="absolute top-6 right-6 z-10">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-[#1BC6D5] rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  <FaEdit /> Edit Portfolio
                </button>
              ) : (
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl font-bold transition-all"
                  >
                    <FaTimes /> Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-[#1BC6D5] rounded-xl font-bold hover:shadow-xl transition-all disabled:opacity-50"
                  >
                    {isSaving ? (
                      <>
                        <div className="w-5 h-5 border-3 border-[#1BC6D5] border-t-transparent rounded-full animate-spin"></div>
                        Saving...
                      </>
                    ) : (
                      <>
                        <FaSave /> Save Changes
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src={portfolioData.profileImage} alt={portfolioData.name} className="w-32 h-32 rounded-full border-4 border-white shadow-xl" />
              <div className="flex-1 text-center md:text-left">
                {isEditing ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={portfolioData.name}
                      onChange={(e) => setPortfolioData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 text-4xl font-bold bg-white/20 border-2 border-white/50 rounded-xl focus:border-white focus:outline-none text-white placeholder-white/70"
                      placeholder="Your Name"
                    />
                    <input
                      type="text"
                      value={portfolioData.title}
                      onChange={(e) => setPortfolioData(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-4 py-3 text-xl bg-white/20 border-2 border-white/50 rounded-xl focus:border-white focus:outline-none text-white placeholder-white/70"
                      placeholder="Your Title"
                    />
                    <textarea
                      value={portfolioData.bio}
                      onChange={(e) => setPortfolioData(prev => ({ ...prev, bio: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/20 border-2 border-white/50 rounded-xl focus:border-white focus:outline-none text-white placeholder-white/70 resize-none"
                      placeholder="Your Bio"
                      rows={3}
                    />
                    <div className="grid md:grid-cols-3 gap-3">
                      <input
                        type="text"
                        value={portfolioData.github}
                        onChange={(e) => setPortfolioData(prev => ({ ...prev, github: e.target.value }))}
                        className="px-4 py-2 bg-white/20 border-2 border-white/50 rounded-xl focus:border-white focus:outline-none text-white placeholder-white/70"
                        placeholder="GitHub URL"
                      />
                      <input
                        type="text"
                        value={portfolioData.linkedin}
                        onChange={(e) => setPortfolioData(prev => ({ ...prev, linkedin: e.target.value }))}
                        className="px-4 py-2 bg-white/20 border-2 border-white/50 rounded-xl focus:border-white focus:outline-none text-white placeholder-white/70"
                        placeholder="LinkedIn URL"
                      />
                      <input
                        type="text"
                        value={portfolioData.website}
                        onChange={(e) => setPortfolioData(prev => ({ ...prev, website: e.target.value }))}
                        className="px-4 py-2 bg-white/20 border-2 border-white/50 rounded-xl focus:border-white focus:outline-none text-white placeholder-white/70"
                        placeholder="Website URL"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">{portfolioData.name}</h1>
                    <p className="text-xl text-white/90 mb-4">{portfolioData.title}</p>
                    <p className="text-white/80 mb-4 max-w-3xl">{portfolioData.bio}</p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <a href={`https://${portfolioData.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                        <FaGithub /> GitHub
                      </a>
                      <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                        <FaLinkedin /> LinkedIn
                      </a>
                      <a href={`https://${portfolioData.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                        <FaGlobe /> Website
                      </a>
                      <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#1BC6D5] hover:bg-gray-100 rounded-lg transition-colors font-semibold">
                        <FaDownload /> Download PDF
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { icon: FaCertificate, label: 'Certificates', value: portfolioData.stats.certificatesEarned, color: 'from-green-500 to-green-600' },
            { icon: FaProjectDiagram, label: 'Projects', value: portfolioData.stats.projectsBuilt, color: 'from-blue-500 to-blue-600' },
            { icon: FaTrophy, label: 'Courses', value: portfolioData.stats.coursesCompleted, color: 'from-yellow-500 to-yellow-600' },
            { icon: FaCode, label: 'Skills', value: portfolioData.stats.skillsMastered, color: 'from-purple-500 to-purple-600' },
            { icon: FaStar, label: 'Hours', value: portfolioData.stats.totalHours, color: 'from-red-500 to-red-600' }
          ].map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className={`bg-gradient-to-br ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className="text-white text-xl" />
              </div>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'overview', label: 'Overview', icon: FaStar },
              { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
              { id: 'certificates', label: 'Certificates', icon: FaCertificate },
              { id: 'skills', label: 'Skills', icon: FaCode }
            ].map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === tab.id ? 'bg-gradient-to-r from-[#06BBCC] to-blue-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}>
                <tab.icon /> {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Completed Courses</h3>
                <div className="space-y-3">
                  {portfolioData.completedCourses.map((course) => (
                    <div key={course.id} className="border-l-4 border-[#06BBCC] bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800">{course.title}</h4>
                      <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                        <span>Grade: {course.grade}%</span>
                        <span className="flex items-center gap-1"><FaCalendar className="text-xs" /> {new Date(course.completedDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Projects</h3>
                <div className="space-y-3">
                  {portfolioData.projects.slice(0, 3).map((project) => (
                    <div key={project.id} className="border border-gray-200 p-4 rounded-lg hover:border-[#06BBCC] transition-colors">
                      <h4 className="font-bold text-gray-800 mb-2">{project.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">{tech}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.projects.map((project) => (
                <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gradient-to-r from-[#06BBCC] to-blue-600 text-white text-sm rounded-full">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={`https://${project.githubLink}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border-2 border-[#06BBCC] text-[#06BBCC] rounded-lg hover:bg-[#06BBCC] hover:text-white transition-colors">
                        <FaGithub /> Code
                      </a>
                      {project.liveLink && (
                        <a href={`https://${project.liveLink}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#06BBCC] text-white rounded-lg hover:bg-[#05a3b3] transition-colors">
                          <FaGlobe /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioData.certificates.map((cert) => (
                <motion.div key={cert.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-br from-[#06BBCC] to-purple-600 p-6">
                    <FaCertificate className="text-white text-5xl mb-4" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">Issued: {new Date(cert.issueDate).toLocaleDateString()}</p>
                    <p className="text-xs text-gray-500 mb-4">ID: {cert.credentialId}</p>
                    <button className="w-full px-4 py-2 bg-[#06BBCC] text-white rounded-lg hover:bg-[#05a3b3] transition-colors flex items-center justify-center gap-2">
                      <FaDownload /> Download
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-gray-800">Technical Skills</h3>
                {isEditing && (
                  <p className="text-sm text-gray-500">Click trash icon to remove skills, or add new ones below</p>
                )}
              </div>

              {/* Add Skill Form (Edit Mode) */}
              {isEditing && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-gradient-to-r from-[#27E0A7]/10 to-[#1BC6D5]/10 border-2 border-[#1BC6D5]/30 rounded-2xl p-6 mb-6"
                >
                  <h4 className="font-bold text-lg text-gray-800 mb-4">Add New Skill</h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <input
                      type="text"
                      value={newSkill.name}
                      onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
                      className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#1BC6D5] focus:outline-none"
                      placeholder="Skill name (e.g., Python)"
                    />
                    <select
                      value={newSkill.category}
                      onChange={(e) => setNewSkill(prev => ({ ...prev, category: e.target.value }))}
                      className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#1BC6D5] focus:outline-none"
                    >
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Database">Database</option>
                      <option value="DevOps">DevOps</option>
                      <option value="Cloud">Cloud</option>
                      <option value="Tools">Tools</option>
                    </select>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={newSkill.level}
                        onChange={(e) => setNewSkill(prev => ({ ...prev, level: parseInt(e.target.value) }))}
                        className="flex-1"
                      />
                      <span className="font-bold text-[#1BC6D5] w-12 text-center">{newSkill.level}%</span>
                    </div>
                    <button
                      onClick={handleAddSkill}
                      className="px-6 py-3 bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] text-white rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      <FaPlus /> Add
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Skills List */}
              <div className="space-y-6">
                {['Frontend', 'Backend', 'Data Science', 'Database', 'DevOps', 'Cloud', 'Tools'].map((category) => {
                  const categorySkills = portfolioData.skills.filter(s => s.category === category);
                  if (categorySkills.length === 0) return null;
                  return (
                    <div key={category}>
                      <h4 className="font-bold text-lg text-gray-700 mb-3">{category}</h4>
                      <div className="space-y-3">
                        {categorySkills.map((skill, i) => {
                          const skillIndex = portfolioData.skills.findIndex(
                            s => s.name === skill.name && s.category === skill.category
                          );
                          return (
                            <div key={i} className="relative group">
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-700 font-medium">{skill.name}</span>
                                <div className="flex items-center gap-3">
                                  <span className="text-gray-600">{skill.level}%</span>
                                  {isEditing && (
                                    <button
                                      onClick={() => handleRemoveSkill(skillIndex)}
                                      className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                                    >
                                      <FaTrash className="text-sm" />
                                    </button>
                                  )}
                                </div>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: i * 0.1 }} className="bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] h-full rounded-full" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
