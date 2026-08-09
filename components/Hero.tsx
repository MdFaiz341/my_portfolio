"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07070d] px-6 pt-20 mb-30"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[38%] h-125 w-125 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[150px]" />

        <div className="absolute -left-40 -bottom-37.5 h-112.5 w-112.5 rounded-full bg-fuchsia-600/10 blur-[130px]" />

        <div className="absolute -right-40 -top-37.5 h-112.5 w-112.5 rounded-full bg-purple-500/10 blur-[130px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 text-5xl sm:text-6xl"
        >
          👋
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="font-bold leading-[0.95] tracking-[-0.07em]"
        >
          <span className="block text-6xl text-white sm:text-7xl md:text-8xl lg:text-[100px]">
            Hi, I&apos;m
          </span>

          <span className="mt-2 block bg-linear-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-6xl text-transparent sm:text-7xl md:text-8xl lg:text-[100px]">
            MD Faiz
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 sm:text-xl md:text-2xl"
        >
          A passionate{" "}
          <span className="font-semibold text-violet-400">
            Software Engineer
          </span>{" "}
          who loves crafting beautiful,
          <br className="hidden sm:block" />
          functional digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group flex min-w-47.5 items-center justify-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-purple-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(124,58,237,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(124,58,237,0.4)]"
          >
            View My Work

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="#contact"
            className="flex min-w-47.5 items-center justify-center rounded-full border border-violet-500/60 bg-white/2 px-7 py-4 text-sm font-semibold text-violet-300 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-500/10 hover:text-white"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Small status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
          className="mt-12 flex items-center gap-2 text-xs text-zinc-600"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.8)]" />
          Available for opportunities
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 transition hover:text-violet-400 sm:flex"
      >
        <span className="text-[9px] font-medium tracking-[0.25em]">
          SCROLL
        </span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}