import { useEffect, useRef } from "react";

export function useFocus() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return inputRef;
}
