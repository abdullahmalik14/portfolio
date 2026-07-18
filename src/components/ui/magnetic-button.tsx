"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  as?: "a" | "button";
  href?: string;
  download?: boolean | string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function MagneticButton({
  children,
  className,
  as = "button",
  href,
  download,
  onClick,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const { left, top, width, height } = node.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setPosition({ x: x * 0.22, y: y * 0.22 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const sharedClass = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
    className,
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.4 }}
      className="inline-block"
    >
      {as === "a" && href ? (
        <a href={href} download={download} className={sharedClass}>
          {children}
        </a>
      ) : (
        <button type={type} onClick={onClick} className={sharedClass}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
