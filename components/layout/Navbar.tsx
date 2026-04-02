"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { OwlLogo } from "@/components/brand/OwlLogo";

const navLinks = [
  { label: "About",      href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects",   href: "/projects" },
];

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "glass shadow-[0_1px_0_rgba(255,255,255,0.05)]" : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Strixora Labs"
          >
            <OwlLogo className="w-7 h-7 transition-all duration-300 group-hover:scale-105" />
            <span className="text-[15px] font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors">
              Strixora<span className="text-brand-400 ml-0.5">Labs</span>
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href} className="relative">
                  <Link
                    href={href}
                    className={cn(
                      "relative px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200",
                      active
                        ? "text-white"
                        : "text-white/45 hover:text-white/80"
                    )}
                  >
                    {/* Active background pill */}
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-white/8 shadow-inset-t"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Right actions ── */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg",
                "text-[13px] font-semibold text-white",
                "bg-brand-600 hover:bg-brand-500",
                "transition-all duration-200",
                "shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_1px_2px_rgba(0,0,0,.4)]",
                "hover:shadow-[inset_0_1px_0_rgba(255,255,255,.15),0_0_0_1px_rgba(99,102,241,.4),0_4px_12px_rgba(99,102,241,.25)]"
              )}
            >
              Get in touch
            </Link>
          </div>

          {/* ── Mobile ── */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "w-8 h-8 flex items-center justify-center rounded-lg",
                "text-white/50 hover:text-white",
                "border border-white/8 hover:border-white/15 bg-white/4 hover:bg-white/8",
                "transition-all duration-200"
              )}
              aria-label="Toggle navigation"
            >
              {mobileOpen
                ? <X className="w-4 h-4" />
                : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden"
          >
            <div className="glass border-b border-white/5 px-4 py-3 space-y-0.5">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    pathname === href
                      ? "text-white bg-white/8"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  )}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
