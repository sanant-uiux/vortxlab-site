import { useContent } from "../content";

export default function Marquee() {
  const { marquee } = useContent();
  const row = [...marquee.keywords, ...marquee.keywords];

  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black py-6"
    >
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {row.map((word, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center text-2xl font-light tracking-[0.2em] text-white/40 uppercase md:text-3xl"
              >
                <span className="px-6">{word}</span>
                <span className="text-white/25">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
