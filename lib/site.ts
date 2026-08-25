/**
 * Absolute address the site is served from, base path included.
 *
 * Canonical links, the sitemap and social preview cards all have to
 * spell the URL out in full, and a static export has no incoming request
 * to infer it from, so it is baked in at build time. The deploy workflow
 * sets NEXT_PUBLIC_SITE_URL to the custom domain once public/CNAME
 * exists and to the github.io project URL until then, so the switch
 * needs no code change. The fallback matches the current deployment, so
 * a local build produces the same URLs CI does.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://afrixdevelops.github.io/newcomers-bc'
).replace(/\/+$/, '');

export const siteName = 'Newcomers BC';

export const siteDescription =
  'Free, plain-language guides for newcomers to British Columbia: housing, healthcare, ' +
  'work, ID, schools and more. Every tip links straight to an official source.';

/**
 * Absolute URL for a route, with the trailing slash the export actually
 * serves. A canonical that disagrees with the served URL is a canonical
 * pointing at a redirect, which is worse than none at all.
 */
export function absoluteUrl(path = '/'): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `${siteUrl}/${clean}/` : `${siteUrl}/`;
}
