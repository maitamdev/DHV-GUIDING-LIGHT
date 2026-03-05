export interface PaginationParams { page: number; limit: number; sortBy?: string; sortOrder?: 'asc' | 'desc'; }
export interface PaginatedResponse<T> { data: T[]; total: number; page: number; limit: number; totalPages: number; hasNext: boolean; hasPrev: boolean; }
export interface InfiniteScrollState<T> { pages: T[][]; hasMore: boolean; isLoading: boolean; error: string | null; }
