export interface NavLink { label: string; path: string; icon?: string; requiresAuth?: boolean; children?: NavLink[]; }
export const mainNavLinks: NavLink[] = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'Courses', path: '/courses', icon: 'book' },
  { label: 'Roadmap', path: '/roadmap', icon: 'map' },
  { label: 'Blog', path: '/blog', icon: 'pen' },
  { label: 'Community', path: '/community', icon: 'users' },
  { label: 'About', path: '/about', icon: 'info' },
];
export const dashboardNavLinks: NavLink[] = [
  { label: 'Dashboard', path: '/student-dashboard', icon: 'grid', requiresAuth: true },
  { label: 'My Courses', path: '/courses', icon: 'book', requiresAuth: true },
  { label: 'Certificates', path: '/certificates', icon: 'award', requiresAuth: true },
  { label: 'Portfolio', path: '/portfolio', icon: 'briefcase', requiresAuth: true },
  { label: 'Bookmarks', path: '/bookmarks', icon: 'bookmark', requiresAuth: true },
  { label: 'Settings', path: '/settings', icon: 'settings', requiresAuth: true },
];
export const footerLinks: NavLink[] = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms of Service', path: '/terms-of-service' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
  { label: 'Sitemap', path: '/sitemap' },
];
