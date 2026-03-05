
import { usePageTitle } from '../hooks/usePageTitle';
import { FaEnvelope, FaComments, FaBook, FaPhone, FaQuestionCircle } from 'react-icons/fa';
const channels = [
  { icon: <FaComments className='text-blue-500' />, title: 'Live Chat', desc: 'Chat with our support team in real-time', action: 'Start Chat', color: 'bg-blue-50 dark:bg-blue-900/20' },
  { icon: <FaEnvelope className='text-green-500' />, title: 'Email Support', desc: 'Send us an email and we will respond within 24h', action: 'Send Email', color: 'bg-green-50 dark:bg-green-900/20' },
  { icon: <FaPhone className='text-purple-500' />, title: 'Phone Support', desc: 'Call us during business hours (9AM-6PM)', action: 'Call Now', color: 'bg-purple-50 dark:bg-purple-900/20' },
  { icon: <FaBook className='text-orange-500' />, title: 'Knowledge Base', desc: 'Browse our documentation and guides', action: 'Browse', color: 'bg-orange-50 dark:bg-orange-900/20' },
  { icon: <FaQuestionCircle className='text-indigo-500' />, title: 'FAQ', desc: 'Find answers to common questions', action: 'View FAQ', color: 'bg-indigo-50 dark:bg-indigo-900/20' },
];
const Support = () => {
  usePageTitle('Support');
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16'><div className='container mx-auto px-4 max-w-4xl'>
      <div className='text-center mb-12'><h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>How can we help?</h1><p className='text-lg text-gray-500'>Choose a support channel below</p></div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>{channels.map((c, i) => (
        <div key={i} className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center'>
          <div className={'w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 ' + c.color}>{c.icon}</div>
          <h3 className='font-bold text-gray-900 dark:text-white mb-2'>{c.title}</h3>
          <p className='text-sm text-gray-500 mb-4'>{c.desc}</p>
          <button className='px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700'>{c.action}</button>
        </div>
      ))}</div>
    </div></div>
  );
};
export default Support;
