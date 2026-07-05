'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <section
      className="section section--dark"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <div style={{
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          fontWeight: 800,
          color: 'var(--c-gold)',
          lineHeight: 1,
          marginBottom: '1.5rem',
        }}>
          404
        </div>
        <h1 className="t-2xl" style={{ marginBottom: '1rem' }}>
          This Page Has Lost Its Orbit
        </h1>
        <p className="t-lg text-muted" style={{ marginBottom: '2rem', maxWidth: 500, marginInline: 'auto' }}>
          But the nucleus is still here. Let us bring you back to the center.
        </p>
        <a
          href="/"
          className={cn('btn', 'btn--filled', 'btn--lg')}
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
