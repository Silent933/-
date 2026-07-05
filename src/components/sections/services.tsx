'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './services.module.css';

export function Services() {
  const t = useTranslations('services');
  const ref = useRef<HTMLElement>(null);
  const items = ['web', 'app', 'sw'] as const;

  return (
    <section ref={ref} id="services" className={cn('section', 'section--surface')}>
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">{t('eyebrow')}</span>
          <h2 className="section__title">{t('title')}</h2>
        </div>
      </div>
      <div className={styles.services__reel}>
        <div className={styles.services__track}>
          {items.map((key) => (
            <article key={key} className={cn('glass-card', styles['service-card'])}>
              <div className={styles['service-card__icon']} aria-hidden="true" />
              <h3 className={styles['service-card__title']}>{t(`${key}.title`)}</h3>
              <p className={styles['service-card__body']}>{t(`${key}.body`)}</p>
              <a href="#" className={cn('btn', 'btn--text')}>
                {t('more')}
                <span className="btn__arrow">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
