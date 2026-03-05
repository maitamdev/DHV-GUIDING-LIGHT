import React from 'react';
import { FaStar } from 'react-icons/fa';
interface Review { id: number; userName: string; avatar: string; rating: number; comment: string; date: string; }
interface Props { reviews: Review[]; averageRating: number; totalReviews: number; }
const CourseReviews: React.FC<Props> = ({ reviews, averageRating, totalReviews }) => (
  <div>
    <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>Student Reviews</h2>
    <div className='flex items-center gap-6 mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
      <div className='text-center'>
        <p className='text-5xl font-bold text-gray-900 dark:text-white'>{averageRating}</p>
        <div className='flex gap-1 mt-2'>{Array(5).fill(0).map((_, i) => (<FaStar key={i} className={i < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'} />))}</div>
        <p className='text-sm text-gray-500 mt-1'>{totalReviews} reviews</p>
      </div>
    </div>
    <div className='space-y-4'>{reviews.map(r => (
      <div key={r.id} className='border-b border-gray-100 dark:border-gray-700 pb-4'>
        <div className='flex items-center gap-3 mb-2'>
          <img src={r.avatar} alt={r.userName} className='w-10 h-10 rounded-full' />
          <div>
            <p className='font-semibold text-gray-900 dark:text-white text-sm'>{r.userName}</p>
            <div className='flex items-center gap-2'>
              <div className='flex gap-0.5'>{Array(5).fill(0).map((_, i) => (<FaStar key={i} className={'text-xs ' + (i < r.rating ? 'text-yellow-400' : 'text-gray-300')} />))}</div>
              <span className='text-xs text-gray-500'>{r.date}</span>
            </div>
          </div>
        </div>
        <p className='text-gray-600 dark:text-gray-400 text-sm ml-13'>{r.comment}</p>
      </div>
    ))}</div>
  </div>
);
export default CourseReviews;
