import clsx from 'clsx';

export const modalOverlayClass = (isOpen: boolean) =>
  clsx(
    'modal-overlay',
    isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
  );

export const modalSectionClass = (isOpen: boolean) =>
  clsx(
    'modal-section',
    isOpen ? 'scale-100 opacity-100' : 'pointer-events-none opacity-0'
  );
