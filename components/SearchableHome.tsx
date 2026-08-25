'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MagnifyingGlass, X } from '@phosphor-icons/react/dist/ssr';
import { categories } from '@/lib/categories';
import { resources } from '@/lib/resources';
import { CategoryIcon } from './CategoryIcon';
import styles from './Home.module.css';

const MAX_RESULTS = 30;

/** Precomputed once at module scope: the list never changes at runtime. */
const searchIndex = resources.map((r) => ({
  resource: r,
  haystack: `${r.label} ${r.text} ${r.org ?? ''}`.toLowerCase(),
  categoryTitle: categories.find((c) => c.slug === r.category)?.title ?? '',
}));

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
        <h1 className={styles.title}>Welcome to British&nbsp;Columbia</h1>
        <p className={styles.tagline}>
          Bite-sized tips and trusted resources to help you navigate your new life in Canada.
        </p>

        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>
            <MagnifyingGlass size={18} aria-hidden />
          </span>
          <label htmlFor="search" className="sr-only">
            Search resources
          </label>
          <input
            id="search"
            type="search"
            className={styles.searchInput}
            placeholder="Search for housing, jobs, healthcare…"
            value={query}
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
          />
          {searching && (
            <button type="button" className={styles.clear} onClick={() => setQuery('')}>
              <X size={16} aria-hidden />
              <span className="sr-only">Clear search</span>
            </button>
          )}
        </div>

        {searching && (
          <div className={styles.results} role="region" aria-live="polite">
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
                {matches.map((m, i) => (
                  <Link
                    key={`${m.resource.category}-${i}`}
                    className={styles.result}
                    href={`/${m.resource.category}`}
                  >
                    <span className={styles.resultMeta}>
                      {m.categoryTitle} · {m.resource.type}
                    </span>
                    <span className={styles.resultText}>{m.resource.text}</span>
                    <span className={styles.resultOrg}>
                      {m.resource.org ?? 'Community note'} →
                    </span>
                  </Link>
                ))}
              </>
            )}
          </div>
        )}
      </section>

      {!searching && (
        <section>
          <h2 className="sr-only">Browse by topic</h2>
          <div className={styles.grid}>
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/${cat.slug}`} className={styles.topicCard}>
                <span className={styles.badge}>
                  <CategoryIcon name={cat.icon} />
                </span>
                <h3 className={styles.topicTitle}>{cat.title}</h3>
                <p className={styles.topicBlurb}>{cat.blurb}</p>
                <span className={styles.topicGo}>
                  Explore resources
                  <ArrowRight size={14} weight="bold" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
