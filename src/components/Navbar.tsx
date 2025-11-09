import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaUser, FaBars, FaTimes, FaChevronDown, FaSignOutAlt, FaSearch, FaGraduationCap, FaBook, FaRocket, FaBell } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
        : 'bg-white dark:bg-gray-900 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img 
                src="/img/icon.png" 
                alt="DHV Logo" 
                className="relative h-12 w-12 md:h-14 md:w-14 object-contain drop-shadow-lg" 
              />
            </motion.div>
            <div className="flex flex-col">
              <span 
                className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-[#06BBCC] to-indigo-600 bg-clip-text text-transparent"
              >
                GUIDING LIGHT
              </span>
              <span className="text-[10px] text-gray-500 tracking-wider hidden md:block">
                Learn • Grow • Excel
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                isActive('/') 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/50' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/50' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800'
              }`}
            >
              About
            </Link>
            <Link 
              to="/courses" 
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                isActive('/courses') 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/50' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800'
              }`}
            >
              <FaGraduationCap />
              Courses
            </Link>
            
            {/* Dropdown */}
            <div className="relative">
              <button 
                className="px-4 py-2 rounded-xl font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 flex items-center space-x-2 transition-all duration-300"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <span>More</span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-xs" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="p-2">
                      <Link 
                        to="/roadmap" 
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all rounded-xl group"
                      >
                        <FaRocket className="text-blue-600 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Roadmap</span>
                      </Link>
                      <Link 
                        to="/meeting" 
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all rounded-xl group"
                      >
                        <FaBook className="text-indigo-600 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Meeting Room</span>
                      </Link>
                      <Link 
                        to="/team" 
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all rounded-xl group"
                      >
                        <FaUser className="text-purple-600 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Team</span>
                      </Link>
                      <Link 
                        to="/testimonial" 
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all rounded-xl group"
                      >
                        <FaBell className="text-green-600 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Testimonials</span>
                      </Link>
                      <Link 
                        to="/faq" 
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all rounded-xl group"
                      >
                        <span className="font-medium">FAQ</span>
                      </Link>
                      <Link 
                        to="/blog" 
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all rounded-xl group"
                      >
                        <span className="font-medium">Blog</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/50' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800'
              }`}
            >
              Contact
            </Link>

            {/* Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"
            >
              <FaSearch className="text-lg" />
            </button>

            {currentUser ? (
              <>
                <Link
                  to="/student-dashboard"
                  className="px-4 py-2 rounded-xl font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all flex items-center gap-2"
                >
                  <FaGraduationCap />
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="ml-2 px-4 py-2 rounded-xl font-semibold text-red-600 hover:bg-red-50 transition-all flex items-center gap-2"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="ml-2 px-6 py-2 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              >
                <FaUser />
                Login
              </Link>
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
                className={`block px-4 py-3 rounded-xl font-semibold transition-all ${
                  isActive('/about') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg' 
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                About
              </Link>
              <Link 
                to="/courses" 
                onClick={closeMenu}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${
                  isActive('/courses') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg' 
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                <FaGraduationCap />
                Courses
              </Link>
              
              {/* Mobile Dropdown */}
              <div className="space-y-1 pl-4 border-l-2 border-blue-200">
                <Link 
                  to="/roadmap" 
                  onClick={closeMenu}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                >
                  <FaRocket className="text-blue-600" />
                  Roadmap
                </Link>
                <Link 
                  to="/meeting" 
                  onClick={closeMenu}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                >
                  <FaBook className="text-indigo-600" />
                  Meeting Room
                </Link>
                <Link 
                  to="/team" 
                  onClick={closeMenu}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                >
                  <FaUser className="text-purple-600" />
                  Team
                </Link>
                <Link 
                  to="/testimonial" 
                  onClick={closeMenu}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                >
                  <FaBell className="text-green-600" />
                  Testimonials
                </Link>
                <Link 
                  to="/faq" 
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                >
                  FAQ
                </Link>
                <Link 
                  to="/blog" 
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                >
                  Blog
                </Link>
              </div>

              <Link 
                to="/contact" 
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-xl font-semibold transition-all ${
                  isActive('/contact') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg' 
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                Contact
              </Link>

              {currentUser ? (
                <>
                  <Link
                    to="/student-dashboard"
                    onClick={closeMenu}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-gray-700 hover:bg-blue-50 transition-all"
                  >
                    <FaGraduationCap />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      closeMenu();
                    }}
                    className="w-full flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-red-600 hover:bg-red-50 transition-all"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  <FaUser />
                  Login
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
