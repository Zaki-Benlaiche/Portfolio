"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function HeroSection() {
  const { ref } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.section
      id="home"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative pt-32 pb-24 min-h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-gradient-to-b from-black via-[#0a0a23] to-black"
    >
      {/* إضاءة دائرية خلفية */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl top-[-150px] left-[-150px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-2xl bottom-[-100px] right-[-100px] animate-pulse animation-delay-2000" />
      </div>

      {/* صورة البروفايل بإطار زجاجي وإضاءة */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.3)] ring-2 ring-blue-500/30 hover:ring-blue-500/60 transition-all duration-500"
      >
        <Image
          src="/imagess.jpg"
          alt="Zaki profile"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* الاسم والوصف */}
      <motion.h1
        className="mt-8 text-4xl md:text-5xl font-extrabold text-center leading-tight tracking-tight text-white drop-shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Hi, I’m <span className="text-blue-400">Zaki Benlaiche</span>
      </motion.h1>

      <motion.p
        className="mt-3 text-lg md:text-xl text-gray-300 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Creative Full Stack Developer crafting modern, aesthetic web interfaces with React, TypeScript, and Tailwind.
      </motion.p>

      {/* روابط تواصل بشكل أنيق */}
      <motion.div
        className="flex gap-6 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <a
          href="https://github.com/zaki-benlaiche"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition backdrop-blur-md ring-1 ring-white/10 hover:ring-blue-500/50"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/zaki-benlaiche"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition backdrop-blur-md ring-1 ring-white/10 hover:ring-blue-500/50"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/zaki_benlaiche"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition backdrop-blur-md ring-1 ring-white/10 hover:ring-blue-500/50"
        >
          <FaTwitter size={24} />
        </a>
      </motion.div>

      {/* الأزرار */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/40"
        >
          📄 Download CV
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold transition duration-300 shadow hover:shadow-blue-500/30"
        >
          📩 Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
}
