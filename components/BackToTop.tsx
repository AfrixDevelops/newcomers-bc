'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from '@phosphor-icons/react/dist/ssr';
import styles from './BackToTop.module.css';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

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
        <span className="sr-only">Back to top</span>
      </button>
    </>
  );
}
