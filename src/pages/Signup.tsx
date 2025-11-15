import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaGraduationCap, FaChalkboardTeacher, FaBriefcase, FaRocket, FaUsers, FaStar, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    role: 'student'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signup(formData.email, formData.password, formData.displayName, formData.role);
      if (formData.role === 'instructor' || formData.role === 'Giảng viên') {
        navigate('/instructor-dashboard');
      } else if (formData.role === 'student' || formData.role === 'Học viên') {
        navigate('/student-dashboard');
      } else {
        navigate('/courses');
      }
    } catch (err: any) {
      setError('Registration failed. Email may already be in use.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding (60%) */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex lg:w-3/5 bg-gradient-to-br from-[#27E0A7] via-[#1BC6D5] to-[#06BBCC] relative overflow-hidden items-center justify-center p-12"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/img/carousel-2.jpg" 
            alt="Students Learning" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#27E0A7]/95 via-[#1BC6D5]/95 to-[#06BBCC]/95"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-20 -left-20 animate-float"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-20 -right-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-64 h-64 bg-white/10 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-lg">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
              <FaGraduationCap className="text-5xl text-white" />
            </div>
            <h1 className="text-5xl font-black mb-4 leading-tight">
              Join DHV<br />GUIDING LIGHT
            </h1>
            <div className="w-24 h-1 bg-white/40 rounded-full"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-white/90 mb-8 leading-relaxed"
          >
            Start your learning journey today with personalized courses, expert mentors, and AI-powered career guidance
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-4"
          >
            {[
              { icon: FaRocket, text: 'Fast-track your career growth' },
              { icon: FaUsers, text: 'Learn from industry experts' },
              { icon: FaStar, text: 'Earn industry certifications' },
              { icon: FaCheckCircle, text: 'Flexible learning schedule' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-2xl text-white" />
                </div>
                <span className="text-lg font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Signup Form (40%) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-2/5 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#27E0A7] to-[#1BC6D5] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaGraduationCap className="text-3xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">DHV GUIDING LIGHT</h2>
          </div>

          {/* Get Started */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Started</h2>
            <p className="text-gray-500">Create your account to begin learning</p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {error && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.displayName}
                  onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#1BC6D5] focus:outline-none transition-all bg-white"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#1BC6D5] focus:outline-none transition-all bg-white"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="Create a password (min. 6 characters)"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#1BC6D5] focus:outline-none transition-all bg-white"
                  required
                  minLength={6}
                />
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">I am a:</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'student', label: 'Student', icon: FaGraduationCap, color: 'border-emerald-500 bg-emerald-50' },
                  { value: 'instructor', label: 'Instructor', icon: FaChalkboardTeacher, color: 'border-purple-500 bg-purple-50' },
                  { value: 'employer', label: 'Employer', icon: FaBriefcase, color: 'border-blue-500 bg-blue-50' }
                ].map((role) => (
                  <label key={role.value} className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value={role.value}
                      checked={formData.role === role.value}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="peer sr-only"
                    />
                    <div className={`p-4 text-center border-2 border-gray-200 rounded-xl peer-checked:${role.color} peer-checked:border-current transition-all hover:border-gray-300 flex flex-col items-center gap-2`}>
                      <role.icon className="text-2xl text-gray-600 peer-checked:text-current" />
                      <span className="text-xs font-medium text-gray-700">{role.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating account...
                </span>
              ) : (
                'Get Started'
              )}
            </button>

            {/* Terms */}
            <p className="text-xs text-center text-gray-500 leading-relaxed">
              By creating an account, you agree to our{' '}
              <Link to="/terms" className="text-[#1BC6D5] hover:underline">Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-[#1BC6D5] hover:underline">Privacy Policy</Link>
            </p>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Already have an account?</span>
              </div>
            </div>

            {/* Login Link */}
            <Link
              to="/login"
              className="block w-full py-4 rounded-xl font-bold text-lg border-2 border-[#1BC6D5] text-[#1BC6D5] hover:bg-[#1BC6D5] hover:text-white transition-all text-center"
            >
              Sign In
            </Link>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
