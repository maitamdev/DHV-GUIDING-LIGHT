import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
interface Props { tags: string[]; onChange: (tags: string[]) => void; placeholder?: string; maxTags?: number; }
const TagInput: React.FC<Props> = ({ tags, onChange, placeholder = 'Add tag...', maxTags = 10 }) => {
  const [input, setInput] = useState('');
  const addTag = () => { const tag = input.trim(); if (tag && !tags.includes(tag) && tags.length < maxTags) { onChange([...tags, tag]); setInput(''); } };
  const removeTag = (index: number) => onChange(tags.filter((_, i) => i !== index));
  return (
    <div className='flex flex-wrap gap-2 p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 min-h-[42px]'>
      {tags.map((tag, i) => (<span key={i} className='inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm'>
        {tag}<button onClick={() => removeTag(i)} className='hover:text-blue-900'><FaTimes className='text-xs' /></button>
      </span>))}
      <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } }}
        placeholder={tags.length < maxTags ? placeholder : ''} disabled={tags.length >= maxTags}
        className='flex-1 min-w-[100px] outline-none bg-transparent text-sm text-gray-700 dark:text-gray-300' />
    </div>
  );
};
export default TagInput;
