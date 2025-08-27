import { memo, type ReactNode } from 'react';

import {
  modalOverlayClass,
  modalSectionClass,
  type ModalProps,
} from '@components/modals';
import { useEscapeKey, useOutsideClick } from '@hooks/modals';

import Button from './Button';

interface ModalOverlayProps extends ModalProps {
  children: ReactNode;
  showCloseBtn?: boolean;
}

function ModalOverlay({
  children,
  showCloseBtn = true,
  isModalOpen,
  closeModal,
}: ModalOverlayProps) {
  useEscapeKey({ enabled: isModalOpen, onEscape: closeModal });

  const { modalRef } = useOutsideClick(closeModal, { enabled: isModalOpen });

  if (!isModalOpen) return null;

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

export default memo(ModalOverlay);
