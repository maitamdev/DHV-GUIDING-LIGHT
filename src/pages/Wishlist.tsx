import { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { FaHeart, FaTrash, FaShoppingCart } from 'react-icons/fa';
const initialWishlist = [
  { id: 1, title: 'Advanced React Patterns', price: 49, thumbnail: '/img/course-1.jpg', instructor: 'Mai Tran Thien Tam' },
  { id: 2, title: 'Node.js Microservices', price: 59, thumbnail: '/img/course-2.jpg', instructor: 'Nguyen Van Minh' },
  { id: 3, title: 'UI/UX Design Bootcamp', price: 39, thumbnail: '/img/course-3.jpg', instructor: 'Pham Duc Anh' },
];
const Wishlist = () => {
  usePageTitle('Wishlist');
  const [items, setItems] = useState(initialWishlist);
  const remove = (id: number) => setItems(prev => prev.filter(i => i.id !== id));
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16'>
      <div className='container mx-auto px-4 max-w-3xl'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3'><FaHeart className='text-red-500' />My Wishlist</h1>
        <p className='text-gray-500 mb-8'>{items.length} courses saved</p>
        {items.length === 0 ? <div className='text-center py-16 text-gray-400'><FaHeart className='text-5xl mx-auto mb-4' /><p>Your wishlist is empty</p></div> :
          <div className='space-y-4'>{items.map(item => (
            <div key={item.id} className='bg-white dark:bg-gray-800 rounded-2xl p-4 flex items-center gap-4 shadow-sm'>
              <img src={item.thumbnail} alt={item.title} className='w-24 h-16 rounded-lg object-cover' />
              <div className='flex-1'><h3 className='font-semibold text-gray-900 dark:text-white'>{item.title}</h3><p className='text-sm text-gray-500'>{item.instructor}</p></div>
              <p className='text-lg font-bold text-blue-600'></p>
              <button className='p-2 text-blue-600 hover:bg-blue-50 rounded-lg'><FaShoppingCart /></button>
              <button onClick={() => remove(item.id)} className='p-2 text-red-400 hover:bg-red-50 rounded-lg'><FaTrash /></button>
            </div>
          ))}</div>}
      </div>
    </div>
  );
};
export default Wishlist;
