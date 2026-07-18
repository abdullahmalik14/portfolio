"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="How I can help your product."
          description="Clear offerings for teams and founders who need frontend quality with full-stack follow-through."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 md:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[1.75rem] border border-border bg-gradient-to-br from-white/[0.05] to-transparent p-6 md:p-8"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/10 blur-2xl" />
              <p className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
