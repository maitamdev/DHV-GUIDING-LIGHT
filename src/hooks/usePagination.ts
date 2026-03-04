import { useState, useMemo, useCallback } from 'react';

interface PaginationResult<T> {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  paginatedData: T[];
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  goToFirst: () => void;
  goToLast: () => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  startIndex: number;
  endIndex: number;
}

/**
 * Client-side pagination hook
 */
export function usePagination<T>(data: T[], pageSize: number = 10): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize]);

  const goToPage = useCallback(
    (page: number) => {
      const validPage = Math.max(1, Math.min(page, totalPages));
      setCurrentPage(validPage);
    },
    [totalPages]
  );

  const nextPage = useCallback(() => goToPage(currentPage + 1), [currentPage, goToPage]);
  const prevPage = useCallback(() => goToPage(currentPage - 1), [currentPage, goToPage]);
  const goToFirst = useCallback(() => goToPage(1), [goToPage]);
  const goToLast = useCallback(() => goToPage(totalPages), [goToPage, totalPages]);

  return {
    currentPage,
    totalPages,
    pageSize,
    paginatedData,
    goToPage,
    nextPage,
    prevPage,
    goToFirst,
    goToLast,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
    startIndex: (currentPage - 1) * pageSize,
    endIndex: Math.min(currentPage * pageSize, data.length),
  };
}
