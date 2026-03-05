import React from 'react';
import { FaWifi } from 'react-icons/fa';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
const OfflineNotice: React.FC = () => {
  const isOnline = useOnlineStatus();
  if (isOnline) return null;
  return (
    <div className='fixed top-0 left-0 right-0 z-[200] bg-red-500 text-white text-center py-2 text-sm font-medium flex items-center justify-center gap-2'>
      <FaWifi /><span>You are offline. Some features may not work.</span>
    </div>
  );
};
export default OfflineNotice;
