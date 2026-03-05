export interface DashboardStats { coursesEnrolled: number; coursesCompleted: number; certificatesEarned: number; hoursLearned: number; currentStreak: number; assignmentsPending: number; meetingsScheduled: number; averageScore: number; }
export interface CourseProgress { id: number; title: string; progress: number; thumbnail: string; lastAccessed: string; totalLessons: number; completedLessons: number; }
export interface Deadline { id: number; title: string; course: string; dueDate: string; daysLeft: number; type: 'assignment' | 'quiz' | 'project'; }
export interface ActivityItem { id: number; type: 'lesson' | 'assignment' | 'certificate' | 'meeting' | 'course'; title: string; time: string; icon: string; }
export interface WeeklyGoal { target: number; completed: number; label: string; }
