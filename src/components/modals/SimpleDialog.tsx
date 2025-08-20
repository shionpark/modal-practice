import type { ReactNode } from 'react';
import { ModalOverlay } from './ModalOverlay';

interface SimpleDialogProps {
  title: string;
  children?: ReactNode;
}

export function SimpleDialog({ title, children }: SimpleDialogProps) {
  return (
    <ModalOverlay showCloseBtn={false}>
      <div className="section">
        <div className="title">{title}</div>
        {children}
      </div>
    </ModalOverlay>
  );
}
