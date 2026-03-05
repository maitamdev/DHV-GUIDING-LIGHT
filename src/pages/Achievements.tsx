
import { usePageTitle } from '../hooks/usePageTitle';
import { motion } from 'framer-motion';
const achievements = [
  { id: 1, name: 'First Steps', desc: 'Complete your first lesson', icon: '1F680', earned: true, date: '2025-01-15' },
  { id: 2, name: 'Course Champion', desc: 'Complete 5 courses', icon: '1F3C6', earned: true, date: '2025-02-20' },
  { id: 3, name: 'Study Streak', desc: 'Maintain a 7-day streak', icon: '1F525', earned: true, date: '2025-02-25' },
  { id: 4, name: 'Community Star', desc: 'Help 10 students', icon: '2B50', earned: false, date: '' },
  { id: 5, name: 'Code Master', desc: 'Submit 20 assignments', icon: '1F4BB', earned: false, date: '' },
  { id: 6, name: 'Knowledge Seeker', desc: 'Read 50 blog posts', icon: '1F4DA', earned: false, date: '' },
  { id: 7, name: 'Mentor Bond', desc: 'Complete 5 mentor sessions', icon: '1F91D', earned: true, date: '2025-03-01' },
  { id: 8, name: 'Night Owl', desc: 'Study after midnight', icon: '1F989', earned: true, date: '2025-01-20' },
];
const Achievements = () => {
  usePageTitle('Achievements');
  const earned = achievements.filter(a => a.earned).length;
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>Achievements</h1>
        <p className='text-gray-500 mb-8'>{earned}/{achievements.length} unlocked</p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {achievements.map((a, i) => (
            <motion.div key={a.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
              className={'bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm ' + (!a.earned ? 'opacity-40 grayscale' : '')}>
              <div className='text-4xl mb-3'>{String.fromCodePoint(parseInt(a.icon, 16))}</div>
              <h3 className='font-bold text-gray-900 dark:text-white text-sm'>{a.name}</h3>
              <p className='text-xs text-gray-500 mt-1'>{a.desc}</p>
              {a.earned && <p className='text-xs text-green-600 mt-2 font-medium'>{a.date}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Achievements;
