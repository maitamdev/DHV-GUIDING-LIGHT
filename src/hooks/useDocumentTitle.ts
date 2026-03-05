import { useEffect, useRef } from 'react';
export function useDocumentTitle(title: string, restoreOnUnmount: boolean = false) {
  const prevTitle = useRef(document.title);
  useEffect(() => {
    document.title = title + ' | DHV Guiding Light';
    return () => { if (restoreOnUnmount) document.title = prevTitle.current; };
  }, [title, restoreOnUnmount]);
}
