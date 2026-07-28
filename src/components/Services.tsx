import { useContent } from "../content";
import { ServiceIcon } from "./icons";
import Reveal from "./Reveal";

export default function Services() {
  const { services } = useContent();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full rounded-2xl border border-white/10 bg-black px-6 py-16 md:px-10 md:py-24"
    >
      <Reveal>
        <p className="text-xs tracking-[0.4em] text-white/50 uppercase">{services.eyebrow}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          id="services-heading"
          className="mt-8 text-3xl leading-[1.15] font-normal tracking-[-0.03em] whitespace-pre-line text-white md:text-5xl"
        >
          {services.heading}
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.items.map((service, i) => (
          <Reveal key={service.title} delay={0.15 + i * 0.1}>
            <article className="card-cut group flex h-full min-h-[260px] flex-col justify-between bg-white/[0.04] p-8 transition-colors hover:bg-white/[0.08]">
              <div className="flex items-start justify-between gap-4">
                <div className="btn-cut-sm flex h-11 w-11 items-center justify-center bg-white text-black">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
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
                <h3 className="text-xl font-medium text-white md:text-2xl">{service.title}</h3>
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
