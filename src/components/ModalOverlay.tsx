import type { ReactNode } from 'react';
import clsx from 'clsx';
import { Button } from '@components/Button';
import type { ModalProps } from '@components/modals';
import { useOutsideClick } from '@hooks/useOutsideClick';

interface ModalOverlayProps extends ModalProps {
  children: ReactNode;
  showCloseBtn?: boolean;
}

export function ModalOverlay({
  children,
  showCloseBtn = true,
  isModalOpen,
  closeModal,
}: ModalOverlayProps) {
  const { modalRef } = useOutsideClick(closeModal);

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
        <div className="modal-content" ref={modalRef}>
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
