"use client";

import { cn } from "@/lib/utils";

type Variant = "default" | "contained" | "mono";

interface OwlLogoProps {
  className?: string;
  /** default = gradient on transparent (dark surfaces)
   *  contained = indigo rounded-square container
   *  mono = currentColor silhouette (for any background)
   */
  variant?: Variant;
}

export function OwlLogo({ className, variant = "default" }: OwlLogoProps) {
  if (variant === "contained") return <ContainedMark className={className} />;
  if (variant === "mono")      return <MonoMark className={className} />;
  return <DefaultMark className={className} />;
}

// ─── Default — gradient owl, transparent bg ──────────────────────────────────

function DefaultMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("flex-shrink-0", className)}
    >
      {/* Body */}
      <path
        d="M20 8 L29 14 L29 28 Q29 34 20 34 Q11 34 11 28 L11 14 Z"
        fill="url(#owl-body)"
      />
      {/* Ear tufts */}
      <path d="M11 15 L9.5 8 L15 13.5 Z"  fill="url(#owl-tuft)" />
      <path d="M29 15 L30.5 8 L25 13.5 Z" fill="url(#owl-tuft)" />
      {/* Left eye */}
      <circle cx="15.5" cy="19"   r="4.4" fill="#0D0D1E" />
      <circle cx="15.5" cy="19"   r="2.6" fill="white" opacity="0.96" />
      <circle cx="16.2" cy="18.4" r="1.0" fill="#0D0D1E" />
      <circle cx="15.0" cy="17.8" r="0.4" fill="rgba(165,180,252,0.65)" />
      {/* Right eye */}
      <circle cx="24.5" cy="19"   r="4.4" fill="#0D0D1E" />
      <circle cx="24.5" cy="19"   r="2.6" fill="white" opacity="0.96" />
      <circle cx="25.2" cy="18.4" r="1.0" fill="#0D0D1E" />
      <circle cx="24.0" cy="17.8" r="0.4" fill="rgba(165,180,252,0.65)" />
      {/* Beak */}
      <path d="M20 23 L17.5 26.5 L22.5 26.5 Z" fill="url(#owl-beak)" />

      <defs>
        <linearGradient id="owl-body" x1="11" y1="8" x2="30" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#818CF8" />
          <stop offset="50%"  stopColor="#6366F1" />
          <stop offset="100%" stopColor="#3730A3" />
        </linearGradient>
        <linearGradient id="owl-tuft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#C7D2FE" />
          <stop offset="100%" stopColor="#A5B4FC" />
        </linearGradient>
        <linearGradient id="owl-beak" x1="17.5" y1="23" x2="22.5" y2="26.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── Contained — owl inside an indigo rounded-square ─────────────────────────

function ContainedMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("flex-shrink-0", className)}
    >
      {/* Container */}
      <rect width="48" height="48" rx="11" fill="url(#c-bg)" />
      <rect width="48" height="48" rx="11" fill="url(#c-sheen)" />
      {/* Body */}
      <path
        d="M24 10 L33 16 L33 30 Q33 37 24 37 Q15 37 15 30 L15 16 Z"
        fill="url(#c-body)"
      />
      {/* Ear tufts */}
      <path d="M15 17 L13.5 10 L19 15 Z"  fill="url(#c-tuft)" />
      <path d="M33 17 L34.5 10 L29 15 Z"  fill="url(#c-tuft)" />
      {/* Left eye */}
      <circle cx="19.5" cy="22"   r="4.8" fill="#0A0A1A" />
      <circle cx="19.5" cy="22"   r="2.8" fill="white" opacity="0.97" />
      <circle cx="20.3" cy="21.3" r="1.1" fill="#0A0A1A" />
      <circle cx="18.8" cy="20.7" r="0.45" fill="rgba(199,210,254,0.75)" />
      {/* Right eye */}
      <circle cx="28.5" cy="22"   r="4.8" fill="#0A0A1A" />
      <circle cx="28.5" cy="22"   r="2.8" fill="white" opacity="0.97" />
      <circle cx="29.3" cy="21.3" r="1.1" fill="#0A0A1A" />
      <circle cx="27.8" cy="20.7" r="0.45" fill="rgba(199,210,254,0.75)" />
      {/* Beak */}
      <path d="M24 27 L21.5 30.5 L26.5 30.5 Z" fill="url(#c-beak)" />

      <defs>
        <linearGradient id="c-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#6366F1" />
          <stop offset="100%" stopColor="#4338CA" />
        </linearGradient>
        <linearGradient id="c-sheen" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.11)" />
          <stop offset="45%"  stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="c-body" x1="15" y1="10" x2="33" y2="37" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="rgba(55,48,163,0.92)" />
          <stop offset="100%" stopColor="rgba(30,27,75,0.97)" />
        </linearGradient>
        <linearGradient id="c-tuft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#E0E7FF" />
          <stop offset="100%" stopColor="#A5B4FC" />
        </linearGradient>
        <linearGradient id="c-beak" x1="21.5" y1="27" x2="26.5" y2="30.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── Mono — currentColor silhouette ──────────────────────────────────────────

function MonoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("flex-shrink-0", className)}
    >
      <path d="M20 8 L29 14 L29 28 Q29 34 20 34 Q11 34 11 28 L11 14 Z" fill="currentColor" opacity="0.95" />
      <path d="M11 15 L9.5 8 L15 13.5 Z"  fill="currentColor" opacity="0.55" />
      <path d="M29 15 L30.5 8 L25 13.5 Z" fill="currentColor" opacity="0.55" />
      <circle cx="15.5" cy="19" r="4.4" fill="rgba(0,0,0,0.45)" />
      <circle cx="15.5" cy="19" r="2.6" fill="currentColor" />
      <circle cx="16.2" cy="18.4" r="1.0" fill="rgba(0,0,0,0.5)" />
      <circle cx="24.5" cy="19" r="4.4" fill="rgba(0,0,0,0.45)" />
      <circle cx="24.5" cy="19" r="2.6" fill="currentColor" />
      <circle cx="25.2" cy="18.4" r="1.0" fill="rgba(0,0,0,0.5)" />
      <path d="M20 23 L17.5 26.5 L22.5 26.5 Z" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
