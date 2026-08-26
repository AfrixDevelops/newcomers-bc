'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Translate } from '@phosphor-icons/react/dist/ssr';
import { currentLocale, localeHref, localeNames, locales, type Locale } from '@/lib/i18n/config';
import styles from './LanguageSwitcher.module.css';

/**
 * Also pulls the category slug out of the path, so the menu can link to
 * the equivalent page in every language rather than always bouncing
 * back to each locale's home page.
 */
function parsePath(pathname: string): { locale: Locale | 'en'; category?: string } {
  const locale = currentLocale(pathname);
  const withoutBase = pathname.replace(process.env.NEXT_PUBLIC_BASE_PATH ?? '', '');
  const segments = withoutBase.split('/').filter(Boolean);
  if (locale !== 'en') segments.shift();
  return { locale, category: segments[0] };
}

const displayLabel: Record<Locale | 'en', string> = {
  en: 'EN',
  ...Object.fromEntries(locales.map((l) => [l, l.toUpperCase()])),
} as Record<Locale | 'en', string>;

export function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale: current, category } = parsePath(pathname ?? '/');
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={styles.root}>
      <button
        type="button"
        className={styles.button}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Choose language"
        onClick={() => setOpen((v) => !v)}
      >
        <Translate size={18} weight="bold" aria-hidden />
        <span aria-hidden>{displayLabel[current]}</span>
      </button>

      {open && (
        <ul className={styles.menu} role="menu">
          <li role="none">
            <Link
              href={localeHref('en', category)}
              role="menuitem"
              className={`${styles.item} ${current === 'en' ? styles.active : ''}`}
              onClick={() => setOpen(false)}
              lang="en"
            >
              English
            </Link>
          </li>
          {locales.map((locale) => (
            <li role="none" key={locale}>
              <Link
                href={localeHref(locale, category)}
                role="menuitem"
                className={`${styles.item} ${current === locale ? styles.active : ''}`}
                onClick={() => setOpen(false)}
                lang={locale}
              >
                {localeNames[locale]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
