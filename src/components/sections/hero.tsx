"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social";
import { heroContent, siteConfig } from "@/lib/data";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pb-20 pt-32 md:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          variants={staggerContainer(0.1, 0.15)}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={staggerItem}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            {siteConfig.availability}
            <span className="text-border-strong">·</span>
            {siteConfig.location}
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-accent"
          >
            {heroContent.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block text-foreground">
              {siteConfig.name}
            </span>
            <span className="mt-2 block gradient-text">
              {heroContent.headline[0]}
            </span>
            <span className="block text-foreground/90">
              {heroContent.headline[1]}
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              as="a"
              href="#projects"
              className="bg-foreground text-background shadow-[0_10px_40px_-12px_rgba(94,234,212,0.45)]"
            >
              View projects
            </MagneticButton>
            <MagneticButton
              as="a"
              href={siteConfig.resume}
              download
              className="border border-border bg-surface text-foreground hover:border-border-strong"
            >
              Download CV
            </MagneticButton>
            <div className="ml-1 flex items-center gap-2">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:border-accent/40 hover:text-accent"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:border-accent/40 hover:text-accent"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6"
          >
            {heroContent.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-xl font-semibold text-foreground md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-8 rounded-full border border-border/70 animate-orbit" />
          <div className="absolute inset-16 rounded-full border border-dashed border-accent/30 animate-orbit-reverse" />
          <div className="absolute inset-0 rounded-[2rem] border border-border bg-gradient-to-br from-white/8 via-white/2 to-transparent p-1 shadow-[0_0_80px_-20px_rgba(56,189,248,0.45)]">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.85rem] bg-[#070b12]/p-6 sm:p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-accent-2/20 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
                  <Sparkles size={12} className="text-accent" />
                  Product-minded frontend
                </div>
                <p className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Interfaces with
                  <span className="block gradient-text">intention.</span>
                </p>
              </div>

              <div className="relative space-y-3">
                {["React systems", "Motion polish", "API-ready apps"].map(
                  (item, i) => (
                    <motion.div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-border bg-surface px-4 py-3 text-sm"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 3.5,
                        delay: i * 0.35,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <span>{item}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span>Scroll</span>
        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
}
