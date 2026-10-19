'use client';

import { useState } from 'react';
import { CONSENT_KEY, setConsent } from './CookieConsent';

/**
 * Makes the privacy policy's "you can change your mind" line true rather
 * than decorative. Clearing the stored choice also brings the banner
 * back, so the next decision goes through the same path as the first.
 */
export function ConsentReset() {
  const [done, setDone] = useState(false);

  function reset() {
    setConsent('denied');
    try {
      localStorage.removeItem(CONSENT_KEY);
    } catch {
      // Nothing stored to clear; consent is already denied for this visit.
    }
    setDone(true);
  }

  return (
    <p>
      <button type="button" onClick={reset} className="consentResetButton">
        Withdraw analytics consent
      </button>
      {done && ' Analytics is now off. Reload the page to choose again.'}
    </p>
  );
}
