'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './hero.module.css';

export function Hero() {
  const t = useTranslations('hero');
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="hero" className={styles.hero} aria-label="Hero">
      <div className={styles.hero__canvas} aria-hidden="true" />
      <div className={cn(styles.hero__content, 'container')}>
        <div className={styles.hero__text}>
          <span className={styles.hero__eyebrow}>{t('eyebrow')}</span>
          <h1 className={styles.hero__headline}>
            {t('headline')}
          </h1>
          <p className={styles.hero__subtitle}>
            {t('subtitle')}
          </p>
          <div className={styles.hero__ctaGroup}>
            <a
              href="https://wa.me/963998950904"
              target="_blank"
              rel="noopener"
              className={cn('btn', 'btn--filled')}
            >
              {t('cta.primary')}
            </a>
            <a
              href="/portfolio"
              className={cn('btn', 'btn--outlined')}
            >
              {t('cta.secondary')}
            </a>
            <a
              href="#about-brief"
              className={cn('btn', 'btn--text')}
            >
              {t('cta.tertiary')}
              <span className="btn__arrow">↓</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.hero__scrollCue} aria-hidden="true">
        <div className={styles['scroll-cue__line']} />
      </div>
    </section>
  );
}
