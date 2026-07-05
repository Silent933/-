'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { useTheme } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';
import styles from './navbar.module.css';

export function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', key: 'home' },
    { href: '/portfolio', key: 'portfolio' },
    { href: '/about', key: 'about' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={cn(styles.navbar, scrolled && styles['navbar--scrolled'])} role="banner">
        <div className={cn(styles.navbar__inner, 'container')}>
          <a href="/" className={styles.navbar__logo} aria-label={t('home')}>
            <span className={styles.navbar__wordmark}>نواة</span>
          </a>
          <nav className={styles.navbar__nav} aria-label={t('home')}>
            {navLinks.map(({ href, key }) => (
              <a
                key={key}
                href={href}
                className={cn(styles['nav-link'], isActive(href) && styles['nav-link--active'])}
              >
                {t(key)}
              </a>
            ))}
            <a
              href="https://wa.me/963998950904"
              target="_blank"
              rel="noopener"
              className={cn(styles['nav-link'], styles['nav-link--cta'])}
            >
              {t('contact')}
            </a>
          </nav>
          <div className={styles.navbar__controls}>
            <button className={styles['lang-toggle']} aria-label="Switch language">
              <span className={styles['lang-toggle__ar']}>AR</span>
              <span className={styles['lang-toggle__sep']}>|</span>
              <span className={styles['lang-toggle__en']}>EN</span>
            </button>
            <button
              className={styles['theme-toggle']}
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? '☀' : '☾'}
            </button>
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          className={styles['mobile-menu']}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
        >
          <button
            className={styles['mobile-menu__close']}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <nav className={styles['mobile-menu__nav']}>
            {navLinks.map(({ href, key }) => (
              <a
                key={key}
                href={href}
                className={styles['mobile-menu__link']}
                onClick={() => setMobileOpen(false)}
              >
                {t(key)}
              </a>
            ))}
            <a
              href="https://wa.me/963998950904"
              target="_blank"
              rel="noopener"
              className={cn(styles['mobile-menu__link'], styles['mobile-menu__link--cta'])}
              onClick={() => setMobileOpen(false)}
            >
              {t('contact')}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
