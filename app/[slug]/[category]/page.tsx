import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import { CategoryIcon } from '@/components/CategoryIcon';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { ResourceCard } from '@/components/ResourceCard';
import { categories, getCategory } from '@/lib/categories';
import { isLocale, localeHref, localeTags, locales, ogLocaleTags, type Locale } from '@/lib/i18n/config';
import { dictionaries } from '@/lib/i18n/dictionaries';
import { resourcesByCategory } from '@/lib/resources';
import { absoluteUrl, hreflangAlternates, siteName } from '@/lib/site';
import styles from '../category.module.css';

type Params = { slug: string; category: string };

/**
 * Only generates locale + category combinations. English category
 * pages are one segment ("/housing/") and live at ../page.tsx; this
 * two-segment shape ("/es/housing/") only ever means locale/category.
 */
export function generateStaticParams(): Params[] {
  return locales.flatMap((slug) => categories.map((c) => ({ slug, category: c.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, category } = await params;
  const cat = getCategory(category);
  if (!isLocale(slug) || !cat) return { title: 'Not found' };

  const dict = dictionaries[slug];
  const text = dict.categories[cat.slug];
  const count = resourcesByCategory(cat.slug).length;
  const description = `${text.subtitle} ${count} ${dict.meta.resourcesSuffixTail}`;
  const images = [
    { url: `/og/${cat.slug}.png`, width: 1200, height: 630, alt: `${text.title} · ${siteName}` },
  ];

  return {
    title: text.title,
    description,
    alternates: {
      canonical: `/${slug}/${cat.slug}`,
      languages: hreflangAlternates(cat.slug),
    },
    openGraph: {
      siteName,
      title: `${text.title} · ${siteName}`,
      description,
      url: absoluteUrl(`${slug}/${cat.slug}`),
      type: 'article',
      locale: ogLocaleTags[slug],
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${text.title} · ${siteName}`,
      description,
      images,
    },
  };
}

export default async function LocaleCategoryPage({ params }: { params: Promise<Params> }) {
  const { slug, category } = await params;
  const cat = getCategory(category);
  if (!isLocale(slug) || !cat) notFound();

  const locale: Locale = slug;
  const dict = dictionaries[locale];
  const text = dict.categories[cat.slug];
  const items = resourcesByCategory(cat.slug);
  const countLabel = (
    items.length === 1 ? dict.category.resourceCountOne : dict.category.resourceCountOther
  ).replace('{n}', String(items.length));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: siteName, item: absoluteUrl(locale) },
          {
            '@type': 'ListItem',
            position: 2,
            name: text.title,
            item: absoluteUrl(`${locale}/${cat.slug}`),
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        name: `${text.title} · ${siteName}`,
        description: text.subtitle,
        url: absoluteUrl(`${locale}/${cat.slug}`),
        inLanguage: localeTags[locale],
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
      <Link href={localeHref(locale)} className={styles.back}>
        <ArrowLeft size={14} weight="bold" aria-hidden />
        {dict.category.backToTopics}
      </Link>

      <header
        className={styles.header}
        style={{ '--cat': cat.color, '--cat-dark': cat.colorDark } as React.CSSProperties}
      >
        <span className={styles.badge}>
          <CategoryIcon name={cat.icon} size={26} />
        </span>
        <div className={styles.headerText}>
          <h1 className={styles.title}>{text.title}</h1>
          <p className={styles.subtitle}>{text.subtitle}</p>
          <p className={styles.count}>{countLabel}</p>
        </div>
      </header>

      <div className={styles.grid}>
        {items.map((resource, i) => (
          <ResourceCard
            key={`${resource.category}-${i}`}
            resource={resource}
            typeLabel={dict.resourceTypes[resource.type]}
            opensNewTabLabel={dict.common.opensNewTab}
          />
        ))}
      </div>

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
