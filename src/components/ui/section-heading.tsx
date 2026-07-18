"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <motion.p
          variants={staggerItem}
          className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-accent"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        variants={fadeUp}
        className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={staggerItem}
          className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
