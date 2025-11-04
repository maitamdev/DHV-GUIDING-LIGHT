import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock } from 'react-icons/fa';
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
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.role === 'instructor' || userData.role === 'Giảng viên') {
          navigate('/instructor-dashboard');
        } else {
          navigate('/courses');
        }
      } else {
        // nếu user chưa có doc trong firestore thì cho về trang chủ hoặc courses
        navigate('/');
      }
    } catch (error) {
      console.error('Error checking user role:', error);
      navigate('/');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // hàm login từ context (thường là signInWithEmailAndPassword)
      await login(formData.email, formData.password);

      // lấy user hiện tại từ Firebase auth
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        await checkUserRoleAndRedirect(user.uid);
      } else {
        // fallback nếu chưa kịp sync
        navigate('/');
      }
    } catch (err: any) {
      setError('Đăng nhập thất bại. Vui lòng kiểm tra email và mật khẩu.');
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
                Đăng Nhập
              </motion.h1>
              <nav aria-label="breadcrumb">
                <ol className="flex justify-center items-center space-x-2 text-white">
                  <li>
                    <Link className="hover:underline" to="/">
                      Trang Chủ
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="opacity-80">Đăng Nhập</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Login Start */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Đăng Nhập</h2>

              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
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
                    type="password"
                    placeholder="Mật Khẩu"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="text-right">
                  <a href="#" className="text-[#06BBCC] hover:underline text-sm">
                    Quên mật khẩu?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#06BBCC] hover:bg-[#05a3b3] text-white font-semibold py-3 rounded-lg transition-colors duration-300 disabled:opacity-50"
                >
                  {loading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
                </button>

                <p className="text-center text-gray-600">
                  Bạn chưa có tài khoản?{' '}
                  <Link to="/signup" className="text-[#06BBCC] hover:underline font-semibold">
                    Đăng Ký
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      {/* Login End */}
    </>
  );
};

export default Login;
