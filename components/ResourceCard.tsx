import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import type { Resource } from '@/lib/resources';
import styles from './ResourceCard.module.css';

export function ResourceCard({ resource }: { resource: Resource }) {
  const isCommunity = resource.type === 'Community';

  return (
    <article className={`${styles.card} ${isCommunity ? styles.community : ''}`}>
      <header className={styles.head}>
        <span className={styles.label}>{resource.label}</span>
        <span className={styles.pill}>{resource.type}</span>
      </header>

      <p className={styles.text}>{resource.text}</p>

      {/* Community cards carry a caveat: the link is peer discussion,
          not vetted guidance, so it is qualified before it is offered. */}
      {resource.note && <p className={styles.note}>{resource.note}</p>}

      {resource.url && (
        <a
          className={`${styles.button} ${isCommunity ? styles.buttonSecondary : ''}`}
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.org}>{resource.org}</span>
          <span className={styles.domain}>{resource.domain}</span>
          <span className={styles.arrow}>
            <ArrowUpRight size={15} weight="bold" aria-hidden />
          </span>
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      )}
    </article>
  );
}
