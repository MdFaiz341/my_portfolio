

import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>

      <div className="min-h-screen" />
    </main>
  );
}