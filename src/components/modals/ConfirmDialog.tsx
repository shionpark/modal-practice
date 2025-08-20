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
