import { useEffect, useRef } from 'react';

export const useOutsideClick = (
  closeModal: () => void,
  { enabled }: { enabled: boolean }
) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [enabled, closeModal]);

  return { modalRef };
};
