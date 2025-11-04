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
      {/* Header Start */}
      <div className="w-full bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] py-20 mb-12">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center">
            <div className="w-full lg:w-10/12 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl text-white font-bold mb-4"
              >
                Đăng Ký
              </motion.h1>
              <nav aria-label="breadcrumb">
                <ol className="flex justify-center items-center space-x-2 text-white">
                  <li><Link className="hover:underline" to="/">Trang Chủ</Link></li>
                  <li>/</li>
                  <li className="opacity-80">Đăng Ký</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Signup Start */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Đăng Ký</h2>
              
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}
              
              <div className="space-y-6">
                <div className="relative">
                  <FaUser className="absolute left-4 top-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Tên của bạn" 
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
                    placeholder="Email" 
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
                    placeholder="Mật Khẩu (tối thiểu 6 ký tự)" 
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none transition-colors"
                    required
                    minLength={6}
                  />
                </div>

                {/* Role Selection */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Bạn là:</label>
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
                      <div className="p-4 text-center border-2 border-gray-300 rounded-lg peer-checked:border-[#06BBCC] peer-checked:bg-[#06BBCC]/10 transition-all">
                        <i className="fas fa-user-graduate text-2xl mb-2 block text-gray-600"></i>
                        <span className="text-sm font-medium">Học viên</span>
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
                      <div className="p-4 text-center border-2 border-gray-300 rounded-lg peer-checked:border-[#06BBCC] peer-checked:bg-[#06BBCC]/10 transition-all">
                        <i className="fas fa-chalkboard-teacher text-2xl mb-2 block text-gray-600"></i>
                        <span className="text-sm font-medium">Giảng viên</span>
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
                      <div className="p-4 text-center border-2 border-gray-300 rounded-lg peer-checked:border-[#06BBCC] peer-checked:bg-[#06BBCC]/10 transition-all">
                        <i className="fas fa-briefcase text-2xl mb-2 block text-gray-600"></i>
                        <span className="text-sm font-medium">Nhà tuyển dụng</span>
                      </div>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#06BBCC] hover:bg-[#05a3b3] text-white font-semibold py-3 rounded-lg transition-colors duration-300 disabled:opacity-50"
                >
                  {loading ? 'Đang đăng ký...' : 'Đăng Ký'}
                </button>

                <p className="text-center text-gray-600">
                  Bạn đã có tài khoản? {' '}
                  <Link to="/login" className="text-[#06BBCC] hover:underline font-semibold">
                    Đăng Nhập
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      {/* Signup End */}
    </>
  );
};

export default Signup;
