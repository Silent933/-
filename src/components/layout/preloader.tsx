'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import styles from './preloader.module.css';

export function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className={styles.preloader} role="status" aria-label="Loading Nawah">
      <div className={styles.pre__system}>
        <svg className={styles.pre__mark} viewBox="0 0 500 500" aria-hidden="true">
          <polyline
            className={styles['pre__ring-outer']}
            points="166.5,105.4 83,250 166.5,394.6 333.5,394.6 417,250 333.5,105.4"
            fill="none" stroke="#F0EEE9" strokeWidth="66"
            strokeLinejoin="round" strokeLinecap="round"
          />
          <polygon
            className={styles['pre__ring-inner']}
            points="345.5,250 297.75,167.3 202.25,167.3 154.5,250 202.25,332.7 297.75,332.7"
            fill="none" stroke="#F0EEE9" strokeWidth="49"
            strokeLinejoin="round"
          />
          <polygon
            className={styles['pre__core']}
            points="307,250 278.5,200.6 221.5,200.6 193,250 221.5,299.4 278.5,299.4"
            fill="#F5A623"
          />
        </svg>
        <div className={styles.pre__wordmark}>نواة</div>
      </div>
      <div className={styles.pre__bar}>
        <div className={styles['pre__bar-fill']} />
      </div>
      <button className={styles['skip-anim']}>تخطي</button>
    </div>
  );
}
