'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './footer.module.css';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={cn(styles.footer__main, 'container')}>
        <div className={styles.footer__brand}>
          <div className={styles.footer__logo}>نواة</div>
          <p className={styles.footer__tagline}>{t('tagline')}</p>
        </div>
        <nav className={styles.footer__nav} aria-label={t('links')}>
          <h4 className={styles.footer__heading}>{t('links')}</h4>
          <a href="/" className={styles.footer__link}>الرئيسية</a>
          <a href="/portfolio" className={styles.footer__link}>أعمالنا</a>
          <a href="/about" className={styles.footer__link}>من نحن</a>
        </nav>
        <div className={styles.footer__contact}>
          <h4 className={styles.footer__heading}>{t('contact')}</h4>
          <div className={styles['wa-status']}>
            <span className={styles['wa-status__dot']} aria-hidden="true" />
            <span className={styles['wa-status__text']}>{t('online')}</span>
          </div>
          <a
            href="https://wa.me/963998950904"
            target="_blank"
            rel="noopener"
            className={styles['footer__wa-btn']}
          >
            {t('whatsapp')}
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener"
            className={styles.footer__social}
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
          </a>
        </div>
      </div>
      <div className={cn(styles.footer__bottom, 'container')}>
        <p className={styles.footer__copyright}>{t('copyright')}</p>
        <a href="#" className={styles.footer__privacy}>{t('privacy')}</a>
      </div>
    </footer>
  );
}
