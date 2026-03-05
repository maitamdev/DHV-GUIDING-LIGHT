import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';
interface Crumb { label: string; path?: string; }
interface Props { items: Crumb[]; className?: string; }
const Breadcrumbs: React.FC<Props> = ({ items, className = '' }) => (
  <nav className={'flex items-center gap-2 text-sm ' + className} aria-label='Breadcrumb'>
    <Link to='/' className='text-gray-400 hover:text-blue-600'><FaHome /></Link>
    {items.map((item, i) => (
      <React.Fragment key={i}>
        <FaChevronRight className='text-gray-300 text-xs' />
        {item.path && i < items.length - 1 ? <Link to={item.path} className='text-gray-500 hover:text-blue-600'>{item.label}</Link>
          : <span className='text-gray-900 dark:text-white font-medium'>{item.label}</span>}
      </React.Fragment>
    ))}
  </nav>
);
export default Breadcrumbs;
