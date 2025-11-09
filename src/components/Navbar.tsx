import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaUser, FaBars, FaTimes, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle scroll effect
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
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${searchQuery}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md border-b border-gray-200' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src="/img/icon.png" 
                alt="DHV Logo" 
                className="h-10 w-10 md:h-12 md:w-12 object-contain" 
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-gray-800">
                DHV GUIDING LIGHT
              </span>
              <span className="text-[9px] text-gray-500 tracking-wider hidden md:block uppercase">
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/courses" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/courses') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              COURSES
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/about') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              ABOUT
            </Link>
            <Link 
              to="/blog" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/blog') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              BLOG
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/contact') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              CONTACT
            </Link>

            {currentUser ? (
              <>
                <Link
                  to="/student-dashboard"
                  className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all flex items-center gap-2"
                >
                  <FaUser className="text-sm" />
                  DASHBOARD
                </Link>
                
                {/* Search Toggle - AFTER Dashboard */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
                >
                  <FaSearch className="text-lg" />
                </button>
                
                <button
                  onClick={handleLogout}
                  className="ml-2 px-4 py-2 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-all flex items-center gap-2"
                >
                  <FaSignOutAlt />
                  LOGOUT
                </button>
              </>
            ) : (
              <>
                {/* Search Toggle for non-logged in users */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
                >
                  <FaSearch className="text-lg" />
                </button>
                
                <Link 
                  to="/login" 
                  className="ml-2 px-6 py-2.5 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                >
                  <FaUser className="text-sm" />
                  LOGIN
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 dark:text-gray-200 hover:text-blue-600 focus:outline-none p-2"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Search Bar (Desktop) */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden pb-4"
            >
              <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search courses, topics, instructors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3 pl-12 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none bg-white/50 backdrop-blur-sm text-gray-800"
                  autoFocus
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600" />
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {/* Search Bar Mobile */}
              <form onSubmit={handleSearch} className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" />
              </form>

              <Link 
                to="/" 
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-xl font-semibold transition-all ${
                  isActive('/') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg' 
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/about') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                ABOUT
              </Link>
              <Link 
                to="/courses" 
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/courses') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                COURSES
              </Link>
              <Link 
                to="/blog" 
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/blog') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                BLOG
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/contact') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                CONTACT
              </Link>

              {currentUser ? (
                <>
                  <Link
                    to="/student-dashboard"
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive('/student-dashboard') 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    DASHBOARD
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      closeMenu();
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    LOGOUT
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all"
                >
                  <FaUser />
                  LOGIN
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
