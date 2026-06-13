"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiOpenai, SiHuggingface } from "react-icons/si";
import HeroBackground3D from "./HeroBackground3D";
import { siteConfig } from "@/lib/siteConfig";

const ROLES = [
  "AI Agent Architect",
  "Full-Stack Engineer",
  "Mobile App Developer",
  "React Native Engineer",
  "LLM Systems Builder",
];

function useTypewriter(words: string[], typeSpeed = 75, deleteSpeed = 40, pauseMs = 2200) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typeSpeed);
      } else {
        timeout = setTimeout(() => setTyping(false), pauseMs);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed);
      } else {
        setTyping(true);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
}

const floatingBadges = [
  { label: "React 19",      color: "from-cyan-500/20 to-blue-500/10",   border: "border-cyan-500/30",   delay: 0.2 },
  { label: "Next.js 15",    color: "from-white/10 to-white/5",          border: "border-white/20",      delay: 0.4 },
  { label: "LangChain",     color: "from-green-500/20 to-emerald-500/10", border: "border-green-500/30", delay: 0.6 },
  { label: "TypeScript",    color: "from-blue-600/20 to-blue-400/10",   border: "border-blue-500/30",   delay: 0.8 },
  { label: "OpenAI API",    color: "from-purple-500/20 to-purple-400/10", border: "border-purple-500/30", delay: 1.0 },
  { label: "React Native",  color: "from-cyan-500/20 to-cyan-400/10",   border: "border-cyan-500/30",   delay: 1.2 },
];

export default function Hero() {
  const typedRole = useTypewriter(ROLES);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative pt-32 pb-24 min-h-screen flex items-center justify-center text-zinc-300 overflow-hidden bg-[#020408]"
    >
      <HeroBackground3D />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020408]/60 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 px-6 max-w-7xl w-full">

        {/* ── Text ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-center md:text-left flex-1 md:mr-auto flex flex-col items-center md:items-start order-2 md:order-1"
        >
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-zinc-300 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.03)] backdrop-blur-sm self-center md:self-start"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for New Architectures
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-[1.1] tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]"
          >
            Hi, I&apos;m{" "}
            <br className="hidden md:block" />
            <span className="bg-gradient-to-br from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Zaki Benlaiche
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-2 mb-6 h-8"
          >
            <span className="text-blue-400/70 font-mono text-xs tracking-widest uppercase">&gt;_</span>
            <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent font-mono">
              {typedRole}
            </span>
            <span className="w-[2px] h-6 bg-blue-400 animate-blink rounded-full" />
          </motion.div>

          {/* Sub-roles row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-zinc-500 font-mono text-xs uppercase tracking-widest"
          >
            <span className="flex items-center gap-1.5"><SiOpenai size={12} className="text-zinc-400" /> AI Agents</span>
            <span className="hidden md:inline text-zinc-800">/</span>
            <span className="flex items-center gap-1.5"><SiHuggingface size={12} className="text-zinc-400" /> LLM Systems</span>
            <span className="hidden md:inline text-zinc-800">/</span>
            <span>Web &amp; Mobile</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-zinc-400 mb-10 leading-relaxed text-lg max-w-xl font-light"
          >
            An <strong className="text-zinc-200 font-medium">AI-Focused Full-Stack &amp; Mobile Developer</strong> composing intelligent multi-agent systems, scalable web platforms, and cross-platform Android &amp; iOS apps built for the AI era.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3.5 rounded-full bg-white text-black font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.45)] flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Explore My Work</span>
              <motion.span
                className="relative inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </a>
            <a
              href={siteConfig.cvPath}
              download
              className="px-8 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 text-white font-medium backdrop-blur-md transition-all duration-300 text-center flex items-center justify-center gap-2 group"
            >
              <span className="text-zinc-400 group-hover:text-white transition-colors">📄</span> Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.35 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            {[
              { href: siteConfig.social.github,   Icon: FaGithub,   label: "GitHub"   },
              { href: siteConfig.social.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
              { href: siteConfig.social.twitter,  Icon: FaTwitter,  label: "Twitter"  },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all backdrop-blur-md group"
              >
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Image card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.35 }}
          className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] flex-shrink-0 order-1 md:order-2 group mt-8 md:mt-0 perspective-1000"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 via-zinc-400/5 to-purple-600/15 rounded-full blur-[80px] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Card */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#050505]/40 backdrop-blur-xl shadow-[0_0_60px_rgba(255,255,255,0.04)] transform-gpu transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_24px_80px_rgba(255,255,255,0.09)]">
            {/* Top accent */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/60 to-transparent z-20" />

            {/* Internal grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,transparent_10%,black_50%,transparent_90%)] z-10 pointer-events-none" />

            {/* Status */}
            <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[8px] font-mono text-emerald-400/80 tracking-widest uppercase">System Ready</span>
            </div>

            {/* Profile image */}
            <div className="absolute inset-x-4 top-4 bottom-16 rounded-xl overflow-hidden border border-white/5 bg-black z-20">
              <Image
                src="/zakiHome.jpg"
                alt="Zaki Benlaiche"
                fill
                priority
                className="object-cover object-top brightness-110 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              {/* Scanline sweep */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] animate-[scan_6s_linear_infinite] pointer-events-none mix-blend-overlay" />
              {/* Vignette */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] pointer-events-none" />
            </div>

            {/* Bottom info bar */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-black/80 border-t border-white/5 z-20 flex items-center justify-between px-6 backdrop-blur-md">
              <div className="flex flex-col">
                <span className="text-white text-sm font-bold tracking-wide">ZAKI.BENLAICHE</span>
                <span className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">ID: ARCHITECT-01</span>
              </div>
              <div className="flex gap-1.5">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-4 rounded-sm ${i < 4 ? "bg-zinc-400" : "bg-zinc-800"}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Decorative lines */}
          <div className="absolute -left-6 top-1/4 w-12 h-px bg-zinc-500/50" />
          <div className="absolute -right-6 bottom-1/4 w-12 h-px bg-zinc-500/50" />

          {/* Floating tech badges */}
          {floatingBadges.map((badge, i) => {
            const positions = [
              "-top-4 -left-8",
              "-top-4 -right-8",
              "top-1/3 -left-12",
              "top-1/3 -right-12",
              "-bottom-4 -left-8",
              "-bottom-4 -right-8",
            ];
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + badge.delay, duration: 0.4 }}
                className={`absolute ${positions[i]} hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${badge.color} border ${badge.border} text-[10px] font-mono text-zinc-300 backdrop-blur-md whitespace-nowrap animate-float`}
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {badge.label}
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-zinc-600 text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-zinc-500" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
