import type { Metadata, Viewport } from 'next';
import { Archivo, Public_Sans } from 'next/font/google';
import { Analytics } from '@/components/Analytics';
import { BackToTop } from '@/components/BackToTop';
import { CookieConsent } from '@/components/CookieConsent';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';
import { siteDescription, siteName, siteUrl } from '@/lib/site';
import './globals.css';

/**
 * Google Consent Mode defaults, set before gtag.js can load. Analytics
 * starts denied unless a previous visit stored an explicit yes, so no
 * analytics cookie is written until someone opts in on the banner.
 * Blocking and inline for the same reason as themeScript: the consent
 * state has to be in dataLayer before any measurement is queued, and
 * anything deferred would be too late.
 *
 * functionality_storage stays granted: that covers the theme preference,
 * which is user-initiated and not tracking.
 */
const consentScript = `window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments)}window.gtag=gtag;var c="denied";try{if(localStorage.getItem("consent")==="granted")c="granted"}catch(e){}gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",personalization_storage:"denied",analytics_storage:c,functionality_storage:"granted",security_storage:"granted"});`;

/**
 * Applies a saved theme choice before the browser paints, so someone who
 * picked dark stays in dark on their next visit rather than seeing a
 * flash of the site's own light default. Has to be a blocking inline
 * script; anything deferred paints first. Also corrects the mobile
 * browser-chrome colour to match, since that meta tag has no CSS
 * equivalent of data-theme to follow on its own.
 */
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.setAttribute("data-theme","dark");var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content","#14171a")}}catch(e){}`;

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

/**
 * Tints the mobile browser chrome to match the page it is framing. A
 * single static colour, not a media-query pair: the page itself starts
 * light unconditionally regardless of OS setting, so a media query tied
 * to prefers-color-scheme would mismatch the page on a dark-mode phone.
 * themeScript corrects this to the dark colour when a saved choice
 * calls for it, before first paint.
 */
export const viewport: Viewport = {
  themeColor: '#f7f5ef',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={`${publicSans.variable} ${archivo.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: consentScript }} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <BackToTop />
        <ThemeToggle />
        <LanguageSwitcher />
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
