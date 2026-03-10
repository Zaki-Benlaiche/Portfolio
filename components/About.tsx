"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiFramer, SiPython, SiOpenai,
} from "react-icons/si";

const engineeringStack = [
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "Python", icon: <SiPython /> },
  { name: "AI Agents", icon: <SiOpenai /> },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "∞", label: "AI Curiosity" },
];

const About: FC = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden text-zinc-300"
    >
      {/* Subtle section glow blobs — blend with the 3D canvas bg */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative"
      >
        <span className="text-blue-400/60 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
          01. Core Identity
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-300">
          About Me
        </h2>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-32 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* ─── Image Card ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="flex-shrink-0 relative group mx-auto lg:mx-0"
        >
          {/* Outer glow */}
          <div className="absolute inset-[-20px] bg-gradient-to-br from-blue-600/20 via-purple-500/10 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

          <div className="relative w-[280px] sm:w-[320px] mx-auto rounded-2xl overflow-hidden
                          border border-blue-500/20
                          shadow-[0_0_40px_rgba(59,130,246,0.12),0_20px_60px_rgba(0,0,0,0.5)]
                          bg-gradient-to-b from-[#0a0f1e]/80 to-[#04080f]/90 backdrop-blur-sm">

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent z-10" />

            {/* Status bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-black/20">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <span className="flex-1 text-center text-[10px] font-mono text-zinc-500 tracking-widest">
                zaki.benlaiche.dev
              </span>
              <span className="flex items-center gap-1 text-[9px] text-green-400/70 font-mono">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                </span>
                ONLINE
              </span>
            </div>

            {/* Photo */}
            <div className="relative aspect-[4/4.5] overflow-hidden">
              <Image
                src="/zakiHome.jpg"
                alt="Zaki Benlaiche — AI Developer"
                fill
                priority
                className="object-cover object-top brightness-105 contrast-105
                           group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Blue tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#04080f] via-transparent to-transparent" />
              {/* Subtle scanlines */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,30,0.06)_50%)] bg-[length:100%_3px] opacity-25 pointer-events-none mix-blend-overlay" />
            </div>

            {/* Name card footer */}
            <div className="px-5 py-4 bg-gradient-to-b from-[#05091a]/80 to-[#04080f]">
              <p className="text-white font-bold text-base tracking-wide">Zaki Benlaiche</p>
              <p className="text-blue-400/80 text-xs font-mono mt-0.5 tracking-wider">
                AI · Full-Stack · Architect
              </p>
            </div>
          </div>

          {/* Stats row below card */}
          <div className="flex gap-3 mt-4 w-full">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex-1 py-3 rounded-xl bg-[#04080f]/70 border border-white/8
                           backdrop-blur-sm text-center hover:border-blue-500/30 transition-colors"
              >
                <p className="text-white font-bold text-lg leading-none">{s.value}</p>
                <p className="text-zinc-500 text-[10px] font-mono mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── Text Area ─── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       border border-blue-500/25 bg-blue-500/8
                       text-blue-300 font-mono text-[10px] tracking-[0.2em] uppercase mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            AI Systems &amp; Full-Stack Architect
          </motion.div>

          {/* Description */}
          <div className="text-lg text-zinc-400 leading-relaxed font-light mb-10 space-y-5 lg:border-l lg:border-blue-500/20 lg:pl-6">
            <p>
              Merging the precision of{" "}
              <strong className="text-white font-medium">Machine Learning</strong>{" "}
              with the infrastructure of{" "}
              <strong className="text-blue-200 font-medium">High-Performance Web Systems</strong>.
            </p>
            <p>
              I engineer intelligent, scalable architectures — from autonomous AI agents
              and neural pipelines to modern, responsive frontends. Systems that don&apos;t
              just process data, but{" "}
              <strong className="text-purple-300 font-medium">comprehend, adapt, and scale</strong>.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="w-full">
            <h4 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em]
                           flex items-center justify-center lg:justify-start gap-3 mb-5">
              <span className="w-4 h-px bg-blue-500/50" />
              System Components
              <span className="h-px bg-zinc-800 flex-1 max-w-[120px] hidden lg:block" />
            </h4>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
              {engineeringStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.3 + i * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="px-4 py-2.5 rounded-xl text-sm font-mono
                             bg-[#04080f]/60 border border-white/8
                             hover:border-blue-500/35 hover:bg-blue-500/5
                             text-zinc-400 hover:text-blue-300
                             flex items-center gap-2.5
                             transition-all duration-300
                             shadow-[0_4px_12px_rgba(0,0,0,0.3)]
                             cursor-default group"
                >
                  <span className="text-lg text-zinc-500 group-hover:text-blue-400 transition-colors">
                    {tech.icon}
                  </span>
                  <span className="text-xs tracking-wider">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Terminal Footer */}
      <motion.div
        className="text-center pt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-zinc-700 font-mono text-xs tracking-widest uppercase">
          $ systemctl status intelligence.service --active
        </p>
      </motion.div>
    </section>
  );
};

export default About;