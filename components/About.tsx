"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../assets/Formal-Pic-Coat.png";

const facts = [
  { label: "Role", value: "Backend-Focused Software Engineer" },
  { label: "Focus", value: "Real-time systems & APIs" },
  { label: "Available", value: "Open to select projects" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative flex justify-center items-center aspect-4/5 overflow-hidden rounded-[20px] border border-borderStrong p-6"
            style={{
              background:
                "linear-gradient(160deg, rgba(139,92,246,0.35), rgba(63,224,197,0.15) 60%, #171325 100%)",
            }}
          >
            {/* <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[-58%] font-display text-[9rem] font-bold leading-none text-white/6"
            >
              MF
            </span> */}
            <Image
                src={photo}
                alt="Md Faiz"
                className="rounded-[20px]"
            />
            {/* <span className="relative z-10 font-mono text-[0.78rem] text-white/75">
              PHOTO / AVATAR — swap this block for your image
            </span> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2.5 font-mono text-[0.74rem] uppercase tracking-[0.14em] text-violetSoft">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_theme(colors.cyan)]" />
              About me
            </div>
            <h2 className="mt-3.5 font-display text-3xl font-semibold sm:text-4xl">
              A little about how I work
            </h2>

            <p className="mt-6 text-[1.03rem] text-textSoft">
              I&apos;m a backend-focused software engineer who enjoys the
              problems most people never see — keeping a connection alive,
              keeping data consistent, keeping a system predictable when a
              hundred things are happening at once. I work mainly in Node.js
              and TypeScript, with Next.js on the front end when a project
              needs it.
            </p>

            <p className="my-7 border-l-2 border-cyan pl-5 font-display text-xl font-medium">
              &ldquo;The best backend work is invisible — it just never
              breaks.&rdquo;
            </p>

            <p className="text-[1.03rem] text-textSoft">
              Most recently I&apos;ve been deep in real-time architecture:
              WebSocket connection management, authorization models, and
              designing systems that stay clean as they grow.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-5 border-t border-border pt-7 sm:grid-cols-3">
              {facts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                >
                  <div className="font-mono text-[0.68rem] uppercase tracking-widest text-violetSoft">
                    {fact.label}
                  </div>
                  <p className="mt-1.5 text-sm font-medium">{fact.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
