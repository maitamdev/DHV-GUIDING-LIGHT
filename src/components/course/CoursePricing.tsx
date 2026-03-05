import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaHeart, FaCheck } from 'react-icons/fa';
interface Props { price: number; discountPrice?: number; features: string[]; onAddToCart: () => void; onWishlist: () => void; }
const CoursePricing: React.FC<Props> = ({ price, discountPrice, features, onAddToCart, onWishlist }) => (
  <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24'>
    <div className='mb-4'>
      {discountPrice ? (
        <div className='flex items-center gap-3'>
          <span className='text-3xl font-bold text-gray-900 dark:text-white'></span>
          <span className='text-lg text-gray-400 line-through'></span>
          <span className='px-2 py-0.5 bg-red-100 text-red-700 text-sm font-bold rounded'>{Math.round((1 - discountPrice / price) * 100)}% OFF</span>
        </div>
      ) : (<span className='text-3xl font-bold text-gray-900 dark:text-white'></span>)}
    </div>
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onAddToCart}
      className='w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 mb-3'>
      <FaShoppingCart />Add to Cart
    </motion.button>
    <button onClick={onWishlist} className='w-full py-3 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center justify-center gap-2 hover:bg-gray-50'>
      <FaHeart />Wishlist
    </button>
    <div className='mt-6 space-y-2'>
      <h4 className='font-semibold text-gray-900 dark:text-white text-sm'>This course includes:</h4>
      {features.map((f, i) => (<p key={i} className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400'><FaCheck className='text-green-500 flex-shrink-0' />{f}</p>))}
    </div>
  </div>
);
export default CoursePricing;
