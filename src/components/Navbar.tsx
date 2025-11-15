import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaShoppingBag } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'COURSES', path: '/courses' },
    { label: 'MENTORS', path: '/instructor' },
    { label: 'ROADMAP', path: '/roadmap' },
    { label: 'ABOUT', path: '/about' },
    { label: 'BLOG', path: '/blog' },
    { label: 'CONTACT', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'shadow-xl bg-[#001A66]' : 'shadow-lg bg-[#001A66]/95 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'h-14' : 'h-16'
          }`}>
            {/* Logo - DHV School Branding */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`transition-all duration-500 ${isScrolled ? 'w-11 h-11' : 'w-14 h-14'}`}
              >
                <img 
                  src="/img/dhv-logo.png" 
                  alt="DHV Logo" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className={`font-black text-white tracking-wider transition-all duration-500 ${
                  isScrolled ? 'text-base' : 'text-lg'
                }`} style={{ fontFamily: "'Poppins', 'Inter', sans-serif", letterSpacing: '0.05em' }}>
                  DHV GUIDING LIGHT
                </span>
                <span className="text-[10px] text-white/80 font-medium tracking-widest" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em' }}>CAREER TRANSFORMATION</span>
              </div>
            </Link>

            {/* Desktop Menu - Center Positioned */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group relative px-4 py-2"
                >
                  <span className={`text-sm font-semibold tracking-wide transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-[#00FF99]'
                      : 'text-white hover:text-[#00FF99]'
                  }`}>
                    {item.label}
                  </span>
                  {/* Underline animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00FF99] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive(item.path) ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
            </div>

            {/* Right Side - Shopping Cart + User/Auth */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Shopping Cart with Badge */}
              <Link
                to="/cart"
                className="relative p-2 rounded-lg transition-all duration-300 hover:bg-white/10 group"
              >
                <FaShoppingBag className="text-white text-xl group-hover:text-[#00FF99] transition-colors duration-300" />
                {/* Badge */}
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-[#001A66]">
                  0
                </span>
              </Link>

              {/* User Icon / Auth */}
              {currentUser ? (
                <div className="flex items-center space-x-3">
                  <Link
                    to={currentUser.email?.includes('instructor') ? '/instructor-dashboard' : '/student-dashboard'}
                    className="p-2 rounded-lg transition-all duration-300 hover:bg-white/10 group"
                  >
                    <FaUser className="text-white text-lg group-hover:text-[#00FF99] transition-colors duration-300" />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 text-white border-2 border-white/30 rounded-lg hover:bg-white/10 hover:border-[#00FF99] hover:text-[#00FF99] transition-all duration-300 font-medium text-sm"
                  >
                    <FaSignOutAlt />
                    <span>Đăng xuất</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  style={{
                    backgroundColor: '#00FF99',
                    color: '#001A66'
                  }}
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#00FF99] transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden overflow-hidden"
            style={{ backgroundColor: '#00132E' }}
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {/* Menu Items */}
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-[#00FF99]/20 text-[#00FF99]'
                        : 'text-white hover:bg-white/10 hover:text-[#00FF99]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Shopping Cart */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
              >
                <Link
                  to="/cart"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-lg text-white hover:bg-white/10 hover:text-[#00FF99] transition-all duration-300 font-semibold"
                >
                  <div className="flex items-center gap-3">
                    <FaShoppingBag className="text-xl" />
                    <span>Giỏ hàng</span>
                  </div>
                  <span className="w-6 h-6 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    0
                  </span>
                </Link>
              </motion.div>

              {/* Mobile Auth Section */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                {currentUser ? (
                  <>
                    <Link
                      to={currentUser.email?.includes('instructor') ? '/instructor-dashboard' : '/student-dashboard'}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 hover:text-[#00FF99] transition-all duration-300 font-semibold"
                    >
                      <FaUser />
                      <span>Tài khoản</span>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 font-semibold"
                    >
                      <FaSignOutAlt />
                      <span>Đăng xuất</span>
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-center font-bold transition-all duration-300"
                    style={{
                      backgroundColor: '#00FF99',
                      color: '#001A66'
                    }}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
