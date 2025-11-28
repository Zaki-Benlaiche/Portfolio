"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Detect scroll to add navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setScrolled(true);
      else setScrolled(false);

      // Update active section based on scroll
      const sections = ["home", "about", "projects", "skills", "contact"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2
      w-[90%] md:w-[75%] lg:w-[65%] 
      z-50 rounded-2xl border
      transition-all duration-300 
      ${scrolled ? "backdrop-blur-xl bg-black/40 border-white/20 shadow-xl" : "backdrop-blur-lg bg-white/10 border-white/10"}`}
    >
      <div className="flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-white tracking-wide">
          Zaki<span className="text-teal-400">Dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative text-white transition ${
                active === link.id ? "text-teal-300" : "hover:text-teal-200"
              }`}
            >
              {link.label}
              {active === link.id && (
                <motion.div
                  layoutId="activeLink"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-teal-300 rounded"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col bg-black/60 backdrop-blur-xl px-6 py-4 space-y-4 rounded-b-2xl"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`text-white text-lg ${active === link.id ? "text-teal-300" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
