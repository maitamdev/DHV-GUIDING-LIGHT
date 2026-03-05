export interface SkillCategory { name: string; skills: string[]; }
export const skillCategories: SkillCategory[] = [
  { name: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Next.js', 'Tailwind CSS', 'SASS', 'Webpack', 'Vite'] },
  { name: 'Backend', skills: ['Node.js', 'Express', 'Python', 'Django', 'Java', 'Spring Boot', 'Go', 'REST APIs', 'GraphQL', 'gRPC'] },
  { name: 'Database', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase', 'Prisma'] },
  { name: 'DevOps', skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'CI/CD', 'Terraform', 'Linux'] },
  { name: 'Mobile', skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'] },
  { name: 'Tools', skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Jira', 'Notion'] },
];
export const popularSkills = ['React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS', 'Git', 'MongoDB', 'Next.js', 'Tailwind CSS'];
