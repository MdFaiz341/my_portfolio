"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#interests", label: "Interests" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 bg-bg0/55 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-b border-border shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-2.5 font-display text-lg font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-linear-to-br from-violet to-cyan font-mono text-xs font-medium text-bg0">
            MF
          </span>
          MD Faiz
        </a>
        <nav className="hidden gap-9 text-sm font-medium sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-textSoft transition-colors hover:text-text"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-linear-to-r from-violet to-cyan transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-borderStrong px-4.5 py-2.25 font-mono text-[0.78rem] transition-colors hover:border-violetSoft hover:bg-violet/10"
        >
          Let&apos;s talk →
        </a>
      </div>
    </motion.header>
  );
}
