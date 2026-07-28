import { Brain, Code2, Globe2, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Sparkles,
    title: "Immersive Experiences",
    description:
      "Cinematic WebGL, AR and VR experiences that pull audiences past the screen and into the story.",
    tags: ["WebGL", "AR / VR", "3D Motion"],
  },
  {
    icon: Brain,
    title: "Neural Interfaces",
    description:
      "AI-driven interfaces that learn, adapt and respond — turning products into living systems.",
    tags: ["AI / ML", "Adaptive UX", "Realtime"],
  },
  {
    icon: Globe2,
    title: "Virtual Worlds",
    description:
      "Persistent spatial environments for launches, concerts and communities across the metaverse.",
    tags: ["Spatial", "Multiplayer", "Metaverse"],
  },
  {
    icon: Code2,
    title: "Creative Engineering",
    description:
      "Generative systems, shaders and simulation pipelines engineered for production scale.",
    tags: ["Generative", "Shaders", "Pipelines"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full rounded-2xl border border-white/10 bg-black px-6 py-16 md:px-10 md:py-24"
    >
      <Reveal>
        <p className="text-xs tracking-[0.4em] text-white/50 uppercase">
          02 — Services
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          id="services-heading"
          className="mt-8 text-3xl leading-[1.15] font-normal tracking-[-0.03em] text-white md:text-5xl"
        >
          What we forge
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={0.15 + i * 0.1}>
            <article className="card-cut group flex h-full min-h-[260px] flex-col justify-between bg-white/[0.04] p-8 transition-colors hover:bg-white/[0.08]">
              <div className="flex items-start justify-between gap-4">
                <div className="btn-cut-sm flex h-11 w-11 items-center justify-center bg-white text-black">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <ul className="flex flex-wrap justify-end gap-1.5">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/20 px-2.5 py-1 text-[11px] whitespace-nowrap text-white/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <h3 className="text-xl font-medium text-white md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
