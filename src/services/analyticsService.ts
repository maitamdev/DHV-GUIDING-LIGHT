interface LearningAnalytics { totalHoursLearned: number; coursesCompleted: number; coursesInProgress: number; averageScore: number; currentStreak: number; longestStreak: number; weeklyHours: number[]; monthlyProgress: number[]; topSkills: { name: string; level: number }[]; recentActivity: { date: string; action: string; details: string }[]; }

export const getLearningAnalytics = async (_userId: string): Promise<LearningAnalytics> => {
  // Mock data - replace with Firestore queries in production
  return {
    totalHoursLearned: 156, coursesCompleted: 8, coursesInProgress: 3, averageScore: 87,
    currentStreak: 12, longestStreak: 28,
    weeklyHours: [2.5, 3, 1.5, 4, 2, 5, 3.5],
    monthlyProgress: [20, 35, 45, 55, 60, 72, 78, 85, 89, 92, 95, 98],
    topSkills: [{ name: 'React', level: 85 }, { name: 'TypeScript', level: 78 }, { name: 'Node.js', level: 72 }, { name: 'CSS', level: 90 }, { name: 'Firebase', level: 65 }],
    recentActivity: [
      { date: '2024-01-15', action: 'Completed Lesson', details: 'React Hooks Deep Dive' },
      { date: '2024-01-14', action: 'Submitted Assignment', details: 'Building a Todo App' },
      { date: '2024-01-13', action: 'Earned Certificate', details: 'JavaScript Fundamentals' },
    ],
  };
};

export const trackEvent = (eventName: string, properties?: Record<string, unknown>): void => {
  if (import.meta.env.DEV) console.log(`[Analytics] ${eventName}`, properties);
};
