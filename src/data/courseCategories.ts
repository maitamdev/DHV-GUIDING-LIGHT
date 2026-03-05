export interface CourseCategory { id: string; name: string; icon: string; color: string; courseCount: number; description: string; }
export const courseCategories: CourseCategory[] = [
  { id: 'frontend', name: 'Frontend Development', icon: 'code', color: 'from-blue-500 to-cyan-500', courseCount: 24, description: 'HTML, CSS, JavaScript, React, Vue' },
  { id: 'backend', name: 'Backend Development', icon: 'server', color: 'from-green-500 to-emerald-500', courseCount: 18, description: 'Node.js, Python, Java, APIs' },
  { id: 'mobile', name: 'Mobile Development', icon: 'phone', color: 'from-purple-500 to-pink-500', courseCount: 12, description: 'React Native, Flutter, iOS, Android' },
  { id: 'datascience', name: 'Data Science', icon: 'chart', color: 'from-orange-500 to-red-500', courseCount: 15, description: 'Python, ML, AI, Data Analysis' },
  { id: 'devops', name: 'DevOps & Cloud', icon: 'cloud', color: 'from-indigo-500 to-violet-500', courseCount: 8, description: 'AWS, Docker, Kubernetes, CI/CD' },
  { id: 'design', name: 'UI/UX Design', icon: 'paint', color: 'from-pink-500 to-rose-500', courseCount: 10, description: 'Figma, Adobe XD, User Research' },
];
