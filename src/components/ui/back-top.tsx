'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import styles from './back-top.module.css';

export function BackTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    try {
      const lenis = (window as any).__lenis;
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      className={cn(styles['back-top'], visible && styles['back-top--visible'])}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg viewBox="0 0 46 46" aria-hidden="true">
        <polygon
          points="23,2 44,13 44,33 23,44 2,33 2,13"
          fill="none" stroke="var(--c-gold-30)" strokeWidth="2"
        />
        <polygon
          points="23,8 39,16 39,30 23,38 7,30 7,16"
          fill="none" stroke="var(--c-gold)" strokeWidth="1.5"
        />
      </svg>
      <span className={styles['back-top__arrow']}>↑</span>
    </button>
  );
}
