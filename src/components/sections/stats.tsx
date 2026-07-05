'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './stats.module.css';

export function Stats() {
  const t = useTranslations('stats');
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} id="stats" className={cn('section', 'section--dark')} aria-label={t('title')}>
      <div className="container">
        <span className="section__eyebrow">{t('eyebrow')}</span>
        <div className={styles.stats__grid}>
          <div className={styles['stat-hex']}>
            <svg className={styles['stat-hex__ring']} viewBox="0 0 120 120" aria-hidden="true">
              <polygon points="60,4 116,33 116,87 60,116 4,87 4,33" fill="none" stroke="rgba(201,168,76,.20)" strokeWidth="1.5" />
              <polygon className={styles['stat-hex__fill']} points="60,4 116,33 116,87 60,116 4,87 4,33" fill="none" stroke="#C9A84C" strokeWidth="2" strokeDasharray="264" strokeDashoffset="264" />
            </svg>
            <div className={styles['stat-hex__value']}>
              <span className="shimmer">1</span><span>+</span>
            </div>
            <span className={styles['stat-hex__label']}>{t('projects')}</span>
          </div>
          <div className={styles.stats__divider} aria-hidden="true" />
          <div className={styles['stat-hex']}>
            <svg className={styles['stat-hex__ring']} viewBox="0 0 120 120" aria-hidden="true">
              <polygon points="60,4 116,33 116,87 60,116 4,87 4,33" fill="none" stroke="rgba(201,168,76,.20)" strokeWidth="1.5" />
              <polygon className={styles['stat-hex__fill']} points="60,4 116,33 116,87 60,116 4,87 4,33" fill="none" stroke="#C9A84C" strokeWidth="2" strokeDasharray="264" strokeDashoffset="264" />
            </svg>
            <div className={styles['stat-hex__value']}>
              <span className="shimmer">1</span><span>+</span>
            </div>
            <span className={styles['stat-hex__label']}>{t('clients')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
