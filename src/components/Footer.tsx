import { useContent } from "../content";
import { SocialIcon, VortxLogo } from "./icons";

export default function Footer() {
  const { brand, footer } = useContent();

  return (
    <footer className="w-full rounded-2xl border border-white/10 bg-black px-6 py-12 md:px-10 md:py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <a href="#home" aria-label="Back to top" className="inline-flex flex-col items-center">
            <VortxLogo className="h-12 w-12" />
            <span className="mt-1 text-[10px] font-light tracking-[0.4em] text-white">
              {brand.wordmark}
            </span>
          </a>
          <p className="mt-6 max-w-[280px] text-sm leading-relaxed text-white/60">
            {footer.description}
          </p>
        </div>

        {footer.columns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="text-xs tracking-[0.3em] text-white/50 uppercase">{column.heading}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#contact"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="text-xs tracking-[0.3em] text-white/50 uppercase">
            {footer.connectHeading}
          </h3>
          <div className="mt-4 flex items-center gap-3">
            {footer.socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                aria-label={social.label}
                className="btn-cut-sm flex h-10 w-10 items-center justify-center bg-white text-black transition-colors hover:bg-white/90"
              >
                <SocialIcon platform={social.platform} className="h-4 w-4" />
              </a>
            ))}
          </div>
          <a
            href={`mailto:${brand.email}`}
            className="mt-4 block text-sm text-white/70 transition-colors hover:text-white"
          >
            {brand.email}
          </a>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
        <p className="text-xs text-white/40">{footer.copyright}</p>
        <p className="text-xs tracking-[0.3em] text-white/40 uppercase">{footer.tagline}</p>
      </div>
    </footer>
  );
}
