import { FacebookIcon, LinkedInIcon, VortxLogo, XIcon } from "./icons";

const FOOTER_COLUMNS = [
  {
    heading: "Studio",
    links: ["About", "Careers", "Press", "Manifesto"],
  },
  {
    heading: "Services",
    links: [
      "Immersive Experiences",
      "Neural Interfaces",
      "Virtual Worlds",
      "Creative Engineering",
    ],
  },
];

const SOCIALS = [
  { label: "X (Twitter)", icon: XIcon },
  { label: "LinkedIn", icon: LinkedInIcon },
  { label: "Facebook", icon: FacebookIcon },
];

export default function Footer() {
  return (
    <footer className="w-full rounded-2xl border border-white/10 bg-black px-6 py-12 md:px-10 md:py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <a href="#home" aria-label="Back to top" className="inline-flex flex-col items-center">
            <VortxLogo className="h-12 w-12" />
            <span className="mt-1 text-[10px] font-light tracking-[0.4em] text-white">
              V O R T X
            </span>
          </a>
          <p className="mt-6 max-w-[280px] text-sm leading-relaxed text-white/60">
            VortxLab Creations — a creative-tech studio forging tomorrow&apos;s
            virtual horizon.
          </p>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="text-xs tracking-[0.3em] text-white/50 uppercase">
              {column.heading}
            </h3>
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
            Connect
          </h3>
          <div className="mt-4 flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="btn-cut-sm flex h-10 w-10 items-center justify-center bg-white text-black transition-colors hover:bg-white/90"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <a
            href="mailto:hello@vortxlab.com"
            className="mt-4 block text-sm text-white/70 transition-colors hover:text-white"
          >
            hello@vortxlab.com
          </a>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
        <p className="text-xs text-white/40">
          © 2026 VortxLab Creations. All rights reserved.
        </p>
        <p className="text-xs tracking-[0.3em] text-white/40 uppercase">
          Forging Tomorrow — Virtual Horizon
        </p>
      </div>
    </footer>
  );
}
