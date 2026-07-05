'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './portfolio.module.css';

export default function PortfolioPage() {
  const t = useTranslations('port');

  return (
    <>
      <section className={cn('section', styles.hero)}>
        <div className="container">
          <span className="section__eyebrow">{t('eyebrow')}</span>
          <h1 className="section__title">{t('title')}</h1>
          <p className={cn('section__subtitle', 'text-muted')}>{t('subtitle')}</p>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <span className="section__eyebrow">{t('feat.eyebrow')}</span>
          <div className={styles.featured}>
            <div className={styles.featured__mockup}>
              <div className={styles['mockup-placeholder']}>
                <span>بيتزا خانم</span>
              </div>
            </div>
            <div className={styles.featured__info}>
              <h2>Pizza Khanum</h2>
              <p>{t('pk.desc')}</p>
              <div className={styles.featured__tags}>
                <span className={styles.tag}>Next.js</span>
                <span className={styles.tag}>TypeScript</span>
                <span className={styles.tag}>Tailwind</span>
                <span className={styles.tag}>RTL</span>
              </div>
              <div className={styles.featured__actions}>
                <a href="#" className={cn('btn', 'btn--filled')}>{t('visit')}</a>
                <span className={cn('btn', 'btn--outlined')}>{t('light')}</span>
                <span className={cn('btn', 'btn--outlined')}>{t('dark')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="section__eyebrow">{t('more.title')}</span>
          <div className={styles.coming}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={cn('glass-card', styles['coming-card'])}>
                <div className={styles['coming-card__placeholder']} />
                <h3>{t('proj.title')}</h3>
                <p className="text-muted">{t('proj.desc')}</p>
                <span className={styles.coming__badge}>{t('soon')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
