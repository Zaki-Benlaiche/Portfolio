"use client";
import Image from "next/image";
import { motion } from "framer-motion";
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
      <main className="min-h-screen bg-[#050505] text-white">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />

        {/* Footer Section */}
        <Footer />
      </main>
    </SectionAnimationProvider>
  );
}
