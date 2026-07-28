import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import homeContent from "../content/home.json";
import { useGitCmsPreview } from "./gitcms-preview";

/**
 * Every string on this page comes from `content/home.json`.
 *
 * GitCMS edits that file and commits it; Vite inlines it at build time. Nothing
 * is fetched at runtime — the git history is the content history.
 *
 * Components read through the context rather than importing the JSON directly,
 * so the live preview can swap the whole document in memory without a reload.
 */

export interface Link {
  label: string;
  href: string;
}

export interface Social {
  platform: string;
  label: string;
  href: string;
}

export interface HomeContent {
  brand: { wordmark: string; name: string; email: string };
  media: { backgroundVideoUrl: string };
  hero: {
    navLinks: Link[];
    secondaryCtaLabel: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    asideText: string;
    asideCaption: string;
    asideIndex: string;
    headingLines: string[];
    description: string;
    label: string;
    ctaLabel: string;
    ctaHref: string;
    socials: Social[];
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    items: { icon: string; title: string; description: string; tags: string[] }[];
  };
  marquee: { keywords: string[] };
  work: {
    eyebrow: string;
    heading: string;
    projects: {
      index: string;
      title: string;
      category: string;
      description: string;
      art: string;
    }[];
  };
  cta: {
    eyebrow: string;
    headingLines: string[];
    description: string;
    primaryLabel: string;
  };
  footer: {
    description: string;
    columns: { heading: string; links: string[] }[];
    connectHeading: string;
    socials: Social[];
    copyright: string;
    tagline: string;
  };
}

export const defaultContent = homeContent as HomeContent;

const ContentContext = createContext<HomeContent>(defaultContent);

export function ContentProvider({ children }: { children: ReactNode }) {
  // Built-in content normally; the editor's draft while previewing.
  const { content } = useGitCmsPreview<HomeContent>(defaultContent);
  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export function useContent(): HomeContent {
  return useContext(ContentContext);
}
