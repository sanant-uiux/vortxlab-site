import { useEffect, useState } from 'react';

/**
 * GitCMS live-preview bridge.
 *
 * When this page is framed by the GitCMS editor, it receives the draft document
 * on every keystroke and re-renders from it. Nothing is fetched and nothing is
 * written — the editor simply hands over the object it is holding.
 *
 * Outside an iframe this is inert: the hook returns the content that was built
 * into the bundle, so production is completely unaffected.
 *
 * This is what GitCMS would ship as `@gitcms/preview`; it lives here so the
 * reference site has no dependency on the platform.
 */

const PROTOCOL_VERSION = 1;

/**
 * Origins allowed to drive this page. A wildcard would let any site that frames
 * you rewrite your content in the visitor's browser, so the list is explicit.
 */
const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  ...(import.meta.env.VITE_GITCMS_ORIGIN ? [import.meta.env.VITE_GITCMS_ORIGIN] : []),
];

function isFramed(): boolean {
  try {
    return window.self !== window.top;
  } catch {
    // Cross-origin access throws, which itself means we are framed.
    return true;
  }
}

/**
 * Returns the content to render: the built-in document normally, or the
 * editor's draft while previewing.
 */
export function useGitCmsPreview<T>(initial: T): { content: T; previewing: boolean } {
  const [content, setContent] = useState<T>(initial);
  const [previewing, setPreviewing] = useState(false);

  useEffect(() => {
    if (!isFramed()) return;

    const announce = () => {
      window.parent.postMessage(
        {
          type: 'gitcms:ready',
          version: PROTOCOL_VERSION,
          commit: typeof __SITE_COMMIT__ === 'string' ? __SITE_COMMIT__ : undefined,
        },
        '*',
      );
    };

    const onMessage = (event: MessageEvent) => {
      if (!ALLOWED_ORIGINS.includes(event.origin)) return;

      const message = event.data as {
        type?: string;
        version?: number;
        data?: unknown;
        section?: string;
      };
      if (message?.version !== PROTOCOL_VERSION) return;

      // The editor missed our announcement — it hydrated after we mounted.
      // Answering the ping is what makes the handshake order-independent.
      if (message.type === 'gitcms:ping') {
        announce();
        return;
      }

      if (message.type === 'gitcms:content' && message.data && typeof message.data === 'object') {
        setContent(message.data as T);
        setPreviewing(true);
        return;
      }

      // The editor asks us to reveal the region it is editing. Sections opt in
      // with data-gitcms-section; anything unmapped is simply ignored.
      if (message.type === 'gitcms:scroll' && typeof message.section === 'string') {
        const target = document.querySelector(`[data-gitcms-section="${CSS.escape(message.section)}"]`);
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    window.addEventListener('message', onMessage);

    // Announce readiness so the editor can send the current draft immediately
    // rather than waiting for the next keystroke.
    announce();

    return () => window.removeEventListener('message', onMessage);
  }, []);

  return { content, previewing };
}
