'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './cta.module.css';

export function CTA() {
  const t = useTranslations('ab.cta');

  return (
    <section id="cta" className={cn('section', 'section--dark', styles.cta)}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="t-hero">{t('title')}</h2>
        <p className={cn('t-xl', 'text-muted', styles.cta__body)}>{t('body')}</p>
        <a
          href="https://wa.me/963998950904"
          target="_blank"
          rel="noopener"
          className={cn('btn', 'btn--filled', 'btn--lg')}
        >
          {t('btn')}
        </a>
      </div>
    </section>
  );
}
