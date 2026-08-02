import { useCallback } from 'react';

export function useUISound() {
  const playHover = useCallback(() => {}, []);
  const playClick = useCallback(() => {}, []);
  return { playHover, playClick };
}
