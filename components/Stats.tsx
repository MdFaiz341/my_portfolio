

"use client";

import { stats } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";



export default function Stats() {

  function Counter({ target }: { target: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!inView) return;
      const duration = 1400;
      const start = performance.now();
      let frame: number;
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.floor(eased * target));
        if (p < 1) frame = requestAnimationFrame(tick);
        else setValue(target);
      };
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    }, [inView, target]);

    return <span ref={ref}>{value}</span>;
  }


  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10">
        <div className="absolute left-1/4 top-1/2 h-40 w-40 rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute right-1/4 top-1/2 h-40 w-40 rounded-full bg-cyan-400/10 blur-[100px]" />
      </div>

      <div className="grid overflow-hidden rounded-[28px] border border-white/8 bg-white/2.5 backdrop-blur-xl md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            className="group relative min-h-47.5 overflow-hidden border-white/10 p-7 transition-all duration-500 hover:bg-white/4.5 md:border-r last:border-r-0"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            
             {/* Top accent */}
            <div className="mb-8 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(63,224,197,0.8)]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                {stat.accent}
              </span>
            </div>
            {
              stat.type === "counter" ?(
                <div className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
                  <Counter target={stat.target!}/>
                  {stat.suffix}
                </div>
              ) : (
                <>
                  {/* Number / value */}
                  <div className="relative">
                    <h3 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
                      {stat.value}
                      {stat.value2 && (
                        <>
                          <br />
                          <span className="bg-linear-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                            {stat.value2}
                          </span>
                        </>
                      )}
                    </h3>
                  </div>

                </>
              )
            }
            
            {/* Bottom label */}
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
              {stat.label}
            </p>

            {/* Bottom hover line */}
            <motion.div
              className="absolute bottom-0 left-0 h-px bg-linear-to-r from-violet-500 to-cyan-400"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}