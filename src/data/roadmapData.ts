export interface RoadmapStep { id: number; title: string; description: string; skills: string[]; resources: string[]; estimatedHours: number; }
export interface RoadmapPath { id: string; title: string; description: string; icon: string; color: string; difficulty: 'Beginner' | 'Intermediate' | 'Advanced'; totalHours: number; steps: RoadmapStep[]; }
export const roadmaps: RoadmapPath[] = [
  { id: 'frontend', title: 'Frontend Development', description: 'Master modern frontend technologies', icon: 'code', color: 'from-blue-500 to-cyan-500', difficulty: 'Beginner', totalHours: 200,
    steps: [
      { id: 1, title: 'HTML & CSS Fundamentals', description: 'Learn the building blocks of the web', skills: ['HTML5', 'CSS3', 'Responsive Design'], resources: ['MDN Web Docs'], estimatedHours: 40 },
      { id: 2, title: 'JavaScript Essentials', description: 'Master JavaScript programming', skills: ['ES6+', 'DOM Manipulation', 'Async/Await'], resources: ['JavaScript.info'], estimatedHours: 60 },
      { id: 3, title: 'React Framework', description: 'Build modern UIs with React', skills: ['Components', 'Hooks', 'State Management'], resources: ['React Docs'], estimatedHours: 60 },
      { id: 4, title: 'TypeScript', description: 'Add type safety to your code', skills: ['Types', 'Generics', 'Interfaces'], resources: ['TS Handbook'], estimatedHours: 40 },
    ] },
  { id: 'backend', title: 'Backend Development', description: 'Build robust server-side applications', icon: 'server', color: 'from-green-500 to-emerald-500', difficulty: 'Intermediate', totalHours: 250,
    steps: [
      { id: 1, title: 'Node.js Fundamentals', description: 'Learn server-side JavaScript', skills: ['Node.js', 'NPM', 'Express'], resources: ['Node.js Docs'], estimatedHours: 50 },
      { id: 2, title: 'Database Design', description: 'Design and manage databases', skills: ['SQL', 'MongoDB', 'Redis'], resources: ['MongoDB University'], estimatedHours: 60 },
      { id: 3, title: 'REST APIs', description: 'Build RESTful web services', skills: ['REST', 'Authentication', 'Validation'], resources: ['REST API Tutorial'], estimatedHours: 50 },
      { id: 4, title: 'DevOps Basics', description: 'Deploy and manage applications', skills: ['Docker', 'CI/CD', 'Cloud'], resources: ['Docker Docs'], estimatedHours: 40 },
    ] },
  { id: 'datascience', title: 'Data Science', description: 'Analyze data and build ML models', icon: 'chart', color: 'from-purple-500 to-pink-500', difficulty: 'Advanced', totalHours: 300,
    steps: [
      { id: 1, title: 'Python for Data Science', description: 'Master Python data tools', skills: ['Python', 'NumPy', 'Pandas'], resources: ['Python Docs'], estimatedHours: 70 },
      { id: 2, title: 'Data Visualization', description: 'Create insightful visualizations', skills: ['Matplotlib', 'Seaborn', 'Plotly'], resources: ['Kaggle Learn'], estimatedHours: 40 },
      { id: 3, title: 'Machine Learning', description: 'Build predictive models', skills: ['Scikit-learn', 'TensorFlow', 'Neural Networks'], resources: ['Fast.ai'], estimatedHours: 100 },
    ] },
];
