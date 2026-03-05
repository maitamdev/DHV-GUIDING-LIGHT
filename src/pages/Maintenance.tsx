import React from 'react';
import { FaTools } from 'react-icons/fa';
const Maintenance = () => (
  <div className='min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center px-4'>
    <div className='text-center text-white max-w-md'>
      <FaTools className='text-6xl mx-auto mb-6 opacity-80' />
      <h1 className='text-4xl font-bold mb-4'>Under Maintenance</h1>
      <p className='text-xl text-blue-100 mb-6'>We are performing scheduled maintenance. We will be back shortly!</p>
      <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'>
        <p className='text-sm text-blue-200'>Estimated completion: <span className='font-bold text-white'>30 minutes</span></p>
      </div>
    </div>
  </div>
);
export default Maintenance;
