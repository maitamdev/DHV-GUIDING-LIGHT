import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaCode, FaChartLine, FaDownload, FaStar, FaAward, FaGraduationCap, FaLightbulb } from 'react-icons/fa';

interface Skill {
  name: string;
  level: number;
  category: string;
  evidence: string[];
}

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verified: boolean;
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  type: 'award' | 'project' | 'competition' | 'certification';
  impact: string;
}

interface CompetencyData {
  overallScore: number;
  skills: Skill[];
  certificates: Certificate[];
  achievements: Achievement[];
  strengths: string[];
  areasForImprovement: string[];
  recommendations: string[];
}

const CompetencyProfile = () => {
  const [competencyData, setCompetencyData] = useState<CompetencyData>({
    overallScore: 0,
    skills: [],
    certificates: [],
    achievements: [],
    strengths: [],
    areasForImprovement: [],
    recommendations: []
  });

  const [isLoading, setIsLoading] = useState(true);

  // Auto-update competency profile based on user data
  useEffect(() => {
    const fetchAndCalculateCompetency = async () => {
      setIsLoading(true);
      
      // Simulate fetching user data from various sources
      const userSkills: Skill[] = [
        {
          name: 'React.js',
          level: 85,
          category: 'Frontend',
          evidence: ['5 completed projects', 'Advanced React course certificate', '2 years experience']
        },
        {
          name: 'Node.js',
          level: 75,
          category: 'Backend',
          evidence: ['3 REST API projects', 'Node.js certification', 'Mentor feedback: Excellent']
        },
        {
          name: 'Python',
          level: 70,
          category: 'Programming',
          evidence: ['Data Science course completed', '10+ coding challenges solved', 'ML project']
        },
        {
          name: 'UI/UX Design',
          level: 60,
          category: 'Design',
          evidence: ['Figma course completed', '2 design projects', 'User testing participation']
        },
        {
          name: 'Git & GitHub',
          level: 80,
          category: 'DevOps',
          evidence: ['Daily commits', '15+ repositories', 'Open source contributions']
        }
      ];

      const userCertificates: Certificate[] = [
        {
          title: 'AWS Cloud Practitioner',
          issuer: 'Amazon Web Services',
          date: 'October 2024',
          credentialId: 'AWS-12345678',
          verified: true
        },
        {
          title: 'Advanced React & Redux',
          issuer: 'Udemy',
          date: 'September 2024',
          credentialId: 'UC-REACT-2024',
          verified: true
        },
        {
          title: 'Google UX Design Professional',
          issuer: 'Google',
          date: 'August 2024',
          credentialId: 'GOOGLE-UX-789',
          verified: true
        },
        {
          title: 'Python for Data Science',
          issuer: 'IBM',
          date: 'July 2024',
          credentialId: 'IBM-DS-456',
          verified: true
        }
      ];

      const userAchievements: Achievement[] = [
        {
          title: '2nd Place - National Hackathon 2024',
          description: 'Built an AI-powered learning platform in 48 hours with team of 4',
          date: 'November 2024',
          type: 'competition',
          impact: 'Won $5,000 prize, gained industry recognition'
        },
        {
          title: 'E-commerce Full Stack Project',
          description: 'Complete online store with React, Node.js, MongoDB, and payment integration',
          date: 'October 2024',
          type: 'project',
          impact: 'Deployed live, serving 500+ users monthly'
        },
        {
          title: 'Top 10% Student',
          description: 'Ranked in top 10% of class with GPA 3.8/4.0',
          date: 'September 2024',
          type: 'award',
          impact: 'Dean\'s List recognition'
        },
        {
          title: 'Open Source Contributor',
          description: 'Contributed to 5 major open source projects with 20+ merged PRs',
          date: 'Ongoing',
          type: 'project',
          impact: 'Enhanced community reputation, networking'
        }
      ];

      // Calculate overall competency score
      const avgSkillLevel = userSkills.reduce((sum, skill) => sum + skill.level, 0) / userSkills.length;
      const certificateBonus = userCertificates.length * 5;
      const achievementBonus = userAchievements.length * 3;
      const overallScore = Math.min(100, Math.round(avgSkillLevel + certificateBonus + achievementBonus));

      // Identify strengths
      const strengths = userSkills
        .filter(skill => skill.level >= 75)
        .map(skill => `${skill.name} (${skill.level}%)`);

      // Areas for improvement
      const areasForImprovement = userSkills
        .filter(skill => skill.level < 70)
        .map(skill => `${skill.name} - Current: ${skill.level}%, Target: 80%+`);

      // AI-generated recommendations based on profile
      const recommendations = [
        'Focus on improving UI/UX Design skills - consider taking advanced Figma course',
        'Your backend skills are strong - explore microservices architecture next',
        'Great progress in Python - consider specializing in Machine Learning or Data Engineering',
        'Leverage your React expertise to mentor junior developers',
        'Your hackathon success shows great teamwork - lead a student project team'
      ];

      setCompetencyData({
        overallScore,
        skills: userSkills,
        certificates: userCertificates,
        achievements: userAchievements,
        strengths,
        areasForImprovement,
        recommendations
      });

      setIsLoading(false);
    };

    fetchAndCalculateCompetency();
  }, []);

  const downloadReport = () => {
    // Generate PDF report (simplified - would use jsPDF in production)
    const reportContent = `
COMPETENCY PROFILE REPORT
=========================

Overall Score: ${competencyData.overallScore}/100

SKILLS:
${competencyData.skills.map(s => `- ${s.name}: ${s.level}%`).join('\n')}

CERTIFICATES (${competencyData.certificates.length}):
${competencyData.certificates.map(c => `- ${c.title} (${c.issuer})`).join('\n')}

ACHIEVEMENTS (${competencyData.achievements.length}):
${competencyData.achievements.map(a => `- ${a.title}`).join('\n')}

STRENGTHS:
${competencyData.strengths.map(s => `- ${s}`).join('\n')}

AREAS FOR IMPROVEMENT:
${competencyData.areasForImprovement.map(a => `- ${a}`).join('\n')}

RECOMMENDATIONS:
${competencyData.recommendations.map((r, i) => `${i + 1}. ${r}`).join('\n')}
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'competency-profile-report.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="text-center">
          <div className="animate-spin w-16 h-16 border-4 border-[#06BBCC] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-gray-700">Analyzing your competency profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <FaChartLine className="text-[#06BBCC]" />
            Competency Profile
          </h1>
          <p className="text-xl text-gray-600">
            Auto-generated based on your certificates, achievements, and skills
          </p>
        </motion.div>

        {/* Overall Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-[#06BBCC] to-blue-600 rounded-3xl shadow-2xl p-8 mb-8 text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Overall Competency Score</h2>
              <p className="text-xl opacity-90">Based on {competencyData.skills.length} skills, {competencyData.certificates.length} certificates, {competencyData.achievements.length} achievements</p>
            </div>
            <div className="text-center">
              <div className="text-7xl font-bold">{competencyData.overallScore}</div>
              <div className="text-2xl">/100</div>
            </div>
          </div>
          <div className="mt-6 bg-white/20 rounded-full h-4">
            <div
              className="bg-white rounded-full h-full transition-all duration-1000"
              style={{ width: `${competencyData.overallScore}%` }}
            ></div>
          </div>
        </motion.div>

        {/* Download Button */}
        <div className="text-center mb-8">
          <button
            onClick={downloadReport}
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg shadow-lg flex items-center gap-3 mx-auto transition-all"
          >
            <FaDownload /> Download Full Report
          </button>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaCode className="text-[#06BBCC]" />
            Technical Skills
          </h3>
          <div className="space-y-6">
            {competencyData.skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-semibold text-lg text-gray-800">{skill.name}</span>
                    <span className="ml-3 text-sm text-gray-500">({skill.category})</span>
                  </div>
                  <span className="text-2xl font-bold text-[#06BBCC]">{skill.level}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-[#06BBCC] to-blue-600 rounded-full h-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.evidence.map((ev, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      ✓ {ev}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaCertificate className="text-yellow-500" />
            Verified Certificates
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {competencyData.certificates.map((cert, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#06BBCC] transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-xl text-gray-800">{cert.title}</h4>
                  {cert.verified && (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      ✓ Verified
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Issuer:</strong> {cert.issuer}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Date:</strong> {cert.date}
                </p>
                <p className="text-sm text-gray-500 font-mono">
                  ID: {cert.credentialId}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaTrophy className="text-yellow-500" />
            Achievements & Recognition
          </h3>
          <div className="space-y-6">
            {competencyData.achievements.map((achievement, index) => (
              <div key={index} className="border-l-4 border-[#06BBCC] pl-6 py-4 bg-gradient-to-r from-blue-50 to-transparent rounded-r-xl">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">
                    {achievement.type === 'award' && <FaAward className="text-yellow-500" />}
                    {achievement.type === 'project' && <FaCode className="text-blue-500" />}
                    {achievement.type === 'competition' && <FaTrophy className="text-orange-500" />}
                    {achievement.type === 'certification' && <FaGraduationCap className="text-purple-500" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">{achievement.title}</h4>
                    <p className="text-gray-600 mb-2">{achievement.description}</p>
                    <p className="text-sm text-gray-500 mb-2">
                      <strong>Date:</strong> {achievement.date}
                    </p>
                    <p className="text-sm text-green-700 bg-green-100 inline-block px-3 py-1 rounded-full">
                      <strong>Impact:</strong> {achievement.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Strengths & Areas for Improvement */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <FaStar className="text-green-500" />
              Key Strengths
            </h3>
            <ul className="space-y-3">
              {competencyData.strengths.map((strength, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span className="font-semibold">{strength}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-orange-50 to-yellow-100 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <FaChartLine className="text-orange-500" />
              Growth Opportunities
            </h3>
            <ul className="space-y-3">
              {competencyData.areasForImprovement.map((area, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-orange-500 text-2xl">→</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* AI Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaLightbulb className="text-yellow-500" />
            Personalized Recommendations
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {competencyData.recommendations.map((rec, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-[#06BBCC]">{index + 1}</span>
                  <p className="text-gray-700">{rec}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompetencyProfile;
