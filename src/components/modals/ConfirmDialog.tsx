import type { ReactNode } from 'react';
import { ModalOverlay } from './ModalOverlay';
import { Button } from '../Button';
import type { Action } from './types';

interface ConfirmDialogProps {
  title: string;
  content: ReactNode;
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
