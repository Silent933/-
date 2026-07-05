'use client';

import { useRef, useCallback } from 'react';
import gsap from 'gsap';

export function useTilt3D() {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    gsap.to(ref.current, {
      rotateX: y * -10,
      rotateY: x * 10,
      transformPerspective: 1000,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    gsap.to(ref.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)',
    });
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
