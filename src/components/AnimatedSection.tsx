"use client";

import { motion } from "motion/react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

const hidden = { opacity: 0, y: 20 };
const visible = { opacity: 1, y: 0 };

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
