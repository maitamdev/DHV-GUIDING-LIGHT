// Application configuration constants

export const APP_CONFIG = {
  name: 'DHV Guiding Light',
  shortName: 'DHV',
  tagline: 'Career Transformation Platform',
  description: 'Ná»n táº£ng káº¿t ná»‘i mentor-mentee dÃ nh cho sinh viÃªn Äáº¡i há»c HÃ¹ng VÆ°Æ¡ng TP.HCM',
  version: '1.0.0',
  url: 'https://dhv-guiding-light.vercel.app',
  email: 'contact@dhv.edu.vn',
  phone: '+84 28 1234 5678',
  address: 'TrÆ°á»ng Äáº¡i há»c HÃ¹ng VÆ°Æ¡ng TP.HCM',
} as const;

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 12,
  MAX_LIMIT: 100,
  COURSES_PER_PAGE: 9,
  BLOG_POSTS_PER_PAGE: 6,
  MENTORS_PER_PAGE: 8,
} as const;

export const FILE_UPLOAD = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  ALLOWED_DOC_TYPES: ['application/pdf', 'application/msword'],
  MAX_FILES: 5,
} as const;

export const AUTH = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_LOGIN_ATTEMPTS: 5,
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
  TOKEN_REFRESH_INTERVAL: 15 * 60 * 1000, // 15 minutes
} as const;

export const CACHE = {
  TTL: 5 * 60 * 1000, // 5 minutes
  MAX_ENTRIES: 100,
} as const;
