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
  useEscapeKey({ isModalOpen, onEscape: closeModal });

  const { modalRef } = useOutsideClick(closeModal);

  return (
    <>
      <div className={modalOverlayClass(isModalOpen)} aria-hidden />
      <div className={modalSectionClass(isModalOpen)}>
        <div className="modal-content" ref={modalRef} role="dialog">
          {showCloseBtn && (
            <Button
              variant="transparent"
              className="absolute top-4 right-2"
              onClick={closeModal}
              aria-label="Close"
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
