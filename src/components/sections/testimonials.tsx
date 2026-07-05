'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './testimonials.module.css';

export function Testimonials() {
  const t = useTranslations('testi');

  return (
    <section id="testimonials" className={cn('section', 'section--dark')}>
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">{t('eyebrow')}</span>
          <h2 className="section__title">{t('title')}</h2>
          <p className={cn('section__subtitle', 'text-muted')}>{t('subtitle')}</p>
        </div>
        <div className={styles.testi__grid}>
          <article className={cn('glass-card', styles['testi-card'])}>
            <div className={styles['testi-card__stars']} aria-label="5 stars out of 5">★★★★★</div>
            <blockquote className={styles['testi-card__quote']}>
              {t('1.quote')}
            </blockquote>
            <footer className={styles['testi-card__author']}>
              <span className={styles['testi-card__name']}>{t('1.name')}</span>
              <span className={cn(styles['testi-card__role'], 'text-muted')}>{t('1.role')}</span>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
