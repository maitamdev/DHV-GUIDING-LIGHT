// Navigation menu configuration

import { ROUTES } from './routes';

export interface MenuItem {
  label: string;
  path: string;
  icon?: string;
  badge?: string;
  children?: MenuItem[];
  requireAuth?: boolean;
  roles?: string[];
}

export const MAIN_MENU: MenuItem[] = [
  { label: 'HOME', path: ROUTES.HOME },
  { label: 'COURSES', path: ROUTES.COURSES },
  { label: 'MENTORS', path: ROUTES.INSTRUCTOR },
  { label: 'ROADMAP', path: ROUTES.ROADMAP },
  { label: 'ABOUT', path: ROUTES.ABOUT },
  { label: 'BLOG', path: ROUTES.BLOG },
  { label: 'CONTACT', path: ROUTES.CONTACT },
];

export const DASHBOARD_MENU: MenuItem[] = [
  { label: 'Dashboard', path: ROUTES.STUDENT_DASHBOARD, icon: 'dashboard', requireAuth: true },
  { label: 'My Courses', path: ROUTES.COURSES, icon: 'book', requireAuth: true },
  { label: 'Portfolio', path: ROUTES.PORTFOLIO, icon: 'briefcase', requireAuth: true },
  { label: 'Meetings', path: ROUTES.MEETING, icon: 'video', requireAuth: true },
  { label: 'Homework', path: ROUTES.HOMEWORK, icon: 'clipboard', requireAuth: true },
  { label: 'Certificates', path: ROUTES.CERTIFICATES, icon: 'award', requireAuth: true },
  { label: 'Bookmarks', path: ROUTES.BOOKMARKS, icon: 'bookmark', requireAuth: true },
  { label: 'Analytics', path: ROUTES.ANALYTICS, icon: 'chart', requireAuth: true },
  { label: 'Settings', path: ROUTES.SETTINGS, icon: 'settings', requireAuth: true },
];

export const FOOTER_LINKS = {
  platform: [
    { label: 'About Us', path: ROUTES.ABOUT },
    { label: 'Courses', path: ROUTES.COURSES },
    { label: 'Mentors', path: ROUTES.INSTRUCTOR },
    { label: 'Blog', path: ROUTES.BLOG },
    { label: 'FAQ', path: ROUTES.FAQ },
  ],
  support: [
    { label: 'Help Center', path: ROUTES.HELP },
    { label: 'Contact Us', path: ROUTES.CONTACT },
    { label: 'Community', path: ROUTES.COMMUNITY },
    { label: 'Resources', path: ROUTES.RESOURCES },
    { label: 'Events', path: ROUTES.EVENTS },
  ],
  legal: [
    { label: 'Privacy Policy', path: ROUTES.PRIVACY_POLICY },
    { label: 'Terms of Service', path: ROUTES.TERMS_OF_SERVICE },
    { label: 'Changelog', path: ROUTES.CHANGELOG },
  ],
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/dhvguidinglight',
  github: 'https://github.com/maitamdev/DHV-GUIDING-LIGHT',
  linkedin: 'https://linkedin.com/company/dhvguidinglight',
  youtube: 'https://youtube.com/@dhvguidinglight',
  twitter: 'https://twitter.com/dhvguidinglight',
};
