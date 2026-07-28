/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Extra origin allowed to drive the GitCMS live preview, e.g. https://app.gitcms.dev */
  readonly VITE_GITCMS_ORIGIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/** Injected by vite.config.ts — the commit this build was made from. */
declare const __SITE_COMMIT__: string;
