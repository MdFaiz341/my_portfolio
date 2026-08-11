"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { modules, tech } from "@/lib/data";
import { ArrowUpIcon, ArrowUpRight } from "lucide-react";



export default function FeaturedProject() {
  return (
    <section id="work" className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading eyebrow="Selected work" title="Projects" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl bg-linear-to-br from-violet to-cyan p-px"
        >
          <div className="rounded-[23px] bg-surface p-7 sm:p-11">
            <div className="mb-1">
              <div className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-violetSoft">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_theme(colors.cyan)]" />
                Flagship build
              </div>
              <h3 className="mt-2.5 font-display text-2xl font-semibold sm:text-3xl">
                DevFlows{" "}
                <span className="font-normal text-textSoft">
                  | Full-Stack Collaborative Workspace
                </span>
              </h3>
              <div className="mt-2 font-mono text-[0.78rem] text-cyan">
                Real-time chat · Collaborative canvas · Second Brain — three apps, one connection
              </div>
            </div>

            <p className="mt-5 max-w-[70ch] text-[1.02rem] text-textSoft">
              A single collaborative workspace combining real-time
              one-to-one and group chat, a multiplayer drawing canvas, and a
              personal knowledge-management tool — built to feel like one
              product rather than three bolted together.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-borderStrong px-2.75 py-1.25 font-mono text-[0.7rem] text-textSoft"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="my-7 rounded-r-[10px] border-l-2 border-violet bg-violet/8 px-4.5 py-3.5 text-[0.94rem]">
              <strong className="font-display font-semibold">Architecture:</strong>{" "}
              Architected a single shared WebSocket connection layer using a
              Singleton pattern, powering all three applications from one
              persistent connection — eliminating duplicate connections and
              event listeners across modules.
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {modules.map((mod, i) => (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-white/2.5 p-6 transition-colors duration-300 hover:border-borderStrong"
                >
                  <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl border border-borderStrong bg-linear-to-br from-violet/25 to-cyan/15 text-[1.25rem]">
                    {mod.icon}
                  </div>
                  <h4 className="mb-3 font-display text-[1.05rem] font-semibold">
                    {mod.title}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {mod.points.map((point) => (
                      <li
                        key={point}
                        className="relative pl-4 text-[0.88rem] leading-relaxed text-textSoft before:absolute before:left-0 before:text-cyan before:content-['→']"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/MdFaiz341/Devflows"
                className="group inline-flex items-center px-3 py-2 rounded-lg gap-1.5 font-mono text-[0.82rem] hover:bg-violet-900 text-cyan hover:scale-105 bg-gray-700 transition duration-300 ease-linear"
              >
                View on GitHub
                  <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
