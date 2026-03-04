export interface Category { id: number; name: string; slug: string; icon: string; description: string; courseCount: number; color: string; }
export const categories: Category[] = [
  { id: 1, name: 'Web Development', slug: 'web-development', icon: 'ðŸ’»', description: 'HTML, CSS, JavaScript, React, Node.js', courseCount: 25, color: 'from-blue-500 to-indigo-600' },
  { id: 2, name: 'Data Science', slug: 'data-science', icon: 'ðŸ“Š', description: 'Python, Machine Learning, AI, Analytics', courseCount: 18, color: 'from-green-500 to-emerald-600' },
  { id: 3, name: 'Mobile Development', slug: 'mobile-development', icon: 'ðŸ“±', description: 'React Native, Flutter, iOS, Android', courseCount: 12, color: 'from-purple-500 to-pink-600' },
  { id: 4, name: 'UI/UX Design', slug: 'ui-ux-design', icon: 'ðŸŽ¨', description: 'Figma, Adobe XD, User Research', courseCount: 15, color: 'from-yellow-500 to-orange-600' },
  { id: 5, name: 'Digital Marketing', slug: 'digital-marketing', icon: 'ðŸ“ˆ', description: 'SEO, SEM, Social Media, Content', courseCount: 20, color: 'from-red-500 to-rose-600' },
  { id: 6, name: 'Cloud Computing', slug: 'cloud-computing', icon: 'â˜ï¸', description: 'AWS, Azure, GCP, DevOps', courseCount: 10, color: 'from-cyan-500 to-blue-600' },
  { id: 7, name: 'Cybersecurity', slug: 'cybersecurity', icon: 'ðŸ”', description: 'Ethical Hacking, Network Security', courseCount: 8, color: 'from-gray-600 to-gray-800' },
  { id: 8, name: 'Business & Finance', slug: 'business-finance', icon: 'ðŸ’¼', description: 'Entrepreneurship, Finance, Management', courseCount: 14, color: 'from-emerald-500 to-teal-600' },
];
