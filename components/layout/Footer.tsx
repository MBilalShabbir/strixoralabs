import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { OwlLogo } from "@/components/brand/OwlLogo";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

const footerLinks = {
  Company: [
    { label: "About",      href: "/about" },
    { label: "Services",   href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Projects",   href: "/projects" },
    { label: "Contact",    href: "/contact" },
  ],
  Services: [
    { label: "Full-Stack Dev",   href: "/services#development" },
    { label: "AI Solutions",     href: "/services#ai" },
    { label: "Team Augmentation",href: "/services#team" },
    { label: "Consultancy",      href: "/services#consultancy" },
    { label: "Automation",       href: "/services#automation" },
  ],
  Industries: [
    { label: "Healthtech", href: "/industries#healthtech" },
    { label: "Edtech",     href: "/industries#edtech" },
    { label: "Fintech",    href: "/industries#fintech" },
    { label: "Martech",    href: "/industries#martech" },
    { label: "Greentech",  href: "/industries#greentech" },
  ],
};

const socialLinks = [
  { label: "Twitter",  href: "https://twitter.com/strixoralabs",           Icon: Twitter  },
  { label: "LinkedIn", href: "https://linkedin.com/company/strixoralabs",  Icon: Linkedin },
  { label: "GitHub",   href: "https://github.com/strixoralabs",            Icon: Github   },
  { label: "Email",    href: "mailto:hello@strixoralabs.com",              Icon: Mail     },
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-rule/[0.055] bg-floor">
      {/* Top shimmer */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 mb-14">

          {/* ── Brand column ── */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <OwlLogo className="w-7 h-7" />
              <span className="text-[14px] font-semibold text-ink/80 group-hover:text-ink transition-colors">
                Strixora<span className="text-brand-500 ml-0.5">Labs</span>
              </span>
            </Link>
            <p className="text-[13px] text-ink/30 leading-relaxed max-w-[240px] mb-7">
              Building intelligent systems that drive growth, efficiency, and
              real-world impact.
            </p>

            {/* Newsletter */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink/22 mb-3">
              Stay updated
            </p>
            <NewsletterForm />

            {/* Socials */}
            <div className="mt-5 flex items-center gap-1.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-wash/4 border border-rule/7 text-ink/30 hover:text-ink/70 hover:bg-wash/8 hover:border-rule/12 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Nav columns ── */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="col-span-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink/22 mb-4">
                {section}
              </p>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[13px] text-ink/35 hover:text-ink/70 transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-rule/[0.05] pt-8">
          <p className="text-[12px] text-ink/20">
            © {new Date().getFullYear()} Strixora Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[12px] text-ink/20 hover:text-ink/45 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
