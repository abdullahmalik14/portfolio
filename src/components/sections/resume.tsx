"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border px-6 py-12 md:px-12 md:py-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(94,234,212,0.16),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(56,189,248,0.12),_transparent_45%)]" />
        <div className="absolute inset-0 grid-fade opacity-40" />

        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted backdrop-blur">
              <FileText size={12} className="text-accent" />
              Resume
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Prefer a one-pager?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              Download my CV for a concise overview of experience, stack, and
              selected work — ready for recruiters and hiring managers.
            </p>
          </div>

          <MagneticButton
            as="a"
            href={siteConfig.resume}
            download
            className="bg-foreground text-background shadow-[0_10px_40px_-12px_rgba(94,234,212,0.5)]"
          >
            <Download size={16} />
            Download CV
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
