import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles, Zap } from "lucide-react";
import { profile, stats, marqueeStack } from "./data";
import heroOrb from "@/assets/hero-orb.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export function Hero() {
  const reduce = useReducedMotion();
  const words = profile.name.split(" ");

  return (
    <header className="aurora relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines" />
      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to new opportunities
            </motion.p>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-8 flex items-center gap-3 text-xs font-semibold tracking-[0.42em] text-muted-foreground uppercase"
            >
              Hello, I&apos;m a developer
              <Sparkles className="h-4 w-4 text-accent" />
            </motion.p>

            <h1 className="mt-4 font-display text-[clamp(3rem,9vw,6rem)] leading-[0.86] font-extrabold">
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  className="mr-4 inline-block"
                  initial={reduce ? false : { opacity: 0, y: 40, rotate: -3 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  {i === 0 ? (
                    <span className="text-gradient drop-shadow-[0_10px_40px_color-mix(in_oklab,var(--primary)_55%,transparent)]">
                      {w}
                    </span>
                  ) : (
                    <span className="relative">
                      <span className="relative z-10">{w}</span>
                      <span
                        aria-hidden
                        className="absolute inset-x-0 bottom-1.5 -z-0 h-3 rounded-full opacity-70 blur-[2px]"
                        style={{ backgroundImage: "var(--gradient-primary)" }}
                      />
                    </span>
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex max-w-2xl flex-col gap-6"
            >
              <p className="font-display text-lg text-foreground/90 sm:text-xl">{profile.role}</p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {profile.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.03]"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  View selected work
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <div className="flex items-center gap-2">
                  {[
                    { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
                    { href: profile.github, icon: FaGithub, label: "GitHub" },
                    { href: profile.linkedin, icon: FaLinkedin, label: "LinkedIn" },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-accent/60 hover:text-foreground"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] surface-card p-3">
              <img
                src={heroOrb}
                alt="Abstract indigo sphere representing Md. Faiz's engineering work"
                width={1024}
                height={1024}
                className="h-full w-full rounded-[2rem] object-cover animate-float"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[2.5rem] opacity-60"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 40%, color-mix(in oklab, var(--primary-glow) 18%, transparent), transparent 70%)",
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center font-display text-6xl font-extrabold tracking-tight text-primary-foreground drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)] sm:text-7xl">
                MF
              </span>
            </div>

            <div className="absolute -top-4 -right-2 flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Creative
            </div>
            <div className="absolute -bottom-4 -left-2 flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium backdrop-blur-xl">
              <Zap className="h-3.5 w-3.5 text-accent" />
              Always learning
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="rounded-2xl surface-card px-5 py-4"
            >
              <p className="text-xs tracking-widest text-muted-foreground uppercase">{s.label}</p>
              <p className="font-display mt-1 text-lg font-bold">{s.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative border-y border-border/70 py-4">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...marqueeStack, ...marqueeStack].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display text-sm tracking-[0.25em] text-muted-foreground/70 uppercase"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
