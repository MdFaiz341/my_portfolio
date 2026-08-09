"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#projects",
  },
  {
    label: "Toolkit",
    href: "#skills",
  },
  {
    label: "Interests",
    href: "#hobbies",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="nav-wrap">
      {/* Logo */}
      <a
        href="#"
        className="brand"
        onClick={closeMenu}
      >
        MF<span>.</span>
      </a>

      {/* Desktop Navigation */}
      <div className="desktop-nav">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <a
        href="#contact"
        className="nav-cta desktop-cta"
      >
        Let&apos;s talk
        <ArrowUpRight size={15} />
      </a>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="mobile-menu"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        {open ? (
          <X size={21} />
        ) : (
          <Menu size={21} />
        )}
      </button>

      {/* Mobile Navigation */}
      {open && (
        <div className="mobile-nav">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-nav-cta"
            onClick={closeMenu}
          >
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </nav>
  );
}