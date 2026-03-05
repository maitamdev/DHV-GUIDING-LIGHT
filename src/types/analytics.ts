export interface LearningAnalytics { totalHours: number; weeklyHours: number[]; dailyStreak: number; longestStreak: number; completionRate: number; averageScore: number; strongestSubject: string; weakestSubject: string; }
export interface ChartData { labels: string[]; datasets: { label: string; data: number[]; color: string; }[]; }
export interface SkillProgress { name: string; level: number; maxLevel: number; category: string; lastPracticed: string; }
export interface LeaderboardEntry { rank: number; userId: string; name: string; avatar: string; points: number; coursesCompleted: number; }
