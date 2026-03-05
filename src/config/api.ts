const API_BASE = import.meta.env.VITE_API_URL || 'https://api.dhv.edu.vn';
export const API_ENDPOINTS = {
  courses: API_BASE + '/courses',
  users: API_BASE + '/users',
  auth: API_BASE + '/auth',
  blog: API_BASE + '/blog',
  meetings: API_BASE + '/meetings',
  certificates: API_BASE + '/certificates',
  events: API_BASE + '/events',
  notifications: API_BASE + '/notifications',
  search: API_BASE + '/search',
  analytics: API_BASE + '/analytics',
};
export const API_TIMEOUT = 30000;
export const API_RETRY_COUNT = 3;
