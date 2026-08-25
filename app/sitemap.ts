import type { MetadataRoute } from 'next';
import { categories } from '@/lib/categories';
import { absoluteUrl } from '@/lib/site';

/**
 * No lastModified field. It would have to be the build date, which
 * changes on every deploy whether or not the content did, and a lastmod
 * that cries wolf is a signal crawlers learn to discount. Better to omit
 * it than to publish one that is not true.
 */
/** Metadata routes are Route Handlers; a static export needs them pinned. */
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1 },
    ...categories.map((c) => ({
      url: absoluteUrl(c.slug),
      changeFrequency: 'monthly' as const,
      // The first-week topics are the ones worth surfacing first.
      priority: c.startHere ? 0.9 : 0.8,
    })),
  ];
}
