"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name:    z.string().min(2, "Please enter your name"),
  email:   z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget:  z.string().optional(),
  message: z.string().min(20, "Please provide at least 20 characters"),
  _honey:  z.string().optional(), // honeypot — must stay empty
});

type FormData = z.infer<typeof schema>;

const services = [
  "Full-Stack Development",
  "AI Solutions",
  "Team Augmentation",
  "Technology Consultancy",
  "Automation Solutions",
  "Not sure yet",
];

const budgets = ["< £10k", "£10k – £50k", "£50k – £150k", "£150k+", "Ongoing retainer"];

const inputBase = cn(
  "w-full rounded-xl px-4 py-3 text-[14px] text-ink/85 placeholder:text-ink/25",
  "bg-wash/[0.035] border border-rule/[0.08]",
  "focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/25 focus:bg-wash/[0.05]",
  "hover:border-rule/12 hover:bg-wash/[0.04]",
  "transition-all duration-200"
);

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-[12px] text-red-500/80">{message}</p>;
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-[12.5px] font-medium text-ink/40 mb-2 uppercase tracking-[0.05em]">
      {children}
      {required && <span className="text-brand-500/70 ml-1">*</span>}
    </label>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }
      setSubmitted(true);
      reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Unexpected error");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-3xl border border-brand-500/18 bg-brand-500/4 min-h-[480px]">
        <div className="w-14 h-14 rounded-full bg-brand-500/12 border border-brand-500/25 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-7 h-7 text-brand-500" />
        </div>
        <h2 className="text-xl font-bold text-ink mb-2">Message received</h2>
        <p className="text-[14px] text-ink/38 max-w-xs leading-relaxed mb-7">
          Thank you. We'll review and get back to you within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[13px] font-semibold text-ink/40 hover:text-ink/70 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-rule/[0.06] bg-panel p-8 space-y-6"
      noValidate
    >
      {/* Honeypot — hidden from humans, filled by bots */}
      <div aria-hidden="true" style={{ display: "none" }}>
        <input
          {...register("_honey")}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <h2 className="text-lg font-bold text-ink mb-1">Tell us about your project</h2>
        <p className="text-[13px] text-ink/32">We'll get back to you within 24 hours.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label required>Full name</Label>
          <input
            {...register("name")}
            placeholder="Alex Johnson"
            className={cn(inputBase, errors.name && "border-red-500/40 focus:ring-red-500/20")}
          />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <Label required>Work email</Label>
          <input
            {...register("email")}
            type="email"
            placeholder="alex@company.com"
            className={cn(inputBase, errors.email && "border-red-500/40 focus:ring-red-500/20")}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div>
        <Label>Company</Label>
        <input
          {...register("company")}
          placeholder="Acme Corp (optional)"
          className={inputBase}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label required>Service needed</Label>
          <select
            {...register("service")}
            className={cn(inputBase, "cursor-pointer", errors.service && "border-red-500/40")}
          >
            <option value="" className="bg-panel">Select a service…</option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-panel">{s}</option>
            ))}
          </select>
          <FieldError message={errors.service?.message} />
        </div>
        <div>
          <Label>Budget range</Label>
          <select
            {...register("budget")}
            className={cn(inputBase, "cursor-pointer")}
          >
            <option value="" className="bg-panel">Optional</option>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-panel">{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label required>Project details</Label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Describe your project, goals, timeline, and any technical context…"
          className={cn(inputBase, "resize-none", errors.message && "border-red-500/40 focus:ring-red-500/20")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      {serverError && (
        <p className="text-[13px] text-red-500/80 bg-red-500/6 border border-red-500/15 rounded-xl px-4 py-3">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl",
          "text-[14.5px] font-semibold text-white",
          "bg-brand-600 hover:bg-brand-500",
          "transition-all duration-200",
          "shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_1px_3px_rgba(0,0,0,.5)]",
          "hover:shadow-[inset_0_1px_0_rgba(255,255,255,.15),0_0_0_1px_rgba(99,102,241,.4),0_6px_20px_rgba(99,102,241,.28)]",
          "disabled:opacity-40 disabled:pointer-events-none"
        )}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-4 w-4 opacity-70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send message
          </>
        )}
      </button>

      <p className="text-[11.5px] text-ink/20 text-center">
        We respond within 24 hours. Your info is never shared with third parties.
      </p>
    </form>
  );
}
