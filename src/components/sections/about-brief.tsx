'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './about-brief.module.css';

export function AboutBrief() {
  const t = useTranslations('about');
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} id="about-brief" className={cn('section', styles['about-brief'])}>
      <div className="container">
        <span className="section__eyebrow">{t('eyebrow')}</span>
        <div className={styles['about-brief__grid']}>
          <p className={cn(styles['about-brief__body'], 't-xl')}>
            {t('body')}
          </p>
          <div className={styles['about-brief__nucleus']} aria-hidden="true" />
        </div>
        <a href="/about" className={cn('btn', 'btn--text')}>
          {t('readMore')}
          <span className="btn__arrow">→</span>
        </a>
      </div>
    </section>
  );
}
