export const ROUTES = {
  HOME: '/', ABOUT: '/about', COURSES: '/courses', COURSE_DETAIL: '/course/:courseId',
  CART: '/cart', CONTACT: '/contact', FAQ: '/faq', BLOG: '/blog', BLOG_DETAIL: '/blog/:id',
  LOGIN: '/login', SIGNUP: '/signup', FORGOT_PASSWORD: '/forgot-password',
  STUDENT_DASHBOARD: '/student-dashboard', INSTRUCTOR_DASHBOARD: '/instructor-dashboard',
  PORTFOLIO: '/portfolio', ROADMAP: '/roadmap', ROADMAP_DETAIL: '/roadmap/:category',
  MEETING: '/meeting', MEETING_ROOM: '/meeting/:roomId',
  MENTEE_FORM: '/mentee-form', MENTEE_LIST: '/mentee-list', MENTOR: '/mentor/:id',
  HOMEWORK: '/homework', COMPETENCY: '/competency-profile', ASSIGNMENT: '/assignment-submission',
  SETTINGS: '/settings', NOTIFICATIONS: '/notifications', SEARCH: '/search',
  CERTIFICATES: '/certificates', HELP: '/help', BOOKMARKS: '/bookmarks',
  ANALYTICS: '/analytics', COMMUNITY: '/community', EVENTS: '/events',
  RESOURCES: '/resources', CHANGELOG: '/changelog', PROFILE: '/profile',
  PRIVACY: '/privacy-policy', PRIVACY_POLICY: '/privacy-policy', TERMS: '/terms-of-service', TERMS_OF_SERVICE: '/terms-of-service',
  PRICING: '/pricing', FEEDBACK: '/feedback', SITEMAP: '/sitemap',
  TEAM: '/team', INSTRUCTOR: '/instructor', TESTIMONIAL: '/testimonial',
  CREATE_COURSE: '/create-course', NOT_FOUND: '*',
} as const;
export type RouteKey = keyof typeof ROUTES;
