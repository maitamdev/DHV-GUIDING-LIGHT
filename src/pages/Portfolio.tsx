import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaGlobe, FaDownload, FaCertificate, FaTrophy, FaCode, FaStar, FaProjectDiagram, FaCalendar, FaEdit, FaSave, FaTimes, FaPlus, FaTrash, FaCheck, FaEye } from 'react-icons/fa';
import { CVTemplate, sampleCVData } from '../components/CVTemplate';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { getOrCreatePortfolio, updateUserPortfolio, PortfolioData } from '../services/portfolioService';

const Portfolio = () => {
  const navigate = useNavigate();
  const { currentUser, userData } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'certificates' | 'skills' | 'cv'>('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [newSkill, setNewSkill] = useState({ name: '', level: 50, category: 'Frontend' });

  // Initialize portfolio data from Firestore
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    // Load portfolio data from Firestore
    const loadPortfolio = async () => {
      try {
        setIsLoading(true);
        const data = await getOrCreatePortfolio(
          currentUser.uid,
          currentUser.email || '',
          (userData as any)?.name
        );
        setPortfolioData(data);
      } catch (error) {
        console.error('Error loading portfolio:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPortfolio();
  }, [currentUser, navigate, userData]);

  const handleSave = async () => {
    if (!currentUser || !portfolioData) return;
    
    setIsSaving(true);
    try {
      await updateUserPortfolio(currentUser.uid, portfolioData);
      setIsEditing(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error saving portfolio:', error);
      alert('Failed to save portfolio. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddSkill = () => {
    if (!portfolioData || !newSkill.name.trim()) return;
    
    setPortfolioData(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        skills: [...prev.skills, { ...newSkill }],
        stats: { ...prev.stats, skillsMastered: prev.stats.skillsMastered + 1 }
      };
    });
    setNewSkill({ name: '', level: 50, category: 'Frontend' });
  };

  const handleRemoveSkill = (index: number) => {
    if (!portfolioData) return;
    
    setPortfolioData(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        skills: prev.skills.filter((_, i) => i !== index),
        stats: { ...prev.stats, skillsMastered: Math.max(0, prev.stats.skillsMastered - 1) }
      };
    });
  };

  const handleDownloadCV = async () => {
    if (!portfolioData) return;
    
    const cvElement = document.getElementById('cv-preview');
    if (!cvElement) return;

    try {
      const canvas = await html2canvas(cvElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${portfolioData.name.replace(/\s+/g, '_')}_CV.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to download CV. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container mx-auto px-4">
        
        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-[#001A66] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-xl text-gray-600">Loading your portfolio...</p>
            </div>
          </div>
        )}

        {/* Portfolio Content */}
        {!isLoading && portfolioData && (
          <>
        
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
          <div className="bg-gradient-to-r from-[#001A66] via-[#001A66] to-[#001A66] rounded-3xl shadow-2xl p-8 text-white relative">
            
            {/* Edit/Save Button */}
            <div className="absolute top-6 right-6 z-10">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-[#001A66] rounded-xl font-bold hover:shadow-xl transition-all"
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
                    className="flex items-center gap-2 px-6 py-3 bg-white text-[#001A66] rounded-xl font-bold hover:shadow-xl transition-all disabled:opacity-50"
                  >
                    {isSaving ? (
                      <>
                        <div className="w-5 h-5 border-3 border-[#001A66] border-t-transparent rounded-full animate-spin"></div>
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
                      onChange={(e) => setPortfolioData(prev => prev ? { ...prev, name: e.target.value } : prev)}
                      className="w-full px-4 py-3 text-4xl font-bold bg-white/20 border-2 border-white/50 rounded-xl focus:border-white focus:outline-none text-white placeholder-white/70"
                      placeholder="Your Name"
                    />
                    <input
                      type="text"
                      value={portfolioData.title}
                      onChange={(e) => setPortfolioData(prev => prev ? { ...prev, title: e.target.value } : prev)}
                      className="w-full px-4 py-3 text-xl bg-white/20 border-2 border-white/50 rounded-xl focus:border-white focus:outline-none text-white placeholder-white/70"
                      placeholder="Your Title"
                    />
                    <textarea
                      value={portfolioData.bio}
                      onChange={(e) => setPortfolioData(prev => prev ? { ...prev, bio: e.target.value } : prev)}
                      className="w-full px-4 py-3 bg-white/20 border-2 border-white/50 rounded-xl focus:border-white focus:outline-none text-white placeholder-white/70 resize-none"
                      placeholder="Your Bio"
                      rows={3}
                    />
                    <div className="grid md:grid-cols-3 gap-3">
                      <input
                        type="text"
                        value={portfolioData.github}
                        onChange={(e) => setPortfolioData(prev => prev ? { ...prev, github: e.target.value } : prev)}
                        className="px-4 py-2 bg-white/20 border-2 border-white/50 rounded-xl focus:border-white focus:outline-none text-white placeholder-white/70"
                        placeholder="GitHub URL"
                      />
                      <input
                        type="text"
                        value={portfolioData.linkedin}
                        onChange={(e) => setPortfolioData(prev => prev ? { ...prev, linkedin: e.target.value } : prev)}
                        className="px-4 py-2 bg-white/20 border-2 border-white/50 rounded-xl focus:border-white focus:outline-none text-white placeholder-white/70"
                        placeholder="LinkedIn URL"
                      />
                      <input
                        type="text"
                        value={portfolioData.website}
                        onChange={(e) => setPortfolioData(prev => prev ? { ...prev, website: e.target.value } : prev)}
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
                      <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#001A66] hover:bg-gray-100 rounded-lg transition-colors font-semibold">
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
              { id: 'skills', label: 'Skills', icon: FaCode },
              { id: 'cv', label: 'CV Preview', icon: FaEye }
            ].map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === tab.id ? 'bg-gradient-to-r from-[#001A66] to-blue-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}>
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
                    <div key={course.id} className="border-l-4 border-[#001A66] bg-blue-50 p-4 rounded-lg">
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
                    <div key={project.id} className="border border-gray-200 p-4 rounded-lg hover:border-[#001A66] transition-colors">
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
                        <span key={i} className="px-3 py-1 bg-gradient-to-r from-[#001A66] to-blue-600 text-white text-sm rounded-full">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={`https://${project.githubLink}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border-2 border-[#001A66] text-[#001A66] rounded-lg hover:bg-[#001A66] hover:text-white transition-colors">
                        <FaGithub /> Code
                      </a>
                      {project.liveLink && (
                        <a href={`https://${project.liveLink}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#001A66] text-white rounded-lg hover:bg-[#001A66] transition-colors">
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
                  <div className="bg-gradient-to-br from-[#001A66] to-purple-600 p-6">
                    <FaCertificate className="text-white text-5xl mb-4" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">Issued: {new Date(cert.issueDate).toLocaleDateString()}</p>
                    <p className="text-xs text-gray-500 mb-4">ID: {cert.credentialId}</p>
                    <button className="w-full px-4 py-2 bg-[#001A66] text-white rounded-lg hover:bg-[#001A66] transition-colors flex items-center justify-center gap-2">
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
                  className="bg-gradient-to-r from-[#001A66]/10 to-[#001A66]/10 border-2 border-[#001A66]/30 rounded-2xl p-6 mb-6"
                >
                  <h4 className="font-bold text-lg text-gray-800 mb-4">Add New Skill</h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <input
                      type="text"
                      value={newSkill.name}
                      onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
                      className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#001A66] focus:outline-none"
                      placeholder="Skill name (e.g., Python)"
                    />
                    <select
                      value={newSkill.category}
                      onChange={(e) => setNewSkill(prev => ({ ...prev, category: e.target.value }))}
                      className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#001A66] focus:outline-none"
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
                      <span className="font-bold text-[#001A66] w-12 text-center">{newSkill.level}%</span>
                    </div>
                    <button
                      onClick={handleAddSkill}
                      className="px-6 py-3 bg-gradient-to-r from-[#001A66] to-[#001A66] text-white rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
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
                                <motion.div initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: i * 0.1 }} className="bg-gradient-to-r from-[#001A66] to-[#001A66] h-full rounded-full" />
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

          {/* CV Preview Tab */}
          {activeTab === 'cv' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">CV Preview</h3>
                  <p className="text-gray-600">Professional resume in Canva style - Ready to download</p>
                </div>
                <button
                  onClick={handleDownloadCV}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#001A66] to-[#003399] text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  <FaDownload /> Download PDF
                </button>
              </div>

              <div className="border-4 border-gray-200 rounded-lg overflow-hidden">
                <div id="cv-preview" className="bg-white">
                  <CVTemplate data={{
                    ...sampleCVData,
                    personal: {
                      ...sampleCVData.personal,
                      name: portfolioData.name,
                      title: portfolioData.title,
                      email: portfolioData.email,
                      avatar: portfolioData.profileImage,
                      website: portfolioData.website,
                      phone: '+84 123 456 789',
                      location: 'Ho Chi Minh City, Vietnam'
                    },
                    summary: portfolioData.bio,
                    social: [
                      { platform: 'GitHub', url: portfolioData.github, icon: '💻' },
                      { platform: 'LinkedIn', url: portfolioData.linkedin, icon: '💼' },
                      { platform: 'Website', url: portfolioData.website, icon: '🌐' }
                    ],
                    skills: portfolioData.skills.slice(0, 6).map(s => ({
                      name: s.name,
                      level: s.level
                    })),
                    projects: portfolioData.projects.slice(0, 2).map(p => ({
                      name: p.title,
                      description: p.description,
                      technologies: p.technologies
                    })),
                    certificates: portfolioData.completedCourses.map(c => ({
                      name: c.title,
                      issuer: 'DHV Guiding Light',
                      date: new Date(c.completedDate).getFullYear().toString()
                    }))
                  }} />
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-blue-700">💡 Tip:</strong> This CV is automatically generated from your portfolio data. 
                  Update your profile, projects, and skills to see changes reflected in the CV!
                </p>
              </div>
            </div>
          )}
        </motion.div>
        </>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
