"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/social";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work — built for real use."
          description="Premium case-style showcases of platforms and systems I've shipped — live demos, stack, and the problems they solve."
        />

        <div className="space-y-8">
          {featured.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-border bg-[#070b12]"
            >
              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[420px]"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white backdrop-blur">
                    Live preview
                    <ArrowUpRight size={12} />
                  </div>
                </a>

                <div className="flex flex-col justify-center p-6 md:p-10">
                  <p className="text-xs uppercase tracking-[0.22em] text-accent">
                    Featured
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-accent-2">{project.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground/85"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 grid grid-cols-3 gap-3 border-y border-border py-4">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-[11px] uppercase tracking-wider text-muted">
                          {stat.label}
                        </p>
                        <p className="mt-1 text-sm font-medium">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-white"
                    >
                      Open live
                      <ArrowUpRight size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition hover:border-accent/40"
                    >
                      <GithubIcon size={14} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {rest.length > 0 ? (
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 grid gap-4 md:grid-cols-1"
          >
            {rest.map((project) => (
              <motion.article
                key={project.slug}
                variants={staggerItem}
                className="group grid overflow-hidden rounded-[1.75rem] border border-border bg-surface/50 md:grid-cols-[280px_1fr]"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative aspect-[16/10] md:aspect-auto md:min-h-full"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </a>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{project.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      Live demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted hover:text-foreground"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
