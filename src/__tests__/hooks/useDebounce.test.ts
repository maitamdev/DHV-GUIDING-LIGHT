import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '../../hooks/useDebounce';

describe('useDebounce', () => {
  it('returns initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('hello', 500));
    expect(result.current).toBe('hello');
  });

  it('debounces value updates', async () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 500), { initialProps: { value: 'hello' } });
    rerender({ value: 'world' });
    expect(result.current).toBe('hello');
    act(() => { vi.advanceTimersByTime(500); });
    expect(result.current).toBe('world');
    vi.useRealTimers();
  });
});
