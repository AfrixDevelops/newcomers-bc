'use client';

import { usePathname } from 'next/navigation';
import { Moon, Sun } from '@phosphor-icons/react/dist/ssr';
import { currentLocale } from '@/lib/i18n/config';
import { dictionaries } from '@/lib/i18n/dictionaries';
import styles from './ThemeToggle.module.css';

/**
 * The mobile browser-chrome colour has no CSS equivalent of data-theme,
 * so it can't just follow the token system. It is set once for the
 * light default and only needs correcting here, on an explicit choice.
 */
function updateThemeColor(theme: 'light' | 'dark') {
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#14171a' : '#f7f5ef');
}

export function ThemeToggle() {
  /** See BackToTop: rendered outside the [locale] tree, so read the URL. */
  const locale = currentLocale(usePathname() ?? '/');
  const lightLabel = locale === 'en' ? 'Switch to light mode' : dictionaries[locale].common.lightMode;
  const darkLabel = locale === 'en' ? 'Switch to dark mode' : dictionaries[locale].common.darkMode;

  function toggle() {
    const root = document.documentElement;
    // No third OS-driven state to consider: the page is light unless
    // data-theme='dark' says otherwise, so that is the only check.
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

    root.setAttribute('data-theme', next);
    updateThemeColor(next);
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
