import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useToggle } from '../../hooks/useToggle';

describe('useToggle', () => {
  it('initializes with default value', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.value).toBe(false);
  });

  it('initializes with custom value', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.value).toBe(true);
  });

  it('toggles value', () => {
    const { result } = renderHook(() => useToggle());
    act(() => { result.current.toggle(); });
    expect(result.current.value).toBe(true);
    act(() => { result.current.toggle(); });
    expect(result.current.value).toBe(false);
  });

  it('sets true', () => {
    const { result } = renderHook(() => useToggle(false));
    act(() => { result.current.setTrue(); });
    expect(result.current.value).toBe(true);
  });

  it('sets false', () => {
    const { result } = renderHook(() => useToggle(true));
    act(() => { result.current.setFalse(); });
    expect(result.current.value).toBe(false);
  });
});
