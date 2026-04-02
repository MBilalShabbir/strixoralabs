"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: connect to your email provider
    setSubmitted(true);
    setEmail("");
  };

  if (submitted) {
    return (
      <p className="text-xs text-brand-500 py-2">
        You're subscribed. Thanks!
      </p>
    );
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        required
        className="flex-1 rounded-lg bg-wash/5 border border-rule/8 px-3 py-2 text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500/40 transition-all"
      />
      <button
        type="submit"
        className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-500 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
