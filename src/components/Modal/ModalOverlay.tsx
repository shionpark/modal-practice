import type React from 'react';
import { Button } from '../Button';

interface ModalOverlayProps {
  children: React.ReactNode;
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
