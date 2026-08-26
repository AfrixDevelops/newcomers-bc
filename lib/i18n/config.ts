/**
 * English is the default locale and stays unprefixed at the existing
 * URLs (/, /housing/) so nothing built and verified before this feature
 * has to move. Every other locale gets a prefix (/es/, /pa/, /ja/…).
 *
 * Scope is UI chrome and category titles only. Resource tips and their
 * links stay in English in every locale: they point to English-language
 * government and nonprofit sites regardless of the page's own language,
 * and machine-translating legal, healthcare and financial guidance for
 * people making real decisions on it is a real accuracy risk, not a
 * cosmetic one. A translated page tells someone which door to knock on;
 * what is behind the door is unchanged.
 */
export const locales = ['es', 'ja', 'ko', 'pa', 'tl', 'zh-Hans', 'zh-Hant'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale = 'en';

/** Each language's own name for itself, used in the switcher. */
export const localeNames: Record<Locale, string> = {
  es: 'Español',
  ja: '日本語',
  ko: '한국어',
  pa: 'ਪੰਜਾਬੀ',
  tl: 'Tagalog',
  'zh-Hans': '简体中文',
  'zh-Hant': '繁體中文',
};

/** BCP 47 tags for html[lang], hreflang and og:locale. */
export const localeTags: Record<Locale, string> = {
  es: 'es-CA',
  ja: 'ja',
  ko: 'ko',
  pa: 'pa',
  tl: 'fil',
  'zh-Hans': 'zh-Hans',
  'zh-Hant': 'zh-Hant',
};

export const ogLocaleTags: Record<Locale, string> = {
  es: 'es_CA',
  ja: 'ja_JP',
  ko: 'ko_KR',
  pa: 'pa_IN',
  tl: 'fil_PH',
  'zh-Hans': 'zh_CN',
  'zh-Hant': 'zh_TW',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Reads the locale off a client-side pathname. Used by the floating
 * controls (theme toggle, back-to-top, language switcher), which are
 * rendered once from the root layout and so sit outside the [locale]
 * route tree — they cannot receive the locale as a prop or via context,
 * only by reading the URL themselves.
 *
 * NEXT_PUBLIC_BASE_PATH is inlined at build time, so this is correct
 * whether or not the pathname includes the GitHub Pages sub-path: the
 * strip is a no-op when the prefix isn't there.
 */
export function currentLocale(pathname: string): Locale | 'en' {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const stripped = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const first = stripped.split('/').filter(Boolean)[0];
  return first && isLocale(first) ? first : 'en';
}

/** Builds an internal href. Never carries basePath; next/link adds that. */
export function localeHref(locale: Locale | 'en', path = ''): string {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return path ? `${prefix}/${path}` : prefix || '/';
}
