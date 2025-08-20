import type { RefObject } from 'react';

export interface Action {
  label: string;
  onClick?: () => void;
}

export interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  ref?: RefObject<HTMLDivElement | null>;
}
