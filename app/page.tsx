
import Nav from "@/components/Navbar";
import {Hero} from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Interests from "@/components/Interests";
import FeaturedProject from "@/components/FeaturedProject";
import Contact from "@/components/Contact";
import { Toolkit } from "@/components/Toolkit";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Toolkit/>
      <Interests />
      <FeaturedProject />
      <Contact />
    </main>
  );
}
