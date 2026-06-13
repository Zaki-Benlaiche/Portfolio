"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { id: "home",       label: "Home",       icon: "⌂" },
  { id: "about",      label: "About",      icon: "◈" },
  { id: "projects",   label: "Projects",   icon: "⬡" },
  { id: "experience", label: "Experience", icon: "◇" },
  { id: "contact",    label: "Contact",    icon: "◉" },
];

export default function Navbar() {
  const [isOpen,       setIsOpen]       = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const [active,       setActive]       = useState("home");
  const [hoveredLink,  setHoveredLink]  = useState<string | null>(null);
  const [progress,     setProgress]     = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
      setScrolled(window.scrollY > 30);

      const sections = links.map((l) => l.id);
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top    = el.offsetTop - 120;
          const bottom = top + el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      ref={navRef as React.RefObject<HTMLElement>}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[92%] md:w-[78%] lg:w-[62%]
        rounded-2xl transition-all duration-500 overflow-hidden
        ${scrolled
          ? "bg-[#04080f]/80 backdrop-blur-2xl border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.08),0_8px_32px_rgba(0,0,0,0.5)]"
          : "bg-[#04080f]/50 backdrop-blur-xl border border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
        }
      `}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent rounded-full" />

      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 transition-all duration-150 rounded-full"
        style={{ width: `${progress}%` }}
      />

      <div className="flex justify-between items-center px-5 py-3">

        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5 select-none">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/20 blur-sm group-hover:blur-md transition-all duration-300" />
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600/40 to-purple-600/30 border border-blue-500/30 flex items-center justify-center">
              <Zap size={14} className="text-blue-300 group-hover:text-blue-200 transition-colors" />
            </div>
          </div>
          <span className="text-[15px] font-bold tracking-wide text-white">
            Zaki
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">.dev</span>
          </span>
          <span className="hidden sm:flex items-center gap-1 text-[9px] font-mono tracking-widest text-blue-400/70 uppercase border border-blue-500/20 rounded-full px-2 py-0.5 bg-blue-500/5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
            </span>
            AI Dev
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive  = active === link.id;
            const isHovered = hoveredLink === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 group"
              >
                <AnimatePresence>
                  {(isActive || isHovered) && (
                    <motion.div
                      key="bg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute inset-0 rounded-xl ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600/20 to-purple-600/10 border border-blue-500/25"
                          : "bg-white/5 border border-white/8"
                      }`}
                    />
                  )}
                </AnimatePresence>
                <span className={`relative flex items-center gap-1.5 transition-colors duration-200 ${
                  isActive ? "text-blue-300" : "text-zinc-400 group-hover:text-zinc-100"
                }`}>
                  <span className="text-[10px] opacity-60">{link.icon}</span>
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl
            bg-gradient-to-r from-blue-600/80 to-purple-600/70
            hover:from-blue-500 hover:to-purple-500
            text-white text-sm font-semibold
            border border-blue-400/20
            shadow-[0_0_16px_rgba(59,130,246,0.2)]
            hover:shadow-[0_0_28px_rgba(59,130,246,0.5)]
            transition-all duration-300 group"
        >
          <span>Hire Me</span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-blue-200"
          >
            →
          </motion.span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen
              ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={18} /></motion.span>
              : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={18} /></motion.span>
            }
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2 space-y-1 border-t border-white/8">
              {links.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active === link.id
                      ? "bg-gradient-to-r from-blue-600/20 to-purple-600/10 text-blue-300 border border-blue-500/20"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-base opacity-70">{link.icon}</span>
                  {link.label}
                  {active === link.id && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />
                  )}
                </motion.a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                    bg-gradient-to-r from-blue-600/70 to-purple-600/60
                    text-white text-sm font-semibold border border-blue-400/20
                    hover:from-blue-500 hover:to-purple-500 transition-all"
                >
                  Hire Me →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
