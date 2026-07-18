"use client";

import { motion } from "framer-motion";
import { skillCategories, techStack } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="An interactive stack, not a progress bar."
          description="Frontend depth with backend literacy — organized by how I actually ship."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full border border-border/80" />
            <div className="absolute inset-8 rounded-full border border-dashed border-accent/25 animate-orbit" />
            <div className="absolute inset-16 rounded-full border border-border animate-orbit-reverse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full border border-border bg-surface px-6 py-4 text-center backdrop-blur">
                <p className="font-display text-xl font-semibold">Core</p>
                <p className="text-xs text-muted">React · Next.js</p>
              </div>
            </div>
            {techStack.slice(0, 8).map((tech, index) => {
              const angle = (index / 8) * Math.PI * 2 - Math.PI / 2;
              const radius = 42;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              return (
                <motion.span
                  key={tech.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs text-foreground shadow-[0_0_30px_-12px_rgba(94,234,212,0.6)] backdrop-blur"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {tech.name}
                </motion.span>
              );
            })}
          </div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={staggerItem}
                className="rounded-3xl border border-border bg-surface/50 p-5 md:p-6"
              >
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {category.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2, scale: 1.03 }}
                      className="cursor-default rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-foreground/85 transition hover:border-accent/40 hover:text-accent"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
