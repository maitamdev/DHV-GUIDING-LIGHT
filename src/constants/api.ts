// API endpoint constants

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    SIGNUP: '/api/auth/signup',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    FORGOT_PASSWORD: '/api/auth/forgot-password',
    RESET_PASSWORD: '/api/auth/reset-password',
  },
  USERS: {
    PROFILE: '/api/users/profile',
    UPDATE: '/api/users/update',
    AVATAR: '/api/users/avatar',
    PREFERENCES: '/api/users/preferences',
  },
  COURSES: {
    LIST: '/api/courses',
    DETAIL: (id: string) => `/api/courses/${id}`,
    ENROLL: (id: string) => `/api/courses/${id}/enroll`,
    PROGRESS: (id: string) => `/api/courses/${id}/progress`,
    REVIEWS: (id: string) => `/api/courses/${id}/reviews`,
    SEARCH: '/api/courses/search',
  },
  MENTORS: {
    LIST: '/api/mentors',
    DETAIL: (id: string) => `/api/mentors/${id}`,
    RECOMMEND: '/api/mentors/recommend',
    BOOK: (id: string) => `/api/mentors/${id}/book`,
  },
  MEETINGS: {
    LIST: '/api/meetings',
    CREATE: '/api/meetings/create',
    JOIN: (id: string) => `/api/meetings/${id}/join`,
    CANCEL: (id: string) => `/api/meetings/${id}/cancel`,
  },
  BLOG: {
    LIST: '/api/blog',
    DETAIL: (slug: string) => `/api/blog/${slug}`,
    COMMENTS: (id: string) => `/api/blog/${id}/comments`,
  },
  PORTFOLIO: {
    GET: (userId: string) => `/api/portfolio/${userId}`,
    UPDATE: '/api/portfolio/update',
    EXPORT: '/api/portfolio/export',
  },
  NOTIFICATIONS: {
    LIST: '/api/notifications',
    MARK_READ: (id: string) => `/api/notifications/${id}/read`,
    MARK_ALL_READ: '/api/notifications/read-all',
  },
} as const;
