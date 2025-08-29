import { memo } from 'react';

function OptionItem({ id, label }: { id: string; label: string }) {
  return (
    <li className="flex gap-2 py-2">
      <input type="checkbox" aria-label={id} />
      <span>{label}</span>
    </li>
  );
}

export default memo(OptionItem);
