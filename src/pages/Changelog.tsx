import { usePageTitle } from '../hooks/usePageTitle';
const changelog = [
  { version: '1.2.0', date: 'Feb 2024', changes: ['Added AI Mentor recommendations', 'New portfolio builder', 'Meeting scheduling system', 'Performance improvements'] },
  { version: '1.1.0', date: 'Jan 2024', changes: ['Dark mode support', 'Blog section', 'Course roadmaps', 'CV template builder'] },
  { version: '1.0.0', date: 'Dec 2023', changes: ['Initial release', 'Course catalog', 'User authentication', 'Mentor profiles', 'Student dashboard'] },
];
const Changelog = () => { usePageTitle('Changelog');
  return (<div className="min-h-screen bg-gray-50 pt-24 pb-16"><div className="container mx-auto px-4 max-w-3xl">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Changelog</h1>
    <div className="space-y-8">{changelog.map((v, i) => (
      <div key={i} className="bg-white rounded-2xl p-6 shadow-sm"><div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">v{v.version}</span><span className="text-gray-500 text-sm">{v.date}</span></div>
        <ul className="space-y-2">{v.changes.map((c, j) => (<li key={j} className="flex items-start gap-2 text-gray-600"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />{c}</li>))}</ul>
      </div>
    ))}</div>
  </div></div>);
};
export default Changelog;
