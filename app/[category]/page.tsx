import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import { categories, getCategory } from '@/lib/categories';
import { resourcesByCategory } from '@/lib/resources';
import { CategoryIcon } from '@/components/CategoryIcon';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { ResourceCard } from '@/components/ResourceCard';
import { absoluteUrl, siteName } from '@/lib/site';
import styles from './category.module.css';

type Params = { category: string };

/** Pre-renders one static HTML file per category at build time. */
export function generateStaticParams(): Params[] {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return { title: 'Not found' };

  /**
   * The subtitle is written for a person already on the page, so it
   * never says where "here" is. A search result has no such context,
   * hence the count and the province spelled out.
   */
  const description = `${cat.subtitle} ${resourcesByCategory(cat.slug).length} free, trusted resources for newcomers to British Columbia.`;
  const url = absoluteUrl(cat.slug);

  /** One card per category, committed by scripts/generate-og.mjs. */
  const images = [
    { url: `/og/${cat.slug}.png`, width: 1200, height: 630, alt: `${cat.title} · ${siteName}` },
  ];

  return {
    title: cat.title,
    description,
    alternates: { canonical: `/${cat.slug}` },
    openGraph: {
      siteName,
      title: `${cat.title} · ${siteName}`,
      description,
      url,
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

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
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
