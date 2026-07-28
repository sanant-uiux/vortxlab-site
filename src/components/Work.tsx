import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    index: "01",
    title: "Nebula OS",
    category: "Spatial Interface",
    description: "An operating system concept for headset-first computing.",
    art: "radial-gradient(120% 140% at 20% 10%, #6d28d9 0%, #1e1b4b 45%, #000 100%)",
  },
  {
    index: "02",
    title: "Aurora Fields",
    category: "Generative Installation",
    description: "Realtime particle skies for a 4,000 m² exhibition hall.",
    art: "radial-gradient(130% 130% at 80% 20%, #0ea5e9 0%, #082f49 50%, #000 100%)",
  },
  {
    index: "03",
    title: "Hyperdrive",
    category: "Launch Experience",
    description: "A WebGL product reveal that hit 2.1M sessions in week one.",
    art: "radial-gradient(140% 120% at 50% 90%, #f59e0b 0%, #7c2d12 45%, #000 100%)",
  },
  {
    index: "04",
    title: "Echoverse",
    category: "Virtual Venue",
    description: "A multiplayer concert platform for 100k concurrent fans.",
    art: "radial-gradient(120% 140% at 30% 80%, #db2777 0%, #4c0519 50%, #000 100%)",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full rounded-2xl border border-white/10 bg-black px-6 py-16 md:px-10 md:py-24"
    >
      <Reveal>
        <p className="text-xs tracking-[0.4em] text-white/50 uppercase">
          03 — Selected Work
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          id="work-heading"
          className="mt-8 text-3xl leading-[1.15] font-normal tracking-[-0.03em] text-white md:text-5xl"
        >
          Signals from the lab
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={0.15 + i * 0.1}>
            <a
              href="#contact"
              className="card-cut group relative block min-h-[320px] overflow-hidden bg-black"
              aria-label={`${project.title} — ${project.category}`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: project.art }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="relative flex h-full min-h-[320px] flex-col justify-between p-8">
                <div className="flex items-start justify-between">
                  <span className="text-xs text-white/60">{project.index}</span>
                  <span className="rounded-full border border-white/25 px-3 py-1 text-[11px] text-white/80">
                    {project.category}
                  </span>
                </div>
                <div>
                  <h3 className="flex items-center gap-3 text-2xl font-medium text-white md:text-3xl">
                    {project.title}
                    <ArrowRight
                      className="h-5 w-5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-white/70">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
