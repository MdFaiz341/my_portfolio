
// import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
// import { profile } from "./data";
// import { Reveal } from "./Reveal";
// import { ContactForm } from "./ContactForm";

// export function Contact() {
//   return (
//     <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
//       <Reveal>
//         <div className="relative overflow-hidden rounded-[2rem] surface-card px-8 py-16 text-center sm:px-16">
//           <div
//             aria-hidden
//             className="pointer-events-none absolute inset-x-0 -top-40 h-80 opacity-60 blur-3xl"
//             style={{ backgroundImage: "var(--gradient-primary)" }}
//           />
//           <div className="relative">
//             <span className="text-xs tracking-[0.3em] text-accent uppercase">Contact</span>
//             <h2 className="mt-4 text-4xl font-bold sm:text-6xl">
//               Let&apos;s build something <span className="text-gradient">real-time</span>
//             </h2>
//             <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
//               Available for full-stack engineering roles and freelance collaborations.
//             </p>
//             <a
//               href={`mailto:${profile.email}`}
//               className="group mt-9 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.03]"
//               style={{ backgroundImage: "var(--gradient-primary)" }}
//             >
//               {profile.email}
//               <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </a>
//           </div>
//         </div>
//       </Reveal>

//       <Reveal>
//         <div className="mt-8 grid gap-6 md:grid-cols-2">
//           <div className="rounded-[2rem] surface-card p-8">
//             <h3 className="font-display text-2xl font-bold">Get in touch</h3>
//             <p className="mt-3 text-sm text-muted-foreground">
//               Drop your details and a short note — it opens a pre-filled email straight to my inbox.
//             </p>

//             <ul className="mt-8 space-y-4 text-sm">
//               <li className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-accent">
//                   <Mail className="h-4 w-4" />
//                 </span>
//                 <a href={`mailto:${profile.email}`} className="hover:text-accent">
//                   {profile.email}
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-accent">
//                   <Github className="h-4 w-4" />
//                 </span>
//                 <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
//                   GitHub
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-accent">
//                   <Linkedin className="h-4 w-4" />
//                 </span>
//                 <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
//                   LinkedIn
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="rounded-[2rem] surface-card p-8">
//             <ContactForm />
//           </div>
//         </div>
//       </Reveal>


//       <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
//         <p>© {new Date().getFullYear()} {profile.name}</p>
//         <p className="font-display tracking-widest uppercase">Built with care</p>
//       </footer>
//     </section>
//   );
// }
