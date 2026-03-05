import React from 'react';
interface Props { status: 'online' | 'offline' | 'busy' | 'away'; showLabel?: boolean; size?: 'sm' | 'md'; }
const colors = { online: 'bg-green-500', offline: 'bg-gray-400', busy: 'bg-red-500', away: 'bg-yellow-500' };
const StatusIndicator: React.FC<Props> = ({ status, showLabel = false, size = 'sm' }) => (
  <span className='inline-flex items-center gap-1.5'>
    <span className={'rounded-full ' + colors[status] + ' ' + (size === 'sm' ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5')} />
    {showLabel && <span className='text-xs font-medium text-gray-500 capitalize'>{status}</span>}
  </span>
);
export default StatusIndicator;
