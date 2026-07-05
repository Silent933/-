'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import styles from './scroll-progress.module.css';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const hexProgress = Math.round(progress * 100);
  const dashOffset = 264 - (264 * progress);

  return (
    <>
      <div
        className={styles['scroll-progress']}
        style={{ transform: `scaleX(${progress})` }}
        role="progressbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
      <div className={styles['hex-progress']} aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <polygon
            points="50,5 95,28 95,72 50,95 5,72 5,28"
            fill="none" stroke="var(--c-gold-20)" strokeWidth="2"
          />
          <polygon
            points="50,5 95,28 95,72 50,95 5,72 5,28"
            fill="none" stroke="var(--c-gold)" strokeWidth="2.5"
            strokeDasharray="264"
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
        </svg>
        <span className={styles['hex-progress__value']}>{hexProgress}%</span>
      </div>
    </>
  );
}
