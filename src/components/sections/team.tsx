'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './team.module.css';

export function Team() {
  const t = useTranslations('team');
  const members = ['ceo', 'backend', 'frontend'] as const;

  const initials: Record<string, string> = {
    ceo: 'ع.ل',
    backend: 'أ.م',
    frontend: 'ا.ش',
  };

  return (
    <section id="team" className={cn('section')}>
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">{t('eyebrow')}</span>
          <h2 className="section__title">{t('title')}</h2>
        </div>
        <div className={styles.team__grid}>
          {members.map((key) => (
            <article key={key} className={cn('glass-card', styles['team-card'])}>
              <div className={styles['team-card__photo']}>
                <svg className={styles['team-card__orbit']} viewBox="0 0 180 180" aria-hidden="true">
                  <polygon points="90,5 175,47 175,133 90,175 5,133 5,47" fill="none" stroke="rgba(201,168,76,.40)" strokeWidth="1" strokeDasharray="10 6" />
                </svg>
                <div className={styles['team-card__initials']}>
                  {initials[key]}
                </div>
              </div>
              <div className={styles['team-card__info']}>
                <h3 className={styles['team-card__name']}>{t(`${key}.name`)}</h3>
                <span className={styles['team-card__role']}>{t(`${key}.role`)}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
