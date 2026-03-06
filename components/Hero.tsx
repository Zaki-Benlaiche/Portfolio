"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiOpenai, SiReplicate, SiHuggingface } from "react-icons/si"; // AI Icons added

export default function HeroSection() {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.section
      id="home"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative pt-32 pb-24 min-h-screen flex items-center justify-center text-zinc-300 overflow-hidden bg-[#050505]"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.03)_0%,transparent_50%)]" />

      {/* Fine Background Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-20" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 px-6 max-w-7xl w-full">

        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center md:text-left flex-1 md:mr-auto flex flex-col items-center md:items-start order-2 md:order-1"
        >
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-zinc-300 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.03)] backdrop-blur-sm self-center md:self-start"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400"></span>
            </span>
            Available for New Architectures
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">
            Hi, I’m{" "}
            <br className="hidden md:block" />
            <span className="bg-gradient-to-br from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              Zaki Benlaiche
            </span>
          </h1>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-zinc-500 font-mono text-sm uppercase tracking-widest mt-2">
            <span className="flex items-center gap-2"><SiOpenai size={14} className="text-zinc-400" /> AI Agents</span>
            <span className="hidden md:inline text-zinc-800">/</span>
            <span className="flex items-center gap-2"><SiHuggingface size={14} className="text-zinc-400" /> LLM Systems</span>
            <span className="hidden md:inline text-zinc-800">/</span>
            <span className="flex items-center gap-2">Full-Stack Scale</span>
          </div>

          <p className="text-zinc-400 mb-10 leading-relaxed text-lg lg:text-xl max-w-xl font-light">
            An elite <strong className="text-zinc-200 font-medium">AI-Focused Full-Stack Developer</strong> specializing in composing intelligent multi-agent systems, highly scalable infrastructure, and sophisticated web applications tailored for the AI era.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-12 justify-center md:justify-start w-full sm:w-auto">
            <a
              href="#projects"
              className="group px-8 py-3.5 rounded-full bg-white text-black font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2"
            >
              Explore Solutions
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </a>

            <a
              href="/cv.pdf"
              download
              className="px-8 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 text-white font-medium backdrop-blur-md transition-all duration-300 text-center flex items-center justify-center gap-2 group"
            >
              <span className="text-zinc-400 group-hover:text-white transition-colors">📄</span> View CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start mt-auto">
            <a href="https://github.com/zaki-benlaiche" target="_blank" rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all backdrop-blur-md group">
              <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://linkedin.com/in/zaki-benlaiche" target="_blank" rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all backdrop-blur-md group">
              <FaLinkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://twitter.com/zaki_benlaiche" target="_blank" rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all backdrop-blur-md group">
              <FaTwitter size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full flex-shrink-0 order-1 md:order-2 group mt-8 md:mt-0"
        >
          {/* Premium Glow Base */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-zinc-700/30 to-zinc-300/10 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

          {/* Subtle Outer Rings */}
          <div className="absolute inset-[-4px] rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-[-15px] border border-white/5 rounded-full border-dashed animate-[spin_30s_linear_infinite_reverse]" />

          {/* Mask tracking the inner image */}
          <div className="absolute inset-0 bg-[#050505] rounded-full p-2 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-zinc-800">
            <Image
              src="/zakiHome.jpg"
              alt="Zaki Benlaiche"
              fill
              priority
              className="object-cover object-top rounded-full p-1 
                         grayscale-0 brightness-110 contrast-105
                         hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Tech Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none rounded-full" />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}