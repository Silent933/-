'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './cursor.module.css';

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.05 });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' });
    };

    const onHoverEnter = () => gsap.to(ring, { scale: 1.8, duration: 0.4, ease: 'expo.out' });
    const onHoverLeave = () => gsap.to(ring, { scale: 1, duration: 0.4, ease: 'expo.out' });

    window.addEventListener('mousemove', onMove);

    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', onHoverEnter);
      el.addEventListener('mouseleave', onHoverLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', onHoverEnter);
        el.removeEventListener('mouseleave', onHoverLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles['cursor-dot']} aria-hidden="true" />
      <div ref={ringRef} className={styles['cursor-ring']} aria-hidden="true" />
    </>
  );
}
