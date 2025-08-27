import { memo, type ReactNode } from 'react';

import { Button, ModalOverlay } from '@components/common';
import type { Action, ModalProps } from './types';

interface DialogProps extends ModalProps {
  children: ReactNode;
  title: string;
  actions?: Action[];
}

function Dialog({
  children,
  title,
  actions,
  isModalOpen,
  closeModal,
}: DialogProps) {
  return (
    <ModalOverlay isModalOpen={isModalOpen} closeModal={closeModal}>
      <div className="section">
        <div className="title">{title}</div>
        <div className="content">{children}</div>
      </div>
      {actions && (
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
      )}
    </ModalOverlay>
  );
}

export default memo(Dialog);
