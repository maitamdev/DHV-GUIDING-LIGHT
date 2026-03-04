import React from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';

interface AlertBannerProps { type?: 'info' | 'success' | 'warning' | 'error'; title?: string; message: string; dismissible?: boolean; onDismiss?: () => void; className?: string; }
const icons = { info: FaInfoCircle, success: FaCheckCircle, warning: FaExclamationTriangle, error: FaTimesCircle };
const styles = { info: 'bg-blue-50 border-blue-200 text-blue-800', success: 'bg-green-50 border-green-200 text-green-800', warning: 'bg-yellow-50 border-yellow-200 text-yellow-800', error: 'bg-red-50 border-red-200 text-red-800' };

const AlertBanner: React.FC<AlertBannerProps> = ({ type = 'info', title, message, dismissible, onDismiss, className = '' }) => {
  const Icon = icons[type];
  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl border ${styles[type]} ${className}`}>
      <Icon className="text-xl flex-shrink-0 mt-0.5" />
      <div className="flex-1"><p className="font-semibold">{title}</p><p className="text-sm mt-0.5 opacity-90">{message}</p></div>
      {dismissible && <button onClick={onDismiss} className="p-1 hover:opacity-70"><FaTimes /></button>}
    </div>
  );
};

export default AlertBanner;
