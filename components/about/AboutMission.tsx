"use client";

import { motion } from "framer-motion";

export function AboutMission() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/6 bg-[#0f0f1a] p-8 h-80">
              {/* Abstract visual element */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/15 via-transparent to-violet-600/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-brand-500/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-brand-500/15" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-brand-600/15 border border-brand-500/25" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-black text-brand-400 mb-1">5+</div>
                  <div className="text-sm text-gray-500">Years building</div>
                  <div className="text-5xl font-black text-brand-400 mt-4 mb-1">3</div>
                  <div className="text-sm text-gray-500">Continents served</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
              An engineering firm. Not an agency.
            </h2>
            <p className="text-white/45 leading-relaxed mb-5">
              The difference matters. Agencies respond to briefs. We question
              them, improve them, and own the outcomes. Our team has shipped
              software at startups, scale-ups, and public companies — and we've
              seen exactly what separates products that compound from ones that
              collapse under their own weight.
            </p>
            <p className="text-white/45 leading-relaxed mb-5">
              We are selective by design. We work with a small number of
              clients at any time so that every engagement gets senior
              attention — not a junior assigned after the pitch. If we're not
              the right fit, we'll tell you in the first call.
            </p>
            <p className="text-white/45 leading-relaxed">
              The name Strixora comes from <em className="text-white/70">Strix</em> — the
              genus of owls known for sharp vision, silent precision, and
              exceptional pattern recognition under pressure. These are the
              qualities we bring to every project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
