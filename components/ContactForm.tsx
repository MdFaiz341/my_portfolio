// import { useState } from "react";
// import { Send } from "lucide-react";
// import { profile } from "./data";

// export function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState<string | null>(null);

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const n = name.trim().slice(0, 100);
//     const em = email.trim().slice(0, 255);
//     const msg = message.trim().slice(0, 1000);

//     if (!n || !em || !msg) {
//       setError("Please fill in your name, email and message.");
//       return;
//     }
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
//       setError("Please enter a valid email address.");
//       return;
//     }
//     setError(null);

//     const body = `Name: ${n}\nEmail: ${em}\n\n${msg}`;
//     window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
//       `Portfolio enquiry from ${n}`,
//     )}&body=${encodeURIComponent(body)}`;
//   };

//   const field =
//     "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

//   return (
//     <form onSubmit={onSubmit} className="space-y-4 text-left">
//       <div>
//         <label htmlFor="cf-name" className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase">
//           Name
//         </label>
//         <input
//           id="cf-name"
//           value={name}
//           maxLength={100}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Your name"
//           className={field}
//         />
//       </div>

//       <div>
//         <label htmlFor="cf-email" className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase">
//           Email
//         </label>
//         <input
//           id="cf-email"
//           type="email"
//           value={email}
//           maxLength={255}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="you@example.com"
//           className={field}
//         />
//       </div>

//       <div>
//         <label htmlFor="cf-message" className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase">
//           Message
//         </label>
//         <textarea
//           id="cf-message"
//           value={message}
//           maxLength={1000}
//           rows={5}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Tell me about your project, or just say hello."
//           className={`${field} resize-none`}
//         />
//       </div>

//       {error && <p className="text-sm text-destructive">{error}</p>}

//       <button
//         type="submit"
//         className="group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.02]"
//         style={{ backgroundImage: "var(--gradient-primary)" }}
//       >
//         Send message
//         <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//       </button>
//     </form>
//   );
// }
