"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiPython, SiOpenai } from "react-icons/si";

const engineeringStack = [
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "Python", icon: <SiPython /> },
  { name: "AI Agents", icon: <SiOpenai /> }
];

const About: FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden text-zinc-300 bg-[#050505]">

      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-white/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-zinc-600/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:32px_32px] opacity-30 pointer-events-none -z-10" />

      {/* Decorative Grid Line under title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative"
      >
        <span className="text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
          01. Core Identity
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
          About Architecture
        </h2>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-24 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent opacity-50" />
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          className="flex-shrink-0 relative group mx-auto lg:mx-0 flex items-center justify-center p-2"
        >
          {/* Glowing Aura background */}
          <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-700 group-hover:scale-110" />

          {/* Animated Tech Rings */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-zinc-500/10 to-transparent rounded-full p-[1px] animate-[spin_8s_linear_infinite] opacity-60" />
          <div className="absolute inset-[-10px] border border-white/10 rounded-full border-dashed animate-[spin_12s_linear_infinite_reverse]" />
          <div className="absolute inset-[-20px] border border-zinc-800 rounded-full animate-[spin_20s_linear_infinite]" />

          {/* Image */}
          <div className="relative bg-black rounded-full p-2 z-10 flex items-center justify-center">
            <Image
              src="/zakiHome.jpg"
              alt="Zaki Benlaiche"
              width={300}
              height={300}
              className="rounded-full object-cover shadow-[0_0_40px_rgba(255,255,255,0.03)] relative z-20 w-[240px] h-[240px] md:w-[280px] md:h-[280px] transition-all duration-700 contrast-105"
            />
            {/* AI Scanline Overlay */}
            <div className="absolute inset-2 rounded-full overflow-hidden z-30 pointer-events-none opacity-20">
              <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-overlay" />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >

          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400"></span>
            </span>
            <span>AI Systems & Full-Stack Architect</span>
          </motion.div>

          {/* Description */}
          <div className="text-lg text-zinc-400 leading-relaxed font-light mb-10 space-y-6 relative border-l border-zinc-800/50 pl-0 lg:pl-6">
            <p>
              Merging the precision of <strong className="text-white font-medium">Machine Learning</strong> with the infrastructure of <strong className="text-zinc-200 font-medium">High-Performance Web Systems</strong>.
            </p>
            <p>
  I specialize in engineering intelligent, scalable architectures. From integrating autonomous AI agents and neural pipelines to orchestrating responsive, modern frontends, I build robust systems that don&apos;t just calculate data—they comprehend, adapt, and scale globally.
</p>
          </div>

          {/* System Components Stack */}
          <div className="w-full mt-2">
            <h4 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center lg:justify-start gap-4 mb-6 w-full">
              SYSTEM COMPONENTS
              <span className="h-px bg-zinc-800 flex-1 max-w-[150px] hidden lg:block"></span>
            </h4>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 w-full">
              {engineeringStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="px-4 py-2.5 bg-black border border-white/10 hover:border-white/30 rounded-lg text-sm font-medium text-zinc-300 flex items-center gap-2.5 transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.5)] group cursor-default"
                >
                  <span className="text-zinc-500 group-hover:text-white transition-colors duration-300 text-lg">
                    {tech.icon}
                  </span>
                  <span className="group-hover:text-white transition-colors duration-300 font-mono text-xs tracking-wider">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Terminal Footer */}
      <motion.div
        className="text-center pt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-zinc-700 font-mono text-xs tracking-widest uppercase">
          $ systemctl status intelligence.service --active
        </p>
      </motion.div>
    </section>
  );
};

export default About;