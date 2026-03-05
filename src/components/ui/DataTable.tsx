import React, { useState } from 'react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
interface Column<T> { key: keyof T; label: string; sortable?: boolean; render?: (value: T[keyof T], row: T) => React.ReactNode; }
interface Props<T> { columns: Column<T>[]; data: T[]; className?: string; }
function DataTable<T extends Record<string, unknown>>({ columns, data, className = '' }: Props<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const handleSort = (key: keyof T) => { if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc'); else { setSortKey(key); setSortDir('asc'); } };
  const sorted = [...data].sort((a, b) => { if (!sortKey) return 0; const av = a[sortKey], bv = b[sortKey]; if (av < bv) return sortDir === 'asc' ? -1 : 1; if (av > bv) return sortDir === 'asc' ? 1 : -1; return 0; });
  return (
    <div className={'overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 ' + className}>
      <table className='w-full'><thead><tr className='bg-gray-50 dark:bg-gray-800'>{columns.map(col => (
        <th key={String(col.key)} onClick={() => col.sortable && handleSort(col.key)}
          className={'px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 ' + (col.sortable ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700' : '')}>
          <span className='flex items-center gap-1'>{col.label}
            {col.sortable && (sortKey === col.key ? (sortDir === 'asc' ? <FaSortUp /> : <FaSortDown />) : <FaSort className='text-gray-300' />)}
          </span>
        </th>
      ))}</tr></thead>
      <tbody>{sorted.map((row, i) => (<tr key={i} className='border-t border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'>
        {columns.map(col => (<td key={String(col.key)} className='px-4 py-3 text-sm text-gray-600 dark:text-gray-400'>
          {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
        </td>))}
      </tr>))}</tbody></table>
    </div>
  );
}
export default DataTable;
