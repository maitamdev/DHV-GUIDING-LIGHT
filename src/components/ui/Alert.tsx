import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
type AlertVariant = 'info' | 'success' | 'warning' | 'error';
interface Props { variant?: AlertVariant; title?: string; children: React.ReactNode; dismissible?: boolean; className?: string; }
const icons = { info: <FaInfoCircle />, success: <FaCheckCircle />, warning: <FaExclamationTriangle />, error: <FaTimesCircle /> };
const colors = { info: 'bg-blue-50 text-blue-800 border-blue-200', success: 'bg-green-50 text-green-800 border-green-200', warning: 'bg-yellow-50 text-yellow-800 border-yellow-200', error: 'bg-red-50 text-red-800 border-red-200' };
const Alert: React.FC<Props> = ({ variant = 'info', title, children, dismissible = false, className = '' }) => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className={'flex items-start gap-3 p-4 rounded-xl border ' + colors[variant] + ' ' + className} role='alert'>
      <span className='text-lg mt-0.5'>{icons[variant]}</span>
      <div className='flex-1'>
        {title && <p className='font-semibold mb-1'>{title}</p>}
        <div className='text-sm'>{children}</div>
      </div>
      {dismissible && <button onClick={() => setVisible(false)} className='opacity-60 hover:opacity-100'><FaTimes /></button>}
    </div>
  );
};
export default Alert;
