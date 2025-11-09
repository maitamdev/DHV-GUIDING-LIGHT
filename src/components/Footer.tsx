import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaArrowUp, FaInstagram, FaGraduationCap, FaBook, FaRocket, FaShieldAlt, FaCertificate, FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-20 pb-8 mt-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Top Section - 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Column 1: About */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  GUIDING LIGHT
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Vietnam's leading online learning platform, connecting students with experienced experts and professional mentors.
              </p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <FaFacebookF className="text-gray-400 hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <FaInstagram className="text-gray-400 hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <FaTwitter className="text-gray-400 hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-700 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <FaYoutube className="text-gray-400 hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <FaLinkedinIn className="text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                <FaBook className="text-blue-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { to: '/about', label: 'About Us' },
                  { to: '/courses', label: 'Courses' },
                  { to: '/team', label: 'Our Team' },
                  { to: '/blog', label: 'Blog' },
                  { to: '/testimonial', label: 'Testimonials' },
                  { to: '/faq', label: 'FAQ' }
                ].map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Top Categories */}
            <div>
              <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                <FaRocket className="text-indigo-400" />
                Top Categories
              </h4>
              <ul className="space-y-3">
                {[
                  'Web Development',
                  'Mobile Development',
                  'Data Science',
                  'AI & Machine Learning',
                  'Cloud Computing',
                  'UI/UX Design'
                ].map((category) => (
                  <li key={category}>
                    <Link 
                      to="/courses" 
                      className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Newsletter */}
            <div>
              <h4 className="text-white text-lg font-bold mb-6">Get In Touch</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">194 Le Duc Tho, An Nhon, TPHCM</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-green-400 flex-shrink-0" />
                  <a href="tel:02871000888" className="text-gray-400 text-sm hover:text-green-400 transition-colors">
                    0287 1000 888
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-yellow-400 flex-shrink-0" />
                  <a href="mailto:dhvguildinglight@dhv.edu.vn" className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">
                    dhvguildinglight@dhv.edu.vn
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-800/30 backdrop-blur-sm p-4 rounded-2xl border border-gray-700">
                <h5 className="text-white font-semibold mb-2 text-sm">📧 Newsletter</h5>
                <p className="text-gray-400 text-xs mb-3">Get updates & offers</p>
                <form className="flex gap-2">
                  <input 
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500 text-white text-sm placeholder-gray-500"
                    required
                  />
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg transition-all font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    →
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Middle Section - Trust Badges */}
          <div className="border-t border-gray-800 pt-8 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaShieldAlt className="text-3xl text-green-400 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-white font-semibold text-sm">Secure Learning</p>
                <p className="text-gray-500 text-xs">SSL Protected</p>
              </div>
              <div className="group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaCertificate className="text-3xl text-yellow-400 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-white font-semibold text-sm">Certified Courses</p>
                <p className="text-gray-500 text-xs">Industry Recognized</p>
              </div>
              <div className="group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaStar className="text-3xl text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-white font-semibold text-sm">4.9/5 Rating</p>
                <p className="text-gray-500 text-xs">12,000+ Reviews</p>
              </div>
              <div className="group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaGraduationCap className="text-3xl text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-white font-semibold text-sm">50K+ Students</p>
                <p className="text-gray-500 text-xs">Worldwide</p>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; 2024 <Link to="/" className="text-blue-400 hover:text-blue-300 font-semibold">DHV GUIDING LIGHT</Link>. All Rights Reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}

      {/* Back to Top */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 z-50 group hover:scale-110"
          aria-label="Back to top"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp className="text-xl group-hover:animate-bounce" />
        </motion.button>
      )}
    </>
  );
};

export default Footer;
