import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaUser, FaBars, FaTimes, FaChevronDown, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img src="/img/icon.png" alt="Logo" className="h-12 w-12" />
            <span 
              className="text-2xl font-extrabold"
              style={{
                background: 'linear-gradient(to right, #0066FF, #FF0000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              GUILDING LIGHT
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('/') 
                  ? 'text-[#06BBCC] bg-[#06BBCC]/10' 
                  : 'text-gray-700 hover:text-[#06BBCC] hover:bg-gray-50'
              }`}
            >
              Trang Chủ
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-[#06BBCC] bg-[#06BBCC]/10' 
                  : 'text-gray-700 hover:text-[#06BBCC] hover:bg-gray-50'
              }`}
            >
              Chúng Tôi
            </Link>
            <Link 
              to="/courses" 
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('/courses') 
                  ? 'text-[#06BBCC] bg-[#06BBCC]/10' 
                  : 'text-gray-700 hover:text-[#06BBCC] hover:bg-gray-50'
              }`}
            >
              Khóa Học
            </Link>
            
            {/* Dropdown */}
            <div className="relative group">
              <button 
                className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-[#06BBCC] hover:bg-gray-50 flex items-center space-x-1 transition-colors"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <span>Trang</span>
                <FaChevronDown className="text-xs" />
              </button>
              <div 
                className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                  isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link 
                  to="/roadmap" 
                  className="block px-4 py-3 text-gray-700 hover:bg-[#06BBCC]/10 hover:text-[#06BBCC] transition-colors first:rounded-t-lg"
                >
                  Lộ Trình
                </Link>
                <Link 
                  to="/meeting" 
                  className="block px-4 py-3 text-gray-700 hover:bg-[#06BBCC]/10 hover:text-[#06BBCC] transition-colors"
                >
                  Phòng Học
                </Link>
                <Link 
                  to="/team" 
                  className="block px-4 py-3 text-gray-700 hover:bg-[#06BBCC]/10 hover:text-[#06BBCC] transition-colors"
                >
                  Đội Ngũ
                </Link>
                <Link 
                  to="/testimonial" 
                  className="block px-4 py-3 text-gray-700 hover:bg-[#06BBCC]/10 hover:text-[#06BBCC] transition-colors"
                >
                  Đánh Giá
                </Link>
                <Link 
                  to="/faq" 
                  className="block px-4 py-3 text-gray-700 hover:bg-[#06BBCC]/10 hover:text-[#06BBCC] transition-colors"
                >
                  FAQ
                </Link>
                <Link 
                  to="/blog" 
                  className="block px-4 py-3 text-gray-700 hover:bg-[#06BBCC]/10 hover:text-[#06BBCC] transition-colors last:rounded-b-lg"
                >
                  Blog
                </Link>
              </div>
            </div>

            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-[#06BBCC] bg-[#06BBCC]/10' 
                  : 'text-gray-700 hover:text-[#06BBCC] hover:bg-gray-50'
              }`}
            >
              Liên hệ
            </Link>
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="ml-2 px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <FaSignOutAlt />
                <span className="hidden sm:inline">Đăng xuất</span>
              </button>
            ) : (
              <Link 
                to="/login" 
                className="ml-2 px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-[#06BBCC] hover:bg-gray-50 transition-colors"
              >
                <FaUser className="text-lg" />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 hover:text-[#06BBCC] focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t">
          <Link 
            to="/" 
            onClick={closeMenu}
            className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
              isActive('/') 
                ? 'text-[#06BBCC] bg-[#06BBCC]/10' 
                : 'text-gray-700 hover:text-[#06BBCC] hover:bg-gray-50'
            }`}
          >
            Trang Chủ
          </Link>
          <Link 
            to="/about" 
            onClick={closeMenu}
            className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
              isActive('/about') 
                ? 'text-[#06BBCC] bg-[#06BBCC]/10' 
                : 'text-gray-700 hover:text-[#06BBCC] hover:bg-gray-50'
            }`}
          >
            Chúng Tôi
          </Link>
          <Link 
            to="/courses" 
            onClick={closeMenu}
            className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
              isActive('/courses') 
                ? 'text-[#06BBCC] bg-[#06BBCC]/10' 
                : 'text-gray-700 hover:text-[#06BBCC] hover:bg-gray-50'
            }`}
          >
            Khóa Học
          </Link>
          <div className="space-y-1 pl-4">
            <Link 
              to="/roadmap" 
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-600 hover:text-[#06BBCC] hover:bg-gray-50 rounded-lg transition-colors"
            >
              Lộ Trình
            </Link>
            <Link 
              to="/meeting" 
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-600 hover:text-[#06BBCC] hover:bg-gray-50 rounded-lg transition-colors"
            >
              Phòng Học
            </Link>
            <Link 
              to="/team" 
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-600 hover:text-[#06BBCC] hover:bg-gray-50 rounded-lg transition-colors"
            >
              Đội Ngũ
            </Link>
            <Link 
              to="/testimonial" 
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-600 hover:text-[#06BBCC] hover:bg-gray-50 rounded-lg transition-colors"
            >
              Đánh Giá
            </Link>
            <Link 
              to="/faq" 
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-600 hover:text-[#06BBCC] hover:bg-gray-50 rounded-lg transition-colors"
            >
              FAQ
            </Link>
            <Link 
              to="/blog" 
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-600 hover:text-[#06BBCC] hover:bg-gray-50 rounded-lg transition-colors"
            >
              Blog
            </Link>
          </div>
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
              isActive('/contact') 
                ? 'text-[#06BBCC] bg-[#06BBCC]/10' 
                : 'text-gray-700 hover:text-[#06BBCC] hover:bg-gray-50'
            }`}
          >
            Liên hệ
          </Link>
          <Link 
            to="/login" 
            onClick={closeMenu}
            className="block px-4 py-3 rounded-lg font-medium text-gray-700 hover:text-[#06BBCC] hover:bg-gray-50 transition-colors"
          >
            <FaUser className="inline mr-2" />
            Đăng Nhập
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
