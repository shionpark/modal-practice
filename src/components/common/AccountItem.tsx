import { memo } from 'react';

function AccountItem({ email }: { email: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-black p-5" />
      <span>{email}</span>
    </div>
  );
}

export default memo(AccountItem);
