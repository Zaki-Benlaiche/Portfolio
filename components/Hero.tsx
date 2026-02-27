"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function HeroSection() {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.section
      id="home"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative pt-32 pb-24 min-h-screen flex items-center justify-center text-white overflow-hidden bg-gradient-to-b from-black via-[#0a0a23] to-black"
    >
      {/* خلفية إضاءة احترافية */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl top-[-150px] left-[-150px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-2xl bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 px-6 max-w-6xl w-full">

        {/* صورة احترافية */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-72 md:h-72
                     rounded-full overflow-hidden
                     border border-white/20
                     shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                     flex-shrink-0"
        >
          <div className="absolute inset-0 rounded-full
                          bg-gradient-to-br from-blue-500/20 to-transparent
                          blur-2xl opacity-70 pointer-events-none" />

          <Image
            src="/zakiHome.jpg"
            alt="Zaki Benlaiche – AI Full Stack Developer"
            fill
            priority
            className="object-cover object-top"
          />
        </motion.div>

        {/* النص */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-xl md:mr-auto"
        >
          {/* العنوان */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Zaki Benlaiche
            </span>
          </h1>

          {/* Badge تخصص */}
          <div className="inline-block mb-4 px-4 py-1 rounded-full 
                          bg-blue-500/10 border border-blue-500/30 
                          text-blue-400 text-sm font-medium">
            AI Agents • LLM Systems • Full-Stack Engineering
          </div>

          {/* الوصف الاحترافي */}
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
            AI-Focused Full-Stack Developer specializing in building intelligent
            agent systems, scalable web applications, and modern AI-powered
            solutions using React, Next.js, Python, and LangChain.
          </p>

          {/* الأزرار */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 rounded-full 
                         bg-gradient-to-r from-blue-600 to-purple-600 
                         hover:scale-105 transition-transform duration-300
                         text-white font-semibold shadow-xl"
            >
              📄 Download CV
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-full 
                         bg-white/5 hover:bg-white/10 
                         backdrop-blur-md border border-white/10 
                         font-semibold transition"
            >
              🚀 View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full 
                         border border-blue-500 
                         text-blue-400 
                         hover:bg-blue-600 hover:text-white 
                         font-semibold transition"
            >
              📩 Contact Me
            </a>
          </div>

          {/* أيقونات التواصل */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/zaki-benlaiche"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition backdrop-blur-md ring-1 ring-white/10 hover:ring-blue-500/50"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/zaki-benlaiche"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition backdrop-blur-md ring-1 ring-white/10 hover:ring-blue-500/50"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://twitter.com/zaki_benlaiche"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition backdrop-blur-md ring-1 ring-white/10 hover:ring-blue-500/50"
            >
              <FaTwitter size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}