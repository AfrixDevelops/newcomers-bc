import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import { CategoryIcon } from '@/components/CategoryIcon';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { LocaleHome } from '@/components/LocaleHome';
import { ResourceCard } from '@/components/ResourceCard';
import { categories, getCategory } from '@/lib/categories';
import { isLocale, localeTags, locales, ogLocaleTags, type Locale } from '@/lib/i18n/config';
import { dictionaries } from '@/lib/i18n/dictionaries';
import { resourcesByCategory } from '@/lib/resources';
import { absoluteUrl, hreflangAlternates, siteName } from '@/lib/site';
import styles from './category.module.css';

type Params = { slug: string };

/**
 * "/housing/" and "/es/" are both exactly one path segment past the
 * root, so Next needs one dynamic route to cover both value spaces —
 * it refuses two sibling folders ([category] and [locale]) that would
 * match the same URL shape ambiguously. This route produces every
 * category slug (the English pages, unchanged from before) and every
 * locale code (each locale's home page) from a single param list, and
 * the page below branches on which kind of value it received.
 */
export function generateStaticParams(): Params[] {
  return [...categories.map((c) => ({ slug: c.slug })), ...locales.map((l) => ({ slug: l }))];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (isLocale(slug)) {
    const dict = dictionaries[slug];
    const title = `${siteName} · ${dict.meta.homeTitleSuffix}`;
    const description = dict.meta.homeDescription;
    const images = [{ url: '/og/home.png', width: 1200, height: 630, alt: title }];

    return {
      // { absolute } bypasses the root layout's "%s · Newcomers BC"
      // template. Without it, siteName here would be added twice: once
      // by hand to match the English home's brand-first title format,
      // and once more by the template.
      title: { absolute: title },
      description,
      alternates: { canonical: `/${slug}`, languages: hreflangAlternates() },
      openGraph: {
        siteName,
        title,
        description,
        url: absoluteUrl(slug),
        type: 'website',
        locale: ogLocaleTags[slug],
        images,
      },
      twitter: { card: 'summary_large_image', title, description, images },
    };
  }

  const cat = getCategory(slug);
  if (!cat) return { title: 'Not found' };

  /**
   * The subtitle is written for a person already on the page, so it
   * never says where "here" is. A search result has no such context,
   * hence the count and the province spelled out.
   */
  const description = `${cat.subtitle} ${resourcesByCategory(cat.slug).length} free, trusted resources for newcomers to British Columbia.`;
  const images = [
    { url: `/og/${cat.slug}.png`, width: 1200, height: 630, alt: `${cat.title} · ${siteName}` },
  ];

  return {
    title: cat.title,
    description,
    alternates: { canonical: `/${cat.slug}`, languages: hreflangAlternates(cat.slug) },
    openGraph: {
      siteName,
      title: `${cat.title} · ${siteName}`,
      description,
      url: absoluteUrl(cat.slug),
      type: 'article',
      locale: 'en_CA',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cat.title} · ${siteName}`,
      description,
      images,
    },
  };
}

function LocaleHomePage({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: absoluteUrl(locale),
    description: dict.meta.homeDescription,
    inLanguage: localeTags[locale],
    about: { '@type': 'Place', name: 'British Columbia, Canada' },
    audience: { '@type': 'Audience', audienceType: 'Immigrants and newcomers to Canada' },
    isAccessibleForFree: true,
  };

  return (
    <main className="wrap">
      <JsonLd data={websiteSchema} />
      <LocaleHome dict={dict} locale={locale} />
      <Footer
        disclaimerLabel={dict.footer.disclaimerLabel}
        disclaimer={dict.footer.disclaimer}
        aboutLinksLabel={dict.footer.aboutLinksLabel}
        aboutLinks={dict.footer.aboutLinks}
        translationNote={dict.footer.translationNote}
        supportLabel={dict.footer.supportLabel}
        opensNewTabLabel={dict.common.opensNewTab}
      />
    </main>
  );
}

export default async function SlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  if (isLocale(slug)) return <LocaleHomePage locale={slug} />;

  const cat = getCategory(slug);
  if (!cat) notFound();

  const items = resourcesByCategory(cat.slug);

  /**
   * Breadcrumbs are the one structured-data type here that earns a
   * visible result change: Google renders the trail in place of the raw
   * URL, so the listing reads "Newcomers BC > Housing" instead of a
   * slug. The ItemList describes what the page actually is, a curated
   * set of links, rather than leaving crawlers to infer it.
   */
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: siteName, item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: cat.title, item: absoluteUrl(cat.slug) },
        ],
      },
      {
        '@type': 'CollectionPage',
        name: `${cat.title} · ${siteName}`,
        description: cat.subtitle,
        url: absoluteUrl(cat.slug),
        inLanguage: 'en-CA',
        isAccessibleForFree: true,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: items.length,
          itemListElement: items.map((r, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: r.label,
            url: r.url,
          })),
        },
      },
    ],
  };

  return (
    <main className="wrap">
      <JsonLd data={schema} />
      <Link href="/" className={styles.back}>
        <ArrowLeft size={14} weight="bold" aria-hidden />
        Back to topics
      </Link>

      <header
        className={styles.header}
        style={{ '--cat': cat.color, '--cat-dark': cat.colorDark } as React.CSSProperties}
      >
        <span className={styles.badge}>
          <CategoryIcon name={cat.icon} size={26} />
        </span>
        <div className={styles.headerText}>
          <h1 className={styles.title}>{cat.title}</h1>
          <p className={styles.subtitle}>{cat.subtitle}</p>
          <p className={styles.count}>{items.length} resources</p>
        </div>
      </header>

      <div className={styles.grid}>
        {items.map((resource, i) => (
          <ResourceCard key={`${resource.category}-${i}`} resource={resource} />
        ))}
      </div>

      <Footer />
    </main>
  );
}
