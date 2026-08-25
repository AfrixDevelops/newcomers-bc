import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { SearchableHome } from '@/components/SearchableHome';
import { absoluteUrl, siteDescription, siteName } from '@/lib/site';

/** Declared here rather than on the layout so the 404 cannot inherit it. */
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

/**
 * Names the site and, importantly, what it is about. "Newcomers BC"
 * alone tells a crawler nothing; the place and audience have to be
 * stated somewhere machine-readable.
 */
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: absoluteUrl('/'),
  description: siteDescription,
  inLanguage: 'en-CA',
  about: { '@type': 'Place', name: 'British Columbia, Canada' },
  audience: { '@type': 'Audience', audienceType: 'Immigrants and newcomers to Canada' },
  isAccessibleForFree: true,
};

export default function HomePage() {
  return (
    <main className="wrap">
      <JsonLd data={websiteSchema} />
      <SearchableHome />
      <Footer />
    </main>
  );
}
