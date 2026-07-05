'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './clients.module.css';

export function Clients() {
  const t = useTranslations('clients');
  const clients = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section id="clients" className={cn('section', 'section--dark')}>
      <div className="container" style={{ marginBottom: '2rem' }}>
        <span className="section__eyebrow">{t('eyebrow')}</span>
        <h2 className="section__title">{t('title')}</h2>
      </div>
      <div className={styles.marquee} aria-label={t('title')} role="region">
        <div className={styles.marquee__track}>
          {[...clients, ...clients].map((id, i) => (
            <div key={`${id}-${i}`} className={styles['client-circle']} aria-hidden={i >= 6}>
              <span className={styles['client-circle__placeholder']}>C{id}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
