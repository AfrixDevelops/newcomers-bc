'use client';

import { usePathname } from 'next/navigation';
import { Moon, Sun } from '@phosphor-icons/react/dist/ssr';
import { currentLocale } from '@/lib/i18n/config';
import { dictionaries } from '@/lib/i18n/dictionaries';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  /** See BackToTop: rendered outside the [locale] tree, so read the URL. */
  const locale = currentLocale(usePathname() ?? '/');
  const lightLabel = locale === 'en' ? 'Switch to light mode' : dictionaries[locale].common.lightMode;
  const darkLabel = locale === 'en' ? 'Switch to dark mode' : dictionaries[locale].common.darkMode;

  function toggle() {
    const root = document.documentElement;
    const explicit = root.getAttribute('data-theme');

    let next: 'light' | 'dark';
    if (explicit === 'dark') {
      next = 'light';
    } else if (explicit === 'light') {
      next = 'dark';
    } else {
      // No choice made yet, so flip away from whatever the OS is doing.
      next = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
    }

    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Private mode or blocked storage: the choice just will not persist.
    }
  }

  /**
   * Both icons are rendered and CSS decides which one is shown, using the
   * same selectors that drive the colour tokens. That keeps the icon in
   * step with the theme without any client state, so there is no
   * hydration mismatch and no wrong-icon flash on first paint. The hidden
   * icon is display:none, so only the visible label reaches screen
   * readers.
   */
  return (
    <button type="button" onClick={toggle} className={styles.button}>
      <span className={styles.sun}>
        <Sun size={20} weight="bold" aria-hidden />
        <span className="sr-only">{lightLabel}</span>
      </span>
      <span className={styles.moon}>
        <Moon size={20} weight="bold" aria-hidden />
        <span className="sr-only">{darkLabel}</span>
      </span>
    </button>
  );
}
