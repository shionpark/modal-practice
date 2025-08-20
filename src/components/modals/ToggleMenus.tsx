import { ModalOverlay } from './ModalOverlay';
import type { Action, ModalProps } from './types';

interface ToggleMenusProps extends ModalProps {
  menus: Action[];
}

export function ToggleMenus({
  menus,
  isModalOpen,
  closeModal,
}: ToggleMenusProps) {
  return (
    <ModalOverlay
      showCloseBtn={false}
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    >
      <ul>
        {menus?.map(({ label, onClick }: Action) => (
          <li key={label} className="menus" onClick={onClick}>
            {label}
          </li>
        ))}
      </ul>
    </ModalOverlay>
  );
}
