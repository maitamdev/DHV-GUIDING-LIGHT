import { useState, useCallback } from 'react';
export function useMap<K, V>(initial?: [K, V][]) {
  const [map, setMap] = useState<Map<K, V>>(new Map(initial));
  const set = useCallback((key: K, value: V) => setMap(m => new Map(m).set(key, value)), []);
  const remove = useCallback((key: K) => setMap(m => { const n = new Map(m); n.delete(key); return n; }), []);
  const clear = useCallback(() => setMap(new Map()), []);
  const has = useCallback((key: K) => map.has(key), [map]);
  const get = useCallback((key: K) => map.get(key), [map]);
  return { map, set, remove, clear, has, get, size: map.size };
}
