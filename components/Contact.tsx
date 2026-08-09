"use client";

import { motion } from "framer-motion";

const socials = ["GitHub", "LinkedIn"];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 text-center sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="rounded-[28px] border border-borderStrong px-8 py-16 sm:px-10 sm:py-20"
          style={{
            background:
              "linear-gradient(160deg, rgba(139,92,246,0.14), rgba(63,224,197,0.06) 60%, #171325)",
          }}
        >
          <div className="inline-flex items-center gap-2.5 font-mono text-[0.74rem] uppercase tracking-[0.14em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-violetSoft" />
            Get in touch
          </div>

          <h2 className="mx-auto mt-4 max-w-[18ch] font-display text-4xl font-semibold sm:text-5xl">
            Let&apos;s build something worth remembering.
          </h2>

          <p className="mx-auto mt-5 max-w-[48ch] text-lg text-textSoft">
            I&apos;m currently taking on a small number of new projects. The
            fastest way to reach me is by email — I read everything, and
            reply to everything worth replying to.
          </p>

          <div className="mt-11 flex justify-center">
            <a
              href="mailto:faiz@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet to-cyan px-7 py-3.75 font-mono text-[0.82rem] font-medium text-bg0 transition-shadow duration-300 hover:shadow-[0_12px_40px_-8px_rgba(139,92,246,0.55)]"
            >
              faiz@example.com
            </a>
          </div>

          <div className="mt-13 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/md-faiz-0556a8278"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-borderStrong px-5 py-2.75 font-mono text-[0.8rem] text-textSoft transition-colors hover:border-violetSoft hover:bg-violet/8 hover:text-text"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/MdFaiz341"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-borderStrong px-5 py-2.75 font-mono text-[0.8rem] text-textSoft transition-colors hover:border-violetSoft hover:bg-violet/8 hover:text-text"
              >
                GitHub
              </a>
          </div>
        </motion.div>

        <footer className="mt-14 flex flex-wrap justify-between gap-2.5 border-t border-border pt-6 font-mono text-[0.74rem] text-textSoft">
          <span>© 2026 Md Faiz. All rights reserved.</span>
          <span>Designed &amp; built by hand.</span>
        </footer>
      </div>
    </section>
  );
}
