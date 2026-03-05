import React from 'react';
interface Props { password: string; }
const getStrength = (p: string): { score: number; label: string; color: string } => {
  let score = 0;
  if (p.length >= 8) score++;
  if (/[a-z]/.test(p) && /[A-Z]/.test(p)) score++;
  if (/\d/.test(p)) score++;
  if (/[^a-zA-Z0-9]/.test(p)) score++;
  if (p.length >= 12) score++;
  const labels = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];
  const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-emerald-500'];
  const idx = Math.min(score, 4);
  return { score, label: labels[idx], color: colors[idx] };
};
const PasswordStrength: React.FC<Props> = ({ password }) => {
  if (!password) return null;
  const { score, label, color } = getStrength(password);
  return (
    <div className='mt-2'>
      <div className='flex gap-1 mb-1'>{Array(5).fill(0).map((_, i) => (<div key={i} className={'h-1 flex-1 rounded-full ' + (i <= score - 1 ? color : 'bg-gray-200')} />))}</div>
      <p className='text-xs text-gray-500'>{label}</p>
    </div>
  );
};
export default PasswordStrength;
