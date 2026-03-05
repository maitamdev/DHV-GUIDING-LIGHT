import React from 'react';
const LoadingPage: React.FC = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <div className='w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4' />
      <p className='text-gray-500 font-medium'>Loading...</p>
    </div>
  </div>
);
export default LoadingPage;
