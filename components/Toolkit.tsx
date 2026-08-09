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

const skills = {
  Languages: ["C++", "JavaScript", "TypeScript", "SQL"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "PostgreSQL", "Prisma"],
  "Real-Time": ["WebSockets", "WS", "Real-Time Systems"],
  Tools: ["Git", "GitHub"],
};

const icons = {
  Languages: Code2,
  Frontend: Globe2,
  Backend: Server,
  Database: Database,
  "Real-Time": Zap,
  Tools: Wrench,
};

// export function Toolkit() {
//   return (
//     <section
//       id="skills"
//       className="relative overflow-hidden bg-[#07070d] px-6 py-32 lg:py-40"
//     >
//       {/* Background glow */}
//       <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[150px]" />

//       <div className="relative mx-auto max-w-6xl">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-14"
//         >
//           <div className="mb-5 flex items-center gap-3">
//             <span className="font-mono text-xs text-violet-400">
//               03
//             </span>

//             <span className="text-[10px] font-medium tracking-[0.25em] text-zinc-500">
//               TOOLKIT
//             </span>
//           </div>

//           <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
//             What I work
//             <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
//               {" "}with.
//             </span>
//           </h2>

//           <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
//             A collection of technologies and tools I use to build
//             full-stack applications, real-time systems and modern
//             digital experiences.
//           </p>
//         </motion.div>

//         {/* Skills grid */}
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//           {Object.entries(skills).map(([group, items], index) => {
//             const Icon =
//               icons[group as keyof typeof icons];

//             return (
//               <motion.div
//                 key={group}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.06,
//                 }}
//                 className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0c0c13] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-[#0f0e17]"
//               >
//                 {/* Hover glow */}
//                 <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 opacity-0 blur-[70px] transition duration-500 group-hover:opacity-100" />

//                 <div className="relative">
//                   {/* Card heading */}
//                   <div className="flex items-center gap-4">
//                     <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-violet-500/[0.06] text-violet-400 transition duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-500/10">
//                       <Icon size={20} />
//                     </div>

//                     <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
//                       {group}
//                     </h3>
//                   </div>

//                   {/* Skill pills */}
//                   <div className="mt-7 flex flex-wrap gap-2">
//                     {items.map((item) => (
//                       <span
//                         key={item}
//                         className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs text-zinc-500 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.08] hover:text-violet-300"
//                       >
//                         {item}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Bottom tech marquee */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="mt-5 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015]"
//         >
//           <div className="flex min-w-max animate-[marquee_25s_linear_infinite] gap-12 px-8 py-5">
//             {[
//               "NEXT.JS",
//               "REACT",
//               "TYPESCRIPT",
//               "NODE.JS",
//               "MONGODB",
//               "POSTGRESQL",
//               "WEBSOCKETS",
//               "PRISMA",
//               "TAILWIND CSS",
//               "C++",
//               "GIT",
//               "DOCKER",
//             ].map((tech) => (
//               <span
//                 key={tech}
//                 className="text-[10px] font-medium tracking-[0.25em] text-zinc-700"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           from {
//             transform: translateX(0);
//           }

//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


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
