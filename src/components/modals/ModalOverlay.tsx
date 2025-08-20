import { Button } from '../Button';
import type { ReactNode } from 'react';

interface ModalOverlayProps {
  children: ReactNode;
  showCloseBtn?: boolean;
}

export function ModalOverlay({
  children,
  showCloseBtn = true,
}: ModalOverlayProps) {
  return (
    <div className="modal-overlay">
      {showCloseBtn && (
        <Button variant="transparent" className="absolute top-4 right-2">
          X
        </Button>
      )}
      {children}
    </div>
  );
}
