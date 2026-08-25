import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <p>
          <strong className={styles.strong}>Disclaimer:</strong> Newcomers BC is an
          independent resource built to help people who want to live, visit, or explore
          Canada. It is not affiliated with, endorsed by, or operated by the Government of
          Canada, the Government of British Columbia, or any of the organizations linked on
          this site.
        </p>
        <p>
          <strong className={styles.strong}>About the links:</strong> every resource points
          to a real BC or federal organization, verified against each organization&rsquo;s
          current site. Government pages are restructured from time to time, so if a link
          goes stale, search the organization&rsquo;s name directly.
        </p>
      </div>
      <p className={styles.sign}>Newcomers BC</p>
    </footer>
  );
}
