import React from 'react';
import { Link } from 'react-router-dom';
interface RelatedPost { slug: string; title: string; thumbnail: string; }
interface Props { categories: string[]; tags: string[]; relatedPosts: RelatedPost[]; }
const BlogSidebar: React.FC<Props> = ({ categories, tags, relatedPosts }) => (
  <aside className='space-y-8'>
    <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm'>
      <h3 className='font-bold text-gray-900 dark:text-white mb-4'>Categories</h3>
      <ul className='space-y-2'>{categories.map(c => (<li key={c}><Link to={'/blog?cat=' + c} className='text-sm text-gray-600 hover:text-blue-600'>{c}</Link></li>))}</ul>
    </div>
    <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm'>
      <h3 className='font-bold text-gray-900 dark:text-white mb-4'>Tags</h3>
      <div className='flex flex-wrap gap-2'>{tags.map(t => (<span key={t} className='px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400'>{t}</span>))}</div>
    </div>
    <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm'>
      <h3 className='font-bold text-gray-900 dark:text-white mb-4'>Related Posts</h3>
      <div className='space-y-3'>{relatedPosts.map(p => (
        <Link key={p.slug} to={'/blog/' + p.slug} className='flex items-center gap-3 group'>
          <img src={p.thumbnail} alt={p.title} className='w-16 h-12 rounded-lg object-cover' />
          <span className='text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600'>{p.title}</span>
        </Link>
      ))}</div>
    </div>
  </aside>
);
export default BlogSidebar;
