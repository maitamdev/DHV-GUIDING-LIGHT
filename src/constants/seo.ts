// SEO metadata constants

import { APP_CONFIG } from './config';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export const DEFAULT_SEO: SEOData = {
  title: `${APP_CONFIG.name} - ${APP_CONFIG.tagline}`,
  description: APP_CONFIG.description,
  keywords: [
    'e-learning',
    'mentor',
    'mentee',
    'DHV',
    'Hung Vuong University',
    'career development',
    'online courses',
    'mentoring platform',
    'career transformation',
  ],
  ogImage: '/img/dhv-logo.png',
  ogType: 'website',
  canonical: APP_CONFIG.url,
};

export const PAGE_SEO: Record<string, SEOData> = {
  home: {
    title: `${APP_CONFIG.name} | Learn from Expert Mentors`,
    description: 'Transform your career with expert-led courses and 1-on-1 mentoring from industry leaders.',
  },
  courses: {
    title: `Courses | ${APP_CONFIG.name}`,
    description: 'Browse our extensive catalog of professional courses across technology, business, and design.',
  },
  mentors: {
    title: `Expert Mentors | ${APP_CONFIG.name}`,
    description: 'Connect with experienced mentors who provide personalized guidance and career advice.',
  },
  blog: {
    title: `Blog | ${APP_CONFIG.name}`,
    description: 'Read articles about career development, technology trends, and learning strategies.',
  },
  about: {
    title: `About Us | ${APP_CONFIG.name}`,
    description: 'Learn about DHV Guiding Light platform and our mission to connect mentors with mentees.',
  },
  contact: {
    title: `Contact Us | ${APP_CONFIG.name}`,
    description: 'Get in touch with the DHV Guiding Light team for support and inquiries.',
  },
};
