import { useEffect, useRef } from "react";

export default function useInterval(callback, delay) {
  const saved = useRef(callback);
  saved.current = callback;
  useEffect(() => {
    const id = setInterval(() => saved.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}
