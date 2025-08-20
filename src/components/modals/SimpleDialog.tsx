import { ModalOverlay } from '../Modal/ModalOverlay';

interface SimpleDialogProps {
  title: string;
  children?: React.ReactNode;
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
