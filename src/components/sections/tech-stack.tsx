"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function TechStack() {
  const rowA = [...techStack, ...techStack];
  const rowB = [...techStack.slice().reverse(), ...techStack.slice().reverse()];

  return (
    <section id="tech-stack" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools I reach for daily."
          description="A focused toolkit for shipping polished product UI and dependable web apps."
          align="center"
        />
      </div>

      <div className="relative space-y-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent md:w-40" />

        <motion.div
          className="flex w-max gap-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {rowA.map((tech, i) => (
            <span
              key={`a-${tech.name}-${i}`}
              className="rounded-full border border-border bg-surface px-5 py-3 text-sm text-foreground/90"
            >
              <span className="text-muted">{tech.category}</span>
              <span className="mx-2 text-border-strong">/</span>
              {tech.name}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex w-max gap-3"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {rowB.map((tech, i) => (
            <span
              key={`b-${tech.name}-${i}`}
              className="rounded-full border border-accent/20 bg-accent-soft px-5 py-3 text-sm text-accent"
            >
              {tech.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
