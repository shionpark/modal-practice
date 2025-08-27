import type { ReactNode } from 'react';

import { Button, ModalOverlay } from '@components/common';
import type { Action, ModalProps } from './types';

interface ConfirmDialogProps extends ModalProps {
  title: string;
  content: ReactNode;
  actions?: Action[];
}

export function ConfirmDialog({
  title,
  content,
  actions,
  isModalOpen,
  closeModal,
}: ConfirmDialogProps) {
  return (
    <ModalOverlay isModalOpen={isModalOpen} closeModal={closeModal}>
      <div className="section">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </div>
      <div className="actions">
        {actions?.map(({ label, onClick }: Action, index: number) => (
          <Button
            key={`${label}-${index}`}
            color="primary"
            variant="transparent"
            onClick={onClick}
          >
            {label}
          </Button>
        ))}
      </div>
    </ModalOverlay>
  );
}
