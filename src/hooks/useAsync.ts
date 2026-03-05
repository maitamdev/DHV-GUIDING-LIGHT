import { useState, useCallback } from 'react';
interface AsyncState<T> { data: T | null; error: Error | null; loading: boolean; }
export function useAsync<T>() {
  const [state, setState] = useState<AsyncState<T>>({ data: null, error: null, loading: false });
  const execute = useCallback(async (asyncFn: () => Promise<T>) => {
    setState({ data: null, error: null, loading: true });
    try { const data = await asyncFn(); setState({ data, error: null, loading: false }); return data; }
    catch (error) { const err = error instanceof Error ? error : new Error(String(error)); setState({ data: null, error: err, loading: false }); throw err; }
  }, []);
  const reset = useCallback(() => setState({ data: null, error: null, loading: false }), []);
  return { ...state, execute, reset };
}
