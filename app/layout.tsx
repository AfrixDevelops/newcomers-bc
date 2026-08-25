import type { Metadata } from 'next';
import { Archivo, Public_Sans } from 'next/font/google';
import { BackToTop } from '@/components/BackToTop';
import { ThemeToggle } from '@/components/ThemeToggle';
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

export const metadata: Metadata = {
  title: {
    default: 'Newcomers BC',
    template: '%s · Newcomers BC',
  },
  description:
    'Bite-sized tips and trusted resources to help you navigate your new life in British Columbia, Canada.',
  openGraph: {
    title: 'Newcomers BC',
    description:
      'Bite-sized tips and trusted resources to help you navigate your new life in British Columbia, Canada.',
    type: 'website',
    locale: 'en_CA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${publicSans.variable} ${archivo.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <BackToTop />
        <ThemeToggle />
      </body>
    </html>
  );
}
