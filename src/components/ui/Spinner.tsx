import { motion } from 'framer-motion';
interface Props { size?: 'sm' | 'md' | 'lg'; color?: string; className?: string; }
const sizes = { sm: 'w-5 h-5', md: 'w-8 h-8', lg: 'w-12 h-12' };
const Spinner: React.FC<Props> = ({ size = 'md', color = 'text-blue-600', className = '' }) => (
  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    className={'border-2 border-gray-200 border-t-current rounded-full ' + sizes[size] + ' ' + color + ' ' + className} />
);
export default Spinner;
