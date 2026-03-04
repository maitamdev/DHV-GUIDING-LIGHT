export interface RoadmapStep { title: string; description: string; skills: string[]; duration: string; resources: string[]; }
export interface RoadmapData { id: string; title: string; description: string; icon: string; color: string; steps: RoadmapStep[]; }
export const roadmapsData: RoadmapData[] = [
  { id: 'frontend', title: 'Frontend Developer', description: 'Master modern frontend development', icon: 'ðŸŽ¨', color: 'from-blue-500 to-cyan-500', steps: [
    { title: 'HTML & CSS Basics', description: 'Learn semantic HTML and CSS fundamentals', skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid'], duration: '4 weeks', resources: ['MDN Web Docs', 'freeCodeCamp'] },
    { title: 'JavaScript Essentials', description: 'Master JavaScript programming', skills: ['ES6+', 'DOM', 'Async/Await', 'Fetch API'], duration: '6 weeks', resources: ['JavaScript.info', 'Eloquent JS'] },
    { title: 'React Framework', description: 'Build modern UIs with React', skills: ['Components', 'Hooks', 'State Management', 'Router'], duration: '8 weeks', resources: ['React Docs', 'DHV Courses'] },
    { title: 'Advanced Topics', description: 'TypeScript, testing, performance', skills: ['TypeScript', 'Testing', 'Performance', 'CI/CD'], duration: '6 weeks', resources: ['TypeScript Docs', 'Vitest'] },
  ]},
  { id: 'backend', title: 'Backend Developer', description: 'Build scalable server-side applications', icon: 'âš™ï¸', color: 'from-green-500 to-emerald-500', steps: [
    { title: 'Server Fundamentals', description: 'HTTP, REST APIs, Node.js basics', skills: ['Node.js', 'Express', 'REST API', 'HTTP'], duration: '5 weeks', resources: ['Node.js Docs'] },
    { title: 'Databases', description: 'SQL and NoSQL database mastery', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'ORM'], duration: '6 weeks', resources: ['SQL Tutorial'] },
    { title: 'Authentication & Security', description: 'Secure your applications', skills: ['JWT', 'OAuth', 'CORS', 'Encryption'], duration: '4 weeks', resources: ['OWASP'] },
    { title: 'DevOps & Deployment', description: 'Docker, CI/CD, Cloud', skills: ['Docker', 'AWS', 'CI/CD', 'Monitoring'], duration: '6 weeks', resources: ['Docker Docs'] },
  ]},
  { id: 'data-science', title: 'Data Scientist', description: 'Analyze data and build ML models', icon: 'ðŸ“Š', color: 'from-purple-500 to-pink-500', steps: [
    { title: 'Python & Statistics', description: 'Programming and math foundations', skills: ['Python', 'NumPy', 'Pandas', 'Statistics'], duration: '6 weeks', resources: ['Python Docs'] },
    { title: 'Data Analysis', description: 'Explore and visualize data', skills: ['Matplotlib', 'Seaborn', 'SQL', 'EDA'], duration: '5 weeks', resources: ['Kaggle'] },
    { title: 'Machine Learning', description: 'Build predictive models', skills: ['Scikit-learn', 'Regression', 'Classification', 'Clustering'], duration: '8 weeks', resources: ['Coursera ML'] },
    { title: 'Deep Learning', description: 'Neural networks and AI', skills: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'], duration: '8 weeks', resources: ['Fast.ai'] },
  ]},
];
