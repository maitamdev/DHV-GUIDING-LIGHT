import { motion } from 'framer-motion';
import { useState } from 'react';

const MenteeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    goals: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration successful! We will contact you soon.');
  };

  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] py-20 mb-12">
        <div className="container mx-auto px-4 py-12">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl text-white font-bold text-center mb-4"
          >
            Student Registration
          </motion.h1>
          <p className="text-xl text-center text-white/90">
            Start your learning journey with us
          </p>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Registration Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] outline-none"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] outline-none"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Course of Interest *</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] outline-none"
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="devops">DevOps Engineer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Experience Level</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] outline-none"
                  >
                    <option value="">Select level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Learning Goals</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] outline-none"
                    placeholder="Share your learning goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#06BBCC] hover:bg-[#05a3b3] text-white font-semibold py-3 rounded-lg transition-colors duration-300"
                >
                  Register Now
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MenteeForm;
