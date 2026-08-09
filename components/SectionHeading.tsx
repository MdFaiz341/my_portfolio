"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14 max-w-[60ch]"
    >
      <div className="inline-flex items-center gap-2.5 font-mono text-[0.74rem] uppercase tracking-[0.14em] text-violetSoft">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_theme(colors.cyan)]" />
        {eyebrow}
      </div>
      <h2 className="mt-3.5 font-display text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}
