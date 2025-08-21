import { type ReactNode } from 'react';

import { Button } from '@components/Button';
import { useEscapeKey } from '@hooks/useEscapeKey';
import { useOutsideClick } from '@hooks/useOutsideClick';

import { modalOverlayClass, modalSectionClass } from './modalClass';
import type { ModalProps } from './types';

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
  const { overlayRef, handleEscapeKey } = useEscapeKey({
    isModalOpen,
    closeModal,
  });
  const { modalRef } = useOutsideClick(closeModal);

  return (
    <>
      <div
        ref={overlayRef}
        tabIndex={0}
        onKeyDown={handleEscapeKey}
        className={modalOverlayClass(isModalOpen)}
      />
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
