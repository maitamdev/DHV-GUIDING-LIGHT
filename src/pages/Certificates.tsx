import { usePageTitle } from '../hooks/usePageTitle';
import { FaAward, FaDownload, FaShare } from 'react-icons/fa';
const mockCerts = [
  { id: 1, title: 'Web Development Fundamentals', issueDate: 'Jan 15, 2024', credentialId: 'DHV-WD-2024-001', course: 'Complete Web Development Bootcamp' },
  { id: 2, title: 'React Advanced Patterns', issueDate: 'Feb 01, 2024', credentialId: 'DHV-RE-2024-015', course: 'React & Node.js Complete Guide' },
  { id: 3, title: 'UI/UX Design Basics', issueDate: 'Feb 20, 2024', credentialId: 'DHV-UX-2024-008', course: 'UI/UX Design Masterclass' },
];
const Certificates = () => { usePageTitle('My Certificates');
  return (<div className="min-h-screen bg-gray-50 pt-24 pb-16"><div className="container mx-auto px-4 max-w-4xl">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">My Certificates</h1>
    <div className="grid gap-6">{mockCerts.map(cert => (
      <div key={cert.id} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4"><div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center"><FaAward className="text-2xl text-white" /></div>
          <div className="flex-1"><h3 className="text-lg font-bold text-gray-900">{cert.title}</h3><p className="text-gray-500 text-sm mt-1">{cert.course}</p><p className="text-gray-400 text-xs mt-2">Issued: {cert.issueDate} â€¢ ID: {cert.credentialId}</p></div>
          <div className="flex gap-2"><button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"><FaDownload /></button><button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"><FaShare /></button></div>
        </div></div>
    ))}</div>
  </div></div>);
};
export default Certificates;
