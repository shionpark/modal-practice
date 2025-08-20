import { Button } from '../Button';
import { ModalOverlay } from './ModalOverlay';

interface Action {
  label: string;
  onClick?: () => void;
}

interface ConfirmDialogProps {
  title: string;
  content: React.ReactNode;
  actions?: Action[];
}

export function ConfirmDialog({ title, content, actions }: ConfirmDialogProps) {
  return (
    <ModalOverlay>
      <div className="section">
        <div className="title">{title}</div>
        <span className="content">{content}</span>
      </div>
      <div className="actions">
        {actions?.map(({ label, onClick }: Action) => (
          <Button color="primary" variant="transparent" onClick={onClick}>
            {label}
          </Button>
        ))}
      </div>
    </ModalOverlay>
  );
}
