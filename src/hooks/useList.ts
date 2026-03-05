import { useState, useCallback } from 'react';
export function useList<T>(initial: T[] = []) {
  const [list, setList] = useState<T[]>(initial);
  const add = useCallback((item: T) => setList(l => [...l, item]), []);
  const removeAt = useCallback((index: number) => setList(l => l.filter((_, i) => i !== index)), []);
  const updateAt = useCallback((index: number, item: T) => setList(l => l.map((v, i) => i === index ? item : v)), []);
  const clear = useCallback(() => setList([]), []);
  const move = useCallback((from: number, to: number) => setList(l => { const copy = [...l]; const [item] = copy.splice(from, 1); copy.splice(to, 0, item); return copy; }), []);
  return { list, setList, add, removeAt, updateAt, clear, move, size: list.length, isEmpty: list.length === 0 };
}
