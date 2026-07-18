"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="A frontend craftsperson with full-stack range."
          description={aboutContent.intro}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-5 text-base leading-relaxed text-muted md:text-lg"
          >
            {aboutContent.paragraphs.map((p) => (
              <motion.p key={p.slice(0, 24)} variants={staggerItem}>
                {p}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-6 md:p-8"
          >
            <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-accent/15 blur-3xl" />
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Career journey
            </p>
            <ol className="relative mt-8 space-y-6 border-l border-border pl-6">
              {aboutContent.journey.map((item, index) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-[1.95rem] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border border-accent/50 bg-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <p className="text-xs text-accent">{item.year}</p>
                  <p className="mt-1 font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                  {index < aboutContent.journey.length - 1 ? null : null}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {aboutContent.values.map((value) => (
            <motion.div
              key={value.title}
              variants={staggerItem}
              className="rounded-3xl border border-border bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition hover:border-accent/30"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
