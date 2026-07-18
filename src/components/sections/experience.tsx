"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Roles that sharpened the craft."
          description="Professional experience across product teams, Upwork freelancing, and independent builds — frontend first, full-stack when it matters."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-4"
        >
          {experiences.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              variants={staggerItem}
              whileHover={{ y: -2 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-surface/60 p-6 transition hover:border-accent/25 md:p-8"
            >
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-accent">
                    {job.company} · {job.location}
                  </p>
                </div>
                <p className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted md:self-start">
                  {job.period}
                </p>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                {job.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
