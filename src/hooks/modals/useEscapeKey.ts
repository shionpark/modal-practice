import { useEffect } from 'react';

interface UseEscapeKeyProps {
  enabled: boolean;
  onEscape: () => void;
}

export const useEscapeKey = ({ enabled, onEscape }: UseEscapeKeyProps) => {
  useEffect(() => {
    if (!enabled) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onEscape();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [enabled, onEscape]);
};
