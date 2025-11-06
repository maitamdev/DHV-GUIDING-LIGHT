import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
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
        // If user doesn't have doc in firestore, redirect to home or courses
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
      // Login function from context (signInWithEmailAndPassword)
      await login(formData.email, formData.password);

      // Get current user from Firebase auth
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        await checkUserRoleAndRedirect(user.uid);
      } else {
        // Fallback if not synced yet
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
    <>
      {/* Login Section with Background Image */}
      <div className="relative min-h-screen flex items-center justify-center py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/carousel-1.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#06BBCC]/90 via-blue-600/85 to-purple-700/90"></div>
        </div>

        {/* Animated Background Circles */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000"></div>
        </div>

        {/* Login Form */}
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
                Login
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/90 text-lg"
              >
                Welcome back to DHV Guiding Light
              </motion.p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Sign In</h2>

              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {error}
                </div>
              )}

              <div className="space-y-6">
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="relative">
                  <FaLock className="absolute left-4 top-4 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div className="text-right">
                  <a href="#" className="text-[#06BBCC] hover:underline text-sm font-medium">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#06BBCC] to-blue-600 hover:from-[#05a3b3] hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>

                <p className="text-center text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-[#06BBCC] hover:underline font-semibold">
                    Sign Up
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

export default Login;
