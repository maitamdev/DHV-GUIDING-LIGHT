import React, { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
const questions = [
  { id: 1, question: 'How familiar are you with HTML/CSS?', options: ['Beginner', 'Intermediate', 'Advanced', 'Expert'] },
  { id: 2, question: 'What is your JavaScript proficiency?', options: ['Beginner', 'Intermediate', 'Advanced', 'Expert'] },
  { id: 3, question: 'Have you used React before?', options: ['Never', 'A little', 'Regularly', 'Extensively'] },
  { id: 4, question: 'Database experience level?', options: ['None', 'SQL basics', 'NoSQL too', 'DBA level'] },
  { id: 5, question: 'What are your career goals?', options: ['Frontend Dev', 'Backend Dev', 'Full Stack', 'Data Science'] },
];
const SkillsAssessment = () => {
  usePageTitle('Skills Assessment');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [done, setDone] = useState(false);
  if (done) return (<div className='min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16 flex items-center justify-center'><div className='text-center bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg max-w-md'><div className='text-5xl mb-4'>Assessment Complete!</div><h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>Your Roadmap is Ready</h2><p className='text-gray-500'>Based on your answers, we recommend the Frontend Development path.</p></div></div>);
  const q = questions[step];
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16'><div className='container mx-auto px-4 max-w-xl'>
      <div className='mb-8'><div className='flex gap-1'>{questions.map((_, i) => (<div key={i} className={'h-1.5 flex-1 rounded-full ' + (i <= step ? 'bg-blue-600' : 'bg-gray-200')} />))}</div>
        <p className='text-sm text-gray-500 mt-2'>Question {step + 1} of {questions.length}</p></div>
      <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className='bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md'>
        <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>{q.question}</h2>
        <div className='space-y-3'>{q.options.map(opt => (
          <button key={opt} onClick={() => { setAnswers(a => ({ ...a, [q.id]: opt })); if (step < questions.length - 1) setTimeout(() => setStep(s => s + 1), 300); else setTimeout(() => setDone(true), 300); }}
            className={'w-full text-left p-4 rounded-xl border transition-all ' + (answers[q.id] === opt ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700 hover:border-blue-300')}>
            <span className='flex items-center gap-3'>{answers[q.id] === opt && <FaCheck className='text-blue-600' />}<span className='text-gray-700 dark:text-gray-300'>{opt}</span></span>
          </button>
        ))}</div>
      </motion.div>
    </div></div>
  );
};
export default SkillsAssessment;
