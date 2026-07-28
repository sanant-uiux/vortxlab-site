import { useContent } from "../content";
import Reveal from "./Reveal";

export default function About() {
  const { about } = useContent();

  return (
    <section
      id="studio"
      aria-labelledby="studio-heading"
      className="w-full rounded-2xl border border-white/10 bg-black px-6 py-16 md:px-10 md:py-24"
    >
      <Reveal>
        <p className="text-xs tracking-[0.4em] text-white/50 uppercase">{about.eyebrow}</p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal delay={0.1}>
          <h2
            id="studio-heading"
            className="text-3xl leading-[1.15] font-normal tracking-[-0.03em] whitespace-pre-line text-white md:text-5xl"
          >
            {about.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="flex flex-col gap-6">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="max-w-[480px] text-base leading-relaxed text-white/70">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-4">
        {about.stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={0.1 + i * 0.1}
            className="bg-black px-6 py-8 text-center"
          >
            <div className="text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">
              {stat.value}
            </div>
            <div className="mt-2 text-xs tracking-wide text-white/50 uppercase">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
