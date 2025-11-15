import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, FaStar, FaUsers, FaBook, FaBriefcase, FaTrophy, FaCertificate,
  FaEnvelope, FaLinkedin, FaGithub, FaGlobe, FaCalendar, FaClock, FaCheck,
  FaQuoteLeft, FaAward, FaGraduationCap, FaLightbulb, FaHandshake
} from 'react-icons/fa';

// This would come from a database/API in production
import { instructors } from '../data/mentors';

const MentorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const mentor = instructors.find(m => m.id === parseInt(id || '0'));

  if (!mentor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Mentor not found</h2>
          <button onClick={() => navigate('/instructor')} className="px-6 py-3 bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] text-white rounded-xl font-bold">
            Back to Mentors
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-[#27E0A7] via-[#1BC6D5] to-[#06BBCC] py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/instructor')}
            className="flex items-center gap-2 text-white hover:bg-white/20 px-4 py-2 rounded-lg transition-all mb-6"
          >
            <FaArrowLeft /> Back to Mentors
          </button>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={mentor.image}
              alt={mentor.name}
              className="w-48 h-48 rounded-3xl border-4 border-white shadow-2xl object-cover"
            />
            <div className="flex-1 text-white">
              <h1 className="text-5xl font-bold mb-3">{mentor.name}</h1>
              <p className="text-2xl text-white/90 mb-4">{mentor.title}</p>
              <p className="text-lg text-white/80 mb-4">{mentor.company}</p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <FaStar className="text-yellow-300" />
                  <span className="font-bold">{mentor.rating}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <FaUsers />
                  <span>{mentor.students.toLocaleString()} Students</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <FaBook />
                  <span>{mentor.courses} Courses</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <FaBriefcase />
                  <span>{mentor.experience}</span>
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${mentor.email}`} className="flex items-center gap-2 px-4 py-2 bg-white text-[#1BC6D5] rounded-lg font-semibold hover:shadow-xl transition-all">
                  <FaEnvelope /> Email
                </a>
                <a href={`https://${mentor.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white text-[#0077b5] rounded-lg font-semibold hover:shadow-xl transition-all">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href={`https://${mentor.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-lg font-semibold hover:shadow-xl transition-all">
                  <FaGithub /> GitHub
                </a>
                {mentor.website && (
                  <a href={`https://${mentor.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white text-[#1BC6D5] rounded-lg font-semibold hover:shadow-xl transition-all">
                    <FaGlobe /> Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <FaGraduationCap className="text-[#1BC6D5]" />
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{mentor.bio}</p>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaBriefcase className="text-[#1BC6D5]" />
                Work Experience
              </h2>
              <div className="space-y-6">
                {mentor.workExperience?.map((exp, index) => (
                  <div key={index} className="border-l-4 border-[#1BC6D5] pl-6 pb-6">
                    <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                    <p className="text-[#1BC6D5] font-semibold">{exp.company}</p>
                    <p className="text-gray-600 text-sm mb-3">{exp.duration}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements & Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaTrophy className="text-yellow-500" />
                Achievements & Awards
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {mentor.achievements?.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                    <FaAward className="text-yellow-500 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-800">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaCertificate className="text-blue-500" />
                Certifications
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {mentor.certifications?.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <FaCertificate className="text-blue-500 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-800">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                      <p className="text-xs text-gray-500">{cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mentoring Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 border-2 border-purple-200"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <FaLightbulb className="text-purple-500" />
                Mentoring Philosophy
              </h2>
              <div className="relative">
                <FaQuoteLeft className="absolute -top-2 -left-2 text-4xl text-purple-300 opacity-50" />
                <p className="text-gray-700 leading-relaxed text-lg pl-8 italic">{mentor.mentoringPhilosophy}</p>
              </div>
            </motion.div>

            {/* Testimonials */}
            {mentor.testimonials && mentor.testimonials.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaHandshake className="text-green-500" />
                  Student Testimonials
                </h2>
                <div className="space-y-6">
                  {mentor.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#1BC6D5]">
                      <p className="text-gray-700 mb-4 italic">"{testimonial.feedback}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.studentName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">{testimonial.studentName}</p>
                          <p className="text-sm text-gray-600">{testimonial.outcome}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {mentor.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gradient-to-r from-[#27E0A7]/10 to-[#1BC6D5]/10 text-[#1BC6D5] rounded-lg font-medium text-sm border border-[#1BC6D5]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Mentoring Areas */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-6">Mentoring Areas</h3>
              <div className="space-y-2 mb-6">
                {mentor.mentoringAreas?.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              {/* Availability */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-6 flex items-center gap-2">
                <FaCalendar className="text-[#1BC6D5]" />
                Availability
              </h3>
              <div className="space-y-2 mb-6">
                {mentor.availability.map((slot, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      slot.available
                        ? 'bg-green-50 border-2 border-green-200'
                        : 'bg-gray-100 border-2 border-gray-200 opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${slot.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">{slot.day}</p>
                        <p className="text-xs text-gray-600">{slot.time}</p>
                      </div>
                    </div>
                    {slot.available ? (
                      <span className="text-green-600 text-xs font-bold">Available</span>
                    ) : (
                      <span className="text-gray-500 text-xs">Booked</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Mentoring Support */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-6">Support Offered</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-[#1BC6D5]" />
                  <span className="text-sm">{mentor.mentoringSupport?.mode}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaUsers className="text-[#1BC6D5]" />
                  <span className="text-sm">Max {mentor.mentoringSupport?.maxMentees} mentees</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaCalendar className="text-[#1BC6D5]" />
                  <span className="text-sm">{mentor.mentoringSupport?.availability}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mt-6">
                <button className="w-full py-3 bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] text-white rounded-xl font-bold hover:shadow-xl transition-all">
                  Request 1-on-1 Session
                </button>
                <button className="w-full py-3 border-2 border-[#1BC6D5] text-[#1BC6D5] rounded-xl font-bold hover:bg-[#1BC6D5] hover:text-white transition-all">
                  View Courses
                </button>
                <button className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  Send Message
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
