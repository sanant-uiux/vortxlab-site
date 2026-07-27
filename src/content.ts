import home from '../content/home.json';

/**
 * The single source of truth for every piece of copy on this page.
 *
 * `content/home.json` is what GitCMS edits. A publish commits that file, the
 * host rebuilds, and Vite inlines the new values here — no runtime fetch, no
 * CMS API call, no content database. The git history is the content history.
 */

export interface SocialLink {
  platform: string;
  label: string;
  href: string;
}

export interface HomeContent {
  brand: { wordmark: string; name: string };
  media: { backgroundVideoUrl: string };
  nav: {
    secondaryLabel: string;
    secondaryHref: string;
    primaryLabel: string;
    primaryHref: string;
  };
  aside: { text: string; caption: string; index: string };
  hero: { lines: string[] };
  footer: {
    description: string;
    label: string;
    ctaLabel: string;
    ctaHref: string;
    social: SocialLink[];
  };
}

export const content: HomeContent = home;
