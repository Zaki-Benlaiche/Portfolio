"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter,FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import AboutSection from "../../components/About";
import Contact from "../../components/Contact";
import Projects from "../../components/Projects";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import { SectionAnimationProvider } from "../../context/SectionAnimationContext";




export default function Home() {
  return (
    <SectionAnimationProvider>
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Navbar */}
    <Navbar/>

      {/* Hero Section */}
      
<Hero />
      {/* About Section */}

       <AboutSection />
       {/* Projects Section */}
   
       <Projects />
       {/* Contact Section */}
      
       <Contact />
 
      {/* الأقسام القادمة مثل about, projects, contact يمكنك إضافتها هنا */}
    </main>
    </SectionAnimationProvider>
    
  );
}
