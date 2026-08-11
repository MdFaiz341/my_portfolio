"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe2,
  Server,
  Zap,
  Wrench,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";


const icons = {
  Languages: Code2,
  Frontend: Globe2,
  Backend: Server,
  Database: Database,
  "Real-Time": Zap,
  Tools: Wrench,
};

export function Toolkit() {
  return (
    <section id="interests" className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading eyebrow="Toolkit" title="What I work" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items], index) => {
            const Icon =
              icons[group as keyof typeof icons];

            return (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/8 bg-[#0c0c13] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-[#0f0e17]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 opacity-0 blur-[70px] transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Card heading */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-violet-500/6 text-violet-400 transition duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-500/10">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
                      {group}
                    </h3>
                  </div>

                  {/* Skill pills */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/8 bg-white/2.5 px-4 py-2 text-sm text-zinc-400 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/30 hover:text-violet-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
