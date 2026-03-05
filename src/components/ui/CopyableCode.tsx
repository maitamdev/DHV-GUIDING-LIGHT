import React, { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
interface Props { code: string; language?: string; }
const CopyableCode: React.FC<Props> = ({ code, language = '' }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className='relative group'>
      <pre className='bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto text-sm'><code className={'language-' + language}>{code}</code></pre>
      <button onClick={handleCopy}
        className='absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity'>
        {copied ? <FaCheck className='text-green-400' /> : <FaCopy />}
      </button>
    </div>
  );
};
export default CopyableCode;
