"use client";

import AboutSection from "../../components/About";
import Contact from "../../components/Contact";
import Projects from "../../components/Projects";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SectionAnimationProvider } from "../../context/SectionAnimationContext";

export default function Home() {
  return (
    <SectionAnimationProvider>
      <main className="min-h-screen bg-[#020408] text-white">
        <Navbar />
        <Hero />
        <AboutSection />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </SectionAnimationProvider>
  );
}
