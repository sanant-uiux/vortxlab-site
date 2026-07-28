import { ArrowRight } from "lucide-react";
import { useContent } from "../content";
import { SocialIcon, VortxLogo } from "./icons";

export default function Hero() {
  const { brand, media, hero } = useContent();

  return (
    <section
      id="home"
      data-gitcms-section="hero"
      aria-label="Intro"
      className="relative flex h-[calc(100dvh-1.5rem)] w-full flex-col overflow-hidden rounded-2xl bg-black md:h-[calc(100dvh-2rem)]"
    >
      <video
        src={media.backgroundVideoUrl}
        className="anim-fade absolute inset-0 h-full w-full object-cover"
        style={{ animationDelay: "0.2s" }}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      />

      <nav
        aria-label="Main navigation"
        className="relative z-10 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
      >
        <div className="anim-stagger" style={{ animationDelay: "0.1s" }}>
          <a href="#home" aria-label={`${brand.name} home`} className="flex flex-col items-center">
            <VortxLogo className="h-14 w-14 md:h-16 md:w-16" />
            <span className="mt-1 text-[10px] font-light tracking-[0.4em] text-white md:text-xs">
              {brand.wordmark}
            </span>
          </a>
        </div>

        <div
          className="anim-stagger absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
          style={{ animationDelay: "0.3s" }}
        >
          {hero.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="anim-stagger flex items-center gap-3" style={{ animationDelay: "0.2s" }}>
          <button
            type="button"
            className="btn-cut-border hidden cursor-pointer px-5 py-2.5 text-sm text-white hover:bg-white/10 md:block"
          >
            <span>{hero.secondaryCtaLabel}</span>
          </button>
          <a
            href={hero.primaryCtaHref}
            className="btn-cut hidden cursor-pointer bg-white px-5 py-2.5 text-sm text-black hover:bg-white/90 md:block"
          >
            {hero.primaryCtaLabel}
          </a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-1 flex-col justify-between px-6 pb-8 md:px-10 md:pb-10">
        <div className="relative flex flex-1 items-center">
          <div
            className="anim-stagger absolute top-[18%] left-0 hidden flex-col gap-6 lg:flex"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="max-w-[220px] text-base leading-relaxed whitespace-pre-line text-white/80">
              {hero.asideText}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-1" aria-hidden="true">
                <div className="h-4 w-4 rounded-full border border-white/40" />
                <div className="h-4 w-4 rounded-full border border-white/40" />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs whitespace-pre-line text-white/70">
                  {hero.asideCaption}
                </span>
                <span className="text-xs text-white/50">{hero.asideIndex}</span>
              </div>
            </div>
          </div>

          <div className="anim-stagger w-full text-center" style={{ animationDelay: "0.5s" }}>
            <h1
              className="text-3xl leading-[1.1] font-normal tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.25)" }}
            >
              {hero.headingLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div
            className="anim-stagger flex items-center justify-center md:justify-end"
            style={{ animationDelay: "0.7s" }}
          >
            <p className="max-w-[260px] text-center text-sm leading-relaxed text-white md:ml-auto md:text-left">
              {hero.description}
            </p>
          </div>

          <div
            className="anim-stagger flex flex-col items-center gap-8 md:gap-24"
            style={{ animationDelay: "0.85s" }}
          >
            <span className="text-2xl font-medium text-white md:text-3xl">{hero.label}</span>
            <a
              href={hero.ctaHref}
              className="btn-cut group flex w-full max-w-[280px] cursor-pointer items-center justify-center gap-2 bg-white py-3.5 text-black transition-colors hover:bg-white/90"
            >
              <span className="text-sm font-medium">{hero.ctaLabel}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div
            className="anim-stagger flex items-center justify-center gap-3 md:justify-end"
            style={{ animationDelay: "1s" }}
          >
            {hero.socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                aria-label={social.label}
                className="btn-cut-sm flex h-10 w-10 cursor-pointer items-center justify-center bg-white text-black transition-colors hover:bg-white/90"
              >
                <SocialIcon platform={social.platform} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
