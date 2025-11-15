import { Link } from 'react-router-dom';
import { FaArrowRight, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaShieldAlt, FaCertificate, FaStar, FaUsers } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <>
      {/* Footer Start */}
      <footer className="relative bg-gradient-to-br from-[#0b004b] via-[#3a0ca3] to-[#4361ee] text-white overflow-hidden">
        {/* Wave Top Border */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-12 fill-current text-white/5">
            <path d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        {/* Subtle Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

        <div className="container mx-auto px-4 pt-20 pb-8 relative z-10">
          {/* Main Grid - 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Logo + Description + Social */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  DHV GUIDING LIGHT
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Leading online learning platform for career transformation
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                {[
                  { icon: FaFacebookF, href: '#', color: 'hover:bg-blue-600' },
                  { icon: FaInstagram, href: '#', color: 'hover:bg-pink-600' },
                  { icon: FaTwitter, href: '#', color: 'hover:bg-sky-500' },
                  { icon: FaYoutube, href: '#', color: 'hover:bg-red-600' },
                  { icon: FaLinkedinIn, href: '#', color: 'hover:bg-blue-700' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center ${social.color} transition-all duration-300 border border-white/20`}
                  >
                    <social.icon className="text-white text-sm" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { to: '/about', label: 'About Us' },
                  { to: '/courses', label: 'Courses' },
                  { to: '/blog', label: 'Blog' },
                  { to: '/faq', label: 'FAQ' }
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Top Categories */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>
                Top Categories
              </h4>
              <ul className="space-y-3">
                {[
                  'Web Development',
                  'Data Science',
                  'AI & Machine Learning',
                  'UI/UX Design'
                ].map((category) => (
                  <li key={category}>
                    <Link
                      to="/courses"
                      className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>
                Newsletter
              </h4>
              <p className="text-white/60 text-sm mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                Get the latest course updates
              </p>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full pl-4 pr-12 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white text-indigo-600 rounded-lg flex items-center justify-center hover:bg-white/90 transition-all"
                >
                  <FaArrowRight className="text-sm" />
                </motion.button>
              </form>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/10">
            {[
              { icon: FaShieldAlt, title: 'Secure Learning', subtitle: 'SSL Protected', color: 'text-green-400' },
              { icon: FaCertificate, title: 'Certified', subtitle: 'Industry Recognized', color: 'text-yellow-400' },
              { icon: FaStar, title: '4.9/5 Rating', subtitle: '12,000+ Reviews', color: 'text-blue-400' },
              { icon: FaUsers, title: '50K+ Students', subtitle: 'Worldwide', color: 'text-purple-400' }
            ].map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center text-center"
              >
                <badge.icon className={`text-3xl ${badge.color} mb-2`} />
                <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>{badge.title}</p>
                <p className="text-white/50 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{badge.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom - Copyright */}
          <div className="pt-8 text-center">
            <p className="text-white/50 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              &copy; 2025 DHV GUIDING LIGHT. All Rights Reserved.
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <Link to="/about" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</Link>
              <Link to="/about" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</Link>
              <Link to="/about" className="text-white/40 hover:text-white text-xs transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
};

export default Footer;
