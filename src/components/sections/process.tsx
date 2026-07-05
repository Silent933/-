'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './process.module.css';

export function Process() {
  const t = useTranslations('process');
  const ref = useRef<HTMLElement>(null);
  const steps = [1, 2, 3, 4] as const;

  return (
    <section ref={ref} id="process" className={cn('section')}>
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">{t('eyebrow')}</span>
          <h2 className="section__title">{t('title')}</h2>
        </div>
        <div className={styles.process__grid}>
          {steps.map((num) => (
            <article key={num} className={cn('glass-card', styles.process__step)}>
              <span className={cn('shimmer', styles.process__num)}>{t(`${num}.num`)}</span>
              <h3 className={styles.process__title}>{t(`${num}.title`)}</h3>
              <p className={styles.process__body}>{t(`${num}.body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
