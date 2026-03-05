import { useState, useEffect } from 'react';
interface FetchState<T> { data: T | null; error: string | null; loading: boolean; }
export function useFetch<T>(url: string, options?: RequestInit): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({ data: null, error: null, loading: true });
  useEffect(() => {
    const controller = new AbortController();
    setState(prev => ({ ...prev, loading: true }));
    fetch(url, { ...options, signal: controller.signal })
      .then(res => { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json(); })
      .then(data => setState({ data, error: null, loading: false }))
      .catch(err => { if (err.name !== 'AbortError') setState({ data: null, error: err.message, loading: false }); });
    return () => controller.abort();
  }, [url]);
  return state;
}
