import { ArrowRight } from 'lucide-react';
import { content } from './content';
import { SocialIcon, VortxLogo } from './icons';

const { brand, media, nav, aside, hero, footer } = content;

export default function App() {
  return (
    <div className="h-screen w-full bg-black p-3 md:p-4 font-inter">
      {/* Liquid-glass container: rounded, clipped, video sitting behind the content */}
      <div className="w-full h-full rounded-2xl flex flex-col overflow-hidden relative bg-black">
        <video
          src={media.backgroundVideoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover anim-fade"
          style={{ animationDelay: '0.2s' }}
        />

        <nav className="relative z-10 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          <div className="anim-stagger" style={{ animationDelay: '0.1s' }}>
            <VortxLogo className="w-14 h-14 md:w-16 md:h-16" />
            <span className="block text-white text-[10px] md:text-xs tracking-[0.4em] mt-1 font-light">
              {brand.wordmark}
            </span>
          </div>

          <div
            className="anim-stagger flex items-center gap-3"
            style={{ animationDelay: '0.2s' }}
          >
            <a
              href={nav.secondaryHref}
              className="hidden md:block px-5 py-2.5 text-white text-sm hover:bg-white/10 btn-cut-border"
            >
              <span>{nav.secondaryLabel}</span>
            </a>
            <a
              href={nav.primaryHref}
              className="hidden md:block px-5 py-2.5 bg-white text-black text-sm hover:bg-white/90 btn-cut"
            >
              {nav.primaryLabel}
            </a>
          </div>
        </nav>

        <div className="relative z-10 flex-1 flex flex-col justify-between px-6 md:px-10 pb-8 md:pb-10">
          <div className="flex-1 flex items-center relative">
            <div
              className="anim-stagger hidden lg:flex flex-col gap-6 absolute left-0 top-[18%]"
              style={{ animationDelay: '0.4s' }}
            >
              <p className="text-white/80 text-base leading-relaxed max-w-[220px] whitespace-pre-line">
                {aside.text}
              </p>

              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full border border-white/40" />
                  <span className="w-4 h-4 rounded-full border border-white/40" />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-white/70 text-xs whitespace-pre-line">{aside.caption}</span>
                  <span className="text-white/50 text-xs">{aside.index}</span>
                </div>
              </div>
            </div>

            <div className="anim-stagger w-full text-center" style={{ animationDelay: '0.5s' }}>
              <h1
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] tracking-[-0.04em]"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}
              >
                {hero.lines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-8">
            <div
              className="anim-stagger flex items-center justify-center md:justify-end"
              style={{ animationDelay: '0.7s' }}
            >
              <p className="text-white text-sm leading-relaxed max-w-[260px] text-center md:text-left md:ml-auto">
                {footer.description}
              </p>
            </div>

            <div
              className="anim-stagger flex flex-col items-center gap-8 md:gap-24"
              style={{ animationDelay: '0.85s' }}
            >
              <span className="text-white text-2xl md:text-3xl font-medium">{footer.label}</span>
              <a
                href={footer.ctaHref}
                className="w-full max-w-[280px] py-3.5 bg-white flex items-center justify-center gap-2 text-black hover:bg-white/90 transition-colors group btn-cut"
              >
                <span className="text-sm font-medium">{footer.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div
              className="anim-stagger flex items-center justify-center md:justify-end gap-3"
              style={{ animationDelay: '1s' }}
            >
              {footer.social.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={link.label}
                  className="w-10 h-10 bg-white flex items-center justify-center text-black hover:bg-white/90 transition-colors btn-cut-sm"
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
