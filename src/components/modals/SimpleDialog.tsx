import type { ReactNode } from 'react';

import { ModalOverlay } from '@components/common';
import type { ModalProps } from './types';

interface SimpleDialogProps extends ModalProps {
  title: string;
  children?: ReactNode;
}

export function SimpleDialog({
  title,
  children,
  isModalOpen,
  closeModal,
}: SimpleDialogProps) {
  return (
    <ModalOverlay
      showCloseBtn={false}
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    >
      <div className="section">
        <div className="title">{title}</div>
        {children}
      </div>
    </ModalOverlay>
  );
}
