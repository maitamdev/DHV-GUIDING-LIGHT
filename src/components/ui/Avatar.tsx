import React from 'react';
import { getInitials } from '../../utils/formatters';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'busy' | 'away';
  className?: string;
}

const sizeStyles = { xs: 'w-6 h-6 text-xs', sm: 'w-8 h-8 text-sm', md: 'w-10 h-10 text-base', lg: 'w-14 h-14 text-lg', xl: 'w-20 h-20 text-2xl' };
const statusColors = { online: 'bg-green-500', offline: 'bg-gray-400', busy: 'bg-red-500', away: 'bg-yellow-500' };

const Avatar: React.FC<AvatarProps> = ({ src, alt = '', name, size = 'md', status, className = '' }) => (
  <div className={`relative inline-flex ${className}`}>
    {src ? (
      <img src={src} alt={alt || name || ''} className={`${sizeStyles[size]} rounded-full object-cover border-2 border-white shadow-sm`} />
    ) : (
      <div className={`${sizeStyles[size]} rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold border-2 border-white shadow-sm`}>
        {name ? getInitials(name) : '?'}
      </div>
    )}
    {status && <span className={`absolute bottom-0 right-0 w-3 h-3 ${statusColors[status]} rounded-full border-2 border-white`} />}
  </div>
);

export default Avatar;
