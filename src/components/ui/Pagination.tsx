import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PaginationProps { currentPage: number; totalPages: number; onPageChange: (page: number) => void; className?: string; }

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, className = '' }) => {
  const pages: (number | string)[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) pages.push(i);
    else if (pages[pages.length - 1] !== '...') pages.push('...');
  }

  return (
    <nav className={`flex items-center justify-center gap-1 ${className}`}>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}
        className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"><FaChevronLeft className="text-sm" /></button>
      {pages.map((page, i) => typeof page === 'number' ? (
        <button key={i} onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${page === currentPage ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-700'}`}>{page}</button>
      ) : <span key={i} className="px-2 text-gray-400">...</span>)}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= totalPages}
        className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"><FaChevronRight className="text-sm" /></button>
    </nav>
  );
};

export default Pagination;
