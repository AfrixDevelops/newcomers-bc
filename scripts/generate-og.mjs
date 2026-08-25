/**
 * Renders the social preview cards into public/og/.
 *
 * These are committed rather than generated at build time on purpose.
 * Next can produce them from an opengraph-image route, but a static
 * export writes that route to an extensionless file, and GitHub Pages
 * types responses by file extension. A card served as
 * application/octet-stream is a card every scraper drops, so the
 * cards ship as real .png files instead.
 *
 * Run after adding or renaming a category:  node scripts/generate-og.mjs
 *
 * The mountain artwork is read straight out of HeroGraphic.tsx so the
 * cards cannot drift from the site.
 */
import { readFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const { default: sharp } = await import(
  pathToFileURL(join(root, 'node_modules/sharp/dist/index.cjs')).href
);
const { categories } = await import(pathToFileURL(join(root, 'lib/categories.ts')).href);

const W = 1200;
const H = 630;
const BG = '#f7f5ef';
const INK = '#14171a';
const INK_SOFT = '#5c6672';

/** Bold display face for headings, regular for everything else. */
const FONT = 'Segoe UI, Arial, sans-serif';

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Greedy wrap on an average-advance estimate. Exact metrics would need
 * the font loaded; the cards have generous right-hand slack, so an
 * estimate that errs short is enough.
 */
function wrap(text, fontSize, maxWidth, maxLines) {
  const perChar = fontSize * 0.52;
  const limit = Math.floor(maxWidth / perChar);
  const lines = [];
  let line = '';
  for (const word of text.split(' ')) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > limit && line) {
      lines.push(line);
      line = word;
      if (lines.length === maxLines) return lines;
    } else {
      line = next;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  return lines;
}

/**
 * Steps the type down until the whole string fits. wrap() drops any
 * words past its line budget, and a card that quietly loses the last
 * word of a heading is worse than one set a few points smaller. If even
 * the smallest size cannot hold it, that is a content problem and this
 * stops the build rather than shipping a truncated card.
 */
function fit(text, sizes, maxWidth, maxLines) {
  for (const size of sizes) {
    const lines = wrap(text, size, maxWidth, maxLines);
    if (lines.join(' ') === text) return { lines, size };
  }
  throw new Error(`Will not fit on a card even at ${sizes.at(-1)}px: "${text}"`);
}

/** The hero artwork, with the light-theme palette inlined. */
function heroArt() {
  const tsx = readFileSync(join(root, 'components/HeroGraphic.tsx'), 'utf8');
  const css = readFileSync(join(root, 'components/HeroGraphic.module.css'), 'utf8');

  const light = {};
  const head = css.slice(css.indexOf('.graphic {'), css.indexOf('display: block'));
  for (const m of head.matchAll(/(--[a-z-]+):\s*([^;]+);/g)) light[m[1]] = m[2].trim();

  const rules = {};
  for (const m of css.matchAll(/\.([A-Za-z]+)\s*(?:,\s*\.([A-Za-z]+)\s*)?\{([^}]*)\}/g)) {
    const fill = m[3].match(/fill:\s*var\((--[a-z-]+)\)/)?.[1];
    const opacity = m[3].match(/opacity:\s*([\d.]+)/)?.[1];
    for (const cls of [m[1], m[2]].filter(Boolean)) {
      rules[cls] ??= {};
      if (fill) rules[cls].fill = fill;
      if (opacity) rules[cls].opacity = opacity;
    }
  }

  const body = tsx.slice(tsx.indexOf('>', tsx.indexOf('<svg')) + 1, tsx.indexOf('</svg>'));
  return body
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/className=\{styles\.(\w+)\}/g, (_, cls) => {
      const r = rules[cls] ?? {};
      const color = light[r.fill];
      if (!color) throw new Error(`No light-theme colour for .${cls}`);
      return `fill="${color}"${r.opacity ? ` opacity="${r.opacity}"` : ''}`;
    });
}

const ART = heroArt();

/**
 * Category titles run from 21 to 41 characters, so the text block is
 * measured and centred rather than pinned to a fixed top. Otherwise a
 * one-line card and a three-line card sit at visibly different heights.
 */
function card({ eyebrow, title, subtitle, accent }) {
  const t = fit(title, [62, 56, 50, 45], 545, 3);
  const s = fit(subtitle, [26, 24, 22], 545, 3);
  const titleLh = Math.round(t.size * 1.16);
  const subLh = Math.round(s.size * 1.38);

  const blockH = 200 + (t.lines.length - 1) * titleLh + (s.lines.length - 1) * subLh;
  let y = Math.round((H - blockH) / 2);

  const accentY = y;
  y += 46;
  const eyebrowY = y;
  y += 86;
  const titleY = y;
  y += (t.lines.length - 1) * titleLh + 58;
  const subY = y;

  const titleLines = t.lines;
  const subLines = s.lines;

  const line = (t, ly, size, weight, fill) =>
    `<text x="72" y="${ly}" font-family="${FONT}" font-size="${size}" font-weight="${weight}" fill="${fill}">${esc(t)}</text>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <clipPath id="panel"><rect x="660" y="90" width="480" height="450" rx="18"/></clipPath>
  </defs>
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <!-- Clipped to a rounded panel: the artwork's own edges are square and
       read as a rendering mistake when they simply stop mid-card. -->
  <g clip-path="url(#panel)"><g transform="translate(637.5 90) scale(1.25)">${ART}</g></g>
  <rect x="72" y="${accentY}" width="86" height="8" rx="4" fill="${accent}"/>
  ${line(eyebrow.toUpperCase(), eyebrowY, 25, 700, accent)}
  ${titleLines.map((x, i) => line(x, titleY + i * titleLh, t.size, 800, INK)).join('\n  ')}
  ${subLines.map((x, i) => line(x, subY + i * subLh, s.size, 400, INK_SOFT)).join('\n  ')}
</svg>`;
}

mkdirSync(join(root, 'public/og'), { recursive: true });

async function write(name, svg) {
  const out = join(root, 'public/og', `${name}.png`);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
  console.log(`public/og/${name}.png`);
}

await write(
  'home',
  card({
    eyebrow: 'Newcomers BC',
    title: 'Settlement resources for British Columbia',
    subtitle: 'Housing, healthcare, work, ID and more. Every tip links to an official source.',
    accent: '#0B6E7A',
  }),
);

for (const c of categories) {
  await write(
    c.slug,
    card({
      eyebrow: 'Newcomers BC',
      title: c.title,
      subtitle: c.subtitle,
      accent: c.color,
    }),
  );
}
