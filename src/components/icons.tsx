import type { ComponentType, SVGProps } from "react";
import { Brain, Code2, Globe2, Sparkles } from "lucide-react";

/* VortxLab logo — four quarter-circles forming a vortex/plus pattern */
export function VortxLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 256 256" fill="white" aria-hidden="true" {...props}>
      <path d="M132 8 A116 116 0 0 1 248 124 L132 124 Z" />
      <path d="M248 132 A116 116 0 0 1 132 248 L132 132 Z" />
      <path d="M124 248 A116 116 0 0 1 8 132 L124 132 Z" />
      <path d="M8 124 A116 116 0 0 1 124 8 L124 124 Z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   Icons are chosen by name in content/home.json, because JSON cannot hold a
   component. An unknown name renders nothing rather than crashing the page —
   a typo in the CMS must never take the site down.
   --------------------------------------------------------------------------- */

const SOCIAL_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  x: XIcon,
  twitter: XIcon,
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
};

export function SocialIcon({ platform, className }: { platform: string; className?: string }) {
  const Icon = SOCIAL_ICONS[platform?.toLowerCase()];
  return Icon ? <Icon className={className} /> : null;
}

const SERVICE_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  sparkles: Sparkles,
  brain: Brain,
  globe: Globe2,
  code: Code2,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = SERVICE_ICONS[name?.toLowerCase()] ?? Sparkles;
  return <Icon className={className} />;
}
