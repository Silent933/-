'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './features.module.css';

export function Features() {
  const t = useTranslations('features');
  const ref = useRef<HTMLElement>(null);
  const items = ['admin', 'pay', 'support', 'social', 'speed', 'rtl', 'resp', 'seo'] as const;

  return (
    <section ref={ref} id="features" className={cn('section')}>
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">{t('eyebrow')}</span>
          <h2 className="section__title">{t('title')}</h2>
        </div>
        <div className={styles.features__grid}>
          {items.map((key, i) => (
            <div key={key} className={styles['feature-item']}>
              <div className={styles['feature-item__icon']} aria-hidden="true" />
              <div className={styles['feature-item__content']}>
                <h3 className={styles['feature-item__title']}>{t(`${key}.title`)}</h3>
                <p className={styles['feature-item__body']}>{t(`${key}.body`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
