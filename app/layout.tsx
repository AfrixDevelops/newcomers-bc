import type { Metadata, Viewport } from 'next';
import { Archivo, Public_Sans } from 'next/font/google';
import { BackToTop } from '@/components/BackToTop';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';
import { siteDescription, siteName, siteUrl } from '@/lib/site';
import './globals.css';

/**
 * Applies a saved theme choice before the browser paints, so someone who
 * picked light on a dark-mode device never sees a flash of the wrong one.
 * Has to be a blocking inline script; anything deferred paints first.
 */
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-public-sans',
  display: 'swap',
});

/** Display face. Carries the oversized headings; body stays Public Sans. */
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
});

/** Reused across the title tag, the OG card and the Twitter card. */
const homeTitle = `${siteName} · Settlement Resources for British Columbia`;

/**
 * Committed by scripts/generate-og.mjs rather than produced by an
 * opengraph-image route: a static export writes that route to an
 * extensionless file, and Pages types responses by extension, so
 * scrapers would refuse the result.
 */
const ogImage = {
  url: '/og/home.png',
  width: 1200,
  height: 630,
  alt: 'Newcomers BC, settlement resources for British Columbia',
};

export const metadata: Metadata = {
  /**
   * Every relative URL below resolves against this. It carries the base
   * path too, and Next treats a leading slash as relative to the end of
   * metadataBase rather than replacing its path, so "/housing" lands on
   * /newcomers-bc/housing today and on the bare domain after the switch.
   */
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: 'AfrixDevelops', url: 'https://github.com/AfrixDevelops' }],
  creator: 'AfrixDevelops',
  // No canonical here on purpose. Anything set on the layout is
  // inherited by every page that does not override it, including the
  // 404, which would then claim to be the homepage.
  openGraph: {
    siteName,
    title: homeTitle,
    description: siteDescription,
    url: '/',
    type: 'website',
    locale: 'en_CA',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: siteDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    // Lets Google show a full-size preview thumbnail and an untruncated
    // snippet, which is the difference between a result someone clicks
    // and one they scroll past.
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/** Tints the mobile browser chrome to match the page it is framing. */
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f5ef' },
    { media: '(prefers-color-scheme: dark)', color: '#14171a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={`${publicSans.variable} ${archivo.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <BackToTop />
        <ThemeToggle />
        <LanguageSwitcher />
      </body>
    </html>
  );
}
