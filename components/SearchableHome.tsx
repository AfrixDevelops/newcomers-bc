'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MagnifyingGlass, X } from '@phosphor-icons/react/dist/ssr';
import {
  categories,
  otherCategories,
  startHereCategories,
  type Category,
} from '@/lib/categories';
import { resources } from '@/lib/resources';
import { CategoryIcon } from './CategoryIcon';
import { HeroGraphic } from './HeroGraphic';
import styles from './Home.module.css';

const MAX_RESULTS = 30;

/** Built once at module scope: the resource list never changes at runtime. */
const searchIndex = resources.map((r) => ({
  resource: r,
  haystack: `${r.label} ${r.text} ${r.org ?? ''}`.toLowerCase(),
  category: categories.find((c) => c.slug === r.category),
}));

/** Inline custom properties let one stylesheet colour twelve cards. */
function catVars(c: Category) {
  return {
    '--cat': c.color,
    '--cat-dark': c.colorDark,
  } as React.CSSProperties;
}

function TopicCard({ cat, large }: { cat: Category; large?: boolean }) {
  return (
    <Link
      href={`/${cat.slug}`}
      style={catVars(cat)}
      className={`${styles.topicCard} ${large ? styles.topicCardLarge : ''}`}
    >
      <span className={styles.badge}>
        <CategoryIcon name={cat.icon} size={large ? 26 : 22} />
      </span>
      <h3 className={styles.topicTitle}>{large ? cat.shortTitle : cat.title}</h3>
      <p className={styles.topicBlurb}>{cat.blurb}</p>
      <span className={styles.topicGo}>
        Explore resources
        <ArrowRight size={14} weight="bold" aria-hidden />
      </span>
    </Link>
  );
}

export function SearchableHome() {
  const [query, setQuery] = useState('');
  const trimmed = query.trim();

  const matches = useMemo(() => {
    if (!trimmed) return [];
    const q = trimmed.toLowerCase();
    return searchIndex.filter((e) => e.haystack.includes(q)).slice(0, MAX_RESULTS);
  }, [trimmed]);

  const searching = trimmed.length > 0;

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1 className={styles.title}>
            <span className={styles.titleSmall}>Welcome to</span>
            <span className={styles.titleBig}>British</span>
            <span className={styles.titleBig}>Columbia</span>
          </h1>

          <p className={styles.tagline}>
            Bite-sized tips and trusted resources to help you navigate your new life in Canada.
          </p>

          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>
              <MagnifyingGlass size={20} weight="bold" aria-hidden />
            </span>
            <label htmlFor="search" className="sr-only">
              Search resources
            </label>
            <input
              id="search"
              type="search"
              className={styles.searchInput}
              placeholder="Search housing, jobs, healthcare…"
              value={query}
              autoComplete="off"
              onChange={(e) => setQuery(e.target.value)}
            />
            {searching && (
              <button type="button" className={styles.clear} onClick={() => setQuery('')}>
                <X size={18} weight="bold" aria-hidden />
                <span className="sr-only">Clear search</span>
              </button>
            )}
          </div>
        </div>

        <div className={styles.heroArt} aria-hidden={false}>
          <HeroGraphic />
        </div>
      </section>

      {searching ? (
        <section className={styles.results} aria-live="polite">
          {matches.length === 0 ? (
            <p className={styles.empty}>
              No matching resources for “{trimmed}”. Try a different word.
            </p>
          ) : (
            <>
              <p className={styles.resultCount}>
                {matches.length}
                {matches.length === MAX_RESULTS ? '+' : ''} resource
                {matches.length === 1 ? '' : 's'} found
              </p>
              <div className={styles.resultList}>
                {matches.map((m, i) => (
                  <Link
                    key={`${m.resource.category}-${i}`}
                    className={styles.result}
                    href={`/${m.resource.category}`}
                    style={m.category ? catVars(m.category) : undefined}
                  >
                    <span className={styles.resultMeta}>
                      {m.category && (
                        <span className={styles.resultBadge}>
                          <CategoryIcon name={m.category.icon} size={13} />
                        </span>
                      )}
                      {m.category?.title} · {m.resource.type}
                    </span>
                    <span className={styles.resultText}>{m.resource.text}</span>
                    <span className={styles.resultOrg}>
                      {m.resource.org ?? 'Community note'} →
                    </span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </section>
      ) : (
        <>
          <section className={styles.tier}>
            <div className={styles.tierHead}>
              <h2 className={styles.tierTitle}>Start here</h2>
              <p className={styles.tierNote}>The four things that matter in your first weeks.</p>
            </div>
            <div className={styles.gridLarge}>
              {startHereCategories.map((cat) => (
                <TopicCard key={cat.slug} cat={cat} large />
              ))}
            </div>
          </section>

          <section className={styles.tier}>
            <div className={styles.tierHead}>
              <h2 className={styles.tierTitle}>Everything else</h2>
            </div>
            <div className={styles.grid}>
              {otherCategories.map((cat) => (
                <TopicCard key={cat.slug} cat={cat} />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}
