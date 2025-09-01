import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useToggle } from './useToggle';

describe('useToggle', () => {
  // Given
  it('초기 상태는 false', () => {
    // When
    const { result } = renderHook(() => useToggle());
    // Then
    expect(result.current[0]).toBe(false);
  });

  it.each([false, true])('초기값 %s에서 toggle 동작', (initial) => {
    // Given
    const { result } = renderHook(() => useToggle(initial));

    // When
    act(() => result.current[1]());
    // Then
    expect(result.current[0]).toBe(!initial);

    // When
    act(() => result.current[1]());
    // Then
    expect(result.current[0]).toBe(initial);
  });

  // Given
  it('setTrue 함수 실행', () => {
    // When
    const { result } = renderHook(() => useToggle());
    act(() => result.current[2]());
    // Then
    expect(result.current[0]).toBe(true);
  });

  // Given
  it('setFalse 함수 실행', () => {
    // When
    const { result } = renderHook(() => useToggle());
    act(() => result.current[3]());
    // Then
    expect(result.current[0]).toBe(false);
  });
});
