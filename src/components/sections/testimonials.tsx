"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What collaborators say."
          description="Placeholder quotes for now — replace with real feedback as it comes in."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.blockquote
              key={item.name}
              variants={staggerItem}
              className="flex h-full flex-col justify-between rounded-[1.75rem] border border-border bg-surface/40 p-6"
            >
              {item.placeholder ? (
                <span className="mb-4 w-fit rounded-full border border-accent/25 bg-accent-soft px-2.5 py-1 text-[10px] uppercase tracking-wider text-accent">
                  Placeholder
                </span>
              ) : null}
              <p className="text-sm leading-relaxed text-foreground/90 md:text-[15px]">
                “{item.quote}”
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
