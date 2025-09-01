import { act, renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useEscapeKey } from './useEscapeKey';

describe('useEscapeKey', () => {
  it('Escape 키를 누르면 onEscape가 호출된다', () => {
    const onEscape = vi.fn();

    renderHook(() => useEscapeKey({ enabled: true, onEscape }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(event);
    });

    expect(onEscape).toHaveBeenCalledTimes(1);
  });

  it('enabled=false일 때는 Escape 키 눌러도 호출되지 않는다', () => {
    const onEscape = vi.fn();

    renderHook(() => useEscapeKey({ enabled: false, onEscape }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(event);
    });

    expect(onEscape).not.toHaveBeenCalled();
  });

  it('Escape가 아닌 다른 키는 호출되지 않는다', () => {
    const onEscape = vi.fn();

    renderHook(() => useEscapeKey({ enabled: true, onEscape }));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      document.dispatchEvent(event);
    });

    expect(onEscape).not.toHaveBeenCalled();
  });
});
