"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32"
    >

    
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Highlights"
          title="Signals of experience."
          description="Not vanity metrics — concrete strengths built through real product work."
          align="center"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="rounded-[1.5rem] border border-border bg-surface/40 p-6 text-left transition hover:border-accent/30"
            >
              <div className="mb-4 h-px w-12 bg-gradient-to-r from-accent to-transparent" />
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
