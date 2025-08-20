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
      <div className="modal-section">
        <div className="modal-content">
          {showCloseBtn && (
            <Button variant="transparent" className="absolute top-4 right-2">
              X
            </Button>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
