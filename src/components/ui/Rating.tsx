import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface RatingProps { value: number; max?: number; size?: 'sm' | 'md' | 'lg'; showValue?: boolean; count?: number; className?: string; onChange?: (value: number) => void; }
const sizes = { sm: 'text-sm', md: 'text-lg', lg: 'text-2xl' };

const Rating: React.FC<RatingProps> = ({ value, max = 5, size = 'md', showValue, count, className = '', onChange }) => {
  const stars = Array.from({ length: max }, (_, i) => {
    if (i + 1 <= Math.floor(value)) return 'full';
    if (i + 0.5 <= value) return 'half';
    return 'empty';
  });

  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      {stars.map((type, i) => {
        const Icon = type === 'full' ? FaStar : type === 'half' ? FaStarHalfAlt : FaRegStar;
        return <Icon key={i} className={`${sizes[size]} text-yellow-400 ${onChange ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
          onClick={() => onChange?.(i + 1)} />;
      })}
      {showValue && <span className="ml-1 font-semibold text-gray-700">{value.toFixed(1)}</span>}
      {count !== undefined && <span className="ml-1 text-gray-500 text-sm">({count.toLocaleString()})</span>}
    </div>
  );
};

export default Rating;
