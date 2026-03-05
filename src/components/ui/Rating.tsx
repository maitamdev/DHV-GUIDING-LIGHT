import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
interface Props { value: number; onChange?: (value: number) => void; max?: number; size?: 'sm' | 'md' | 'lg'; readonly?: boolean; }
const sizes = { sm: 'text-sm', md: 'text-xl', lg: 'text-3xl' };
const Rating: React.FC<Props> = ({ value, onChange, max = 5, size = 'md', readonly = false }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className='flex gap-1'>
      {Array.from({ length: max }, (_, i) => i + 1).map(star => (
        <button key={star} type='button' disabled={readonly}
          onClick={() => onChange?.(star)} onMouseEnter={() => !readonly && setHover(star)} onMouseLeave={() => setHover(0)}
          className={sizes[size] + ' transition-colors ' + (!readonly ? 'cursor-pointer' : 'cursor-default')}>
          <FaStar className={(hover || value) >= star ? 'text-yellow-400' : 'text-gray-300'} />
        </button>
      ))}
    </div>
  );
};
export default Rating;
