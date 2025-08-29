import clsx from 'clsx';

export const modalOverlayClass = (isOpen: boolean) =>
  clsx('modal-overlay', isOpen && 'bg-black/50 pointer-events-auto');

export const modalSectionClass = (isOpen: boolean) =>
  clsx('modal-section', isOpen && 'scale-100 opacity-100');
