"use client";

import { Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@strixoralabs.com",
    href: "mailto:hello@strixoralabs.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "London, UK · Remote-first globally",
    href: null,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours (business days)",
    href: null,
  },
];

const faqs = [
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — if the problem is technically interesting and the scope is honest. We've worked with seed-stage founders and Series C product teams. What matters is whether we're the right fit, not the size of your round.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Yes, always. We'll sign a mutual NDA before any substantive technical conversation. If you have a preferred template, use it. If not, we have one ready.",
  },
  {
    q: "Do you offer fixed-price engagements?",
    a: "Yes, for well-defined scope. We also work time-and-materials for exploratory phases and on monthly retainer for ongoing engineering support. We'll tell you which model fits your situation — and why.",
  },
  {
    q: "How quickly can you start?",
    a: "Most engagements begin within 1–2 weeks of agreeing terms. If you have a hard deadline, tell us upfront — we'll be straight with you about whether we can meet it.",
  },
  {
    q: "What if we're not the right fit?",
    a: "We'll say so directly, and point you toward someone who is. We'd rather lose a conversation than take a project we can't do justice.",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact details */}
      <div className="rounded-3xl border border-rule/6 bg-panel-alt p-7">
        <h3 className="text-sm font-semibold text-ink mb-5">Contact details</h3>
        <div className="space-y-4">
          {contactItems.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <item.icon className="w-4 h-4 text-brand-500" />
              </div>
              <div>
                <p className="text-xs text-ink/35 font-medium">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-ink/70 hover:text-ink transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-ink/70">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-rule/6 space-y-3">
          <a
            href="https://calendly.com/strixoralabs"
            target="_blank"
            rel="noopener noreferrer"
            id="schedule"
            className={cn(
              "flex items-center gap-2.5 w-full px-4 py-3 rounded-xl",
              "border border-brand-500/20 bg-brand-500/5 hover:bg-brand-500/10",
              "text-sm text-brand-600 dark:text-brand-400 font-medium transition-all duration-200"
            )}
          >
            <Calendar className="w-4 h-4" />
            Schedule a 30-min discovery call
          </a>
          <a
            href="https://wa.me/strixoralabs"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-2.5 w-full px-4 py-3 rounded-xl",
              "border border-rule/8 bg-wash/3 hover:bg-wash/6",
              "text-sm text-ink/45 hover:text-ink font-medium transition-all duration-200"
            )}
          >
            <MessageSquare className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="rounded-3xl border border-rule/6 bg-panel-alt p-7">
        <h3 className="text-sm font-semibold text-ink mb-5">Common questions</h3>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-rule/5 pb-4 last:border-0 last:pb-0">
              <p className="text-sm font-medium text-ink/70 mb-1.5">{faq.q}</p>
              <p className="text-xs text-ink/40 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
