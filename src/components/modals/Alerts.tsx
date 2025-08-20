import { Button } from '../Button';
import { ModalOverlay } from './ModalOverlay';

interface Action {
  label: string;
  onClick?: () => void;
}

interface AlertsProps {
  title?: string;
  message: string;
  actions?: Action[];
}

export function Alerts({ title = '', message, actions }: AlertsProps) {
  return (
    <ModalOverlay showCloseBtn={false}>
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
