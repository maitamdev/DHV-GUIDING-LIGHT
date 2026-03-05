import { useState, useEffect } from 'react';
import { FaRocket, FaBell } from 'react-icons/fa';
const ComingSoon = () => {
  const target = new Date('2025-06-01').getTime();
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => { const t = setInterval(() => { const diff = target - Date.now(); setTime({ days: Math.floor(diff / 86400000), hours: Math.floor((diff % 86400000) / 3600000), minutes: Math.floor((diff % 3600000) / 60000), seconds: Math.floor((diff % 60000) / 1000) }); }, 1000); return () => clearInterval(t); }, []);
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center px-4'>
      <div className='text-center text-white max-w-lg'>
        <FaRocket className='text-6xl mx-auto mb-6 text-yellow-400' />
        <h1 className='text-5xl font-bold mb-4'>Coming Soon</h1>
        <p className='text-xl text-gray-300 mb-10'>Something amazing is in development. Stay tuned!</p>
        <div className='grid grid-cols-4 gap-4 mb-10'>
          {[['Days', time.days], ['Hours', time.hours], ['Minutes', time.minutes], ['Seconds', time.seconds]].map(([label, val]) => (
            <div key={String(label)} className='bg-white/10 backdrop-blur-sm rounded-2xl p-4'>
              <p className='text-3xl font-bold'>{String(val).padStart(2, '0')}</p>
              <p className='text-xs text-gray-400 mt-1'>{String(label)}</p>
            </div>
          ))}
        </div>
        <button className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold flex items-center gap-2 mx-auto'><FaBell />Notify Me</button>
      </div>
    </div>
  );
};
export default ComingSoon;
