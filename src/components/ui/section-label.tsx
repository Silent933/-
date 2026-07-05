'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import styles from './section-label.module.css';

export function SectionLabel() {
  const [label, setLabel] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setLabel(entry.target.id);
          }
        }
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  if (!label) return null;

  return (
    <div className={cn(styles['section-label'], 't-xs')} aria-hidden="true">
      {label}
    </div>
  );
}
