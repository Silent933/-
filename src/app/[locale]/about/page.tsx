'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './about.module.css';

export default function AboutPage() {
  const t = useTranslations('ab');
  const values = [1, 2, 3, 4] as const;
  const goals = [1, 2, 3, 4] as const;

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
          <span className="section__eyebrow">{t('story.eyebrow')}</span>
          <h2 className="section__title" style={{ marginBottom: '1.5rem' }}>{t('story.title')}</h2>
          <div className={styles.story}>
            <p>{t('story.p1')}</p>
            <p>{t('story.p2')}</p>
            <p>{t('story.p3')}</p>
          </div>
          <blockquote className={styles.pullquote}>
            <p>{t('pullquote')}</p>
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="section__eyebrow">{t('vision.eyebrow')}</span>
          <h2 className="section__title" style={{ marginBottom: '2rem' }}>{t('vision.title')}</h2>
          <div className={styles.visionGrid}>
            <div className={cn('glass-card')}>
              <h3 className={styles.visionLabel}>{t('vision.label')}</h3>
              <p>{t('vision.body')}</p>
            </div>
            <div className={cn('glass-card')}>
              <h3 className={styles.visionLabel}>{t('mission.label')}</h3>
              <p>{t('mission.body')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <span className="section__eyebrow">{t('val.eyebrow')}</span>
          <h2 className="section__title" style={{ marginBottom: '2rem' }}>{t('val.title')}</h2>
          <div className={styles.valuesGrid}>
            {values.map((num) => (
              <div key={num} className={cn('glass-card')}>
                <div className={styles.valueNum}>0{num}</div>
                <h3>{t(`val.${num}.title`)}</h3>
                <p className="text-muted">{t(`val.${num}.body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="section__eyebrow">{t('goals.eyebrow')}</span>
          <h2 className="section__title" style={{ marginBottom: '2rem' }}>{t('goals.title')}</h2>
          <div className={styles.goalsList}>
            {goals.map((num) => (
              <div key={num} className={styles.goalItem}>
                <span className={styles.goalYear}>{t(`goals.${num}.year`)}</span>
                <p>{t(`goals.${num}.body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="t-hero">{t('cta.title')}</h2>
          <p className={cn('t-xl', 'text-muted', styles.ctaBody)}>{t('cta.body')}</p>
          <a href="https://wa.me/963998950904" target="_blank" rel="noopener" className={cn('btn', 'btn--filled', 'btn--lg')}>
            {t('cta.btn')}
          </a>
        </div>
      </section>
    </>
  );
}
