"use client";

import AboutSection from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionAnimationProvider } from "@/context/SectionAnimationContext";

export default function Home() {
  return (
    <SectionAnimationProvider>
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-600 focus:text-white focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <main className="min-h-screen bg-[#020408] text-white">
        <Navbar />
        <Hero />
        <AboutSection />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </SectionAnimationProvider>
  );
}
