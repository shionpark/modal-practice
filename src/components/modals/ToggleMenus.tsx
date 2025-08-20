import { ModalOverlay } from './ModalOverlay';
import type { Action } from './types';

interface ToggleMenusProps {
  menus: Action[];
}

export function ToggleMenus({ menus }: ToggleMenusProps) {
  return (
    <ModalOverlay showCloseBtn={false}>
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
