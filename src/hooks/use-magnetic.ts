'use client';

import { useRef, useCallback } from 'react';
import gsap from 'gsap';

export function useMagnetic() {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    gsap.to(ref.current, { x: x * 0.3, y: y * 0.3, duration: 0.45, ease: 'power3.out' });
  }, []);

  const onMouseLeave = useCallback(() => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
