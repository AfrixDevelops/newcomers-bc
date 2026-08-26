import type { MetadataRoute } from 'next';
import { categories } from '@/lib/categories';
import { locales } from '@/lib/i18n/config';
import { absoluteUrl, hreflangAlternates } from '@/lib/site';

/**
 * No lastModified field. It would have to be the build date, which
 * changes on every deploy whether or not the content did, and a lastmod
 * that cries wolf is a signal crawlers learn to discount. Better to omit
 * it than to publish one that is not true.
 */
/** Metadata routes are Route Handlers; a static export needs them pinned. */
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1, alternates: { languages: hreflangAlternates() } },
    ...locales.map((locale) => ({
      url: absoluteUrl(locale),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: { languages: hreflangAlternates() },
    })),
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.flatMap((c) => {
    const priority = c.startHere ? 0.9 : 0.8;
    const alternates = { languages: hreflangAlternates(c.slug) };
    return [
      { url: absoluteUrl(c.slug), changeFrequency: 'monthly' as const, priority, alternates },
      ...locales.map((locale) => ({
        url: absoluteUrl(`${locale}/${c.slug}`),
        changeFrequency: 'monthly' as const,
        priority: priority - 0.1,
        alternates,
      })),
    ];
  });

  return [...home, ...categoryPages];
}
