import { RefObject, useEffect, useState } from 'react';

export const useVisible = (ref: RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const THRESHOLD = 0.35;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
      threshold: THRESHOLD,
    });
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};
