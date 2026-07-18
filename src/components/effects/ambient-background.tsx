"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function AmbientBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.12),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(94,234,212,0.1),_transparent_50%)]" />
      <div className="grid-fade absolute inset-0 opacity-60" />

      <motion.div
        className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2/20 blur-[110px] animate-pulse-glow"
        style={{ left: x, top: y }}
      />

      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/15 blur-[100px] animate-float-slow" />
      <div
        className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-accent-2/15 blur-[110px] animate-float-slow"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent/10 blur-[90px]" />
    </div>
  );
}
