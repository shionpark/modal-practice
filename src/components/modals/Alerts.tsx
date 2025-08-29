import { memo, useId } from 'react';

import { Button, ModalOverlay } from '@components/common';
import type { Action, ModalProps } from './types';

interface AlertsProps extends ModalProps {
  title?: string;
  message: string;
  actions?: Action[];
}

function Alerts({
  title = '',
  message,
  actions,
  isModalOpen,
  closeModal,
}: AlertsProps) {
  const id = useId();
  const titleId = `${id}-alerts-title`;
  const descId = `${id}-alerts-desc`;

  return (
    <ModalOverlay
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      showCloseBtn={false}
    >
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="section"
        tabIndex={-1}
      >
        <h3 id={titleId} className="title">
          {title}
        </h3>
        <span id={descId} className="content">
          {message}
        </span>
        <div className="actions">
          {actions?.map(({ label, onClick }: Action) => (
            <div key={label}>
              <Button color="primary" variant="transparent" onClick={onClick}>
                {label}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </ModalOverlay>
  );
}

export default memo(Alerts);
