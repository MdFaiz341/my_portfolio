// import MeshBackground from "@/components/MeshBackground";
import Nav from "@/components/Navbar";
import {Hero} from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
// import Marquee from "@/components/Marquee";
import Interests from "@/components/Interests";
import FeaturedProject from "@/components/FeaturedProject";
import Contact from "@/components/Contact";
import { Toolkit } from "@/components/Toolkit";

export default function Home() {
  return (
    <main className="relative">
      {/* <MeshBackground /> */}
      <Nav />
      <Hero />
      <Stats />
      <About />
      {/* <Marquee /> */}
      <Toolkit/>
      <Interests />
      <FeaturedProject />
      <Contact />
    </main>
  );
}
