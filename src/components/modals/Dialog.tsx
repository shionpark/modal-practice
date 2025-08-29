import { memo, useId, type ReactNode } from 'react';

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
  const id = useId();
  const titleId = `${id}-dialog-title`;
  const descId = `${id}-dialog-desc`;

  return (
    <ModalOverlay isModalOpen={isModalOpen} closeModal={closeModal}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="section"
        tabIndex={-1}
      >
        <h3 id={titleId} className="title">
          {title}
        </h3>
        <div id={descId} className="content">
          {children}
        </div>
        {actions?.length && (
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
      </div>
    </ModalOverlay>
  );
}

export default memo(Dialog);
