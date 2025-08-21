import { useEffect } from 'react';

interface UseEscapeKeyProps {
  isModalOpen: boolean;
  onEscape: () => void;
}

export const useEscapeKey = ({ isModalOpen, onEscape }: UseEscapeKeyProps) => {
  useEffect(() => {
    if (!isModalOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onEscape();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isModalOpen, onEscape]);
};
