import { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { FaStar, FaPaperPlane } from 'react-icons/fa';
const Feedback = () => { usePageTitle('Feedback');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return (<div className='min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center'><div className='text-center'><div className='text-6xl mb-4'>Thank you!</div><h2 className='text-2xl font-bold text-gray-900 mb-2'>Feedback Received</h2><p className='text-gray-600'>We appreciate your feedback and will use it to improve.</p></div></div>);
  return (<div className='min-h-screen bg-gray-50 pt-24 pb-16'><div className='container mx-auto px-4 max-w-xl'>
    <h1 className='text-3xl font-bold text-gray-900 mb-8 text-center'>Give Us Feedback</h1>
    <div className='bg-white rounded-2xl p-8 shadow-md'>
      <div className='text-center mb-6'><p className='text-gray-600 mb-3'>How would you rate your experience?</p>
        <div className='flex justify-center gap-2'>{[1,2,3,4,5].map(s => (<button key={s} onClick={() => setRating(s)} className='text-3xl transition-transform hover:scale-125'><FaStar className={s <= rating ? 'text-yellow-400' : 'text-gray-200'} /></button>))}</div>
      </div>
      <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4} placeholder='Tell us what you think...' className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none' />
      <button onClick={() => setSubmitted(true)} disabled={!rating} className='w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'><FaPaperPlane />Submit Feedback</button>
    </div>
  </div></div>);
};
export default Feedback;
