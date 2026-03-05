import React from 'react';
interface Props { text: string; query: string; className?: string; }
const escapeRegex = (s: string) => s.replace(/[-/^$*+?.()|[\]{}]/g, String.fromCharCode(92) + String.fromCharCode(38));
const Highlight: React.FC<Props> = ({ text, query, className = '' }) => {
  if (!query.trim()) return <span className={className}>{text}</span>;
  const parts = text.split(new RegExp('(' + escapeRegex(query) + ')', 'gi'));
  return (
    <span className={className}>
      {parts.map((part, i) => part.toLowerCase() === query.toLowerCase()
        ? <mark key={i} className='bg-yellow-200 dark:bg-yellow-800 px-0.5 rounded'>{part}</mark>
        : <span key={i}>{part}</span>
      )}
    </span>
  );
};
export default Highlight;
