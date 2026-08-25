import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

/**
 * Note this file only starts doing its job on the custom domain.
 * Crawlers read robots.txt from the domain root only, and a GitHub Pages
 * project site is served from /<repo>, so what is emitted here sits at a
 * path nothing will fetch. It is correct and ready for the domain
 * switch; until then the sitemap has to be submitted to Search Console
 * by hand.
 */
/** Metadata routes are Route Handlers; a static export needs them pinned. */
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
