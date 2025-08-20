import { Button } from '../Button';
import { ModalOverlay } from './ModalOverlay';
import type { Action, ModalProps } from './types';

interface AlertsProps extends ModalProps {
  title?: string;
  message: string;
  actions?: Action[];
}

export function Alerts({
  title = '',
  message,
  actions,
  isModalOpen,
  closeModal,
}: AlertsProps) {
  return (
    <ModalOverlay
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      showCloseBtn={false}
    >
      <div className="section">
        <div className="title">{title}</div>
        <span className="content">{message}</span>
      </div>
      <div className="actions">
        {actions?.map(({ label, onClick }: Action) => (
          <div key={label}>
            <Button color="primary" variant="transparent" onClick={onClick}>
              {label}
            </Button>
          </div>
        ))}
      </div>
    </ModalOverlay>
  );
}
