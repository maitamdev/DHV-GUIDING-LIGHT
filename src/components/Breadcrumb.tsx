import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Route name mapping for better display
  const routeNames: Record<string, string> = {
    'courses': 'Courses',
    'roadmap': 'Learning Roadmap',
    'about': 'About Us',
    'blog': 'Blog',
    'contact': 'Contact',
    'student-dashboard': 'Student Dashboard',
    'instructor-dashboard': 'Instructor Dashboard',
    'course': 'Course Details',
    'cart': 'Shopping Cart',
    'login': 'Login',
    'signup': 'Sign Up',
    'meeting': 'Meeting Room',
    'meeting-schedule': 'Meeting Schedule'
  };

  // Don't show breadcrumb on home page
  if (pathnames.length === 0) return null;

  return (
    <nav className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {/* Home link */}
          <li>
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
              aria-label="Home"
            >
              <FaHome className="text-base group-hover:scale-110 transition-transform duration-200" />
            </Link>
          </li>

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = routeNames[name] || name.charAt(0).toUpperCase() + name.slice(1);

            return (
              <li key={routeTo} className="flex items-center">
                <FaChevronRight className="text-gray-400 text-xs mx-2" />
                {isLast ? (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-blue-600 font-semibold"
                    aria-current="page"
                  >
                    {displayName}
                  </motion.span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:underline"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
