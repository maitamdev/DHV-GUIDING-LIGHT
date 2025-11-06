import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
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
      // Redirect based on role
      if (formData.role === 'instructor' || formData.role === 'Giảng viên') {
        navigate('/instructor-dashboard');
      } else if (formData.role === 'student' || formData.role === 'Học viên') {
        navigate('/student-dashboard');
      } else {
        navigate('/courses');
      }
    } catch (err: any) {
      setError('Đăng ký thất bại. Email có thể đã được sử dụng.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Signup Section with Background Image */}
      <div className="relative min-h-screen flex items-center justify-center py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/carousel-2.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700/90 via-blue-600/85 to-[#06BBCC]/90"></div>
        </div>

        {/* Animated Background Circles */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-20 -right-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-20 -left-20 animate-pulse delay-1000"></div>
        </div>

        {/* Signup Form */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <div className="text-center mb-8">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl text-white font-bold mb-4"
              >
                Sign Up
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/90 text-lg"
              >
                Join DHV Guiding Light today
              </motion.p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Create Account</h2>
              
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {error}
                </div>
              )}
              
              <div className="space-y-6">
                <div className="relative">
                  <FaUser className="absolute left-4 top-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={formData.displayName}
                    onChange={(e) => setFormData({...formData, displayName: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="relative">
                  <FaLock className="absolute left-4 top-4 text-gray-400" />
                  <input 
                    type="password" 
                    placeholder="Password (min. 6 characters)" 
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none transition-colors"
                    required
                    minLength={6}
                  />
                </div>

                {/* Role Selection */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">I am a:</label>
                  <div className="grid grid-cols-3 gap-3">
                    <label className="relative cursor-pointer">
                      <input 
                        type="radio" 
                        name="role" 
                        value="student" 
                        checked={formData.role === 'student'}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        className="peer sr-only" 
                      />
                      <div className="p-4 text-center border-2 border-gray-300 rounded-lg peer-checked:border-[#06BBCC] peer-checked:bg-[#06BBCC]/10 transition-all hover:border-[#06BBCC]/50">
                        <i className="fas fa-user-graduate text-2xl mb-2 block text-gray-600"></i>
                        <span className="text-sm font-medium">Student</span>
                      </div>
                    </label>
                    <label className="relative cursor-pointer">
                      <input 
                        type="radio" 
                        name="role" 
                        value="instructor" 
                        checked={formData.role === 'instructor'}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        className="peer sr-only" 
                      />
                      <div className="p-4 text-center border-2 border-gray-300 rounded-lg peer-checked:border-[#06BBCC] peer-checked:bg-[#06BBCC]/10 transition-all hover:border-[#06BBCC]/50">
                        <i className="fas fa-chalkboard-teacher text-2xl mb-2 block text-gray-600"></i>
                        <span className="text-sm font-medium">Mentor</span>
                      </div>
                    </label>
                    <label className="relative cursor-pointer">
                      <input 
                        type="radio" 
                        name="role" 
                        value="employer" 
                        checked={formData.role === 'employer'}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        className="peer sr-only" 
                      />
                      <div className="p-4 text-center border-2 border-gray-300 rounded-lg peer-checked:border-[#06BBCC] peer-checked:bg-[#06BBCC]/10 transition-all hover:border-[#06BBCC]/50">
                        <i className="fas fa-briefcase text-2xl mb-2 block text-gray-600"></i>
                        <span className="text-sm font-medium">Employer</span>
                      </div>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-[#06BBCC] hover:from-purple-700 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {loading ? 'Creating Account...' : 'Sign Up'}
                </button>

                <p className="text-center text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-[#06BBCC] hover:underline font-semibold">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Signup;
