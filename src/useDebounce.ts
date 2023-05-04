import { useCallback, useEffect, useRef } from "react";

export default function useDebounce(ms: number) {
  const timeoutRef = useRef<number | null>(null);
  const clear = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);
  const run = useCallback(
    (fn: () => void) => {
      clear();
      timeoutRef.current = window.setTimeout(fn, ms);
    },
    [clear, ms]
  );
  useEffect(() => () => clear(), [clear]);
  return {
    run,
    clear,
  };
}
