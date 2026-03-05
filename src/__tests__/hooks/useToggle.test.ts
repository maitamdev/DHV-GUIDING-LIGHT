import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useToggle } from '../../hooks/useToggle';
describe('useToggle', () => {
  it('initializes with false by default', () => { const { result } = renderHook(() => useToggle()); expect(result.current[0]).toBe(false); });
  it('initializes with provided value', () => { const { result } = renderHook(() => useToggle(true)); expect(result.current[0]).toBe(true); });
  it('toggles value', () => { const { result } = renderHook(() => useToggle()); act(() => result.current[1]()); expect(result.current[0]).toBe(true); act(() => result.current[1]()); expect(result.current[0]).toBe(false); });
});
