import { useState, useCallback } from 'react';

interface CopyToClipboardResult {
  copied: boolean;
  copy: (text: string) => Promise<void>;
  reset: () => void;
}

/**
 * Copy text to clipboard with success feedback
 */
export function useCopyToClipboard(resetDelay: number = 2000): CopyToClipboardResult {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), resetDelay);
      } catch (error) {
        console.error('Failed to copy to clipboard:', error);
        setCopied(false);
      }
    },
    [resetDelay]
  );

  const reset = useCallback(() => setCopied(false), []);

  return { copied, copy, reset };
}
