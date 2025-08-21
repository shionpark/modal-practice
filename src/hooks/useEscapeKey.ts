import { useEffect, useRef, type KeyboardEvent } from 'react';

interface UseEscapeKeyProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export const useEscapeKey = ({
  isModalOpen,
  closeModal,
}: UseEscapeKeyProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleEscapeKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      overlayRef.current?.focus();
    }
  }, [isModalOpen]);

  return {
    overlayRef,
    handleEscapeKey,
  };
};
