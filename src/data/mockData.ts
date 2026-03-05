// Mock user data for development
export const mockUser = {
  uid: 'mock-user-001',
  displayName: 'Mai Tran Thien Tam',
  email: 'tam@dhv.edu.vn',
  photoURL: '/img/team-1.jpg',
  role: 'student' as const,
};

export const mockDashboardStats = {
  coursesEnrolled: 5,
  coursesCompleted: 3,
  certificatesEarned: 3,
  hoursLearned: 156,
  currentStreak: 12,
  assignmentsPending: 2,
  meetingsScheduled: 1,
  averageScore: 87,
};

export const mockRecentActivity = [
  { id: 1, type: 'lesson', title: 'Completed: React Hooks Deep Dive', time: '2 hours ago', icon: 'book' },
  { id: 2, type: 'assignment', title: 'Submitted: Todo App Project', time: '5 hours ago', icon: 'code' },
  { id: 3, type: 'certificate', title: 'Earned: JavaScript Fundamentals', time: '1 day ago', icon: 'award' },
  { id: 4, type: 'meeting', title: 'Meeting with Mentor Nguyen Van Minh', time: '2 days ago', icon: 'video' },
  { id: 5, type: 'course', title: 'Started: TypeScript Advanced Patterns', time: '3 days ago', icon: 'play' },
];
