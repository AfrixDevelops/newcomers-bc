import { isLocale, localeTags } from '@/lib/i18n/config';

type Params = { slug: string };

/**
 * Wraps both the English category pages and every locale's pages, since
 * both now live under the same [slug] segment (see page.tsx for why).
 * The lang-correcting script only applies when slug is actually a
 * locale; for an English category slug like "housing" this renders
 * nothing extra; the root layout's html[lang="en-CA"] already applies.
 */
export default async function SlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { slug } = await params;
  if (!isLocale(slug)) return children;

  const langScript = `document.documentElement.lang=${JSON.stringify(localeTags[slug])};`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: langScript }} />
      {children}
    </>
  );
}
