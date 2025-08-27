import { ModalOverlay } from '@components/common';
import type { Action, ModalProps } from './types';

interface SimpleMenusProps extends ModalProps {
  menus: Action[];
}

function SimpleMenus({ menus, isModalOpen, closeModal }: SimpleMenusProps) {
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

export default SimpleMenus;
