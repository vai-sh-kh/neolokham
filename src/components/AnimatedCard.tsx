"use client";

import { motion } from "motion/react";

type AnimatedCardProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimatedCard({
  children,
  className,
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
