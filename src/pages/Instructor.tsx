import { motion } from 'framer-motion';
import { FaStar, FaUsers, FaBook, FaClock, FaSearch, FaFilter } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { instructors, type Instructor } from '../data/mentors';

const Instructor = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('All');

  // Get all unique skills
  const allSkills = ['All', ...new Set(instructors.flatMap(inst => inst.skills))];

  // Filter instructors
  const filteredInstructors = instructors.filter(instructor => {
    const matchesSearch = instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         instructor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         instructor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSkill = selectedSkill === 'All' || instructor.skills.includes(selectedSkill);
    
    return matchesSearch && matchesSkill;
  });

  return (
    <>
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#27E0A7] via-[#1BC6D5] to-[#06BBCC] py-20 mb-12">
        <div className="container mx-auto px-4 py-12">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl text-white font-bold text-center mb-4"
          >
            Find Your Perfect Mentor
          </motion.h1>
          <p className="text-xl text-center text-white/90 mb-8">
            Connect with industry-leading professionals
          </p>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-xl" />
              <input
                type="text"
                placeholder="Search by name, title, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-all text-lg"
              />
            </div>

            {/* Skills Filter */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <FaFilter className="text-white flex-shrink-0" />
              {allSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(skill)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    selectedSkill === skill
                      ? 'bg-white text-[#1BC6D5] shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 mb-6">
        <p className="text-gray-600">
          Found <span className="font-bold text-[#1BC6D5]">{filteredInstructors.length}</span> mentor{filteredInstructors.length !== 1 ? 's' : ''}
          {selectedSkill !== 'All' && ` specializing in ${selectedSkill}`}
        </p>
      </div>

      {/* Instructors Grid */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredInstructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => navigate(`/mentor/${instructor.id}`)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-2 border-transparent hover:border-[#1BC6D5]"
              >
                <div className="relative">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="font-bold">{instructor.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{instructor.name}</h3>
                  <p className="text-[#06BBCC] font-semibold mb-2">{instructor.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{instructor.specialty}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <FaUsers className="mr-2 text-[#06BBCC]" />
                      <span>{instructor.students} students</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaBook className="mr-2 text-[#06BBCC]" />
                      <span>{instructor.courses} courses</span>
                    </div>
                    <div className="flex items-center text-gray-600 col-span-2">
                      <FaClock className="mr-2 text-[#06BBCC]" />
                      <span>{instructor.experience} experience</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] hover:shadow-xl text-white font-semibold rounded-lg transition-all">
                    View Profile & Schedule
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredInstructors.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No mentors found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Instructor;
