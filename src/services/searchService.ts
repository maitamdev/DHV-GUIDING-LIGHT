interface SearchResult { id: string; type: 'course' | 'blog' | 'mentor' | 'page'; title: string; description: string; url: string; thumbnail?: string; }
const staticPages: SearchResult[] = [
  { id: 'about', type: 'page', title: 'About Us', description: 'Learn about DHV Guiding Light', url: '/about' },
  { id: 'faq', type: 'page', title: 'FAQ', description: 'Frequently asked questions', url: '/faq' },
  { id: 'pricing', type: 'page', title: 'Pricing', description: 'View our plans', url: '/pricing' },
  { id: 'contact', type: 'page', title: 'Contact', description: 'Get in touch', url: '/contact' },
];
export const searchAll = async (query: string): Promise<SearchResult[]> => {
  if (!query.trim()) return [];
  const lq = query.toLowerCase();
  return staticPages.filter(p => p.title.toLowerCase().includes(lq) || p.description.toLowerCase().includes(lq));
};
export const getSearchSuggestions = (query: string): string[] => {
  const suggestions = ['React course', 'TypeScript basics', 'AI mentor', 'Portfolio builder', 'Learning roadmap', 'Certificates'];
  if (!query.trim()) return suggestions.slice(0, 4);
  return suggestions.filter(s => s.toLowerCase().includes(query.toLowerCase()));
};
