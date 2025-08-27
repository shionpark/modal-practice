import { useCallback, useState } from 'react';

type UseToggleReturn = readonly [
  value: boolean,
  toggle: () => void,
  setTrue: () => void,
  setFalse: () => void,
];

/** 토글 상태를 관리하는 커스텀 훅
 * @param initialValue 초기 토글 상태 (기본값: false)
 * @returns
 * - value: 현재 토글 상태
 * - toggle: 토글 상태를 반전시키는 함수
 * - setTrue: 토글 상태를 true로 설정하는 함수
 * - setFalse: 토글 상태를 false로 설정하는 함수
 */

export const useToggle = (initialValue: boolean): UseToggleReturn => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, toggle, setTrue, setFalse] as const;
};
