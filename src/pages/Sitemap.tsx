import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
const sections = [
  { title: 'Main Pages', links: [{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Courses', path: '/courses' }, { label: 'Contact', path: '/contact' }, { label: 'FAQ', path: '/faq' }] },
  { title: 'Learning', links: [{ label: 'Roadmap', path: '/roadmap' }, { label: 'Blog', path: '/blog' }, { label: 'Resources', path: '/resources' }, { label: 'Community', path: '/community' }, { label: 'Events', path: '/events' }] },
  { title: 'Account', links: [{ label: 'Login', path: '/login' }, { label: 'Sign Up', path: '/signup' }, { label: 'Profile', path: '/profile' }, { label: 'Settings', path: '/settings' }, { label: 'Bookmarks', path: '/bookmarks' }] },
  { title: 'Dashboard', links: [{ label: 'Student Dashboard', path: '/student-dashboard' }, { label: 'Portfolio', path: '/portfolio' }, { label: 'Certificates', path: '/certificates' }, { label: 'Analytics', path: '/analytics' }, { label: 'Notifications', path: '/notifications' }] },
  { title: 'Legal', links: [{ label: 'Privacy Policy', path: '/privacy-policy' }, { label: 'Terms of Service', path: '/terms-of-service' }, { label: 'Changelog', path: '/changelog' }, { label: 'Help Center', path: '/help' }] },
];
const Sitemap = () => { usePageTitle('Sitemap');
  return (<div className='min-h-screen bg-gray-50 pt-24 pb-16'><div className='container mx-auto px-4 max-w-5xl'>
    <h1 className='text-3xl font-bold text-gray-900 mb-8'>Sitemap</h1>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>{sections.map((s, i) => (
      <div key={i} className='bg-white rounded-2xl p-6 shadow-sm'><h2 className='text-lg font-bold text-gray-900 mb-4 pb-2 border-b'>{s.title}</h2>
        <ul className='space-y-2'>{s.links.map((l, j) => (<li key={j}><Link to={l.path} className='text-blue-600 hover:text-blue-800 text-sm hover:underline'>{l.label}</Link></li>))}</ul>
      </div>
    ))}</div>
  </div></div>);
};
export default Sitemap;
