import type { ReactNode } from 'react';
import clsx from 'clsx';
import { Button } from './Button';
import type { ModalProps } from './modals';

interface ModalOverlayProps extends ModalProps {
  children: ReactNode;
  showCloseBtn?: boolean;
}

export function ModalOverlay({
  isModalOpen,
  closeModal,
  children,
  showCloseBtn = true,
}: ModalOverlayProps) {
  const modalOverlayClass = (isOpen: boolean) =>
    clsx(
      'modal-overlay',
      isOpen
        ? 'opacity-50 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
    );

  const modalSectionClass = (isOpen: boolean) =>
    clsx(
      'modal-section',
      isOpen ? 'scale-100 opacity-100' : 'pointer-events-none opacity-0'
    );

  return (
    <>
      <div className={modalOverlayClass(isModalOpen)} />
      <div className={modalSectionClass(isModalOpen)}>
        <div className="modal-content">
          {showCloseBtn && (
            <Button
              variant="transparent"
              className="absolute top-4 right-2"
              onClick={closeModal}
            >
              X
            </Button>
          )}
          {children}
        </div>
      </div>
    </>
  );
}
