import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import { ConsentReset } from '@/components/ConsentReset';
import { Footer } from '@/components/Footer';
import { siteName } from '@/lib/site';
import styles from './privacy.module.css';

const LAST_UPDATED = '19 October 2026';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'What Newcomers BC collects, what it does not, and how to control analytics cookies.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="wrap">
      <Link href="/" className={styles.back}>
        <ArrowLeft size={14} weight="bold" aria-hidden />
        Back to topics
      </Link>

      <article className={styles.doc}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: {LAST_UPDATED}</p>

        <p className={styles.lede}>
          {siteName} is a free, independent guide to settlement resources in British
          Columbia. It has no accounts, no sign-up, and no forms. This page explains the
          little that is collected, and how to turn it off.
        </p>

        <h2>The short version</h2>
        <ul>
          <li>No accounts, no sign-ups, no forms, and nothing you type is sent anywhere.</li>
          <li>The site search runs entirely in your browser. Search terms never leave your device.</li>
          <li>Analytics cookies are off until you accept them, and the site works the same either way.</li>
          <li>Nothing is sold, and there is no advertising on this site.</li>
        </ul>

        <h2>Analytics</h2>
        <p>
          With your consent, this site uses Google Analytics 4 to count page views and
          understand which topics people find useful. Analytics storage is set to denied
          by default, so no analytics cookies are set until you choose Accept on the
          banner. If you decline, or simply ignore the banner, no analytics cookies are
          stored.
        </p>
        <p>
          When analytics is enabled, Google receives your IP address, the pages you view
          on this site, and general device and browser information. Google processes this
          data under its own terms. See{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google&rsquo;s Privacy Policy
          </a>{' '}
          and{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            how Google uses data from sites that use its services
          </a>
          . You can also install the{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-out Browser Add-on
          </a>{' '}
          to block it across every site you visit.
        </p>
        <p>
          No advertising cookies are used, and advertising, personalisation, and ad
          measurement are all left denied.
        </p>

        <h2>What is stored on your device</h2>
        <p>
          Two small values are kept in your browser&rsquo;s local storage. Neither is sent
          to any server, and both stay on your device until you clear your browser data.
        </p>
        <ul>
          <li>
            <code>theme</code> remembers whether you chose light or dark mode.
          </li>
          <li>
            <code>consent</code> remembers your answer to the cookie banner, so you are not
            asked on every page.
          </li>
        </ul>

        <h2>Hosting</h2>
        <p>
          The site is a set of static files hosted on GitHub Pages. Like any web host,
          GitHub receives requests for those files and may log technical information such
          as IP addresses for security and reliability. This happens at the hosting level
          and is outside this site&rsquo;s control. See{' '}
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub&rsquo;s Privacy Statement
          </a>
          .
        </p>

        <h2>Links to other sites</h2>
        <p>
          Nearly every resource here links out to a government, non-profit, or community
          site. Those sites are run by other organisations and have their own privacy
          practices. Once you follow a link, this policy no longer applies. The same is
          true of the support link in the footer, which goes to Buy Me a Coffee.
        </p>

        <h2>Children</h2>
        <p>
          This site is written for adults settling in British Columbia and is not directed
          at children. No personal information is knowingly collected from anyone.
        </p>

        <h2>Your choices</h2>
        <p>
          You can change your mind at any time. Withdrawing consent stops analytics
          immediately and clears your stored answer, so the banner will appear again.
        </p>
        <ConsentReset />
        <p>
          You can also block or delete cookies and local storage through your
          browser&rsquo;s settings. The site works normally with both disabled.
        </p>

        <h2>Changes</h2>
        <p>
          If this policy changes, the date at the top of this page changes with it. There
          are no accounts here, so there is no way to notify you directly.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can go to{' '}
          <a href="mailto:afrix.designs@gmail.com">afrix.designs@gmail.com</a>.
        </p>

        <p className={styles.note}>
          This page is available in English only. The rest of the site is translated, but
          a policy describing your rights is not something to leave to an unreviewed
          translation.
        </p>
      </article>

      <Footer />
    </main>
  );
}
