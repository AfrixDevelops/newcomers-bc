# Newcomers BC

Bite-sized, actionable information to help new immigrants navigate settling in
British Columbia, Canada. 140 plain-language tips across 10 categories, each
linking to a verified government or non-profit organization.

**Live site:** _(add your GitHub Pages URL here after the first deploy)_

## Why it exists

Settlement information in BC is spread across dozens of federal, provincial, and
non-profit websites, most written in dense policy language. Newcomers BC
condenses it into one- and two-sentence tips, tagged by how much effort each one
takes, so someone reading on a bus between shifts can find one useful thing in
under a minute.

Every card is labelled:

| Tag | Meaning |
| --- | --- |
| **Tip** | A fact worth knowing |
| **Action** | Something to do this week |
| **Next step** | Worth planning for later |
| **Community** | Peer knowledge, no official link — treat as anecdotal |

## Stack

- **Next.js 16** (App Router) with static export — no server required
- **TypeScript** throughout
- **CSS Modules** over a CSS-variable token system, light and dark themes
- **Phosphor** icons
- Deployed to **GitHub Pages** via GitHub Actions

## Architecture notes

Content lives entirely in [`lib/resources.ts`](lib/resources.ts) and
[`lib/categories.ts`](lib/categories.ts) as typed data, not markup. One
`<ResourceCard>` component renders every entry, and `app/[slug]/page.tsx` plus
`app/[slug]/[category]/page.tsx` generate every category and locale page at
build time via `generateStaticParams`. Adding a resource means adding one
object to an array.

That separation is what made the multilingual UI tractable: the strings were
already isolated from the components before any translation work started.

Search runs client-side over a prebuilt index. It is the only client component
on the site — everything else is a React Server Component rendered to static
HTML at build time.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site emitted to ./out
npm run og       # regenerate the social cards in public/og
```

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it to GitHub Pages. The workflow sets `basePath`
from the repository name automatically, so the site works at
`username.github.io/<repo>` without configuration.

To move to a custom domain later, add a `public/CNAME` file containing the
domain. The workflow detects it and builds at the root path instead, and
derives `NEXT_PUBLIC_SITE_URL` from the same file so canonical links, the
sitemap and the social cards all follow the move without a code change.

## Search and sharing

Every page carries a canonical URL, a written description, Open Graph and
Twitter card tags, and a 1200×630 preview image. Category pages add
`BreadcrumbList` and `CollectionPage` structured data; the home page declares
`WebSite`. `app/sitemap.ts` and `app/robots.ts` generate their files at build
time.

Two things are deliberate rather than accidental:

**The preview cards are committed, not generated at build time.** Next can
produce them from an `opengraph-image` route, but a static export writes that
route to an *extensionless* file and GitHub Pages types responses by file
extension, so scrapers receive `application/octet-stream` and drop the card.
`scripts/generate-og.mjs` renders real `.png` files into `public/og/` instead,
reading the hero artwork straight out of `HeroGraphic.tsx` so the cards cannot
drift from the site. Run `npm run og` after adding or renaming a category.

**`robots.txt` does nothing until the custom domain is live.** Crawlers read it
from the domain root only, and a project Pages site is served from `/<repo>`.
The file is correct and ready; until the domain moves, submit the sitemap by
hand.

### Before launch

- [ ] Verify the property in [Google Search Console](https://search.google.com/search-console) and submit `sitemap.xml`
- [ ] Same in [Bing Webmaster Tools](https://www.bing.com/webmasters), which also feeds DuckDuckGo
- [ ] Check a card renders in [the Facebook debugger](https://developers.facebook.com/tools/debug/) and one real Slack or WhatsApp paste
- [ ] Run the category pages through the [Rich Results Test](https://search.google.com/test/rich-results)

Do the domain switch before promoting the site anywhere. Indexing and links
earned on the `github.io` URL have to be re-consolidated onto the new domain
afterwards, which costs time that a switch made first does not.

## Languages

The site translates its navigation, headings and category titles into seven
languages: Spanish, Japanese, Korean, Punjabi, Tagalog, and Simplified and
Traditional Chinese, served at `/es/`, `/ja/`, `/ko/`, `/pa/`, `/tl/`,
`/zh-Hans/` and `/zh-Hant/`. English stays unprefixed at the existing URLs.

**Resource tips and their links stay in English in every locale, on purpose.**
They point to English-language government and nonprofit sites regardless of
the page's own language, and machine-translating legal, healthcare and
financial guidance for people making real decisions on it is an accuracy risk,
not a cosmetic one. A translated page tells someone which door to knock on;
what's behind the door is unchanged. Each translated page says this plainly in
its footer.

All translated strings live in [`lib/i18n/dictionaries.ts`](lib/i18n/dictionaries.ts).
They were written by an AI assistant, not reviewed by a native speaker of each
language. Treat them as a solid first pass, not a certified translation, and
have one checked before relying on it for anything higher-stakes than
navigation copy.

`/housing/` and `/es/` are both exactly one path segment past the root, so
`app/[category]` and `app/[locale]` as separate route folders would have been
an ambiguous match. Both live under one `app/[slug]/` route instead, which
branches on whether the slug is a category or a language.

Every language variant carries its own canonical URL and appears in every
page's `hreflang` alternates and in the sitemap, so search engines can offer
the right language directly instead of only ever surfacing the English page.

Social preview cards (`public/og/*.png`) are English-only for now. Adding a
translated set is a straightforward extension of `scripts/generate-og.mjs`,
but wasn't part of this pass.

## Roadmap

- [ ] Progress checklist with local persistence
- [ ] Map view for nearby services
- [ ] Automated link-health checking in CI

## Disclaimer

Newcomers BC is an independent resource. It is not affiliated with, endorsed by,
or operated by the Government of Canada, the Government of British Columbia, or
any of the organizations linked on the site.
