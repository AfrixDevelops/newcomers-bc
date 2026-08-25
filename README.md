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
`<ResourceCard>` component renders all 140 entries, and a single dynamic route
(`app/[category]/page.tsx`) generates all 10 category pages at build time via
`generateStaticParams`. Adding a resource means adding one object to an array.

That separation is what makes the planned multilingual support tractable: the
strings are already isolated from the components.

Search runs client-side over a prebuilt index. It is the only client component
on the site — everything else is a React Server Component rendered to static
HTML at build time.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site emitted to ./out
```

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it to GitHub Pages. The workflow sets `basePath`
from the repository name automatically, so the site works at
`username.github.io/<repo>` without configuration.

To move to a custom domain later, add a `public/CNAME` file containing the
domain. The workflow detects it and builds at the root path instead.

## Roadmap

- [ ] Multilingual support (Punjabi, Mandarin, Cantonese, Tagalog, Spanish)
- [ ] Progress checklist with local persistence
- [ ] Map view for nearby services
- [ ] Automated link-health checking in CI

## Disclaimer

Newcomers BC is an independent resource. It is not affiliated with, endorsed by,
or operated by the Government of Canada, the Government of British Columbia, or
any of the organizations linked on the site.
