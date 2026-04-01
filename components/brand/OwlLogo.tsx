import { cn } from "@/lib/utils";

/**
 * Abstract owl-inspired SVG logo — a geometric mark that suggests
 * sharp vision and intelligence without being literal or cartoonish.
 */
export function OwlLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("flex-shrink-0", className)}
      aria-hidden="true"
    >
      {/* Outer ring — subtle halo */}
      <circle cx="20" cy="20" r="19" stroke="url(#ring)" strokeWidth="0.8" opacity="0.4" />

      {/* Body — stylised owl silhouette as overlapping geometric shapes */}
      {/* Main body */}
      <path
        d="M20 6 L30 14 L30 28 Q30 34 20 34 Q10 34 10 28 L10 14 Z"
        fill="url(#body)"
        opacity="0.9"
      />

      {/* Left ear tuft */}
      <path d="M13 14 L11 8 L16 12 Z" fill="url(#accent)" />
      {/* Right ear tuft */}
      <path d="M27 14 L29 8 L24 12 Z" fill="url(#accent)" />

      {/* Left eye — ring + pupil */}
      <circle cx="15.5" cy="19" r="4" fill="url(#eye-bg)" />
      <circle cx="15.5" cy="19" r="4" stroke="url(#accent)" strokeWidth="0.8" />
      <circle cx="15.5" cy="19" r="1.8" fill="white" opacity="0.95" />
      <circle cx="16.2" cy="18.4" r="0.5" fill="#0a0a0f" />

      {/* Right eye */}
      <circle cx="24.5" cy="19" r="4" fill="url(#eye-bg)" />
      <circle cx="24.5" cy="19" r="4" stroke="url(#accent)" strokeWidth="0.8" />
      <circle cx="24.5" cy="19" r="1.8" fill="white" opacity="0.95" />
      <circle cx="25.2" cy="18.4" r="0.5" fill="#0a0a0f" />

      {/* Beak */}
      <path d="M20 22 L17.5 25 L22.5 25 Z" fill="url(#beak)" />

      {/* Wing detail lines */}
      <path d="M11 20 Q8 23 10 28" stroke="url(#wing)" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M29 20 Q32 23 30 28" stroke="url(#wing)" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      <defs>
        <linearGradient id="body" x1="10" y1="6" x2="30" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="eye-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0f0f1a" />
        </linearGradient>
        <linearGradient id="beak" x1="17.5" y1="22" x2="22.5" y2="25" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="wing" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        <linearGradient id="ring" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}
