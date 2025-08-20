import { ModalOverlay } from '../Modal/ModalOverlay';

interface Action {
  label: string;
  onClick?: () => void;
}

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
