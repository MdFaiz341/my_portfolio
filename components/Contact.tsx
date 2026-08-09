"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.currentTarget;

    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* ================= CONTACT CARD ================= */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="rounded-[28px] border border-borderStrong px-6 py-14 sm:px-10 sm:py-20"
          style={{
            background:
              "linear-gradient(160deg, rgba(139,92,246,0.14), rgba(63,224,197,0.06) 60%, #171325)",
          }}
        >
          {/* ================= HEADER ================= */}

          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-violet shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

              <span className="font-mono text-xs tracking-[0.25em] text-cyan">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="mx-auto mt-4 max-w-[18ch] font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Let&apos;s build something worth remembering.
            </h2>

            <p className="mx-auto mt-5 max-w-[48ch] text-lg leading-8 text-textSoft">
              Have an idea, project, or opportunity in mind?
              Send me a message and I&apos;ll get back to you as
              soon as possible.
            </p>
          </div>

          {/* ================= FORM ================= */}

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-3xl"
          >
            <div className="grid gap-5 sm:grid-cols-2">

              {/* NAME */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs tracking-wider text-textSoft"
                >
                  NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoFocus
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-borderStrong bg-bg0/50 px-4 py-3.5 font-mono text-sm text-text outline-none transition-all duration-300 placeholder:text-textSoft/80 focus:border-violetSoft focus:bg-bg0/70 focus:ring-1 focus:ring-violetSoft/30"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs tracking-wider text-textSoft"
                >
                  EMAIL
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-borderStrong bg-bg0/50 px-4 py-3.5 font-mono text-sm text-text outline-none transition-all duration-300 placeholder:text-textSoft/80 focus:border-violetSoft focus:bg-bg0/70 focus:ring-1 focus:ring-violetSoft/30"
                />
              </div>
            </div>

            {/* MESSAGE */}

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-xs tracking-wider text-textSoft"
              >
                MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder="Tell me about your project or just say hello..."
                className="w-full resize-none rounded-2xl border border-borderStrong bg-bg0/50 px-4 py-4 font-mono text-sm leading-7 text-text outline-none transition-all duration-300 placeholder:text-textSoft/80 focus:border-violetSoft focus:bg-bg0/70 focus:ring-1 focus:ring-violetSoft/50"
              />
            </div>

            {/* STATUS */}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-center gap-2 rounded-xl border border-cyan/20 bg-cyan/5 px-4 py-3 font-mono text-sm text-cyan"
              >
                <CheckCircle2 size={17} />

                Message sent successfully. I&apos;ll get back to you
                soon.
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 font-mono text-sm text-red-300"
              >
                {error}
              </motion.div>
            )}

            {/* SEND BUTTON */}

            <div className="mt-7 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex min-w-52.5 items-center cursor-pointer justify-center gap-2 rounded-full bg-linear-to-r from-violet to-cyan px-7 py-3.5 font-mono text-[0.82rem] font-medium text-bg0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_rgba(139,92,246,0.55)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    Send Message

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* ================= SOCIAL LINKS ================= */}

          <div className="mt-13 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/md-faiz-0556a8278"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full border flex items-center gap-1 border-borderStrong px-5 py-2.75 font-mono text-[0.8rem] text-gray-300 transition-all duration-300 hover:border-violetSoft hover:bg-violet/15 hover:text-text"
            >
              LinkedIn
              <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
            </a>

            <a
              href="https://github.com/MdFaiz341"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full border flex items-center gap-1 border-borderStrong px-5 py-2.75 font-mono text-[0.8rem] text-gray-300 transition-all duration-300 hover:border-violetSoft hover:bg-violet/15 hover:text-text"
            >
              GitHub
              <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
            </a>
          </div>
        </motion.div>

        {/* ================= FOOTER ================= */}

        <footer className="mt-14 flex flex-wrap justify-between border-t border-border pt-6 font-mono text-[0.74rem] text-textSoft">
          <span>© 2026 All rights reserved.</span>
        
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <MdEmail/>
                    <span>faiz8969217468@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaLocationDot/>
                    <span>Kolkata, India</span>
                </div>
            </div>

          <span>Designed &amp; built by hand.</span>
        </footer>
      </div>
    </section>
  );
}