import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Footer Start */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-white text-xl font-bold mb-4">Liên kết nhanh</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="hover:text-[#06BBCC] transition-colors">
                    Giới thiệu về chúng tôi
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#06BBCC] transition-colors">
                    Liên hệ
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-[#06BBCC] transition-colors">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#06BBCC] transition-colors">
                    Điều khoản & Điều kiện
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#06BBCC] transition-colors">
                    Câu hỏi thường gặp & Hỗ trợ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white text-xl font-bold mb-4">Liên hệ</h4>
              <div className="space-y-3">
                <p className="flex items-start">
                  <FaMapMarkerAlt className="text-[#06BBCC] mt-1 mr-3 flex-shrink-0" />
                  <span>194 Le Duc Tho, An Nhon, TPHCM</span>
                </p>
                <p className="flex items-center">
                  <FaPhone className="text-[#06BBCC] mr-3" />
                  <span>0287 1000 888</span>
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="text-[#06BBCC] mr-3" />
                  <span>dhvguildinglight@dhv.edu.vn</span>
                </p>
              </div>
              <div className="flex space-x-2 mt-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#06BBCC] hover:border-[#06BBCC] transition-colors"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#06BBCC] hover:border-[#06BBCC] transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#06BBCC] hover:border-[#06BBCC] transition-colors"
                >
                  <FaYoutube />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#06BBCC] hover:border-[#06BBCC] transition-colors"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white text-xl font-bold mb-4">Đăng ký nhận bản tin</h4>
              <p className="mb-4 text-sm">
                Đăng ký ngay để nhận cập nhật khóa học, chương trình mentoring, và lộ trình học tập cá nhân hóa từ DHV Guiding Light!!
              </p>
              <form className="relative">
                <input 
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#06BBCC] text-white"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bg-[#06BBCC] hover:bg-[#05a3b3] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <a href="mailto:keertidvcorai@gmail.com">Đăng ký</a>
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>
              &copy; <Link to="/" className="text-[#06BBCC] hover:underline font-semibold">DHV GUILDING LIGHT</Link>. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* Footer End */}

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#06BBCC] hover:bg-[#05a3b3] text-white rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 z-40"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default Footer;
