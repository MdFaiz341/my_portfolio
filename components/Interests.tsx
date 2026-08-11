"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { hobbies } from "@/lib/data";



export default function Interests() {
  return (
    <section id="interests" className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading eyebrow="Off the clock" title="Hobbies & interests" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px -24px rgba(139,92,246,0.4)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="rounded-[18px] border border-border bg-surface p-7 transition-colors duration-300 hover:border-borderStrong"
            >
              <div className="mb-4.5 flex h-13 w-13 items-center justify-center rounded-[14px] border border-borderStrong bg-linear-to-br from-violet/25 to-cyan/15 text-2xl">
                {hobby.glyph}
              </div>
              <h3 className="font-display text-lg font-semibold">{hobby.title}</h3>
              <p className="mt-2 text-sm text-textSoft">{hobby.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
