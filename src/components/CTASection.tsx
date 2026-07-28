import { ArrowRight } from "lucide-react";
import { useContent } from "../content";
import Reveal from "./Reveal";

export default function CTASection() {
  const { brand, media, cta } = useContent();
  const mailto = `mailto:${brand.email}`;

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative w-full overflow-hidden rounded-2xl bg-black"
    >
      <video
        src={media.backgroundVideoUrl}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center md:py-32">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-white/60 uppercase">{cta.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            id="cta-heading"
            className="mt-8 text-3xl leading-[1.1] font-normal tracking-[-0.04em] text-white sm:text-4xl md:text-6xl"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.25)" }}
          >
            {cta.headingLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-[420px] text-sm leading-relaxed text-white/80 md:text-base">
            {cta.description}
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={mailto}
            className="btn-cut group flex w-[260px] cursor-pointer items-center justify-center gap-2 bg-white py-3.5 text-black transition-colors hover:bg-white/90"
          >
            <span className="text-sm font-medium">{cta.primaryLabel}</span>
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <a
            href={mailto}
            className="btn-cut-border px-6 py-3.5 text-sm text-white hover:bg-white/10"
          >
            <span>{brand.email}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
