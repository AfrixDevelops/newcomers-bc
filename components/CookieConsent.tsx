'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { currentLocale } from '@/lib/i18n/config';
import { dictionaries } from '@/lib/i18n/dictionaries';
import styles from './CookieConsent.module.css';

export const CONSENT_KEY = 'consent';

/** Applies a choice to Google Consent Mode and remembers it. */
export function setConsent(choice: 'granted' | 'denied') {
  window.gtag?.('consent', 'update', { analytics_storage: choice });
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Private mode or blocked storage: the choice applies to this visit
    // only, which is the safe direction to fail in.
  }
}

const EN = {
  privacy: 'Privacy',
  consentMessage:
    'We use analytics cookies to understand how the site is used. They are optional, and the site works the same without them.',
  consentAccept: 'Accept',
  consentDecline: 'Decline',
};

/** The stored answer only changes through this component, so there is
 *  nothing external to subscribe to. */
const neverChanges = () => () => {};

function hasAnswered() {
  try {
    return Boolean(localStorage.getItem(CONSENT_KEY));
  } catch {
    // Storage unavailable: ask, since we cannot tell if they answered.
    return false;
  }
}

/**
 * Analytics is denied by default (see the consent script in app/layout.tsx),
 * so nothing is measured with cookies until someone opts in here.
 *
 * The server snapshot reports "answered" so the server renders nothing;
 * the client reads the real value after hydration. useSyncExternalStore
 * is the supported way to read browser-only state without risking a
 * hydration mismatch, and without setting state from an effect.
 */
export function CookieConsent() {
  const answered = useSyncExternalStore(neverChanges, hasAnswered, () => true);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname() ?? '/';
  const locale = currentLocale(pathname);
  const t = locale === 'en' ? EN : dictionaries[locale].common;

  if (answered || dismissed) return null;

  function choose(choice: 'granted' | 'denied') {
    setConsent(choice);
    setDismissed(true);
  }

  return (
    <div className={styles.bar} role="region" aria-label={t.privacy}>
      <p className={styles.text}>
        {t.consentMessage}{' '}
        {/* One English policy for every locale; see the note on that page. */}
        <Link href="/privacy" className={styles.link}>
          {t.privacy}
        </Link>
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.decline} onClick={() => choose('denied')}>
          {t.consentDecline}
        </button>
        <button type="button" className={styles.accept} onClick={() => choose('granted')}>
          {t.consentAccept}
        </button>
      </div>
    </div>
  );
}
