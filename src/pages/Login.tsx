import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGraduationCap, FaRocket, FaUsers, FaStar, FaCheckCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { getAuth } from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();
  const { login, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Auto redirect if already logged in
  useEffect(() => {
    if (currentUser) {
      checkUserRoleAndRedirect(currentUser.uid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const checkUserRoleAndRedirect = async (uid: string) => {
    try {
      console.log('🔍 Checking user role for UID:', uid);
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log('✅ User data found:', userData);
        console.log('👤 User role:', userData.role);
        
        if (userData.role === 'instructor' || userData.role === 'Giảng viên' || userData.role === 'mentor') {
          console.log('🎓 Redirecting to INSTRUCTOR dashboard');
          navigate('/instructor-dashboard');
        } else if (userData.role === 'student' || userData.role === 'Học viên') {
          console.log('📚 Redirecting to STUDENT dashboard');
          navigate('/student-dashboard');
        } else if (userData.role === 'employer' || userData.role === 'Nhà tuyển dụng') {
          console.log('💼 Redirecting to courses (employer)');
          navigate('/courses');
        } else {
          console.log('⚠️ Unknown role, redirecting to courses');
          navigate('/courses');
        }
      } else {
        console.log('❌ User document not found in Firestore');
        navigate('/');
      }
    } catch (error) {
      console.error('❌ Error checking user role:', error);
      navigate('/');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(formData.email, formData.password);
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        await checkUserRoleAndRedirect(user.uid);
      } else {
        navigate('/');
      }
    } catch (err: any) {
      setError('Login failed. Please check your email and password.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#27E0A7] via-[#1BC6D5] to-[#06BBCC] relative overflow-hidden items-center justify-center p-12"
      >
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
              DHV<br />GUIDING LIGHT
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
            Transform your career with expert-led courses, personalized mentorship, and AI-powered learning paths
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-4"
          >
            {[
              { icon: FaRocket, text: '54+ Expert Courses' },
              { icon: FaUsers, text: '50,000+ Active Students' },
              { icon: FaStar, text: '4.9/5 Average Rating' },
              { icon: FaCheckCircle, text: 'Industry Certified Programs' }
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

      {/* Right Side - Login Form */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#27E0A7] to-[#1BC6D5] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaGraduationCap className="text-3xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">DHV GUIDING LIGHT</h2>
          </div>

          {/* Welcome Back */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
            <p className="text-gray-500">Sign in to continue your learning journey</p>
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

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
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
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-12 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#1BC6D5] focus:outline-none transition-all bg-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#1BC6D5] focus:ring-[#1BC6D5]" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-[#1BC6D5] hover:text-[#27E0A7] font-medium transition-colors">
                Forgot Password?
              </Link>
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
                  Signing in...
                </span>
              ) : (
                'Login'
              )}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Don't have an account?</span>
              </div>
            </div>

            {/* Register Link */}
            <Link
              to="/signup"
              className="block w-full py-4 rounded-xl font-bold text-lg border-2 border-[#1BC6D5] text-[#1BC6D5] hover:bg-[#1BC6D5] hover:text-white transition-all text-center"
            >
              Register Now
            </Link>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
