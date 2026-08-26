'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MagnifyingGlass, X } from '@phosphor-icons/react/dist/ssr';
import { categories, otherCategories, startHereCategories, type Category } from '@/lib/categories';
import { localeHref, type Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { resources } from '@/lib/resources';
import { CategoryIcon } from './CategoryIcon';
import { HeroGraphic } from './HeroGraphic';
import styles from './Home.module.css';

const MAX_RESULTS = 30;

/**
 * Indexes each resource under its translated category words as well as
 * its own English text.
 *
 * Without this the search is English-only while the placeholder invites
 * the opposite: the Spanish page says "Busca vivienda, empleo, salud",
 * and every one of those words returned nothing, which reads as a
 * broken site rather than as a scope decision. Folding the translated
 * category title, blurb and subtitle into the haystack means searching
 * "vivienda" surfaces the housing resources. Their descriptions are
 * still English, which the footer note already explains.
 */
function buildSearchIndex(dict: Dictionary) {
  return resources.map((r) => {
    const text = dict.categories[r.category];
    return {
      resource: r,
      category: categories.find((c) => c.slug === r.category),
      haystack: (
        `${r.label} ${r.text} ${r.org ?? ''} ` +
        `${text.title} ${text.shortTitle} ${text.blurb} ${text.subtitle}`
      ).toLowerCase(),
    };
  });
}

function catVars(c: Category) {
  return { '--cat': c.color, '--cat-dark': c.colorDark } as React.CSSProperties;
}

/**
 * Fills the one {token} a template string carries.
 *
 * The replacement is a function on purpose: passing the value directly
 * would let String.replace interpret "$&", "$`" and "$'" inside a
 * search term as replacement patterns, echoing parts of the template
 * back into the message.
 */
function fill(template: string, token: string, value: string) {
  return template.replace(token, () => value);
}

function TopicCard({
  cat,
  dict,
  locale,
  large,
}: {
  cat: Category;
  dict: Dictionary;
  locale: Locale;
  large?: boolean;
}) {
  const text = dict.categories[cat.slug];
  return (
    <Link
      href={localeHref(locale, cat.slug)}
      style={catVars(cat)}
      className={`${styles.topicCard} ${large ? styles.topicCardLarge : ''}`}
    >
      <span className={styles.badge}>
        <CategoryIcon name={cat.icon} size={large ? 26 : 22} />
      </span>
      <h3 className={styles.topicTitle}>{large ? text.shortTitle : text.title}</h3>
      <p className={styles.topicBlurb}>{text.blurb}</p>
      <span className={styles.topicGo}>
        {dict.home.exploreResources}
        <ArrowRight size={14} weight="bold" aria-hidden />
      </span>
    </Link>
  );
}

export function LocaleHome({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [query, setQuery] = useState('');
  const trimmed = query.trim();

  /** Rebuilt per locale, since the haystack carries translated words. */
  const searchIndex = useMemo(() => buildSearchIndex(dict), [dict]);

  const matches = useMemo(() => {
    if (!trimmed) return [];
    const q = trimmed.toLowerCase();
    return searchIndex.filter((e) => e.haystack.includes(q)).slice(0, MAX_RESULTS);
  }, [trimmed, searchIndex]);

  const searching = trimmed.length > 0;
  const countLabel = matches.length === 1 ? dict.home.resultsFoundOne : dict.home.resultsFoundOther;
  const countValue = `${matches.length}${matches.length === MAX_RESULTS ? '+' : ''}`;

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1 className={styles.title}>
            <span className={styles.titleSmall}>{dict.hero.eyebrow}</span>
            {dict.hero.titleLines.map((line, i) => (
              <span key={i} className={styles.titleBig}>
                {line}
              </span>
            ))}
          </h1>

          <p className={styles.tagline}>{dict.hero.tagline}</p>

          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>
              <MagnifyingGlass size={20} weight="bold" aria-hidden />
            </span>
            <label htmlFor="search" className="sr-only">
              {dict.hero.searchLabel}
            </label>
            <input
              id="search"
              type="search"
              className={styles.searchInput}
              placeholder={dict.hero.searchPlaceholder}
              value={query}
              autoComplete="off"
              onChange={(e) => setQuery(e.target.value)}
            />
            {searching && (
              <button type="button" className={styles.clear} onClick={() => setQuery('')}>
                <X size={18} weight="bold" aria-hidden />
                <span className="sr-only">{dict.hero.clearLabel}</span>
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
            <p className={styles.empty}>{fill(dict.home.noResults, '{q}', trimmed)}</p>
          ) : (
            <>
              <p className={styles.resultCount}>{fill(countLabel, '{n}', countValue)}</p>
              <div className={styles.resultList}>
                {matches.map((m, i) => {
                  const catText = m.category ? dict.categories[m.category.slug] : undefined;
                  return (
                    <Link
                      key={`${m.resource.category}-${i}`}
                      className={styles.result}
                      href={localeHref(locale, m.resource.category)}
                      style={m.category ? catVars(m.category) : undefined}
                    >
                      <span className={styles.resultMeta}>
                        {m.category && (
                          <span className={styles.resultBadge}>
                            <CategoryIcon name={m.category.icon} size={13} />
                          </span>
                        )}
                        {catText?.title} · {dict.resourceTypes[m.resource.type]}
                      </span>
                      <span className={styles.resultText}>{m.resource.text}</span>
                      <span className={styles.resultOrg}>
                        {m.resource.org ?? dict.home.communityNote} →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </>
          )}
        </section>
      ) : (
        <>
          <section className={styles.tier}>
            <div className={styles.tierHead}>
              <h2 className={styles.tierTitle}>{dict.home.startHereTitle}</h2>
              <p className={styles.tierNote}>{dict.home.startHereNote}</p>
            </div>
            <div className={styles.gridLarge}>
              {startHereCategories.map((cat) => (
                <TopicCard key={cat.slug} cat={cat} dict={dict} locale={locale} large />
              ))}
            </div>
          </section>

          <section className={styles.tier}>
            <div className={styles.tierHead}>
              <h2 className={styles.tierTitle}>{dict.home.otherTitle}</h2>
            </div>
            <div className={styles.grid}>
              {otherCategories.map((cat) => (
                <TopicCard key={cat.slug} cat={cat} dict={dict} locale={locale} />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}
