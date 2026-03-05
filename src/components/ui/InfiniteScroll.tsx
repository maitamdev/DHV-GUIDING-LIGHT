import React, { useEffect, useRef, useCallback } from 'react';
interface Props { onLoadMore: () => void; hasMore: boolean; loading: boolean; threshold?: number; children: React.ReactNode; loader?: React.ReactNode; }
const InfiniteScroll: React.FC<Props> = ({ onLoadMore, hasMore, loading, threshold = 200, children, loader }) => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting && hasMore && !loading) onLoadMore();
  }, [onLoadMore, hasMore, loading]);
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleObserver, { rootMargin: threshold + 'px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleObserver, threshold]);
  return (<div>{children}<div ref={sentinelRef} />{loading && (loader || <div className='flex justify-center py-4'><div className='w-8 h-8 border-3 border-blue-200 border-t-blue-600 rounded-full animate-spin' /></div>)}</div>);
};
export default InfiniteScroll;
