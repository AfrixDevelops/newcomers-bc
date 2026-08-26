import styles from './Footer.module.css';

/**
 * Every prop defaults to the original English copy, so `<Footer />` on
 * the existing unprefixed pages renders exactly as before. Locale pages
 * pass translated strings, plus translationNote to explain that the
 * tips and their links stay in English regardless of the page language.
 */
export function Footer({
  disclaimerLabel = 'Disclaimer:',
  disclaimer = 'Newcomers BC is an independent resource built to help people who want to ' +
    'live, visit, or explore Canada. It is not affiliated with, endorsed by, or operated ' +
    'by the Government of Canada, the Government of British Columbia, or any of the ' +
    'organizations linked on this site.',
  aboutLinksLabel = 'About the links:',
  aboutLinks = "Every resource points to a real BC or federal organization, verified " +
    "against each organization’s current site. Government pages are restructured " +
    "from time to time, so if a link goes stale, search the organization’s name " +
    'directly.',
  translationNote,
}: {
  disclaimerLabel?: string;
  disclaimer?: string;
  aboutLinksLabel?: string;
  aboutLinks?: string;
  translationNote?: string;
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <p>
          <strong className={styles.strong}>{disclaimerLabel}</strong> {disclaimer}
        </p>
        <p>
          <strong className={styles.strong}>{aboutLinksLabel}</strong> {aboutLinks}
        </p>
      </div>
      {translationNote && <p className={styles.note}>{translationNote}</p>}
      <p className={styles.sign}>Newcomers BC</p>
    </footer>
  );
}
