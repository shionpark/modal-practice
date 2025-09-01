import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useOutsideClick } from '@hooks/modals';

function Harness({
  enabled,
  onClose,
}: {
  enabled: boolean;
  onClose: () => void;
}) {
  const { modalRef } = useOutsideClick(onClose, { enabled });
  return (
    <div>
      <div data-testid="outside">outside</div>
      <div data-testid="inside" ref={modalRef}>
        inside
      </div>
    </div>
  );
}

describe('useOutsideClick', () => {
  it('ref 내부 클릭 시 close 함수가 호출되지 않는다', () => {
    const onClose = vi.fn();
    const { getByTestId } = render(
      <Harness enabled={true} onClose={onClose} />
    );

    fireEvent.mouseDown(getByTestId('inside'));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('ref 외부 클릭 시 close 함수가 호출된다', () => {
    const onClose = vi.fn();
    const { getAllByTestId } = render(
      <Harness enabled={true} onClose={onClose} />
    );

    fireEvent.mouseDown(getAllByTestId('outside')[0]);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('enabled=false이면 실행되지 않음', () => {
    const onClose = vi.fn();
    const { getAllByTestId } = render(
      <Harness enabled={false} onClose={onClose} />
    );

    fireEvent.mouseDown(getAllByTestId('outside')[0]);
    expect(onClose).not.toHaveBeenCalled();
  });
});
