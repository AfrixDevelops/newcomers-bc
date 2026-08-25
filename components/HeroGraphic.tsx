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
      aria-label="Stylized orca breaching in front of the Coast Mountains"
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

      {/*
        Orca, drawn nose-right in its own coordinates and then swung up into
        a breach. It goes after the ranges but before the water, so the
        opaque water rect does the clipping: only the half above the
        surface shows, and the tail stays submerged.
      */}
      <g transform="translate(72 275) rotate(-42) scale(0.95)">
        <path
          className={styles.orca}
          d="M168 34 C150 15 120 13 92 21 C68 27 46 34 30 42 L4 22 C12 33 18 41 20 48 C18 57 11 65 2 71 L30 56 C52 65 82 69 112 65 C138 61 158 49 168 34 Z"
        />
        {/* Dorsal fin */}
        <path className={styles.orca} d="M112 18 C108 2 102 -9 94 -18 C90 -5 86 8 82 25 Z" />
        {/* White underside, widest at the throat */}
        <path
          className={styles.orcaWhite}
          d="M160 38 C150 48 132 54 112 53 C86 52 58 52 34 51 L30 56 C52 65 82 69 112 65 C134 62 152 51 162 38 Z"
        />
        {/* Pectoral flipper, over the white so it reads as dark */}
        <path className={styles.orca} d="M130 52 C121 65 111 75 98 80 C104 68 114 57 126 47 Z" />
        {/* Eye patch. The one marking that makes the silhouette unmistakable. */}
        <ellipse
          className={styles.orcaWhite}
          cx="141"
          cy="32"
          rx="9"
          ry="4.6"
          transform="rotate(-14 141 32)"
        />
      </g>

      {/* Water */}
      <rect className={styles.water} x="-20" y="250" width="460" height="110" />
      <rect className={styles.waveA} x="24" y="272" width="120" height="7" rx="3.5" />
      <rect className={styles.waveB} x="176" y="292" width="164" height="7" rx="3.5" />
      <rect className={styles.waveA} x="256" y="272" width="96" height="7" rx="3.5" />
      <rect className={styles.waveB} x="40" y="312" width="88" height="7" rx="3.5" />

      {/*
        Splash, last so it sits over both the whale and the surface. Built
        from the same rounded bars as the waves rather than one solid
        ellipse, which read as a plate the whale was resting on.
      */}
      <path
        className={styles.foam}
        d="M130 258 C137 250 146 247 153 252 C159 244 172 243 179 251 C186 245 197 247 203 253 C207 256 210 257 214 258 Z"
      />
      <rect className={styles.foamSoft} x="200" y="253" width="36" height="7" rx="3.5" />
      <rect className={styles.foamSoft} x="118" y="254" width="30" height="6" rx="3" />
      <rect
        className={styles.foamSoft}
        x="206"
        y="230"
        width="20"
        height="6"
        rx="3"
        transform="rotate(-38 216 233)"
      />
      <rect
        className={styles.foamSoft}
        x="128"
        y="234"
        width="16"
        height="5.5"
        rx="2.75"
        transform="rotate(34 136 237)"
      />
      <rect
        className={styles.foamSoft}
        x="220"
        y="242"
        width="14"
        height="5.5"
        rx="2.75"
        transform="rotate(-16 227 245)"
      />
      <circle className={styles.foamSoft} cx="234" cy="224" r="3.5" />
      <circle className={styles.foamSoft} cx="120" cy="230" r="2.8" />
      <circle className={styles.foamSoft} cx="246" cy="238" r="2.6" />
    </svg>
  );
}
