'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './faq.module.css';

export function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const questions = Array.from({ length: 7 }, (_, i) => i + 1);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className={cn('section', 'section--surface')}>
      <div className={cn('container', 'container--sm')}>
        <div className="section__header">
          <span className="section__eyebrow">{t('eyebrow')}</span>
          <h2 className="section__title">{t('title')}</h2>
        </div>
        <div className={styles.faq__list} role="list">
          {questions.map((num) => {
            const isOpen = openIndex === num;
            return (
              <div key={num} className={cn(styles['faq-item'], isOpen && styles['faq-item--open'])} role="listitem">
                <button
                  className={styles['faq-item__trigger']}
                  onClick={() => toggle(num)}
                  aria-expanded={isOpen}
                >
                  <span>{t(`q${num}`)}</span>
                  <span className={styles['faq-item__icon']} aria-hidden="true">+</span>
                </button>
                {isOpen && (
                  <div className={styles['faq-item__body']} role="region">
                    <p>{t(`a${num}`)}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
