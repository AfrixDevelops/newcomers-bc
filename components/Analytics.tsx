'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

const GA_ID = 'G-60W4RFG7JR';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * gtag's own automatic page_view only fires once, on the initial script
 * load. Every navigation after that on this site is a client-side route
 * change (next/link doesn't reload the page), so without this, GA would
 * only ever see the first page a visitor landed on and silently miss
 * every page they actually clicked to after that — undercounting real
 * usage rather than erroring, which is the kind of bug that goes
 * unnoticed until someone asks why a popular page shows no traffic.
 *
 * send_page_view is turned off in the init call below specifically so
 * this effect is the one place page views are ever sent, including the
 * first one (this effect also runs on mount): one path, not two
 * mechanisms that could double-count or drift apart.
 */
export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || typeof window.gtag !== 'function') return;
    const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
    const path = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
    window.gtag('event', 'page_view', { page_path: path || '/' });
  }, [pathname]);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:false});`}
      </Script>
    </>
  );
}
