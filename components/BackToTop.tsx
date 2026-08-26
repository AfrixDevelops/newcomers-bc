'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUp } from '@phosphor-icons/react/dist/ssr';
import { currentLocale } from '@/lib/i18n/config';
import { dictionaries } from '@/lib/i18n/dictionaries';
import styles from './BackToTop.module.css';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  /**
   * Rendered once from the root layout, outside the [locale] route tree,
   * so the locale can't arrive as a prop — read it off the URL instead,
   * the same way LanguageSwitcher does.
   */
  const locale = currentLocale(usePathname() ?? '/');
  const label = locale === 'en' ? 'Back to top' : dictionaries[locale].common.backToTopLabel;

  /**
   * A zero-width sentinel spans the first screenful of the document.
   * Once it scrolls out of view the button appears. Using
   * IntersectionObserver keeps this off the scroll event loop entirely,
   * so there is no per-frame work while the page moves.
   */
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  return (
    <>
      <div ref={sentinel} className={styles.sentinel} aria-hidden />
      <button
        type="button"
        onClick={scrollToTop}
        className={`${styles.button} ${visible ? styles.visible : ''}`}
        // Keep it out of the tab order while it is off screen.
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
      >
        <ArrowUp size={20} weight="bold" aria-hidden />
        <span className="sr-only">{label}</span>
      </button>
    </>
  );
}
