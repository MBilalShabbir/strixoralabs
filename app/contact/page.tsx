import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Strixora Labs. Describe your project and we'll respond within 24 hours with a direct, honest view on fit. If we're not right for you, we'll say so.",
  alternates: {
    canonical: "https://strixoralabs.com/contact",
  },
  openGraph: {
    url: "https://strixoralabs.com/contact",
    title: "Contact Strixora Labs — Tell us what you're building.",
    description:
      "We respond within 24 hours with a direct, honest view on fit — not a sales pitch. NDA available on request. Fixed-price engagements available.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
