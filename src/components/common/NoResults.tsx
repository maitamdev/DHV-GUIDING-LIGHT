import React from 'react';
import { FaSearch } from 'react-icons/fa';
interface Props { query?: string; message?: string; }
const NoResults: React.FC<Props> = ({ query, message }) => (
  <div className='text-center py-16'>
    <FaSearch className='text-5xl text-gray-300 mx-auto mb-4' />
    <h3 className='text-xl font-semibold text-gray-700 mb-2'>{query ? 'No results for \"' + query + '\"' : 'No results found'}</h3>
    <p className='text-gray-500'>{message || 'Try adjusting your search or filters.'}</p>
  </div>
);
export default NoResults;
