import styles from './HeroGraphic.module.css';

/**
 * Geometric stand-in for the Coast Mountains. Flat overlapping planes
 * rather than photography, so it stays sharp at any size, costs no
 * network request, and recolours itself per theme through the tokens
 * in HeroGraphic.module.css.
 */
export function HeroGraphic() {
  return (
    <svg
      className={styles.graphic}
      viewBox="0 0 420 340"
      role="img"
      aria-label="Stylized mountains and water representing British Columbia"
    >
      {/* Sun */}
      <circle className={styles.sun} cx="308" cy="86" r="46" />

      {/* Back range */}
      <path className={styles.rangeBack} d="M-20 250 L110 92 L232 250 Z" />
      <path className={styles.rangeBack} d="M186 250 L300 118 L414 250 Z" />

      {/* Mid range */}
      <path className={styles.rangeMid} d="M52 250 L168 128 L284 250 Z" />

      {/* Snow cap, echoing the peak above it */}
      <path className={styles.snow} d="M168 128 L204 166 L186 172 L168 162 L150 172 L132 166 Z" />

      {/* Front range */}
      <path className={styles.rangeFront} d="M-20 250 L64 168 L150 250 Z" />
      <path className={styles.rangeFront} d="M248 250 L338 162 L428 250 Z" />

      {/* Water */}
      <rect className={styles.water} x="-20" y="250" width="460" height="110" />
      <rect className={styles.waveA} x="24" y="272" width="120" height="7" rx="3.5" />
      <rect className={styles.waveB} x="176" y="292" width="164" height="7" rx="3.5" />
      <rect className={styles.waveA} x="256" y="272" width="96" height="7" rx="3.5" />
      <rect className={styles.waveB} x="40" y="312" width="88" height="7" rx="3.5" />
    </svg>
  );
}
